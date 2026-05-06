"use client";

import { useEffect, useState } from "react";
import EbookCard from "@/components/EbookCard";
import ScrollReveal from "@/components/ScrollReveal";
import NewsletterForm from "@/components/NewsletterForm";
import { FiBookOpen } from "react-icons/fi";

const CATEGORIES = [
  { value: "neurociencia", label: "Neurociência" },
  { value: "diabetes", label: "Diabetes" },
  { value: "nutricao", label: "Nutrição" },
  { value: "sabedoria", label: "Sabedoria" },
  { value: "mudanca-habitos", label: "Mudança de Hábitos" },
  { value: "microbiota", label: "Microbiota" },
] as const;

type CategoryValue = (typeof CATEGORIES)[number]["value"];

interface Ebook {
  id: string;
  title: string;
  description: string;
  coverImage: string | null;
  price: number;
  originalPrice: number | null;
  targetAudience: string | null;
  buyLink: string | null;
  category: string;
}

export default function EbooksClient() {
  const [ebooks, setEbooks] = useState<Ebook[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<CategoryValue>("neurociencia");

  useEffect(() => {
    fetch("/api/ebooks")
      .then((r) => r.json())
      .then((data: Ebook[]) => {
        setEbooks(data);
        // Se não tiver ebooks na categoria padrão, vai pra primeira que tiver
        const firstWithEbooks = CATEGORIES.find((c) =>
          data.some((e) => e.category === c.value)
        );
        if (firstWithEbooks) setActiveCategory(firstWithEbooks.value);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const filtered = ebooks.filter((e) => e.category === activeCategory);
  const availableCategories = CATEGORIES.filter((c) =>
    ebooks.some((e) => e.category === c.value)
  );

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-agua/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              E-books
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-agua-dark font-medium mb-6">
              Você não precisa de mais tentativas. Precisa de um método que funcione.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="text-text-light leading-relaxed space-y-4 text-base sm:text-lg">
              <p>
                Esses e-books foram criados para quem busca resultado com inteligência, não
                soluções aleatórias.
              </p>
              <p>
                Cada material traduz ciência em prática, com orientações objetivas que cabem
                na sua rotina e geram impacto real no seu corpo.
              </p>
              <p>
                Sem promessas irreais. Sem excesso de regras.
              </p>
              <p>
                Apenas o essencial, bem estruturado — para funcionar.
                Escolha por onde começar. Seu corpo responde quando você aplica o que
                realmente importa.
              </p>
              <p className="text-agua-dark font-semibold text-xl mt-2">
                👇 Acesse os conteúdos
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin w-8 h-8 border-4 border-agua border-t-transparent rounded-full" />
            </div>
          ) : ebooks.length === 0 ? (
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="w-16 h-16 rounded-full bg-agua/10 flex items-center justify-center mb-4">
                  <FiBookOpen className="w-7 h-7 text-agua-dark" />
                </div>
                <h2 className="text-xl font-bold text-text mb-2">Em breve</h2>
                <p className="text-text-light max-w-sm">
                  Novos e-books chegando em breve. Inscreva-se na newsletter para ser avisada!
                </p>
              </div>
            </ScrollReveal>
          ) : (
            <>
              {/* Category Tabs — só mostra categorias que têm ebooks */}
              {availableCategories.length > 1 && (
                <ScrollReveal>
                  <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-thin -mx-4 px-4 mb-8">
                    {availableCategories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => setActiveCategory(cat.value)}
                        className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shrink-0 ${
                          activeCategory === cat.value
                            ? "bg-agua-dark text-white shadow-md"
                            : "bg-white text-text-light hover:bg-agua-light/40 hover:text-text"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </ScrollReveal>
              )}

              {/* Grid */}
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((ebook, i) => (
                  <ScrollReveal key={ebook.id} delay={i * 0.1}>
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
                  <p>Nenhum e-book nesta categoria ainda.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <ScrollReveal>
        <NewsletterForm />
      </ScrollReveal>
    </div>
  );
}
