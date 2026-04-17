import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function isAuthed(req: NextRequest) {
  return req.cookies.get("admin_token")?.value === process.env.ADMIN_PASSWORD;
}

export async function GET(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const conversations = await prisma.conversation.findMany({
    orderBy: { updatedAt: "desc" },
    include: { messages: { orderBy: { createdAt: "desc" }, take: 1 } },
  });

  return NextResponse.json(conversations);
}

export async function PATCH(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { phone, humanTakeover, blocked, offerPaymentPlan, flagPaymentPlan, context, notes } = await req.json();
  const data: Record<string, unknown> = {};
  if (humanTakeover !== undefined) data.humanTakeover = humanTakeover;
  if (blocked !== undefined) data.blocked = blocked;
  if (offerPaymentPlan !== undefined) data.offerPaymentPlan = offerPaymentPlan;
  if (flagPaymentPlan !== undefined) data.flagPaymentPlan = flagPaymentPlan;
  if (context !== undefined) data.context = context;
  if (notes !== undefined) data.notes = notes;

  const updated = await prisma.conversation.update({ where: { phone }, data });
  return NextResponse.json(updated);
}
