import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";
import { prisma } from "@/lib/prisma";

const FROM = "whatsapp:+13024482304";
const TEMPLATES = {
  en: "HX5fe87d09776b5e419b47c1619f9eda50",
  es: "HXb6f7a3f4ded7100d0c1dea324800f674",
};

function isAuthed(req: NextRequest) {
  return req.cookies.get("admin_token")?.value === process.env.ADMIN_PASSWORD;
}

export async function POST(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { phone, language } = await req.json();
  const lang = language === "es" ? "es" : "en";

  const convo = await prisma.conversation.findUnique({ where: { phone } });
  if (!convo) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  const firstName = convo.name?.split(" ")[0] || (lang === "es" ? "amigo" : "there");

  await client.messages.create({
    from: FROM,
    to: `whatsapp:${phone}`,
    contentSid: TEMPLATES[lang],
    contentVariables: JSON.stringify({ "1": firstName }),
  });

  await prisma.message.create({
    data: { conversationId: convo.id, role: "assistant", content: `[Re-engagement sent (${lang.toUpperCase()})]` },
  });

  return NextResponse.json({ ok: true });
}
