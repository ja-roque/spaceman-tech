import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function isAuthed(req: NextRequest) {
  return req.cookies.get("admin_token")?.value === process.env.ADMIN_PASSWORD;
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ phone: string }> }) {
  if (!isAuthed(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { phone } = await params;
  const decoded = decodeURIComponent(phone);

  const convo = await prisma.conversation.findUnique({
    where: { phone: decoded },
    include: { messages: { orderBy: { createdAt: "asc" } } },
  });

  if (!convo) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(convo);
}
