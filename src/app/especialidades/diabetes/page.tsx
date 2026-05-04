import type { Metadata } from "next";
import DiabetesClient from "./DiabetesClient";
import { canonical, OG_IMAGE, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT, SITE_LOCALE } from "@/lib/seo";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Diabetes — NutriSynapse",
  description:
    "Cuidado integrativo para diabetes unindo neurociência, nutrição e psicanálise. E-books, materiais gratuitos e orientações científicas.",
  url: canonical("/especialidades/diabetes"),
  isPartOf: {
    "@type": "WebSite",
    name: "NutriSynapse",
    url: canonical("/"),
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: canonical("/") },
      { "@type": "ListItem", position: 2, name: "Especialidades", item: canonical("/especialidades/diabetes") },
      { "@type": "ListItem", position: 3, name: "Diabetes", item: canonical("/especialidades/diabetes") },
    ],
  },
};

export const metadata: Metadata = {
  title: "Diabetes — Cuidado Integrativo",
  description:
    "Cuidado integrativo para diabetes unindo neurociência, nutrição e psicanálise. E-books autorais, checklist gratuito e orientações científicas para famílias.",
  alternates: { canonical: canonical("/especialidades/diabetes") },
  openGraph: {
    title: "Diabetes — NutriSynapse",
    description:
      "Cuidado integrativo para diabetes unindo neurociência, nutrição e psicanálise.",
    url: canonical("/especialidades/diabetes"),
    type: "website",
    locale: SITE_LOCALE,
    images: [{ url: OG_IMAGE, width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT, alt: "Diabetes — NutriSynapse" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diabetes — NutriSynapse",
    description:
      "Cuidado integrativo para diabetes unindo neurociência, nutrição e psicanálise.",
    images: [OG_IMAGE],
  },
};

export default function DiabetesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DiabetesClient />
    </>
  );
}
