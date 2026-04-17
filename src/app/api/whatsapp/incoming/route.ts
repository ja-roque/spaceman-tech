import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import OpenAI from "openai";
import twilio from "twilio";
import { prisma } from "@/lib/prisma";
import { SYSTEM_PROMPT, PAYMENT_PLAN_INJECTION, READY_TO_CLOSE_INJECTION, RATE_LIMITS } from "@/lib/whatsapp-prompt";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const FROM = "whatsapp:+13024482304";

function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

function randomDelay() {
  const ms = RATE_LIMITS.minDelayMs + Math.random() * (RATE_LIMITS.maxDelayMs - RATE_LIMITS.minDelayMs);
  return delay(ms);
}

// Transcribe a voice note from Twilio media URL
async function transcribeVoiceNote(mediaUrl: string): Promise<string> {
  // Fetch audio from Twilio (requires auth)
  const response = await fetch(mediaUrl, {
    headers: {
      Authorization: "Basic " + Buffer.from(`${process.env.TWILIO_ACCOUNT_SID}:${process.env.TWILIO_AUTH_TOKEN}`).toString("base64"),
    },
  });
  const buffer = await response.arrayBuffer();
  const file = new File([buffer], "voice.ogg", { type: "audio/ogg" });
  const result = await openai.audio.transcriptions.create({ model: "whisper-1", file });
  return result.text;
}

// Extract structured lead data from conversation history
async function extractLeadData(messages: { role: string; content: string }[]) {
  const transcript = messages.map((m) => `${m.role === "user" ? "Lead" : "Agent"}: ${m.content}`).join("\n");
  try {
    const res = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 300,
      messages: [{
        role: "user",
        content: `Extract lead info from this WhatsApp conversation. Return ONLY a JSON object with these keys (use null if unknown):
name, company, requirements, estimatedCost, estimatedTimeline, email, language (en or es)

Conversation:
${transcript}

JSON only, no explanation:`
      }]
    });
    const text = (res.content[0] as { type: string; text: string }).text.trim();
    const json = text.match(/\{[\s\S]*\}/)?.[0];
    return json ? JSON.parse(json) : null;
  } catch {
    return null;
  }
}

// Clean AI output — remove dashes, markdown artifacts
function cleanText(text: string): string {
  return text
    .replace(/\s*—\s*/g, ", ")   // em dash → comma
    .replace(/\s*--\s*/g, ", ")  // double dash → comma
    .replace(/\*\*(.*?)\*\*/g, "$1")  // bold
    .replace(/\*(.*?)\*/g, "$1")      // italic
    .replace(/^\s*[-•]\s+/gm, "")    // bullet points
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// Split into natural chunks by sentence, max ~160 chars per chunk
function splitIntoChunks(text: string): string[] {
  const sentences = text.match(/[^.!?\n]+[.!?\n]+/g) ?? [text];
  const chunks: string[] = [];
  let current = "";

  for (const sentence of sentences) {
    if ((current + sentence).length > 160 && current.length > 0) {
      chunks.push(current.trim());
      current = sentence;
    } else {
      current += sentence;
    }
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks.length > 0 ? chunks : [text];
}

async function sendWhatsApp(to: string, body: string) {
  await twilioClient.messages.create({ from: FROM, to: `whatsapp:${to}`, body });
}

// Send in chunks with typing-speed delays between each
async function sendNaturally(to: string, text: string) {
  const chunks = splitIntoChunks(cleanText(text));
  for (let i = 0; i < chunks.length; i++) {
    if (i > 0) {
      // ~50ms per character simulates typing speed, capped at 4s
      const typingTime = Math.min(chunks[i].length * 50, 4000);
      await delay(typingTime);
    }
    await sendWhatsApp(to, chunks[i]);
  }
}

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const from = (form.get("From") as string)?.replace("whatsapp:", "");
  let body = (form.get("Body") as string)?.trim();

  // Handle voice notes
  const numMedia = parseInt((form.get("NumMedia") as string) || "0");
  const mediaType = (form.get("MediaContentType0") as string) || "";
  const mediaUrl = (form.get("MediaUrl0") as string) || "";

  if (numMedia > 0 && mediaType.startsWith("audio/") && mediaUrl) {
    try {
      const transcription = await transcribeVoiceNote(mediaUrl);
      body = transcription;
    } catch {
      body = "[Voice note — could not transcribe]";
    }
  }

  if (!from || !body) return NextResponse.json({ ok: true });

  // Get or create conversation
  let convo = await prisma.conversation.findUnique({ where: { phone: from }, include: { messages: { orderBy: { createdAt: "asc" } } } });

  if (!convo) {
    convo = await prisma.conversation.create({
      data: { phone: from },
      include: { messages: true },
    });
  }

  // Blocked — ignore
  if (convo.blocked) return NextResponse.json({ ok: true });

  // Human takeover — just store and notify Javier
  if (convo.humanTakeover) {
    await prisma.message.create({ data: { conversationId: convo.id, role: "user", content: body } });
    await sendWhatsApp("+50433576985", `💬 *${from}*: ${body}`);
    return NextResponse.json({ ok: true });
  }

  // Rate limit: max messages per hour
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
  const recentCount = await prisma.message.count({
    where: { conversationId: convo.id, role: "user", createdAt: { gte: oneHourAgo } },
  });
  if (recentCount >= RATE_LIMITS.maxMessagesPerHour) {
    await randomDelay();
    await sendWhatsApp(from, "You've sent a lot of messages — give it an hour and try again, or email us at hello@spacemantech.ai.");
    return NextResponse.json({ ok: true });
  }

  // Max conversation length
  if (convo.messageCount >= RATE_LIMITS.maxMessagesPerConversation) {
    await randomDelay();
    await sendWhatsApp(from, "Let's continue over email — reach us at hello@spacemantech.ai and we'll take it from there.");
    return NextResponse.json({ ok: true });
  }

  // Save user message
  await prisma.message.create({ data: { conversationId: convo.id, role: "user", content: body } });
  await prisma.conversation.update({ where: { id: convo.id }, data: { messageCount: { increment: 1 } } });

  // Build message history for Claude
  const history = convo.messages.map((m) => ({
    role: m.role as "user" | "assistant",
    content: m.content,
  }));
  history.push({ role: "user", content: body });

  // Detect lead stage from full conversation
  const STAGE_ORDER = ["qualifying", "interested", "ready", "lost"];
  async function detectStage(messages: { role: string; content: string }[]): Promise<string> {
    try {
      const transcript = messages.map((m) => `${m.role === "user" ? "Lead" : "Agent"}: ${m.content}`).join("\n");
      const res = await anthropic.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 10,
        messages: [{
          role: "user",
          content: `Based on this conversation, what is the current stage of this lead? Choose exactly one:
- qualifying: still exploring, vague, or unclear intent
- interested: asking specific questions, engaged, comparing options
- ready: explicitly asked for a quote, said yes or let's do it, wants to move forward, shared contact info
- lost: said no, too expensive and dropped off, clearly not interested

Conversation:
${transcript}

Answer with one word only:`
        }]
      });
      const stage = (res.content[0] as { type: string; text: string }).text.trim().toLowerCase();
      return STAGE_ORDER.includes(stage) ? stage : "qualifying";
    } catch {
      return "qualifying";
    }
  }

  // Detect price pushback via AI
  async function detectPushback(message: string): Promise<boolean> {
    try {
      const res = await anthropic.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 5,
        messages: [{ role: "user", content: `Is this message pushing back on price, saying it's too expensive, or expressing budget concerns? Answer only "yes" or "no".\n\nMessage: "${message}"` }],
      });
      return (res.content[0] as { type: string; text: string }).text.trim().toLowerCase().startsWith("yes");
    } catch {
      return false;
    }
  }
  const isPushback = !convo.flagPaymentPlan && !convo.offerPaymentPlan && await detectPushback(body);

  // Build system prompt — inject closing/payment plan/context as appropriate
  let systemPrompt = SYSTEM_PROMPT;
  if (convo.stage === "ready") {
    systemPrompt += "\n\n" + READY_TO_CLOSE_INJECTION;
  }
  if (convo.offerPaymentPlan) {
    systemPrompt += "\n\n" + PAYMENT_PLAN_INJECTION;
  } else if (convo.context) {
    systemPrompt += "\n\n" + convo.context;
  }

  // Call Claude
  let aiReply = "";
  try {
    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 300,
      system: systemPrompt,
      messages: history,
    });
    aiReply = (response.content[0] as { type: string; text: string }).text;
  } catch {
    aiReply = "Sorry, we're having a technical issue. Please try again in a moment or email hello@spacemantech.ai.";
  }

  // Save assistant reply
  await prisma.message.create({ data: { conversationId: convo.id, role: "assistant", content: aiReply } });

  // Detect stage and advance if needed (never go backward)
  const allMessages = [...history, { role: "assistant", content: aiReply }];
  detectStage(allMessages).then(async (newStage) => {
    const currentIdx = STAGE_ORDER.indexOf(convo.stage ?? "qualifying");
    const newIdx = STAGE_ORDER.indexOf(newStage);
    if (newIdx > currentIdx) {
      await prisma.conversation.update({ where: { id: convo.id }, data: { stage: newStage } });
      if (newStage === "ready") {
        const leadName = convo.name || from;
        await sendWhatsApp("+50433576985", `🎯 ${leadName} is ready to close. Open /admin to review.`);
      }
    }
  }).catch(() => {});

  // Extract and store lead data in background
  extractLeadData(allMessages).then(async (data) => {
    if (!data) return;
    const update: Record<string, string> = {};
    if (data.name) update.name = data.name;
    if (data.company) update.company = data.company;
    if (data.requirements) update.requirements = data.requirements;
    if (data.estimatedCost) update.estimatedCost = data.estimatedCost;
    if (data.estimatedTimeline) update.estimatedTimeline = data.estimatedTimeline;
    if (data.email) update.email = data.email;
    if (data.language) update.language = data.language;
    if (Object.keys(update).length > 0) {
      await prisma.conversation.update({ where: { id: convo.id }, data: update });
    }
  }).catch(() => {});

  // Flag Javier if price pushback and not already flagged
  if (isPushback && !convo.flagPaymentPlan && !convo.offerPaymentPlan) {
    await prisma.conversation.update({ where: { id: convo.id }, data: { flagPaymentPlan: true } });
    const leadName = convo.name || from;
    await sendWhatsApp("+50433576985", `Payment plan flag: ${leadName} pushed back on price. Open /admin to offer a plan if this lead looks good.`);
  }

  // Human delay then send in natural chunks
  await randomDelay();
  await sendNaturally(from, aiReply);

  // Notify Javier on first message
  if (convo.messageCount === 0) {
    await sendWhatsApp("+50433576985", `New lead on WhatsApp: ${from}\n\nMessage: ${body}`);
  }

  return NextResponse.json({ ok: true });
}
