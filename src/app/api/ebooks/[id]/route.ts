import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const ebook = await prisma.ebook.findFirst({
    where: { OR: [{ id }, { slug: id }] },
  });

  if (!ebook) {
    return NextResponse.json({ error: "E-book não encontrado" }, { status: 404 });
  }

  return NextResponse.json(ebook);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json();

  const ebook = await prisma.ebook.update({
    where: { id },
    data: {
      title: body.title,
      slug: body.slug,
      description: body.description,
      coverImage: body.coverImage,
      price: body.price,
      originalPrice: body.originalPrice,
      category: body.category,
      targetAudience: body.targetAudience,
      buyLink: body.buyLink,
      published: body.published ?? false,
      featured: body.featured ?? false,
    },
  });

  return NextResponse.json(ebook);
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const { id } = await params;
  await prisma.ebook.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
