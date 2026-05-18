import type { Metadata } from "next";
import LandingPageClient from "./LandingPageClient";

export const metadata: Metadata = {
  title: "Método Glicose Inteligente™ — Controle Sua Fome e Energia",
  description:
    "Descubra o método simples para estabilizar seu peso, frear a compulsão por doce e eliminar o cansaço diário. Sem dietas malucas.",
  openGraph: {
    title: "Método Glicose Inteligente™ — Controle Sua Fome e Energia",
    description:
      "Um método simples para estabilizar e controlar seu peso, frear a compulsão por doce e eliminar aquele cansaço diário.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AcucarPage() {
  return <LandingPageClient />;
}
