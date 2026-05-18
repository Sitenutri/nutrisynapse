import type { Metadata } from "next";
import LandingPageAlimentacaoInteligente from "./LandingPageClient";

export const metadata: Metadata = {
  title: "Alimentação Inteligente para Diabetes — Controle Sua Glicose em Poucos Dias",
  description:
    "Aprenda a montar refeições que estabilizam sua glicemia naturalmente. Sem dietas malucas, sem passar fome, sem viver escravo(a) da comida.",
  openGraph: {
    title: "Alimentação Inteligente para Diabetes — Controle Sua Glicose em Poucos Dias",
    description:
      "Método comprovado para controlar a glicose e reduzir os picos em poucos dias — sem dietas restritivas.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AlimentacaoInteligentePage() {
  return <LandingPageAlimentacaoInteligente />;
}
