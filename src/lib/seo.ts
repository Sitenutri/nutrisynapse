/* ------------------------------------------------------------------ */
/*  SEO Constants & Helpers                                           */
/* ------------------------------------------------------------------ */

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nutrisynapse.com.br";
export const SITE_NAME = "NutriSynapse";
export const SITE_DESCRIPTION =
  "Onde Neurociência, Nutrição e Psicanálise se conectam para transformar sua saúde. Conteúdos científicos, e-books autorais e orientações práticas por Roselis N. Mazzuchetti.";
export const SITE_LOCALE = "pt_BR";
export const SITE_AUTHOR = "Roselis N. Mazzuchetti";

export const OG_IMAGE = `${SITE_URL}/logo-nutrisinapse.png`;
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

/** Build full canonical URL from a path */
export function canonical(path: string = "/"): string {
  return `${SITE_URL}${path}`;
}
