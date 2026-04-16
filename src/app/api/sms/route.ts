import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const from = form.get("From") as string;
  const body = form.get("Body") as string;

  // Forward any inbound SMS to Javier's WhatsApp
  await twilioClient.messages.create({
    from: "whatsapp:+13024482304",
    to: "whatsapp:+50433576985",
    body: `SMS to 302 number\nFrom: ${from}\n\n${body}`,
  });

  return NextResponse.json({ ok: true });
}
