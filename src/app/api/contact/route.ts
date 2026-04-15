import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const body = `New Spaceman Tech inquiry\n\nFrom: ${name}\nEmail: ${email}\n\n${message}`;

  await client.messages.create({
    from: "whatsapp:+13024482304",
    to: "whatsapp:+50433576985",
    body,
  });

  return NextResponse.json({ ok: true });
}
