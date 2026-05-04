import type { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";
import { canonical, OG_IMAGE, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT, SITE_LOCALE } from "@/lib/seo";

// Blog post dynamic metadata (generateMetadata) will be added
// when blog content is populated. For now, use sensible defaults.
export const metadata: Metadata = {
  alternates: { canonical: canonical("/blog") },
  openGraph: {
    type: "article",
    locale: SITE_LOCALE,
    images: [{ url: OG_IMAGE, width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT, alt: "Artigo NutriSynapse" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
};

export default function BlogPostPage() {
  return <BlogPostClient />;
}
