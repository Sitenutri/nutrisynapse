"use client";

import { useState } from "react";
import EbookCard from "@/components/EbookCard";
import ScrollReveal from "@/components/ScrollReveal";
import NewsletterForm from "@/components/NewsletterForm";

const categories = [
  "Neurociência",
  "Diabetes",
  "Nutrição",
  "Sabedoria",
  "Mudança de Hábitos",
  "Microbiota intestinal",
] as const;

type Category = (typeof categories)[number];

interface Ebook {
  title: string;
  description: string;
  coverImage?: string | null;
  price: number;
  originalPrice?: number | null;
  targetAudience?: string | null;
  buyLink?: string | null;
  category: Category;
}

const ebooks: Ebook[] = [
  // Neurociência
  {
    title: "NeuroNutrir — Alimente seu Cérebro",
    description:
      "Um guia completo sobre como a alimentação impacta diretamente a saúde cerebral. Descubra nutrientes essenciais para memória, foco e bem-estar emocional.",
    price: 47.9,
    originalPrice: 59.9,
    targetAudience: "Profissionais de saúde e interessados em neurociência aplicada",
    category: "Neurociência",
  },
  {
    title: "Cérebro em Equilíbrio — Guia de Neuronutrição",
    description:
      "Estratégias baseadas em evidências para otimizar a função cerebral através da dieta. Inclui planos alimentares e receitas neurotrópicas.",
    price: 39.9,
    targetAudience: "Público geral interessado em saúde mental e alimentação",
    category: "Neurociência",
  },
  {
    title: "Sinapses & Sabores — Neurociência na Cozinha",
    description:
      "A ponte entre o laboratório e a cozinha. Aprenda a preparar refeições que estimulam neurotransmissores do bem-estar.",
    price: 34.9,
    originalPrice: 44.9,
    targetAudience: "Cozinheiros curiosos e entusiastas da neurociência",
    category: "Neurociência",
  },

  // Diabetes
  {
    title: "DoceEquilíbrio — Guia para Famílias com Diabetes Infantil",
    description:
      "Orientações práticas e acolhedoras para famílias que convivem com a diabetes tipo 1 em crianças. Da escola à cozinha, com carinho e ciência.",
    price: 47.9,
    targetAudience: "Famílias com crianças diagnosticadas com diabetes",
    category: "Diabetes",
  },
  {
    title: "NeuroDoces — 150 Receitas sem Açúcar",
    description:
      "Receitas deliciosas e seguras para quem precisa controlar a glicemia sem abrir mão do prazer à mesa. Cada receita pensada para nutrir o cérebro.",
    price: 39.9,
    originalPrice: 54.9,
    targetAudience: "Pessoas com diabetes e seus cuidadores",
    category: "Diabetes",
  },
  {
    title: "Guia de Segurança Alimentar para Diabetes",
    description:
      "Prevenção de infecções e picos glicêmicos. Um manual indispensável para manter a segurança alimentar no dia a dia.",
    price: 29.9,
    targetAudience: "Cuidadores e profissionais de saúde",
    category: "Diabetes",
  },

  // Nutrição
  {
    title: "Nutrição Consciente — Comer com Presença",
    description:
      "Aprenda a desenvolver uma relação saudável e atenta com a alimentação. Mindful eating encontra a nutrição baseada em evidências.",
    price: 37.9,
    originalPrice: 49.9,
    targetAudience: "Pessoas em busca de uma relação mais saudável com a comida",
    category: "Nutrição",
  },
  {
    title: "Pratos que Curam — Nutrição Funcional na Prática",
    description:
      "Receitas e orientações de nutrição funcional para apoiar o corpo em processos inflamatórios, hormonais e imunológicos.",
    price: 44.9,
    targetAudience: "Interessados em nutrição funcional e autocuidado",
    category: "Nutrição",
  },

  // Sabedoria
  {
    title: "Sabedoria Ancestral, Ciência Atual",
    description:
      "Resgatando tradições alimentares de diferentes culturas sob a lente da ciência moderna. Uma jornada de sabor e conhecimento.",
    price: 34.9,
    targetAudience: "Amantes de cultura, história e gastronomia",
    category: "Sabedoria",
  },
  {
    title: "O Tempo na Mesa — Alimentação e Longevidade",
    description:
      "Lições das zonas azuis e da ciência da longevidade para construir hábitos alimentares que honram o tempo e a vida.",
    price: 42.9,
    originalPrice: 54.9,
    targetAudience: "Adultos em busca de envelhecimento saudável",
    category: "Sabedoria",
  },

  // Mudança de Hábitos
  {
    title: "Pequenos Passos, Grandes Mudanças",
    description:
      "Um programa de 21 dias para transformar seus hábitos alimentares com compaixão e estratégia. Sem dietas restritivas, com muita ciência.",
    price: 37.9,
    targetAudience: "Pessoas que desejam mudar hábitos sem radicalismo",
    category: "Mudança de Hábitos",
  },
  {
    title: "Reprogramando o Paladar — Neurociência dos Hábitos",
    description:
      "Entenda como o cérebro forma hábitos alimentares e aprenda técnicas baseadas em neurociência para reprogramar preferências.",
    price: 39.9,
    originalPrice: 49.9,
    targetAudience: "Profissionais de saúde e público geral",
    category: "Mudança de Hábitos",
  },
  {
    title: "Diário de Transformação Alimentar",
    description:
      "Um workbook interativo para registrar, refletir e transformar sua jornada alimentar ao longo de 30 dias.",
    price: 27.9,
    targetAudience: "Qualquer pessoa em processo de mudança alimentar",
    category: "Mudança de Hábitos",
  },

  // Microbiota intestinal
  {
    title: "Jardim Interior — Cuidando da sua Microbiota",
    description:
      "Um guia poético e científico sobre o universo de trilhões de microorganismos que habitam seu intestino e influenciam sua saúde.",
    price: 44.9,
    originalPrice: 57.9,
    targetAudience: "Interessados em saúde intestinal e bem-estar integral",
    category: "Microbiota intestinal",
  },
  {
    title: "Receitas Probióticas — Fermentação em Casa",
    description:
      "Aprenda a preparar alimentos fermentados que nutrem sua microbiota. De kefir a kimchi, com ciência e sabor.",
    price: 32.9,
    targetAudience: "Entusiastas da fermentação e saúde digestiva",
    category: "Microbiota intestinal",
  },
];

export default function EbooksPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Neurociência");

  const filtered = ebooks.filter((e) => e.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero / Intro */}
      <section className="bg-agua/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              Visão Geral dos E-books
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg text-agua-dark font-medium mb-6">
              Descubra a revolução do autocuidado, onde ciência e afeto se entrelaçam!
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="text-text-light leading-relaxed space-y-4 text-base sm:text-lg">
              <p>
                Nossos e-books são mais que guias: são abraços em forma de conhecimento, fundindo
                neurociência e nutrição com sensibilidade.
              </p>
              <p>
                Cada página foi tecida para honrar seu corpo, sua mente e sua história,
                transformando prevenção em um ato diário de amor.
              </p>
              <p>
                Deixe-se guiar por desafios que não só educam, mas acariciam sua jornada rumo a uma
                saúde plena e um bem-estar que vibra de dentro para fora.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-thin -mx-4 px-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shrink-0 ${
                    activeCategory === cat
                      ? "bg-agua-dark text-white shadow-md"
                      : "bg-white text-text-light hover:bg-agua-light/40 hover:text-text"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Ebook Grid */}
          <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((ebook, i) => (
              <ScrollReveal key={ebook.title} delay={i * 0.1}>
                <EbookCard
                  title={ebook.title}
                  description={ebook.description}
                  coverImage={ebook.coverImage}
                  price={ebook.price}
                  originalPrice={ebook.originalPrice}
                  targetAudience={ebook.targetAudience}
                  buyLink={ebook.buyLink}
                />
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-text-light">
              <p className="text-lg">Nenhum e-book encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <ScrollReveal>
        <NewsletterForm />
      </ScrollReveal>
    </div>
  );
}
