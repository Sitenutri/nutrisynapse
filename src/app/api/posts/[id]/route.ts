import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const post = await prisma.post.findFirst({
    where: { OR: [{ id }, { slug: id }] },
    include: {
      contents: { orderBy: { order: "asc" } },
      tags: { include: { tag: true } },
    },
  });

  if (!post) {
    return NextResponse.json({ error: "Post não encontrado" }, { status: 404 });
  }

  return NextResponse.json(post);
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
  const { title, slug, description, coverImage, published, featured, contents, tagIds } = body;

  // Delete existing contents and tags to replace
  await prisma.content.deleteMany({ where: { postId: id } });
  await prisma.tagOnPost.deleteMany({ where: { postId: id } });

  const post = await prisma.post.update({
    where: { id },
    data: {
      title,
      slug,
      description,
      coverImage,
      published: published ?? false,
      featured: featured ?? false,
      contents: {
        create: (contents || []).map(
          (c: { type: string; content?: string; images?: string; order: number }) => ({
            type: c.type,
            content: c.content,
            images: c.images,
            order: c.order,
          })
        ),
      },
      tags: {
        create: (tagIds || []).map((tagId: string) => ({ tagId })),
      },
    },
    include: { contents: true, tags: { include: { tag: true } } },
  });

  return NextResponse.json(post);
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
  await prisma.post.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
