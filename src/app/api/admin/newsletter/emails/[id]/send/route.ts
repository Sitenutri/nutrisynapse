import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { sendNewsletterCampaign } from "@/lib/resend";

// Vercel Pro: extends timeout to 300s for large lists.
// Upgrade when list > 200 subscribers.
// TODO: migrar para fila (Bull+Redis ou SQS) para listas grandes,
//       igual ao padrão de mensageria da NR1.
export const maxDuration = 300;

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;

  const campaign = await prisma.newsletterEmail.findUnique({
    where: { id },
    include: { contents: { orderBy: { order: "asc" } } },
  });

  if (!campaign) return NextResponse.json({ error: "Campanha não encontrada" }, { status: 404 });

  if (campaign.status === "sending") {
    return NextResponse.json({ error: "Envio já em andamento" }, { status: 400 });
  }

  if (campaign.status === "sent") {
    return NextResponse.json({ error: "Campanha já foi enviada" }, { status: 400 });
  }

  // Mark as sending
  await prisma.newsletterEmail.update({
    where: { id },
    data: { status: "sending" },
  });

  const subscribers = await prisma.newsletter.findMany({
    select: { name: true, email: true },
    orderBy: { createdAt: "asc" },
  });

  try {
    const { sent, failed } = await sendNewsletterCampaign(
      campaign.subject,
      campaign.previewText,
      campaign.contents.map((c) => ({
        type: c.type as "text" | "image",
        content: c.content,
        images: c.images,
        order: c.order,
      })),
      subscribers
    );

    await prisma.newsletterEmail.update({
      where: { id },
      data: {
        status: failed > 0 && sent === 0 ? "failed" : "sent",
        sentAt: new Date(),
        sentCount: sent,
      },
    });

    return NextResponse.json({
      ok: true,
      sent,
      failed,
      total: subscribers.length,
    });
  } catch (err) {
    await prisma.newsletterEmail.update({
      where: { id },
      data: { status: "failed" },
    });

    console.error("[send-campaign] error:", err);
    return NextResponse.json({ error: "Erro ao enviar campanha" }, { status: 500 });
  }
}
