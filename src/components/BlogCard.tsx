import Link from "next/link";
import { FaBrain, FaLeaf, FaHeartbeat } from "react-icons/fa";
import { GiMicroscope, GiStomach } from "react-icons/gi";
import { FiBookOpen } from "react-icons/fi";

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  coverImage?: string | null;
  createdAt: string;
  tags: string[];
  featured?: boolean;
}

const TAG_THEMES: Record<string, { gradient: string; icon: React.ElementType; iconColor: string }> = {
  "Neurociência": {
    gradient: "from-agua/30 via-agua-light/40 to-azul-light/30",
    icon: FaBrain,
    iconColor: "text-agua-dark",
  },
  "Microbiota": {
    gradient: "from-verde/25 via-verde/15 to-agua-light/25",
    icon: GiStomach,
    iconColor: "text-verde-dark",
  },
  "Diabetes": {
    gradient: "from-azul/25 via-azul-light/35 to-agua-light/20",
    icon: FaHeartbeat,
    iconColor: "text-azul",
  },
  "Nutrição": {
    gradient: "from-verde/20 via-agua-light/30 to-verde/15",
    icon: FaLeaf,
    iconColor: "text-verde-dark",
  },
  "Psicanálise": {
    gradient: "from-azul/20 via-agua/15 to-azul-light/30",
    icon: FaBrain,
    iconColor: "text-azul",
  },
  "Mudança de Hábitos": {
    gradient: "from-agua/25 via-verde/15 to-agua-light/30",
    icon: FiBookOpen,
    iconColor: "text-agua-dark",
  },
  "Sabedoria": {
    gradient: "from-beige-dark/30 via-agua/15 to-verde/15",
    icon: GiMicroscope,
    iconColor: "text-agua-dark",
  },
};

const DEFAULT_THEME = {
  gradient: "from-agua/25 via-agua-light/35 to-azul-light/25",
  icon: FaBrain,
  iconColor: "text-agua-dark",
};

export default function BlogCard({ slug, title, description, coverImage, createdAt, tags, featured }: BlogCardProps) {
  const date = new Date(createdAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const theme = TAG_THEMES[tags[0]] || DEFAULT_THEME;
  const IconComponent = theme.icon;

  return (
    <Link href={`/blog/${slug}`} className="group block h-full">
      <article
        className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col ${
          featured ? "md:flex-row" : ""
        }`}
      >
        {/* Cover */}
        <div
          className={`bg-gradient-to-br ${theme.gradient} flex items-center justify-center relative overflow-hidden ${
            featured ? "md:w-1/2 h-52 md:h-auto" : "h-44"
          }`}
        >
          {coverImage ? (
            <img src={coverImage} alt={title} className="w-full h-full object-cover" />
          ) : (
            <>
              {/* Layered background shapes */}
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/20 -translate-y-8 translate-x-8 blur-2xl" />
                <div className="absolute bottom-0 left-0 w-28 h-28 rounded-full bg-white/15 translate-y-8 -translate-x-8 blur-2xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/10 blur-xl" />
              </div>

              {/* Central composition */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                {/* Main icon in card */}
                <div className="w-20 h-20 rounded-3xl bg-white/75 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-400">
                  <IconComponent className={`w-10 h-10 ${theme.iconColor}`} />
                </div>
                {/* Decorative line accent */}
                <div className="flex items-center gap-1.5">
                  <span className="w-8 h-0.5 rounded-full bg-white/50" />
                  <span className="w-2 h-2 rounded-full bg-white/70" />
                  <span className="w-8 h-0.5 rounded-full bg-white/50" />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className={`p-5 flex flex-col flex-1 ${featured ? "md:w-1/2 md:p-8" : ""}`}>
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 bg-agua/10 text-agua-dark rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
          <h3 className={`font-bold text-text group-hover:text-agua-dark transition-colors ${featured ? "text-xl md:text-2xl" : "text-lg"}`}>
            {title}
          </h3>
          <p className="text-sm text-text-light mt-2 line-clamp-2 flex-1">{description}</p>
          <time className="text-xs text-text-light/70 mt-3 block">{date}</time>
        </div>
      </article>
    </Link>
  );
}
