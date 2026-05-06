import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import SalesPageClient from "./SalesPageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function SalesPage({ params }: Props) {
  const { slug } = await params;

  const ebook = await prisma.ebook.findFirst({
    where: {
      slug,
      salesPageActive: true,
    },
  });

  if (!ebook) {
    notFound();
  }

  return <SalesPageClient ebook={ebook} />;
}

// Prevent this route from appearing in static generation
export const dynamic = "force-dynamic";
