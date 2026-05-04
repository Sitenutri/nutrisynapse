import type { Metadata } from "next";
import MicrobiotaClient from "./MicrobiotaClient";
import { canonical, OG_IMAGE, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT, SITE_LOCALE } from "@/lib/seo";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Microbiota Intestinal — NutriSynapse",
  description:
    "Tudo sobre microbiota intestinal, eixo intestino-cérebro e nutrição funcional. Conteúdo científico, e-books e guia gratuito de probióticos.",
  url: canonical("/especialidades/microbiota"),
  isPartOf: {
    "@type": "WebSite",
    name: "NutriSynapse",
    url: canonical("/"),
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: canonical("/") },
      { "@type": "ListItem", position: 2, name: "Especialidades", item: canonical("/especialidades/microbiota") },
      { "@type": "ListItem", position: 3, name: "Microbiota Intestinal", item: canonical("/especialidades/microbiota") },
    ],
  },
};

export const metadata: Metadata = {
  title: "Microbiota Intestinal — Seu Segundo Cérebro",
  description:
    "Tudo sobre microbiota intestinal, eixo intestino-cérebro e nutrição funcional. Conteúdo científico, e-books e guia gratuito de probióticos por Roselis N. Mazzuchetti.",
  alternates: { canonical: canonical("/especialidades/microbiota") },
  openGraph: {
    title: "Microbiota Intestinal — NutriSynapse",
    description:
      "Tudo sobre microbiota intestinal, eixo intestino-cérebro e nutrição funcional.",
    url: canonical("/especialidades/microbiota"),
    type: "website",
    locale: SITE_LOCALE,
    images: [{ url: OG_IMAGE, width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT, alt: "Microbiota — NutriSynapse" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Microbiota Intestinal — NutriSynapse",
    description:
      "Tudo sobre microbiota intestinal, eixo intestino-cérebro e nutrição funcional.",
    images: [OG_IMAGE],
  },
};

export default function MicrobiotaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MicrobiotaClient />
    </>
  );
}
