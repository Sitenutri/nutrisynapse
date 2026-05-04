import type { Metadata } from "next";
import BlogClient from "./BlogClient";
import { canonical, SITE_NAME, OG_IMAGE, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT, SITE_LOCALE } from "@/lib/seo";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Blog — NutriSynapse",
  description:
    "Artigos sobre neurociência, nutrição, microbiota intestinal e mudança de hábitos — escritos com base científica e linguagem acessível.",
  url: canonical("/blog"),
  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: canonical("/"),
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: canonical("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: canonical("/blog") },
    ],
  },
};

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre neurociência, nutrição, microbiota intestinal e mudança de hábitos — escritos com base científica e linguagem acessível.",
  alternates: { canonical: canonical("/blog") },
  openGraph: {
    title: "Blog — NutriSynapse",
    description:
      "Artigos sobre neurociência, nutrição, microbiota intestinal e mudança de hábitos.",
    url: canonical("/blog"),
    type: "website",
    locale: SITE_LOCALE,
    images: [{ url: OG_IMAGE, width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT, alt: "Blog NutriSynapse" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — NutriSynapse",
    description:
      "Artigos sobre neurociência, nutrição, microbiota intestinal e mudança de hábitos.",
    images: [OG_IMAGE],
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogClient />
    </>
  );
}
