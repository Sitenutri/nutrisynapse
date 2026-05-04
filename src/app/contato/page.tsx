import type { Metadata } from "next";
import ContatoClient from "./ContatoClient";
import { canonical, OG_IMAGE, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT, SITE_LOCALE } from "@/lib/seo";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contato — NutriSynapse",
  description: "Entre em contato com a Bibi (Roselis N. Mazzuchetti). Dúvidas sobre neurociência, nutrição e psicanálise.",
  url: canonical("/contato"),
  mainEntity: {
    "@type": "Person",
    name: "Roselis N. Mazzuchetti",
    jobTitle: "Nutricionista, Psicanalista e Pesquisadora",
    email: "contato@nutrisynapse.com",
    url: canonical("/contato"),
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: canonical("/") },
      { "@type": "ListItem", position: 2, name: "Contato", item: canonical("/contato") },
    ],
  },
};

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Bibi (Roselis N. Mazzuchetti). Tire dúvidas sobre neurociência, nutrição, psicanálise e nossos e-books.",
  alternates: { canonical: canonical("/contato") },
  openGraph: {
    title: "Contato — NutriSynapse",
    description:
      "Entre em contato com a Bibi. Tire dúvidas sobre neurociência, nutrição e psicanálise.",
    url: canonical("/contato"),
    type: "website",
    locale: SITE_LOCALE,
    images: [{ url: OG_IMAGE, width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT, alt: "Contato NutriSynapse" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contato — NutriSynapse",
    description:
      "Entre em contato com a Bibi. Tire dúvidas sobre neurociência, nutrição e psicanálise.",
    images: [OG_IMAGE],
  },
};

export default function ContatoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContatoClient />
    </>
  );
}
