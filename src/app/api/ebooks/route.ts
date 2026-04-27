import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  const all = searchParams.get("all");

  const where: Record<string, unknown> = {};

  // If "all" is not set, only show published ebooks (public API)
  // If "all=1", check auth and return everything (admin)
  if (all === "1") {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }
  } else {
    where.published = true;
  }

  if (category) where.category = category;

  if (search) {
    where.OR = [
      { title: { contains: search } },
      { description: { contains: search } },
    ];
  }

  const ebooks = await prisma.ebook.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(ebooks);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const body = await req.json();

  const ebook = await prisma.ebook.create({
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

  return NextResponse.json(ebook, { status: 201 });
}
