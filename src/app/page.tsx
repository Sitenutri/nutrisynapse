import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import {
  canonical,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
  SITE_AUTHOR,
  OG_IMAGE,
  OG_IMAGE_WIDTH,
  OG_IMAGE_HEIGHT,
  SITE_LOCALE,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Neurociência, Nutrição e Psicanálise`,
  description: SITE_DESCRIPTION,
  alternates: { canonical: canonical("/") },
  openGraph: {
    title: `${SITE_NAME} — Neurociência, Nutrição e Psicanálise`,
    description: SITE_DESCRIPTION,
    url: canonical("/"),
    type: "website",
    locale: SITE_LOCALE,
    images: [{ url: OG_IMAGE, width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Neurociência, Nutrição e Psicanálise`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

/* ── JSON-LD: WebSite + WebPage ── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "pt-BR",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${SITE_NAME} — Neurociência, Nutrição e Psicanálise`,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    about: {
      "@type": "Person",
      name: SITE_AUTHOR,
      jobTitle: "Nutricionista, Psicanalista e Pesquisadora",
      url: canonical("/contato"),
    },
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
