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

  // Build data object — only include fields that were sent in the body
  // This allows partial updates (e.g., only updating isLeadMagnet)
  const data: Record<string, unknown> = {};

  if ("title" in body) data.title = body.title;
  if ("slug" in body) data.slug = body.slug;
  if ("description" in body) data.description = body.description;
  if ("coverImage" in body) data.coverImage = body.coverImage;
  if ("price" in body) data.price = body.price;
  if ("originalPrice" in body) data.originalPrice = body.originalPrice;
  if ("category" in body) data.category = body.category;
  if ("targetAudience" in body) data.targetAudience = body.targetAudience;
  if ("buyLink" in body) data.buyLink = body.buyLink;
  if ("published" in body) data.published = body.published ?? false;
  if ("featured" in body) data.featured = body.featured ?? false;
  if ("salesHeadline" in body) data.salesHeadline = body.salesHeadline || null;
  if ("salesBullets" in body) data.salesBullets = body.salesBullets || [];
  if ("kiwifyUrl" in body) data.kiwifyUrl = body.kiwifyUrl || null;
  if ("salesPageActive" in body) data.salesPageActive = body.salesPageActive ?? false;
  if ("isLeadMagnet" in body) data.isLeadMagnet = body.isLeadMagnet ?? false;
  if ("downloadUrl" in body) data.downloadUrl = body.downloadUrl || null;

  const ebook = await prisma.ebook.update({
    where: { id },
    data,
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
