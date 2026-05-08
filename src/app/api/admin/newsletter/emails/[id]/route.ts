import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET /api/admin/newsletter/emails/[id]
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;

  const email = await prisma.newsletterEmail.findUnique({
    where: { id },
    include: { contents: { orderBy: { order: "asc" } } },
  });

  if (!email) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json({ email });
}

// PUT /api/admin/newsletter/emails/[id]
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const body = await req.json();
  const { subject, previewText, contents } = body as {
    subject: string;
    previewText?: string;
    contents: { type: string; content?: string; images?: string; order: number }[];
  };

  const existing = await prisma.newsletterEmail.findUnique({ where: { id } });
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (existing.status !== "draft") {
    return NextResponse.json({ error: "Apenas rascunhos podem ser editados" }, { status: 400 });
  }

  // Replace contents
  await prisma.newsletterEmailContent.deleteMany({ where: { emailId: id } });

  const email = await prisma.newsletterEmail.update({
    where: { id },
    data: {
      subject: subject.trim(),
      previewText: previewText?.trim() || null,
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

  return NextResponse.json({ email });
}

// DELETE /api/admin/newsletter/emails/[id]
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;

  const existing = await prisma.newsletterEmail.findUnique({ where: { id } });
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (existing.status === "sending") {
    return NextResponse.json({ error: "Não é possível deletar um envio em andamento" }, { status: 400 });
  }

  await prisma.newsletterEmail.delete({ where: { id } });

  return NextResponse.json({ ok: true });
}
