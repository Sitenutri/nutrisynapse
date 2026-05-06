import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

export const maxDuration = 60;
export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const { image } = await request.json();

    if (!image) {
      return NextResponse.json(
        { error: "Imagem nao fornecida" },
        { status: 400 }
      );
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          cho: 0,
          fiber: 0,
          protein: 0,
          impact: "Erro",
          suggestion:
            "Chave da API nao configurada. Configure a variavel de ambiente ANTHROPIC_API_KEY.",
        },
        { status: 200 }
      );
    }

    const anthropic = new Anthropic({ apiKey });

    const mimeType = image.split(";")[0].split(":")[1] as
      | "image/jpeg"
      | "image/png"
      | "image/gif"
      | "image/webp";
    const base64Data = image.split(",")[1];

    const response = await anthropic.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              source: {
                type: "base64",
                media_type: mimeType,
                data: base64Data,
              },
            },
            {
              type: "text",
              text: `Analise esta refeicao e estime a quantidade de carboidratos, fibras e proteinas em gramas. Avalie tambem o impacto glicemico e forneca uma breve sugestao para um diabetico.

Responda SOMENTE com JSON valido neste formato exato, sem markdown, sem code blocks:
{"cho": <number>, "fiber": <number>, "protein": <number>, "impact": "<Baixo|Medio|Alto>", "suggestion": "<texto>"}`,
            },
          ],
        },
      ],
    });

    const textBlock = response.content.find((b) => b.type === "text");
    if (textBlock && textBlock.type === "text") {
      const parsed = JSON.parse(textBlock.text);
      return NextResponse.json({
        cho: Number(parsed.cho) || 0,
        fiber: Number(parsed.fiber) || 0,
        protein: Number(parsed.protein) || 0,
        impact: parsed.impact || "Medio",
        suggestion: parsed.suggestion || "Sem sugestao disponivel.",
      });
    }

    throw new Error("Resposta vazia do modelo");
  } catch (error) {
    console.error("Erro ao analisar imagem:", error);
    return NextResponse.json(
      {
        cho: 0,
        fiber: 0,
        protein: 0,
        impact: "Erro",
        suggestion:
          "Nao foi possivel analisar a imagem. Verifique sua conexao ou tente uma foto mais clara.",
      },
      { status: 200 }
    );
  }
}
