import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET /api/admin/newsletter/emails — list all campaigns
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const emails = await prisma.newsletterEmail.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      subject: true,
      previewText: true,
      status: true,
      sentAt: true,
      sentCount: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  const subscriberCount = await prisma.newsletter.count();

  return NextResponse.json({ emails, subscriberCount });
}

// POST /api/admin/newsletter/emails — create new campaign (draft)
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { subject, previewText, contents } = body as {
    subject: string;
    previewText?: string;
    contents: { type: string; content?: string; images?: string; order: number }[];
  };

  if (!subject?.trim()) {
    return NextResponse.json({ error: "Assunto é obrigatório" }, { status: 400 });
  }

  const email = await prisma.newsletterEmail.create({
    data: {
      subject: subject.trim(),
      previewText: previewText?.trim() || null,
      status: "draft",
      contents: {
        create: contents.map((c) => ({
          type: c.type,
          content: c.type === "text" ? (c.content ?? null) : null,
          images: c.type === "image" ? (c.images ?? null) : null,
          order: c.order,
        })),
      },
    },
    include: { contents: true },
  });

  return NextResponse.json({ email }, { status: 201 });
}
