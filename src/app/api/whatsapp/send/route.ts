import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";
import { prisma } from "@/lib/prisma";

const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const FROM = "whatsapp:+13024482304";

export async function POST(req: NextRequest) {
  const { phone, message } = await req.json();
  if (!phone || !message) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const convo = await prisma.conversation.findUnique({ where: { phone } });
  if (!convo) return NextResponse.json({ error: "Conversation not found" }, { status: 404 });

  await twilioClient.messages.create({ from: FROM, to: `whatsapp:${phone}`, body: message });
  await prisma.message.create({ data: { conversationId: convo.id, role: "assistant", content: message } });

  return NextResponse.json({ ok: true });
}
