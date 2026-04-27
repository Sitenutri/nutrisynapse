import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const tag = searchParams.get("tag");
  const search = searchParams.get("search");
  const sort = searchParams.get("sort") || "desc";
  const all = searchParams.get("all");

  const where: Record<string, unknown> = {};

  // If "all" is not set, only show published posts (public API)
  // If "all=1", check auth and return everything (admin)
  if (all === "1") {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }
    // no published filter — return all
  } else {
    where.published = true;
  }

  if (tag) {
    where.tags = { some: { tag: { slug: tag } } };
  }
  if (search) {
    where.OR = [
      { title: { contains: search } },
      { description: { contains: search } },
    ];
  }

  const posts = await prisma.post.findMany({
    where,
    include: { tags: { include: { tag: true } } },
    orderBy: { createdAt: sort === "asc" ? "asc" : "desc" },
  });

  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const body = await req.json();
  const { title, slug, description, coverImage, published, featured, contents, tagIds } = body;

  const post = await prisma.post.create({
    data: {
      title,
      slug,
      description,
      coverImage,
      published: published ?? false,
      featured: featured ?? false,
      contents: {
        create: (contents || []).map((c: { type: string; content?: string; images?: string; order: number }) => ({
          type: c.type,
          content: c.content,
          images: c.images,
          order: c.order,
        })),
      },
      tags: {
        create: (tagIds || []).map((tagId: string) => ({ tagId })),
      },
    },
    include: { contents: true, tags: { include: { tag: true } } },
  });

  return NextResponse.json(post, { status: 201 });
}
