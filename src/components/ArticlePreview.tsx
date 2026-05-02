"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FiCalendar, FiClock, FiTag } from "react-icons/fi";

interface PreviewBlock {
  type: "text" | "image";
  content: string;
  images: string;
}

interface PreviewTag {
  id: string;
  name: string;
}

interface Props {
  title: string;
  description: string;
  coverImage?: string;
  contents: PreviewBlock[];
  tags?: PreviewTag[];
}

function estimateReadingTime(blocks: PreviewBlock[]): number {
  const wordCount = blocks
    .filter((b) => b.type === "text" && b.content)
    .map((b) => b.content.split(/\s+/).filter(Boolean).length)
    .reduce((sum, n) => sum + n, 0);
  return Math.max(1, Math.round(wordCount / 220));
}

export default function ArticlePreview({
  title,
  description,
  coverImage,
  contents,
  tags = [],
}: Props) {
  const date = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const readingTime = estimateReadingTime(contents);

  return (
    <div className="bg-beige rounded-2xl overflow-hidden">
      <section className="bg-gradient-to-b from-agua/10 to-beige pt-8 sm:pt-10 pb-6 sm:pb-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  className="text-xs px-3 py-1 bg-agua/20 text-agua-dark rounded-full flex items-center gap-1"
                >
                  <FiTag className="w-3 h-3" />
                  {tag.name}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text mb-3 sm:mb-4 leading-tight break-words">
            {title || <span className="text-text-light/50 italic">Sem título</span>}
          </h1>

          {description && (
            <p className="text-base sm:text-lg text-text-light mb-4 leading-relaxed">
              {description}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-text-light">
            <div className="flex items-center gap-2">
              <FiCalendar className="w-4 h-4" />
              <time>{date}</time>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="w-4 h-4" />
              <span>{readingTime} min de leitura</span>
            </div>
          </div>
        </div>
      </section>

      {coverImage && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-2 mb-6 sm:mb-8">
          <img
            src={coverImage}
            alt={title}
            className="w-full rounded-2xl shadow-md object-cover max-h-[320px] sm:max-h-[480px]"
          />
        </div>
      )}

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {contents.length === 0 || contents.every((b) => !b.content && !b.images) ? (
          <p className="text-text-light/60 italic text-center py-12">
            Nenhum conteúdo para visualizar ainda.
          </p>
        ) : (
          contents.map((block, i) => {
            if (block.type === "text" && block.content) {
              return (
                <div
                  key={i}
                  className="mb-6 sm:mb-8 prose prose-base sm:prose-lg max-w-none
                    prose-headings:text-text prose-headings:font-bold prose-headings:mt-6 sm:prose-headings:mt-8 prose-headings:mb-3 sm:prose-headings:mb-4
                    prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:border-b prose-h2:border-agua/20 prose-h2:pb-2
                    prose-h3:text-lg sm:prose-h3:text-xl prose-h3:text-agua-dark
                    prose-p:text-text-light prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-base
                    prose-strong:text-text prose-strong:font-semibold
                    prose-li:text-text-light prose-li:leading-relaxed
                    prose-ul:my-3 sm:prose-ul:my-4 prose-ol:my-3 sm:prose-ol:my-4
                    prose-a:text-agua-dark prose-a:underline hover:prose-a:text-agua prose-a:break-words"
                >
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{block.content}</ReactMarkdown>
                </div>
              );
            }

            if (block.type === "image" && block.images) {
              let imgs: string[] = [];
              try {
                imgs = JSON.parse(block.images);
              } catch {
                return null;
              }
              if (imgs.length === 0) return null;

              if (imgs.length === 1) {
                return (
                  <figure key={i} className="mb-6 sm:mb-8 flex justify-center">
                    <img
                      src={imgs[0]}
                      alt=""
                      className="rounded-xl shadow-sm max-h-[420px] sm:max-h-[640px] max-w-full w-auto h-auto"
                    />
                  </figure>
                );
              }

              return (
                <div
                  key={i}
                  className={`grid gap-3 sm:gap-4 mb-6 sm:mb-8 ${
                    imgs.length === 2 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3"
                  }`}
                >
                  {imgs.map((src, ii) => (
                    <img
                      key={ii}
                      src={src}
                      alt=""
                      className="w-full aspect-square rounded-xl shadow-sm object-cover"
                    />
                  ))}
                </div>
              );
            }

            return null;
          })
        )}
      </article>
    </div>
  );
}
