"use client";

import Image from "next/image";
import { FiCheckCircle, FiShoppingCart } from "react-icons/fi";

interface Ebook {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: string | null;
  price: number;
  originalPrice: number | null;
  salesHeadline: string | null;
  salesBullets: string[];
  kiwifyUrl: string | null;
  buyLink: string | null;
}

export default function SalesPageClient({ ebook }: { ebook: Ebook }) {
  const checkoutUrl = ebook.kiwifyUrl || ebook.buyLink || "#";
  const headline = ebook.salesHeadline || ebook.title;
  const discount = ebook.originalPrice
    ? Math.round(((ebook.originalPrice - ebook.price) / ebook.originalPrice) * 100)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-beige/30 to-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text leading-tight">
                {headline}
              </h1>

              <p className="mt-6 text-lg text-text-light leading-relaxed">
                {ebook.description}
              </p>

              {/* Bullets */}
              {ebook.salesBullets.length > 0 && (
                <ul className="mt-8 space-y-4">
                  {ebook.salesBullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FiCheckCircle className="w-5 h-5 text-verde-dark mt-0.5 flex-shrink-0" />
                      <span className="text-text">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Price + CTA */}
              <div className="mt-10 p-6 bg-white rounded-2xl shadow-sm border border-beige-dark/30">
                <div className="flex items-baseline gap-3">
                  {ebook.originalPrice && (
                    <span className="text-lg text-text-light line-through">
                      R$ {ebook.originalPrice.toFixed(2).replace(".", ",")}
                    </span>
                  )}
                  <span className="text-3xl font-bold text-agua-dark">
                    R$ {ebook.price.toFixed(2).replace(".", ",")}
                  </span>
                  {discount && (
                    <span className="inline-block bg-verde/20 text-verde-dark text-xs font-bold px-2 py-1 rounded-full">
                      -{discount}%
                    </span>
                  )}
                </div>

                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full flex items-center justify-center gap-2 px-8 py-4 bg-agua-dark text-white text-lg font-semibold rounded-2xl shadow-lg hover:bg-agua hover:shadow-xl transition-all duration-300"
                >
                  <FiShoppingCart className="w-5 h-5" />
                  Quero Garantir o Meu
                </a>

                <p className="mt-3 text-center text-xs text-text-light">
                  Pagamento seguro via Kiwify. Acesso imediato.
                </p>
              </div>
            </div>

            {/* Cover Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              {ebook.coverImage ? (
                <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={ebook.coverImage}
                    alt={ebook.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 384px, 400px"
                    priority
                  />
                </div>
              ) : (
                <div className="w-full max-w-sm aspect-[3/4] rounded-3xl bg-gradient-to-br from-agua/20 to-azul-light/30 flex items-center justify-center shadow-2xl">
                  <span className="text-6xl font-bold text-agua-dark/30">E</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="py-16 bg-gradient-to-br from-agua-dark to-azul">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Comece hoje sua transformacao
          </h2>
          <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
            Conhecimento validado pela ciencia, apresentado de forma clara e acessivel.
          </p>
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-10 py-4 bg-white text-agua-dark font-semibold rounded-2xl shadow-lg hover:bg-beige hover:shadow-xl transition-all duration-300"
          >
            <FiShoppingCart className="w-5 h-5" />
            Comprar Agora — R$ {ebook.price.toFixed(2).replace(".", ",")}
          </a>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="py-8 text-center text-xs text-text-light">
        <p>Nutrisynapse &mdash; Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
