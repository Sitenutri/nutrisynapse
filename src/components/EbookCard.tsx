"use client";

import { FiBook, FiBookOpen } from "react-icons/fi";
import { FaBrain } from "react-icons/fa";
import { trackEbookDownload } from "@/lib/analytics";

interface EbookCardProps {
  title: string;
  description: string;
  coverImage?: string | null;
  price: number;
  originalPrice?: number | null;
  targetAudience?: string | null;
  buyLink?: string | null;
}

/* Cycle through visual themes based on title hash */
const COVER_THEMES = [
  {
    gradient: "from-agua-dark via-agua to-azul-light",
    spineColor: "bg-agua-dark",
    titleBg: "bg-agua-dark/90",
    icon: FiBook,
  },
  {
    gradient: "from-verde-dark via-verde to-agua-light",
    spineColor: "bg-verde-dark",
    titleBg: "bg-verde-dark/90",
    icon: FiBookOpen,
  },
  {
    gradient: "from-azul via-azul-light to-agua",
    spineColor: "bg-azul",
    titleBg: "bg-azul/90",
    icon: FaBrain,
  },
  {
    gradient: "from-agua-dark via-verde to-verde",
    spineColor: "bg-agua-dark",
    titleBg: "bg-agua-dark/90",
    icon: FiBook,
  },
];

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export default function EbookCard({
  title,
  description,
  coverImage,
  price,
  originalPrice,
  targetAudience,
  buyLink,
}: EbookCardProps) {
  const formatPrice = (p: number) =>
    p.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const discount = originalPrice
    ? Math.round((1 - price / originalPrice) * 100)
    : 0;

  const theme = COVER_THEMES[simpleHash(title) % COVER_THEMES.length];
  const IconComponent = theme.icon;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Cover */}
      <div className={`h-52 bg-gradient-to-br ${theme.gradient} flex items-center justify-center relative overflow-hidden`}>
        {coverImage ? (
          <img src={coverImage} alt={title} className="w-full h-full object-cover" />
        ) : (
          <>
            {/* Decorative background shapes */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-8 translate-x-8 blur-xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/10 translate-y-8 -translate-x-8 blur-xl" />
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)"
              }}
            />

            {/* 3D Book mockup */}
            <div className="relative z-10 group-hover:scale-105 group-hover:-rotate-2 transition-all duration-500">
              {/* Book body */}
              <div className="relative w-28 h-36 rounded-r-lg shadow-2xl overflow-hidden">
                {/* Cover gradient */}
                <div className="absolute inset-0 bg-white/95" />
                {/* Cover content */}
                <div className="relative p-3 h-full flex flex-col">
                  {/* Top accent bar */}
                  <div className={`h-1.5 w-full rounded-full ${theme.titleBg} mb-2 opacity-80`} />
                  <div className="flex-1 flex flex-col items-center justify-center gap-2">
                    <div className={`w-10 h-10 rounded-xl ${theme.titleBg} flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-full space-y-1 px-1">
                      <div className={`h-1 rounded-full ${theme.titleBg} opacity-60`} />
                      <div className={`h-1 rounded-full ${theme.titleBg} opacity-40 w-4/5`} />
                      <div className={`h-1 rounded-full ${theme.titleBg} opacity-30 w-3/5`} />
                    </div>
                  </div>
                  {/* Bottom author bar */}
                  <div className={`h-6 w-full rounded-sm ${theme.titleBg} opacity-70 flex items-center justify-center`}>
                    <span className="text-[8px] text-white font-bold tracking-widest opacity-90">NUTRISYNAPSE</span>
                  </div>
                </div>
              </div>
              {/* Spine */}
              <div className={`absolute left-0 top-0 bottom-0 w-2.5 rounded-l-sm ${theme.spineColor} opacity-80 shadow-inner`} />
              {/* Shadow underneath */}
              <div className="absolute -bottom-1 left-2 right-0 h-3 bg-black/20 blur-md rounded-full" />
            </div>
          </>
        )}

        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-verde text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-10">
            -{discount}%
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-text text-lg leading-snug">{title}</h3>
        <p className="text-sm text-text-light mt-2 line-clamp-3 flex-1">{description}</p>

        {targetAudience && (
          <p className="text-xs text-agua-dark mt-3 bg-agua/10 px-3 py-1.5 rounded-lg">
            Público: {targetAudience}
          </p>
        )}

        <div className="mt-4 flex items-center gap-3">
          {originalPrice && (
            <span className="text-sm text-text-light line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
          <span className="text-lg font-bold text-agua-dark">{formatPrice(price)}</span>
        </div>

        <a
          href={buyLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEbookDownload(title, buyLink || "#")}
          className="mt-4 block text-center px-6 py-3 bg-agua-dark text-white text-sm font-medium rounded-xl hover:bg-agua transition-colors"
        >
          Comprar agora
        </a>
      </div>
    </div>
  );
}
