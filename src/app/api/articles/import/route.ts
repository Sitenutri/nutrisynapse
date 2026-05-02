import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Anthropic from "@anthropic-ai/sdk";
import slugify from "slugify";
import { extractAndUploadImages, type ExtractedImage } from "@/lib/pdf-import";

export const maxDuration = 300;
export const runtime = "nodejs";

const SYSTEM_PROMPT =
  "Você converte artigos PDF em posts de blog estruturados para um site brasileiro de nutrição e saúde. Mantenha o tom técnico-acessível e use português brasileiro.";

const blockSchema = {
  type: "object",
  properties: {
    title: { type: "string", description: "Título principal do artigo" },
    description: {
      type: "string",
      description: "Resumo curto, 1-2 frases (~150-200 caracteres) usado na listagem do blog.",
    },
    blocks: {
      type: "array",
      description: "Lista ordenada de blocos do artigo",
      items: {
        type: "object",
        properties: {
          type: { type: "string", enum: ["text", "image"] },
          content: {
            type: ["string", "null"],
            description:
              "Conteúdo em markdown quando type=text. Null quando type=image. Use ## para subtítulos, **negrito**, listas com -, links [texto](url).",
          },
          imageIndex: {
            type: ["integer", "null"],
            description:
              "Índice 1-based da imagem na lista fornecida no prompt. Null quando type=text.",
          },
        },
        required: ["type", "content", "imageIndex"],
        additionalProperties: false,
      },
    },
  },
  required: ["title", "description", "blocks"],
  additionalProperties: false,
};

interface ParsedBlock {
  type: "text" | "image";
  content: string | null;
  imageIndex: number | null;
}

interface ParsedArticle {
  title: string;
  description: string;
  blocks: ParsedBlock[];
}

function buildImageManifest(images: ExtractedImage[]): string {
  if (images.length === 0) {
    return "\n\nNenhuma imagem foi extraída deste PDF. Use somente blocos de texto.";
  }
  const lines = images
    .map((img) => `- Imagem ${img.index}: página ${img.page}, ${img.width}x${img.height}px`)
    .join("\n");
  return `\n\nForam extraídas ${images.length} imagem(ns) deste PDF, na ordem de aparição:\n${lines}\n\nPara referenciar uma imagem na lista de blocos, use {type: "image", imageIndex: N, content: null} onde N é o número da imagem acima.`;
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "ANTHROPIC_API_KEY não configurada no servidor" },
      { status: 500 }
    );
  }

  const body = await req.json().catch(() => null);
  const pdfUrl = body?.pdfUrl;
  if (!pdfUrl || typeof pdfUrl !== "string") {
    return NextResponse.json({ error: "pdfUrl é obrigatório" }, { status: 400 });
  }

  const pdfRes = await fetch(pdfUrl);
  if (!pdfRes.ok) {
    return NextResponse.json(
      { error: `Falha ao baixar PDF (HTTP ${pdfRes.status})` },
      { status: 400 }
    );
  }
  const pdfBuffer = Buffer.from(await pdfRes.arrayBuffer());

  let images: ExtractedImage[] = [];
  try {
    images = await extractAndUploadImages(pdfBuffer);
  } catch (e) {
    console.warn("[import] Image extraction failed entirely:", e);
  }

  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const userPrompt = `Converta este artigo PDF em um post de blog estruturado.${buildImageManifest(images)}

HIERARQUIA DE TÍTULOS (CRÍTICO):
Identifique a estrutura visual do PDF e mapeie corretamente:
- Cada SEÇÃO PRINCIPAL (título visualmente destacado, geralmente em fonte grande/colorida, marcando uma divisão temática) → use "## Título" como heading H2.
- Cada SUBSEÇÃO ou card temático dentro de uma seção (subtítulo menor, dentro do mesmo tema) → use "### Subtítulo" como heading H3.
- NÃO use **negrito** para títulos de seção. Negrito é APENAS para destacar termos no meio de um parágrafo (ex: "**leaky gut**", "**tight junctions**").
- O título principal do artigo NÃO entra como heading nos blocos — ele vai no campo "title" separado.

LISTAS (CRÍTICO):
- Sempre que o PDF mostrar uma sequência de itens (com bullets, ícones, números, ou cards lado a lado), formate como lista markdown:
  - Lista de itens não-ordenados → "- item"
  - Lista de etapas/passos numerados → "1. item", "2. item", "3. item"
- NÃO transforme listas em parágrafos separados por quebra de linha. Use sintaxe de lista de verdade.

REGRAS GERAIS:
1. Preserve TODA a estrutura do artigo. Cada heading do PDF original deve virar um heading no markdown.
2. Use **negrito** APENAS para destacar termos técnicos no meio de parágrafos.
3. Use [texto](url) para links.
4. Agrupe vários parágrafos relacionados num mesmo bloco de texto. Crie um novo bloco apenas quando entrar em uma nova seção principal (H2) ou quando uma imagem precisar ser inserida no meio.
5. Para cada imagem da lista acima, insira um bloco {type: "image", imageIndex: N, content: null} no ponto onde ela aparece no PDF original.
6. Ignore elementos puramente decorativos (ícones decorativos, números de página, rodapés, marcas d'água).
7. Se houver referências bibliográficas, coloque-as como bloco final de texto com "## Referências" e lista numerada com links: "1. Autor et al. *Título*. Revista. [link](url)".
8. A descrição (campo "description") deve ter 150-200 caracteres, sem markdown, em texto corrido.
9. Tudo em português brasileiro.

EXEMPLO de bloco de texto bem estruturado:
"## Como Funciona a Barreira Intestinal

A mucosa intestinal é uma fronteira inteligente: permite nutrientes, bloqueia toxinas.

### A Fronteira Inteligente

Uma única camada de células epiteliais unidas por **tight junctions** controla o que entra na corrente sanguínea.

### O Que Enfraquece Essa Barreira

- Dieta rica em açúcares e gorduras saturadas
- Baixo consumo de fibras
- Estresse crônico
- Uso excessivo de antibióticos
- Disbiose intestinal"`;

  let response;
  try {
    response = await anthropic.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 16000,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: [
            { type: "document", source: { type: "url", url: pdfUrl } },
            { type: "text", text: userPrompt },
          ],
        },
      ],
      output_config: {
        format: { type: "json_schema", schema: blockSchema },
      },
    });
  } catch (e) {
    console.error("[import] Claude call failed:", e);
    const message = e instanceof Error ? e.message : "Erro ao chamar Claude";
    return NextResponse.json({ error: message }, { status: 502 });
  }

  const textContent = response.content.find((c) => c.type === "text");
  if (!textContent || textContent.type !== "text") {
    return NextResponse.json(
      { error: "Resposta inesperada do Claude (sem bloco de texto)" },
      { status: 500 }
    );
  }

  let parsed: ParsedArticle;
  try {
    parsed = JSON.parse(textContent.text);
  } catch (e) {
    console.error("[import] Failed to parse Claude JSON:", textContent.text.slice(0, 500), e);
    return NextResponse.json({ error: "Resposta do Claude não é JSON válido" }, { status: 500 });
  }

  const contents = parsed.blocks
    .map((b) => {
      if (b.type === "text") {
        const content = (b.content ?? "").trim();
        return content ? { type: "text" as const, content, images: "" } : null;
      }
      if (b.type === "image" && b.imageIndex && b.imageIndex >= 1 && b.imageIndex <= images.length) {
        const img = images[b.imageIndex - 1];
        return { type: "image" as const, content: "", images: JSON.stringify([img.s3Url]) };
      }
      return null;
    })
    .filter((b): b is NonNullable<typeof b> => b !== null)
    .map((b, order) => ({ ...b, order }));

  if (contents.length === 0) {
    return NextResponse.json(
      { error: "Não foi possível extrair conteúdo utilizável do PDF" },
      { status: 422 }
    );
  }

  return NextResponse.json({
    title: parsed.title,
    slug: slugify(parsed.title, { lower: true, strict: true }),
    description: parsed.description,
    contents,
    extractedImageCount: images.length,
  });
}
