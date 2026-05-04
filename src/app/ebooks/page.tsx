import type { Metadata } from "next";
import EbooksClient from "./EbooksClient";
import { canonical, SITE_NAME, OG_IMAGE, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT, SITE_LOCALE } from "@/lib/seo";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "E-books — NutriSynapse",
  description:
    "E-books autorais sobre neurociência, nutrição, diabetes, microbiota e mudança de hábitos. Conhecimento científico acessível para transformar sua saúde.",
  url: canonical("/ebooks"),
  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: canonical("/"),
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: canonical("/") },
      { "@type": "ListItem", position: 2, name: "E-books", item: canonical("/ebooks") },
    ],
  },
};

export const metadata: Metadata = {
  title: "E-books",
  description:
    "E-books autorais sobre neurociência, nutrição, diabetes, microbiota e mudança de hábitos. Conhecimento científico acessível para transformar sua saúde.",
  alternates: { canonical: canonical("/ebooks") },
  openGraph: {
    title: "E-books — NutriSynapse",
    description:
      "E-books autorais sobre neurociência, nutrição, diabetes e microbiota. Ciência acessível para transformar sua saúde.",
    url: canonical("/ebooks"),
    type: "website",
    locale: SITE_LOCALE,
    images: [{ url: OG_IMAGE, width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT, alt: "E-books NutriSynapse" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-books — NutriSynapse",
    description:
      "E-books autorais sobre neurociência, nutrição, diabetes e microbiota.",
    images: [OG_IMAGE],
  },
};

export default function EbooksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EbooksClient />
    </>
  );
}
