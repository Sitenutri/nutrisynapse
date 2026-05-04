import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
  SITE_LOCALE,
  SITE_AUTHOR,
  OG_IMAGE,
  OG_IMAGE_WIDTH,
  OG_IMAGE_HEIGHT,
} from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

/* ------------------------------------------------------------------ */
/*  Viewport                                                           */
/* ------------------------------------------------------------------ */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D9488", // agua-dark
};

/* ------------------------------------------------------------------ */
/*  Metadata (global defaults — pages can override)                    */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  /* ─── Basic ─── */
  title: {
    default: `${SITE_NAME} — Neurociência, Nutrição e Psicanálise`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_AUTHOR }],
  creator: SITE_AUTHOR,
  publisher: SITE_NAME,
  generator: "Next.js",

  /* ─── URLs ─── */
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },

  /* ─── Open Graph (Facebook, WhatsApp, LinkedIn, Telegram) ─── */
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Neurociência, Nutrição e Psicanálise`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: `${SITE_NAME} — Onde Neurociência, Nutrição e Psicanálise se conectam`,
        type: "image/png",
      },
    ],
  },

  /* ─── Twitter / X ─── */
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Neurociência, Nutrição e Psicanálise`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
    creator: "@nutrisynapse",
  },

  /* ─── Robots ─── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ─── Icons & Manifest ─── */
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",

  /* ─── Misc ─── */
  category: "health",
};

/* ------------------------------------------------------------------ */
/*  JSON-LD Structured Data (Organization)                             */
/* ------------------------------------------------------------------ */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: "NutriSynapse — Neurociência, Nutrição e Psicanálise",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-nutrisinapse.png`,
  description: SITE_DESCRIPTION,
  founder: {
    "@type": "Person",
    name: SITE_AUTHOR,
    jobTitle: "Nutricionista, Psicanalista e Pesquisadora",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "contato@nutrisynapse.com",
    contactType: "customer service",
    availableLanguage: "Portuguese",
  },
  sameAs: [
    "https://instagram.com/nutrisynapse",
    "https://youtube.com/@nutrisynapse",
  ],
};

/* ------------------------------------------------------------------ */
/*  Layout                                                             */
/* ------------------------------------------------------------------ */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
