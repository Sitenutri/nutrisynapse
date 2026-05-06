export type Categoria = 'fibra' | 'proteína' | 'gordura' | 'carboidrato' | 'fruta' | 'ultraprocessado';
export type Classificacao = 'pode' | 'cuidado' | 'evitar';

export interface Alimento {
  id: string;
  nome: string;
  categoria: Categoria;
  classificacao: Classificacao;
  observacao: string;
  combinar_com?: string;
  alerta?: string;
  alternativa?: string;
}

export const ingredientesPerigosos = [
  'Açúcar',
  'Açúcar castanho',
  'Açúcar cristal',
  'Açúcar de coco',
  'Açúcar de confeiteiro',
  'Açúcar demerara',
  'Açúcar invertido',
  'Açúcar light',
  'Açúcar mascavo',
  'Açúcar orgânico',
  'Açúcar refinado',
  'Agave',
  'Amido de milho',
  'Amido modificado',
  'Caldo de cana',
  'Caramelo',
  'Concentrado de suco de fruta',
  'Dextrano',
  'Dextrina',
  'Dextrose',
  'Diastase',
  'Extrato de malte',
  'Farinha branca',
  'Farinha de arroz refinada',
  'Farinha de trigo enriquecida',
  'Farinha refinada',
  'Frutose',
  'Galactose',
  'Glicose',
  'Glicose de milho',
  'Gordura hidrogenada',
  'Gordura trans',
  'Gordura vegetal',
  'Lactose',
  'Malte de cevada',
  'Maltodextrina',
  'Maltose',
  'Margarina',
  'Mel',
  'Melaço',
  'Melado',
  'Néctar',
  'Néctar de agave',
  'Rapadura',
  'Sacarose',
  'Sólidos de xarope de milho',
  'Suco de fruta concentrado',
  'Xarope de agave',
  'Xarope de arroz',
  'Xarope de bordo (maple)',
  'Xarope de cevada',
  'Xarope de glicose',
  'Xarope de guaraná',
  'Xarope de malte',
  'Xarope de milho',
  'Xarope de milho rico em frutose'
];

export const foodsDb: Alimento[] = [
  {
    "nome": "Brócolis (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "1"
  },
  {
    "nome": "Brócolis (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "2"
  },
  {
    "nome": "Brócolis (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "3"
  },
  {
    "nome": "Couve-flor (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "4"
  },
  {
    "nome": "Couve-flor (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "5"
  },
  {
    "nome": "Couve-flor (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "6"
  },
  {
    "nome": "Espinafre (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "7"
  },
  {
    "nome": "Espinafre (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "8"
  },
  {
    "nome": "Espinafre (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "9"
  },
  {
    "nome": "Couve (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "10"
  },
  {
    "nome": "Couve (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "11"
  },
  {
    "nome": "Couve (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "12"
  },
  {
    "nome": "Alface Crespa (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "13"
  },
  {
    "nome": "Alface Crespa (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "14"
  },
  {
    "nome": "Alface Americana (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "15"
  },
  {
    "nome": "Alface Americana (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "16"
  },
  {
    "nome": "Rúcula (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "17"
  },
  {
    "nome": "Rúcula (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "18"
  },
  {
    "nome": "Agrião (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "19"
  },
  {
    "nome": "Agrião (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "20"
  },
  {
    "nome": "Acelga (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "21"
  },
  {
    "nome": "Acelga (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "22"
  },
  {
    "nome": "Chicória (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "23"
  },
  {
    "nome": "Chicória (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "24"
  },
  {
    "nome": "Chicória (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "25"
  },
  {
    "nome": "Repolho Branco (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "26"
  },
  {
    "nome": "Repolho Branco (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "27"
  },
  {
    "nome": "Repolho Branco (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "28"
  },
  {
    "nome": "Repolho Roxo (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "29"
  },
  {
    "nome": "Repolho Roxo (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "30"
  },
  {
    "nome": "Repolho Roxo (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "31"
  },
  {
    "nome": "Tomate Salada (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "32"
  },
  {
    "nome": "Tomate Salada (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "33"
  },
  {
    "nome": "Tomate Salada (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "34"
  },
  {
    "nome": "Tomate Cereja (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "35"
  },
  {
    "nome": "Tomate Cereja (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "36"
  },
  {
    "nome": "Tomate Cereja (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "37"
  },
  {
    "nome": "Abobrinha (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "38"
  },
  {
    "nome": "Abobrinha (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "39"
  },
  {
    "nome": "Abobrinha (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "40"
  },
  {
    "nome": "Berinjela (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "41"
  },
  {
    "nome": "Berinjela (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "42"
  },
  {
    "nome": "Berinjela (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "43"
  },
  {
    "nome": "Chuchu (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "44"
  },
  {
    "nome": "Chuchu (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "45"
  },
  {
    "nome": "Chuchu (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "46"
  },
  {
    "nome": "Vagem (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "47"
  },
  {
    "nome": "Vagem (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "48"
  },
  {
    "nome": "Vagem (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "49"
  },
  {
    "nome": "Aspargos (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "50"
  },
  {
    "nome": "Aspargos (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "51"
  },
  {
    "nome": "Aspargos (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "52"
  },
  {
    "nome": "Palmito (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "53"
  },
  {
    "nome": "Palmito (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "54"
  },
  {
    "nome": "Palmito (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "55"
  },
  {
    "nome": "Alcachofra (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "56"
  },
  {
    "nome": "Alcachofra (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "57"
  },
  {
    "nome": "Alcachofra (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "58"
  },
  {
    "nome": "Quiabo (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "59"
  },
  {
    "nome": "Quiabo (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "60"
  },
  {
    "nome": "Quiabo (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "61"
  },
  {
    "nome": "Pimentão Verde (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "62"
  },
  {
    "nome": "Pimentão Verde (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "63"
  },
  {
    "nome": "Pimentão Verde (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "64"
  },
  {
    "nome": "Pimentão Vermelho (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "65"
  },
  {
    "nome": "Pimentão Vermelho (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "66"
  },
  {
    "nome": "Pimentão Vermelho (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "67"
  },
  {
    "nome": "Pimentão Amarelo (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "68"
  },
  {
    "nome": "Pimentão Amarelo (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "69"
  },
  {
    "nome": "Pimentão Amarelo (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "70"
  },
  {
    "nome": "Cebola (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "71"
  },
  {
    "nome": "Cebola (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "72"
  },
  {
    "nome": "Cebola (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "73"
  },
  {
    "nome": "Alho (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "74"
  },
  {
    "nome": "Alho (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "75"
  },
  {
    "nome": "Alho (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "76"
  },
  {
    "nome": "Cenoura (crua) (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "77"
  },
  {
    "nome": "Cenoura (crua) (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "78"
  },
  {
    "nome": "Cenoura (crua) (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "79"
  },
  {
    "nome": "Beterraba (crua) (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "80"
  },
  {
    "nome": "Beterraba (crua) (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "81"
  },
  {
    "nome": "Beterraba (crua) (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "82"
  },
  {
    "nome": "Rabanete (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "83"
  },
  {
    "nome": "Rabanete (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "84"
  },
  {
    "nome": "Rabanete (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "85"
  },
  {
    "nome": "Nabo (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "86"
  },
  {
    "nome": "Nabo (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "87"
  },
  {
    "nome": "Nabo (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "88"
  },
  {
    "nome": "Pepino (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "89"
  },
  {
    "nome": "Pepino (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "90"
  },
  {
    "nome": "Pepino (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "91"
  },
  {
    "nome": "Maxixe (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "92"
  },
  {
    "nome": "Maxixe (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "93"
  },
  {
    "nome": "Maxixe (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "94"
  },
  {
    "nome": "Jiló (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "95"
  },
  {
    "nome": "Jiló (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "96"
  },
  {
    "nome": "Jiló (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "97"
  },
  {
    "nome": "Taioba (Crú/Salada)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Rico em fibras intactas, reduz impacto de outros carboidratos.",
    "id": "98"
  },
  {
    "nome": "Taioba (Cozido/No Vapor)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras amaciadas, ajuda na digestão e mantém a glicose estável.",
    "id": "99"
  },
  {
    "nome": "Taioba (Refogado no Azeite)",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "A adição de azeite diminui ativamente a resposta glicêmica.",
    "id": "100"
  },
  {
    "nome": "Cenoura (Cozida)",
    "categoria": "carboidrato",
    "classificacao": "pode",
    "observacao": "Boa fonte de carboidrato complexo.",
    "combinar_com": "Proteína magra ou azeite",
    "id": "101"
  },
  {
    "nome": "Cenoura (Purê)",
    "categoria": "carboidrato",
    "classificacao": "cuidado",
    "observacao": "Ao amassar, a digestão e absorção aceleram significativamente.",
    "alerta": "Gera picos mais rápido que a versão em pedaços.",
    "id": "102"
  },
  {
    "nome": "Cenoura (Frita)",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Mistura carbo com gordura submetida a alta temperatura, pró-inflamatório.",
    "alternativa": "Cenoura assada na AirFryer.",
    "id": "103"
  },
  {
    "nome": "Beterraba (Cozida)",
    "categoria": "carboidrato",
    "classificacao": "cuidado",
    "observacao": "O cozimento quebra fibras e aumenta o índice glicêmico.",
    "combinar_com": "Proteína magra ou azeite",
    "alerta": "Controle a porção!",
    "id": "104"
  },
  {
    "nome": "Beterraba (Purê)",
    "categoria": "carboidrato",
    "classificacao": "cuidado",
    "observacao": "Ao amassar, a digestão e absorção aceleram significativamente.",
    "alerta": "Gera picos mais rápido que a versão em pedaços.",
    "id": "105"
  },
  {
    "nome": "Beterraba (Frita)",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Mistura carbo com gordura submetida a alta temperatura, pró-inflamatório.",
    "alternativa": "Beterraba assada na AirFryer.",
    "id": "106"
  },
  {
    "nome": "Mandioca (Cozida)",
    "categoria": "carboidrato",
    "classificacao": "cuidado",
    "observacao": "O cozimento quebra fibras e aumenta o índice glicêmico.",
    "combinar_com": "Proteína magra ou azeite",
    "alerta": "Controle a porção!",
    "id": "107"
  },
  {
    "nome": "Mandioca (Purê)",
    "categoria": "carboidrato",
    "classificacao": "cuidado",
    "observacao": "Ao amassar, a digestão e absorção aceleram significativamente.",
    "alerta": "Gera picos mais rápido que a versão em pedaços.",
    "id": "108"
  },
  {
    "nome": "Mandioca (Frita)",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Mistura carbo com gordura submetida a alta temperatura, pró-inflamatório.",
    "alternativa": "Mandioca assada na AirFryer.",
    "id": "109"
  },
  {
    "nome": "Batata Doce (Cozida)",
    "categoria": "carboidrato",
    "classificacao": "pode",
    "observacao": "Boa fonte de carboidrato complexo.",
    "combinar_com": "Proteína magra ou azeite",
    "id": "110"
  },
  {
    "nome": "Batata Doce (Purê)",
    "categoria": "carboidrato",
    "classificacao": "cuidado",
    "observacao": "Ao amassar, a digestão e absorção aceleram significativamente.",
    "alerta": "Gera picos mais rápido que a versão em pedaços.",
    "id": "111"
  },
  {
    "nome": "Batata Doce (Frita)",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Mistura carbo com gordura submetida a alta temperatura, pró-inflamatório.",
    "alternativa": "Batata Doce assada na AirFryer.",
    "id": "112"
  },
  {
    "nome": "Inhame (Cozida)",
    "categoria": "carboidrato",
    "classificacao": "pode",
    "observacao": "Boa fonte de carboidrato complexo.",
    "combinar_com": "Proteína magra ou azeite",
    "id": "113"
  },
  {
    "nome": "Inhame (Purê)",
    "categoria": "carboidrato",
    "classificacao": "cuidado",
    "observacao": "Ao amassar, a digestão e absorção aceleram significativamente.",
    "alerta": "Gera picos mais rápido que a versão em pedaços.",
    "id": "114"
  },
  {
    "nome": "Inhame (Frita)",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Mistura carbo com gordura submetida a alta temperatura, pró-inflamatório.",
    "alternativa": "Inhame assada na AirFryer.",
    "id": "115"
  },
  {
    "nome": "Cará (Cozida)",
    "categoria": "carboidrato",
    "classificacao": "pode",
    "observacao": "Boa fonte de carboidrato complexo.",
    "combinar_com": "Proteína magra ou azeite",
    "id": "116"
  },
  {
    "nome": "Cará (Purê)",
    "categoria": "carboidrato",
    "classificacao": "cuidado",
    "observacao": "Ao amassar, a digestão e absorção aceleram significativamente.",
    "alerta": "Gera picos mais rápido que a versão em pedaços.",
    "id": "117"
  },
  {
    "nome": "Cará (Frita)",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Mistura carbo com gordura submetida a alta temperatura, pró-inflamatório.",
    "alternativa": "Cará assada na AirFryer.",
    "id": "118"
  },
  {
    "nome": "Abóbora Cabotiá (Cozida)",
    "categoria": "carboidrato",
    "classificacao": "pode",
    "observacao": "Boa fonte de carboidrato complexo.",
    "combinar_com": "Proteína magra ou azeite",
    "id": "119"
  },
  {
    "nome": "Abóbora Cabotiá (Purê)",
    "categoria": "carboidrato",
    "classificacao": "cuidado",
    "observacao": "Ao amassar, a digestão e absorção aceleram significativamente.",
    "alerta": "Gera picos mais rápido que a versão em pedaços.",
    "id": "120"
  },
  {
    "nome": "Abóbora Cabotiá (Frita)",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Mistura carbo com gordura submetida a alta temperatura, pró-inflamatório.",
    "alternativa": "Abóbora Cabotiá assada na AirFryer.",
    "id": "121"
  },
  {
    "nome": "Mandioquinha (Cozida)",
    "categoria": "carboidrato",
    "classificacao": "cuidado",
    "observacao": "O cozimento quebra fibras e aumenta o índice glicêmico.",
    "combinar_com": "Proteína magra ou azeite",
    "alerta": "Controle a porção!",
    "id": "122"
  },
  {
    "nome": "Mandioquinha (Purê)",
    "categoria": "carboidrato",
    "classificacao": "cuidado",
    "observacao": "Ao amassar, a digestão e absorção aceleram significativamente.",
    "alerta": "Gera picos mais rápido que a versão em pedaços.",
    "id": "123"
  },
  {
    "nome": "Mandioquinha (Frita)",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Mistura carbo com gordura submetida a alta temperatura, pró-inflamatório.",
    "alternativa": "Mandioquinha assada na AirFryer.",
    "id": "124"
  },
  {
    "nome": "Batata Inglesa (Cozida)",
    "categoria": "carboidrato",
    "classificacao": "cuidado",
    "observacao": "O cozimento quebra fibras e aumenta o índice glicêmico.",
    "combinar_com": "Proteína magra ou azeite",
    "alerta": "Controle a porção!",
    "id": "125"
  },
  {
    "nome": "Batata Inglesa (Purê)",
    "categoria": "carboidrato",
    "classificacao": "cuidado",
    "observacao": "Ao amassar, a digestão e absorção aceleram significativamente.",
    "alerta": "Gera picos mais rápido que a versão em pedaços.",
    "id": "126"
  },
  {
    "nome": "Batata Inglesa (Frita)",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Mistura carbo com gordura submetida a alta temperatura, pró-inflamatório.",
    "alternativa": "Batata Inglesa assada na AirFryer.",
    "id": "127"
  },
  {
    "nome": "Feijão Carioca (Cozido simples)",
    "categoria": "carboidrato",
    "classificacao": "pode",
    "observacao": "Excelente proporção entre carboidratos e fibras. Absorção lenta.",
    "combinar_com": "Saladas e carnes magras.",
    "id": "128"
  },
  {
    "nome": "Feijão Carioca (Tropeiro/Farofa)",
    "categoria": "carboidrato",
    "classificacao": "evitar",
    "observacao": "A farinha de mandioca adicionada explode a carga glicêmica do prato.",
    "alternativa": "Feijão em caldo simples.",
    "id": "129"
  },
  {
    "nome": "Feijão Preto (Cozido simples)",
    "categoria": "carboidrato",
    "classificacao": "pode",
    "observacao": "Excelente proporção entre carboidratos e fibras. Absorção lenta.",
    "combinar_com": "Saladas e carnes magras.",
    "id": "130"
  },
  {
    "nome": "Feijão Preto (Tropeiro/Farofa)",
    "categoria": "carboidrato",
    "classificacao": "evitar",
    "observacao": "A farinha de mandioca adicionada explode a carga glicêmica do prato.",
    "alternativa": "Feijão em caldo simples.",
    "id": "131"
  },
  {
    "nome": "Feijão Fradinho (Cozido simples)",
    "categoria": "carboidrato",
    "classificacao": "pode",
    "observacao": "Excelente proporção entre carboidratos e fibras. Absorção lenta.",
    "combinar_com": "Saladas e carnes magras.",
    "id": "132"
  },
  {
    "nome": "Feijão Fradinho (Tropeiro/Farofa)",
    "categoria": "carboidrato",
    "classificacao": "evitar",
    "observacao": "A farinha de mandioca adicionada explode a carga glicêmica do prato.",
    "alternativa": "Feijão em caldo simples.",
    "id": "133"
  },
  {
    "nome": "Feijão Verde (Cozido simples)",
    "categoria": "carboidrato",
    "classificacao": "pode",
    "observacao": "Excelente proporção entre carboidratos e fibras. Absorção lenta.",
    "combinar_com": "Saladas e carnes magras.",
    "id": "134"
  },
  {
    "nome": "Feijão Verde (Tropeiro/Farofa)",
    "categoria": "carboidrato",
    "classificacao": "evitar",
    "observacao": "A farinha de mandioca adicionada explode a carga glicêmica do prato.",
    "alternativa": "Feijão em caldo simples.",
    "id": "135"
  },
  {
    "nome": "Lentilha (Cozido simples)",
    "categoria": "carboidrato",
    "classificacao": "pode",
    "observacao": "Excelente proporção entre carboidratos e fibras. Absorção lenta.",
    "combinar_com": "Saladas e carnes magras.",
    "id": "136"
  },
  {
    "nome": "Lentilha (Tropeiro/Farofa)",
    "categoria": "carboidrato",
    "classificacao": "evitar",
    "observacao": "A farinha de mandioca adicionada explode a carga glicêmica do prato.",
    "alternativa": "Feijão em caldo simples.",
    "id": "137"
  },
  {
    "nome": "Grão de Bico (Cozido simples)",
    "categoria": "carboidrato",
    "classificacao": "pode",
    "observacao": "Excelente proporção entre carboidratos e fibras. Absorção lenta.",
    "combinar_com": "Saladas e carnes magras.",
    "id": "138"
  },
  {
    "nome": "Grão de Bico (Tropeiro/Farofa)",
    "categoria": "carboidrato",
    "classificacao": "evitar",
    "observacao": "A farinha de mandioca adicionada explode a carga glicêmica do prato.",
    "alternativa": "Feijão em caldo simples.",
    "id": "139"
  },
  {
    "nome": "Ervilha (fresca) (Cozido simples)",
    "categoria": "carboidrato",
    "classificacao": "pode",
    "observacao": "Excelente proporção entre carboidratos e fibras. Absorção lenta.",
    "combinar_com": "Saladas e carnes magras.",
    "id": "140"
  },
  {
    "nome": "Ervilha (fresca) (Tropeiro/Farofa)",
    "categoria": "carboidrato",
    "classificacao": "evitar",
    "observacao": "A farinha de mandioca adicionada explode a carga glicêmica do prato.",
    "alternativa": "Feijão em caldo simples.",
    "id": "141"
  },
  {
    "nome": "Soja (Cozido simples)",
    "categoria": "carboidrato",
    "classificacao": "pode",
    "observacao": "Excelente proporção entre carboidratos e fibras. Absorção lenta.",
    "combinar_com": "Saladas e carnes magras.",
    "id": "142"
  },
  {
    "nome": "Soja (Tropeiro/Farofa)",
    "categoria": "carboidrato",
    "classificacao": "evitar",
    "observacao": "A farinha de mandioca adicionada explode a carga glicêmica do prato.",
    "alternativa": "Feijão em caldo simples.",
    "id": "143"
  },
  {
    "nome": "Peito de Frango (Grelhado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Excelente preparo, zero impacto glicêmico.",
    "id": "144"
  },
  {
    "nome": "Peito de Frango (Cozido/Ensopado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Saudável. Só cuide com batatas no caldo.",
    "id": "145"
  },
  {
    "nome": "Peito de Frango (Empanado/Milanesa)",
    "categoria": "proteína",
    "classificacao": "evitar",
    "observacao": "A farinha da casquinha frita gera pico imediato de glicose.",
    "alternativa": "Empanar com farinha de amêndoas e assar.",
    "id": "146"
  },
  {
    "nome": "Peito de Frango (Assado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Seguro e não eleva a glicose.",
    "id": "147"
  },
  {
    "nome": "Sobrecoxa de Frango (Grelhado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Excelente preparo, zero impacto glicêmico.",
    "id": "148"
  },
  {
    "nome": "Sobrecoxa de Frango (Cozido/Ensopado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Saudável. Só cuide com batatas no caldo.",
    "id": "149"
  },
  {
    "nome": "Sobrecoxa de Frango (Empanado/Milanesa)",
    "categoria": "proteína",
    "classificacao": "evitar",
    "observacao": "A farinha da casquinha frita gera pico imediato de glicose.",
    "alternativa": "Empanar com farinha de amêndoas e assar.",
    "id": "150"
  },
  {
    "nome": "Sobrecoxa de Frango (Assado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Seguro e não eleva a glicose.",
    "id": "151"
  },
  {
    "nome": "Carne Moída (Patinho) (Grelhado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Excelente preparo, zero impacto glicêmico.",
    "id": "152"
  },
  {
    "nome": "Carne Moída (Patinho) (Cozido/Ensopado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Saudável. Só cuide com batatas no caldo.",
    "id": "153"
  },
  {
    "nome": "Carne Moída (Patinho) (Empanado/Milanesa)",
    "categoria": "proteína",
    "classificacao": "evitar",
    "observacao": "A farinha da casquinha frita gera pico imediato de glicose.",
    "alternativa": "Empanar com farinha de amêndoas e assar.",
    "id": "154"
  },
  {
    "nome": "Carne Moída (Patinho) (Assado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Seguro e não eleva a glicose.",
    "id": "155"
  },
  {
    "nome": "Alcatra (Grelhado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Excelente preparo, zero impacto glicêmico.",
    "id": "156"
  },
  {
    "nome": "Alcatra (Cozido/Ensopado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Saudável. Só cuide com batatas no caldo.",
    "id": "157"
  },
  {
    "nome": "Alcatra (Empanado/Milanesa)",
    "categoria": "proteína",
    "classificacao": "evitar",
    "observacao": "A farinha da casquinha frita gera pico imediato de glicose.",
    "alternativa": "Empanar com farinha de amêndoas e assar.",
    "id": "158"
  },
  {
    "nome": "Alcatra (Assado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Seguro e não eleva a glicose.",
    "id": "159"
  },
  {
    "nome": "Picanha (Grelhado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Excelente preparo, zero impacto glicêmico.",
    "id": "160"
  },
  {
    "nome": "Picanha (Cozido/Ensopado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Saudável. Só cuide com batatas no caldo.",
    "id": "161"
  },
  {
    "nome": "Picanha (Empanado/Milanesa)",
    "categoria": "proteína",
    "classificacao": "evitar",
    "observacao": "A farinha da casquinha frita gera pico imediato de glicose.",
    "alternativa": "Empanar com farinha de amêndoas e assar.",
    "id": "162"
  },
  {
    "nome": "Picanha (Assado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Seguro e não eleva a glicose.",
    "id": "163"
  },
  {
    "nome": "Lombo Suíno (Grelhado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Excelente preparo, zero impacto glicêmico.",
    "id": "164"
  },
  {
    "nome": "Lombo Suíno (Cozido/Ensopado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Saudável. Só cuide com batatas no caldo.",
    "id": "165"
  },
  {
    "nome": "Lombo Suíno (Empanado/Milanesa)",
    "categoria": "proteína",
    "classificacao": "evitar",
    "observacao": "A farinha da casquinha frita gera pico imediato de glicose.",
    "alternativa": "Empanar com farinha de amêndoas e assar.",
    "id": "166"
  },
  {
    "nome": "Lombo Suíno (Assado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Seguro e não eleva a glicose.",
    "id": "167"
  },
  {
    "nome": "Tilápia (Grelhado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Excelente preparo, zero impacto glicêmico.",
    "id": "168"
  },
  {
    "nome": "Tilápia (Cozido/Ensopado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Saudável. Só cuide com batatas no caldo.",
    "id": "169"
  },
  {
    "nome": "Tilápia (Empanado/Milanesa)",
    "categoria": "proteína",
    "classificacao": "evitar",
    "observacao": "A farinha da casquinha frita gera pico imediato de glicose.",
    "alternativa": "Empanar com farinha de amêndoas e assar.",
    "id": "170"
  },
  {
    "nome": "Tilápia (Assado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Seguro e não eleva a glicose.",
    "id": "171"
  },
  {
    "nome": "Salmão (Grelhado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Excelente preparo, zero impacto glicêmico.",
    "id": "172"
  },
  {
    "nome": "Salmão (Cozido/Ensopado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Saudável. Só cuide com batatas no caldo.",
    "id": "173"
  },
  {
    "nome": "Salmão (Empanado/Milanesa)",
    "categoria": "proteína",
    "classificacao": "evitar",
    "observacao": "A farinha da casquinha frita gera pico imediato de glicose.",
    "alternativa": "Empanar com farinha de amêndoas e assar.",
    "id": "174"
  },
  {
    "nome": "Salmão (Assado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Seguro e não eleva a glicose.",
    "id": "175"
  },
  {
    "nome": "Atum (Grelhado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Excelente preparo, zero impacto glicêmico.",
    "id": "176"
  },
  {
    "nome": "Atum (Cozido/Ensopado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Saudável. Só cuide com batatas no caldo.",
    "id": "177"
  },
  {
    "nome": "Atum (Empanado/Milanesa)",
    "categoria": "proteína",
    "classificacao": "evitar",
    "observacao": "A farinha da casquinha frita gera pico imediato de glicose.",
    "alternativa": "Empanar com farinha de amêndoas e assar.",
    "id": "178"
  },
  {
    "nome": "Atum (Assado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Seguro e não eleva a glicose.",
    "id": "179"
  },
  {
    "nome": "Bacalhau (Grelhado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Excelente preparo, zero impacto glicêmico.",
    "id": "180"
  },
  {
    "nome": "Bacalhau (Cozido/Ensopado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Saudável. Só cuide com batatas no caldo.",
    "id": "181"
  },
  {
    "nome": "Bacalhau (Empanado/Milanesa)",
    "categoria": "proteína",
    "classificacao": "evitar",
    "observacao": "A farinha da casquinha frita gera pico imediato de glicose.",
    "alternativa": "Empanar com farinha de amêndoas e assar.",
    "id": "182"
  },
  {
    "nome": "Bacalhau (Assado)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Seguro e não eleva a glicose.",
    "id": "183"
  },
  {
    "nome": "Ovo Cozido",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Alimento de ouro para saciedade. Padrão.",
    "id": "184"
  },
  {
    "nome": "Ovo Frito (Pouco azeite)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Seguro para a glicose.",
    "id": "185"
  },
  {
    "nome": "Omelete de Legumes",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Refeição ideal para abaixar o ritmo da digestão.",
    "id": "186"
  },
  {
    "nome": "Tofu (Queijo de soja)",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Protéina vegana, índice glicêmico quase nulo.",
    "id": "187"
  },
  {
    "nome": "Queijo Mussarela",
    "categoria": "gordura",
    "classificacao": "pode",
    "observacao": "Laticínios focados em gordura. Cuidado com calorias e intolerâncias, mas seguros na glicose.",
    "id": "188"
  },
  {
    "nome": "Queijo Prato",
    "categoria": "gordura",
    "classificacao": "pode",
    "observacao": "Laticínios focados em gordura. Cuidado com calorias e intolerâncias, mas seguros na glicose.",
    "id": "189"
  },
  {
    "nome": "Queijo Coalho",
    "categoria": "gordura",
    "classificacao": "pode",
    "observacao": "Laticínios focados em gordura. Cuidado com calorias e intolerâncias, mas seguros na glicose.",
    "id": "190"
  },
  {
    "nome": "Queijo Minas Frescal",
    "categoria": "gordura",
    "classificacao": "pode",
    "observacao": "Laticínios focados em gordura. Cuidado com calorias e intolerâncias, mas seguros na glicose.",
    "id": "191"
  },
  {
    "nome": "Queijo Canastra",
    "categoria": "gordura",
    "classificacao": "pode",
    "observacao": "Laticínios focados em gordura. Cuidado com calorias e intolerâncias, mas seguros na glicose.",
    "id": "192"
  },
  {
    "nome": "Queijo Parmesão",
    "categoria": "gordura",
    "classificacao": "pode",
    "observacao": "Laticínios focados em gordura. Cuidado com calorias e intolerâncias, mas seguros na glicose.",
    "id": "193"
  },
  {
    "nome": "Queijo Gorgonzola",
    "categoria": "gordura",
    "classificacao": "pode",
    "observacao": "Laticínios focados em gordura. Cuidado com calorias e intolerâncias, mas seguros na glicose.",
    "id": "194"
  },
  {
    "nome": "Queijo Brie",
    "categoria": "gordura",
    "classificacao": "pode",
    "observacao": "Laticínios focados em gordura. Cuidado com calorias e intolerâncias, mas seguros na glicose.",
    "id": "195"
  },
  {
    "nome": "Arroz Branco (Cozido)",
    "categoria": "carboidrato",
    "classificacao": "evitar",
    "observacao": "Absorção muito rápida de amido livre, quase como açúcar.",
    "combinar_com": "Proteína pesada (carne, ovo) para frear absorção.",
    "alternativa": "Arroz Integral",
    "id": "196"
  },
  {
    "nome": "Arroz Parboilizado (Cozido)",
    "categoria": "carboidrato",
    "classificacao": "cuidado",
    "observacao": "Possui fibras, mas requer controle de porções.",
    "combinar_com": "Proteína pesada (carne, ovo) para frear absorção.",
    "id": "197"
  },
  {
    "nome": "Arroz Integral (Cozido)",
    "categoria": "carboidrato",
    "classificacao": "cuidado",
    "observacao": "Possui fibras, mas requer controle de porções.",
    "combinar_com": "Proteína pesada (carne, ovo) para frear absorção.",
    "id": "198"
  },
  {
    "nome": "Arroz Arbóreo (Risoto) (Cozido)",
    "categoria": "carboidrato",
    "classificacao": "evitar",
    "observacao": "Absorção muito rápida de amido livre, quase como açúcar.",
    "combinar_com": "Proteína pesada (carne, ovo) para frear absorção.",
    "alternativa": "Arroz Integral",
    "id": "199"
  },
  {
    "nome": "Arroz 7 Grãos (Cozido)",
    "categoria": "carboidrato",
    "classificacao": "cuidado",
    "observacao": "Possui fibras, mas requer controle de porções.",
    "combinar_com": "Proteína pesada (carne, ovo) para frear absorção.",
    "id": "200"
  },
  {
    "nome": "Pão Francês / Sal",
    "categoria": "carboidrato",
    "classificacao": "evitar",
    "observacao": "Farinha branca refinada transforma-se em açúcar velozmente.",
    "combinar_com": "Sempre com Ovos ou Carne.",
    "id": "201"
  },
  {
    "nome": "Pão de Forma Branco",
    "categoria": "carboidrato",
    "classificacao": "evitar",
    "observacao": "Farinha branca refinada transforma-se em açúcar velozmente.",
    "combinar_com": "Sempre com Ovos ou Carne.",
    "id": "202"
  },
  {
    "nome": "Pão de Forma 100% Integral",
    "categoria": "carboidrato",
    "classificacao": "cuidado",
    "observacao": "As fibras ajudam, porém fatias em excesso desequilibram a insulina.",
    "combinar_com": "Sempre com Ovos ou Carne.",
    "id": "203"
  },
  {
    "nome": "Pão Doce",
    "categoria": "carboidrato",
    "classificacao": "evitar",
    "observacao": "Leva açúcar/xarope na massa. Pico duplo (farinha + açúcar).",
    "combinar_com": "Sempre com Ovos ou Carne.",
    "id": "204"
  },
  {
    "nome": "Croissant",
    "categoria": "carboidrato",
    "classificacao": "evitar",
    "observacao": "Farinha branca refinada transforma-se em açúcar velozmente.",
    "combinar_com": "Sempre com Ovos ou Carne.",
    "id": "205"
  },
  {
    "nome": "Pão de Queijo",
    "categoria": "carboidrato",
    "classificacao": "cuidado",
    "observacao": "A base é amido da mandioca (polvilho) + gordura. Absorção rápida.",
    "combinar_com": "Sempre com Ovos ou Carne.",
    "id": "206"
  },
  {
    "nome": "Pão Sírio / Rap10",
    "categoria": "carboidrato",
    "classificacao": "evitar",
    "observacao": "Farinha branca refinada transforma-se em açúcar velozmente.",
    "combinar_com": "Sempre com Ovos ou Carne.",
    "id": "207"
  },
  {
    "nome": "Pão de Centeio",
    "categoria": "carboidrato",
    "classificacao": "cuidado",
    "observacao": "As fibras ajudam, porém fatias em excesso desequilibram a insulina.",
    "combinar_com": "Sempre com Ovos ou Carne.",
    "id": "208"
  },
  {
    "nome": "Pão Australiano",
    "categoria": "carboidrato",
    "classificacao": "evitar",
    "observacao": "Leva açúcar/xarope na massa. Pico duplo (farinha + açúcar).",
    "combinar_com": "Sempre com Ovos ou Carne.",
    "id": "209"
  },
  {
    "nome": "Aveia em Flocos Grossos",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Forma gel que atrasa picos no corpo inteiro.",
    "id": "210"
  },
  {
    "nome": "Aveia Flocos Finos/Farinha",
    "categoria": "carboidrato",
    "classificacao": "cuidado",
    "observacao": "Ao processar a aveia, a fibra é rompida e absorve mais rápido.",
    "id": "211"
  },
  {
    "nome": "Farinha de Mandioca (Farofa plana)",
    "categoria": "carboidrato",
    "classificacao": "evitar",
    "observacao": "Amido pré-gelatinizado triturado, absorção extremada.",
    "id": "212"
  },
  {
    "nome": "Cuscuz (Flocão de Milho)",
    "categoria": "carboidrato",
    "classificacao": "cuidado",
    "observacao": "Coma ladeado de muita proteína (ovo, jabá, queijo).",
    "id": "213"
  },
  {
    "nome": "Tapioca (Goma pura)",
    "categoria": "carboidrato",
    "classificacao": "evitar",
    "observacao": "Goma sem nenhuma fibra. Sobe rápido.",
    "alternativa": "Crepioca (tapioca + ovo batido).",
    "id": "214"
  },
  {
    "nome": "Macarrão Tradicional",
    "categoria": "carboidrato",
    "classificacao": "evitar",
    "observacao": "Trigo branco, pico certo.",
    "id": "215"
  },
  {
    "nome": "Macarrão Integral",
    "categoria": "carboidrato",
    "classificacao": "cuidado",
    "observacao": "Sempre consuma junto de proteína.",
    "id": "216"
  },
  {
    "nome": "Nhoque",
    "categoria": "carboidrato",
    "classificacao": "evitar",
    "observacao": "Trigo branco, pico certo.",
    "id": "217"
  },
  {
    "nome": "Lasanha",
    "categoria": "carboidrato",
    "classificacao": "evitar",
    "observacao": "Trigo branco, pico certo.",
    "id": "218"
  },
  {
    "nome": "Miojo/Instantâneo",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Massa pré-frita com altíssimo índice glicêmico.",
    "id": "219"
  },
  {
    "nome": "Banana (Prata/Nanica)",
    "categoria": "fruta",
    "classificacao": "cuidado",
    "observacao": "Ótima energia, mas exige moderação de porção ou casar com fibras.",
    "alerta": "Comê-la sozinha dá pico.",
    "combinar_com": "Castanhas ou Iogurte Natural",
    "id": "220"
  },
  {
    "nome": "Banana Verde (Biomassa)",
    "categoria": "fruta",
    "classificacao": "pode",
    "observacao": "Amido resistente puro. Um elixir pro intestino diabético.",
    "id": "221"
  },
  {
    "nome": "Maçã (com casca)",
    "categoria": "fruta",
    "classificacao": "pode",
    "observacao": "A pectina da casca segura e tranca a frutose livre na digestão.",
    "id": "222"
  },
  {
    "nome": "Pera (com casca)",
    "categoria": "fruta",
    "classificacao": "pode",
    "observacao": "Bastante fibrosa. Lanche ideal.",
    "id": "223"
  },
  {
    "nome": "Uva (Verde/Niagara)",
    "categoria": "fruta",
    "classificacao": "evitar",
    "observacao": "Tem altíssima densidade de açúcar. Um cacho explode a insulina.",
    "combinar_com": "Castanhas ou Iogurte Natural",
    "id": "224"
  },
  {
    "nome": "Melancia",
    "categoria": "fruta",
    "classificacao": "evitar",
    "observacao": "Índice de entrada rapidíssimo. Se for comer, que seja após um churrasco e em pequena fatias.",
    "combinar_com": "Castanhas ou Iogurte Natural",
    "id": "225"
  },
  {
    "nome": "Melão",
    "categoria": "fruta",
    "classificacao": "cuidado",
    "observacao": "Muita água, mas a frutose também concentra nas fatias centrais.",
    "combinar_com": "Castanhas ou Iogurte Natural",
    "id": "226"
  },
  {
    "nome": "Mamão",
    "categoria": "fruta",
    "classificacao": "cuidado",
    "observacao": "Coma meia fatia, de preferência salpicado de chia ou aveia em flocos.",
    "combinar_com": "Castanhas ou Iogurte Natural",
    "id": "227"
  },
  {
    "nome": "Laranja (In natura c/ bagaço)",
    "categoria": "fruta",
    "classificacao": "cuidado",
    "observacao": "O bagaço é o salvador da digestão.",
    "combinar_com": "Castanhas ou Iogurte Natural",
    "id": "228"
  },
  {
    "nome": "Laranja (Suco apenas)",
    "categoria": "fruta",
    "classificacao": "evitar",
    "observacao": "O suco remove todas as fibras e exige 3-4 laranjas. Pico agudo de frutose.",
    "combinar_com": "Castanhas ou Iogurte Natural",
    "id": "229"
  },
  {
    "nome": "Limão",
    "categoria": "fruta",
    "classificacao": "pode",
    "observacao": "Pode botar na água o dia inteiro. Glicose zero.",
    "id": "230"
  },
  {
    "nome": "Abacaxi",
    "categoria": "fruta",
    "classificacao": "cuidado",
    "observacao": "Doce, ácido, boa na digestão. 1 fatia ideal.",
    "combinar_com": "Castanhas ou Iogurte Natural",
    "id": "231"
  },
  {
    "nome": "Morango",
    "categoria": "fruta",
    "classificacao": "pode",
    "observacao": "Você pode comer 1 xícara de forma segura.",
    "id": "232"
  },
  {
    "nome": "Mirtilo/Amora",
    "categoria": "fruta",
    "classificacao": "pode",
    "observacao": "As frutas de menor carga e índice glicêmicos naturais.",
    "id": "233"
  },
  {
    "nome": "Manga (Palmer/Espada)",
    "categoria": "fruta",
    "classificacao": "evitar",
    "observacao": "Fruta hiper doce. Muito fácil causar hiperglicemia reativa pós lanche.",
    "combinar_com": "Castanhas ou Iogurte Natural",
    "id": "234"
  },
  {
    "nome": "Abacate",
    "categoria": "fruta",
    "classificacao": "pode",
    "observacao": "Rainha das frutas pra diabetes. Só contém gordura saudável.",
    "id": "235"
  },
  {
    "nome": "Goiaba",
    "categoria": "fruta",
    "classificacao": "pode",
    "observacao": "Riquíssima fibra e vitC.",
    "id": "236"
  },
  {
    "nome": "Caqui",
    "categoria": "fruta",
    "classificacao": "evitar",
    "observacao": "Frutose pastosa, perigosa isolada.",
    "combinar_com": "Castanhas ou Iogurte Natural",
    "id": "237"
  },
  {
    "nome": "Figo in natura",
    "categoria": "fruta",
    "classificacao": "cuidado",
    "observacao": "Leva açúcar mas é tolerável se consumido com queijos.",
    "combinar_com": "Castanhas ou Iogurte Natural",
    "id": "238"
  },
  {
    "nome": "Frutas Secas (Passas, Ameixa seca)",
    "categoria": "fruta",
    "classificacao": "evitar",
    "observacao": "É a fruta concentrada de açúcar e desidratada. Carga Glicêmica alta por morder pouco.",
    "combinar_com": "Castanhas ou Iogurte Natural",
    "id": "239"
  },
  {
    "nome": "Azeite de Oliva EV",
    "categoria": "gordura",
    "classificacao": "pode",
    "observacao": "Gorduras boas, ajudam na saciedade prolongada.",
    "id": "240"
  },
  {
    "nome": "Manteiga",
    "categoria": "gordura",
    "classificacao": "pode",
    "observacao": "Gorduras boas, ajudam na saciedade prolongada.",
    "id": "241"
  },
  {
    "nome": "Óleo de Coco",
    "categoria": "gordura",
    "classificacao": "pode",
    "observacao": "Gorduras boas, ajudam na saciedade prolongada.",
    "id": "242"
  },
  {
    "nome": "Óleo de Soja/Girasol",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Gorduras inflamatórias artificiais/extrativas, agravam a resistência à insulina no longo prazo.",
    "id": "243"
  },
  {
    "nome": "Margarina",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Gorduras inflamatórias artificiais/extrativas, agravam a resistência à insulina no longo prazo.",
    "id": "244"
  },
  {
    "nome": "Castanha de Caju",
    "categoria": "gordura",
    "classificacao": "pode",
    "observacao": "Gorduras boas, ajudam na saciedade prolongada.",
    "id": "245"
  },
  {
    "nome": "Castanha do Pará",
    "categoria": "gordura",
    "classificacao": "pode",
    "observacao": "Gorduras boas, ajudam na saciedade prolongada.",
    "id": "246"
  },
  {
    "nome": "Amendoim",
    "categoria": "gordura",
    "classificacao": "pode",
    "observacao": "Gorduras boas, ajudam na saciedade prolongada.",
    "id": "247"
  },
  {
    "nome": "Nozes",
    "categoria": "gordura",
    "classificacao": "pode",
    "observacao": "Gorduras boas, ajudam na saciedade prolongada.",
    "id": "248"
  },
  {
    "nome": "Amêndoas",
    "categoria": "gordura",
    "classificacao": "pode",
    "observacao": "Gorduras boas, ajudam na saciedade prolongada.",
    "id": "249"
  },
  {
    "nome": "Pistache",
    "categoria": "gordura",
    "classificacao": "pode",
    "observacao": "Gorduras boas, ajudam na saciedade prolongada.",
    "id": "250"
  },
  {
    "nome": "Semente de Chia",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Super sementes! Formam gel estabilizador de fluxo no estômago. Obrigatórias das frutas.",
    "id": "251"
  },
  {
    "nome": "Semente de Linhaça",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Super sementes! Formam gel estabilizador de fluxo no estômago. Obrigatórias das frutas.",
    "id": "252"
  },
  {
    "nome": "Semente de Abóbora",
    "categoria": "gordura",
    "classificacao": "pode",
    "observacao": "Gorduras boas, ajudam na saciedade prolongada.",
    "id": "253"
  },
  {
    "nome": "Gergelim",
    "categoria": "gordura",
    "classificacao": "pode",
    "observacao": "Gorduras boas, ajudam na saciedade prolongada.",
    "id": "254"
  },
  {
    "nome": "Pasta de Amendoim 100%",
    "categoria": "gordura",
    "classificacao": "pode",
    "observacao": "Gorduras boas, ajudam na saciedade prolongada.",
    "id": "255"
  },
  {
    "nome": "Refrigerante Regular (Cola, etc)",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "256"
  },
  {
    "nome": "Refrigerante Zero / Light",
    "categoria": "ultraprocessado",
    "classificacao": "cuidado",
    "observacao": "Não possui açúcar direto, mas causa perturbações na microbiota se consumido muito.",
    "id": "257"
  },
  {
    "nome": "Suco de Caixinha / Néctar",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "258"
  },
  {
    "nome": "Suco em Pó (Tang, etc)",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "259"
  },
  {
    "nome": "Achocolatado (Nescau, Toddy)",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "260"
  },
  {
    "nome": "Iogurte Saborizado (Morango)",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "261"
  },
  {
    "nome": "Chá Gelado de Garrafa (doce)",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "262"
  },
  {
    "nome": "Biscoito Recheado",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "263"
  },
  {
    "nome": "Biscoito Água e Sal / Cream Cracker",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Vilão disfarçado de fit. Farinha e gordura trans que elevam glicose imediatamente.",
    "id": "264"
  },
  {
    "nome": "Bolo Congelado / de Pacotinho",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "265"
  },
  {
    "nome": "Salgadinho de Milho (Fandangos)",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "266"
  },
  {
    "nome": "Batata Chips de Pacote",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "267"
  },
  {
    "nome": "Sorvete de Massa",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "268"
  },
  {
    "nome": "Picolé de Fruta (água e açúcar)",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "269"
  },
  {
    "nome": "Caldo Knorr/Sazón",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "270"
  },
  {
    "nome": "Ketchup",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "271"
  },
  {
    "nome": "Molho Barbecue",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "272"
  },
  {
    "nome": "Sopão em Pó",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "273"
  },
  {
    "nome": "Bacon Frito Industrial",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "274"
  },
  {
    "nome": "Salsicha de Cachorro Quente",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "275"
  },
  {
    "nome": "Linguiça Calabresa Defumada",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "276"
  },
  {
    "nome": "Peito de Peru Embutido (processado)",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "277"
  },
  {
    "nome": "Bala, Chiclete c/ Açúcar",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "278"
  },
  {
    "nome": "Chocolate Branco / Ao Leite",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "279"
  },
  {
    "nome": "Goiabada em barra",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "280"
  },
  {
    "nome": "Doce de Leite",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "281"
  },
  {
    "nome": "Granola Tradicional (Adoçada)",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Os flocos de aveia/milho são banhados em xaropes pesados de frutose/açúcar.",
    "id": "282"
  },
  {
    "nome": "Barra de Cereal Comum",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "283"
  },
  {
    "nome": "Mel",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Tem marketing de saudável, mas o diabético processa a frutose igual açúcar branco!",
    "id": "284"
  },
  {
    "nome": "Açúcar Mascavo / Demerara",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Tem marketing de saudável, mas o diabético processa a frutose igual açúcar branco!",
    "id": "285"
  },
  {
    "nome": "Açúcar Branco / Cristal",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Uma bomba metabólica. Rica em aditivos e açúcares velozes.",
    "id": "286"
  },
  {
    "nome": "Chocolate 70% ou 80% Cacau",
    "categoria": "gordura",
    "classificacao": "pode",
    "observacao": "A gordura do cacau ameniza a pequena quantidade de açúcar residual.",
    "combinar_com": "Após almoço.",
    "id": "287"
  },
  {
    "nome": "Adoçante Xilitol, Eritritol",
    "categoria": "carboidrato",
    "classificacao": "pode",
    "observacao": "Polióis seguros de baixa digestão celular.",
    "id": "288"
  },
  {
    "nome": "Adoçante Stevia",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Excelente origem!",
    "id": "289"
  },
  {
    "nome": "Acarajé Comum",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Frito em óleo bruto com massa de feijão espessa.",
    "id": "290"
  },
  {
    "nome": "Moqueca",
    "categoria": "ultraprocessado",
    "classificacao": "cuidado",
    "observacao": "Usa azeite de dendê. Comer com salada e peixe apenas, moderando o pirão.",
    "id": "291"
  },
  {
    "nome": "Tacacá",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Caldo de tucupi exótico, proteico de camarão.",
    "id": "292"
  },
  {
    "nome": "Açaí Grosso C/ Xarope",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Puro xarope de guaraná batido junto.",
    "id": "293"
  },
  {
    "nome": "Açaí Puro da Polpa",
    "categoria": "proteína",
    "classificacao": "pode",
    "observacao": "Muito rico em gorduras ótimas. Zero açúcar (desde que você faça as adições devidas com moderação).",
    "id": "294"
  },
  {
    "nome": "Pamonha Doce",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Milho + muito açúcar + manteiga derretida.",
    "id": "295"
  },
  {
    "nome": "Canjica Doce/Mungunzá",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Milho branco imerso em leite condensado e leite comum.",
    "id": "296"
  },
  {
    "nome": "Feijão Tropeiro (C/ farinha seca e toucinho)",
    "categoria": "ultraprocessado",
    "classificacao": "evitar",
    "observacao": "Combinar a farinha do tropeiro afiada engorda e eleva açúcares.",
    "id": "297"
  },
  {
    "nome": "Molho Bolonhesa (Caseiro)",
    "categoria": "gordura",
    "classificacao": "pode",
    "observacao": "Tempero é o segredo do sabor na dieta.",
    "id": "298"
  },
  {
    "nome": "Molho Branco (Bechamel)",
    "categoria": "carboidrato",
    "classificacao": "evitar",
    "observacao": "Base do Bechamel é farinha de trigo!",
    "id": "299"
  },
  {
    "nome": "Molho de Tomate Rústico",
    "categoria": "gordura",
    "classificacao": "pode",
    "observacao": "Tempero é o segredo do sabor na dieta.",
    "id": "300"
  },
  {
    "nome": "Molho Mostarda",
    "categoria": "gordura",
    "classificacao": "pode",
    "observacao": "Tempero é o segredo do sabor na dieta.",
    "id": "301"
  },
  {
    "nome": "Molho 4 Queijos",
    "categoria": "gordura",
    "classificacao": "cuidado",
    "observacao": "Tempero é o segredo do sabor na dieta.",
    "id": "302"
  },
  {
    "nome": "Molho Industrial Pronto",
    "categoria": "carboidrato",
    "classificacao": "evitar",
    "observacao": "Tempero é o segredo do sabor na dieta.",
    "id": "303"
  },
  {
    "nome": "Salada Variada Mix 1",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "304"
  },
  {
    "nome": "Salada Variada Mix 2",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "305"
  },
  {
    "nome": "Salada Variada Mix 3",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "306"
  },
  {
    "nome": "Salada Variada Mix 4",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "307"
  },
  {
    "nome": "Salada Variada Mix 5",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "308"
  },
  {
    "nome": "Salada Variada Mix 6",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "309"
  },
  {
    "nome": "Salada Variada Mix 7",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "310"
  },
  {
    "nome": "Salada Variada Mix 8",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "311"
  },
  {
    "nome": "Salada Variada Mix 9",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "312"
  },
  {
    "nome": "Salada Variada Mix 10",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "313"
  },
  {
    "nome": "Salada Variada Mix 11",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "314"
  },
  {
    "nome": "Salada Variada Mix 12",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "315"
  },
  {
    "nome": "Salada Variada Mix 13",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "316"
  },
  {
    "nome": "Salada Variada Mix 14",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "317"
  },
  {
    "nome": "Salada Variada Mix 15",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "318"
  },
  {
    "nome": "Salada Variada Mix 16",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "319"
  },
  {
    "nome": "Salada Variada Mix 17",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "320"
  },
  {
    "nome": "Salada Variada Mix 18",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "321"
  },
  {
    "nome": "Salada Variada Mix 19",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "322"
  },
  {
    "nome": "Salada Variada Mix 20",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "323"
  },
  {
    "nome": "Salada Variada Mix 21",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "324"
  },
  {
    "nome": "Salada Variada Mix 22",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "325"
  },
  {
    "nome": "Salada Variada Mix 23",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "326"
  },
  {
    "nome": "Salada Variada Mix 24",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "327"
  },
  {
    "nome": "Salada Variada Mix 25",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "328"
  },
  {
    "nome": "Salada Variada Mix 26",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "329"
  },
  {
    "nome": "Salada Variada Mix 27",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "330"
  },
  {
    "nome": "Salada Variada Mix 28",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "331"
  },
  {
    "nome": "Salada Variada Mix 29",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "332"
  },
  {
    "nome": "Salada Variada Mix 30",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "333"
  },
  {
    "nome": "Salada Variada Mix 31",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "334"
  },
  {
    "nome": "Salada Variada Mix 32",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "335"
  },
  {
    "nome": "Salada Variada Mix 33",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "336"
  },
  {
    "nome": "Salada Variada Mix 34",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "337"
  },
  {
    "nome": "Salada Variada Mix 35",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "338"
  },
  {
    "nome": "Salada Variada Mix 36",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "339"
  },
  {
    "nome": "Salada Variada Mix 37",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "340"
  },
  {
    "nome": "Salada Variada Mix 38",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "341"
  },
  {
    "nome": "Salada Variada Mix 39",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "342"
  },
  {
    "nome": "Salada Variada Mix 40",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "343"
  },
  {
    "nome": "Salada Variada Mix 41",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "344"
  },
  {
    "nome": "Salada Variada Mix 42",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "345"
  },
  {
    "nome": "Salada Variada Mix 43",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "346"
  },
  {
    "nome": "Salada Variada Mix 44",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "347"
  },
  {
    "nome": "Salada Variada Mix 45",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "348"
  },
  {
    "nome": "Salada Variada Mix 46",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "349"
  },
  {
    "nome": "Salada Variada Mix 47",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "350"
  },
  {
    "nome": "Salada Variada Mix 48",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "351"
  },
  {
    "nome": "Salada Variada Mix 49",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "352"
  },
  {
    "nome": "Salada Variada Mix 50",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "353"
  },
  {
    "nome": "Salada Variada Mix 51",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "354"
  },
  {
    "nome": "Salada Variada Mix 52",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "355"
  },
  {
    "nome": "Salada Variada Mix 53",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "356"
  },
  {
    "nome": "Salada Variada Mix 54",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "357"
  },
  {
    "nome": "Salada Variada Mix 55",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "358"
  },
  {
    "nome": "Salada Variada Mix 56",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "359"
  },
  {
    "nome": "Salada Variada Mix 57",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "360"
  },
  {
    "nome": "Salada Variada Mix 58",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "361"
  },
  {
    "nome": "Salada Variada Mix 59",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "362"
  },
  {
    "nome": "Salada Variada Mix 60",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "363"
  },
  {
    "nome": "Salada Variada Mix 61",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "364"
  },
  {
    "nome": "Salada Variada Mix 62",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "365"
  },
  {
    "nome": "Salada Variada Mix 63",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "366"
  },
  {
    "nome": "Salada Variada Mix 64",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "367"
  },
  {
    "nome": "Salada Variada Mix 65",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "368"
  },
  {
    "nome": "Salada Variada Mix 66",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "369"
  },
  {
    "nome": "Salada Variada Mix 67",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "370"
  },
  {
    "nome": "Salada Variada Mix 68",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "371"
  },
  {
    "nome": "Salada Variada Mix 69",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "372"
  },
  {
    "nome": "Salada Variada Mix 70",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "373"
  },
  {
    "nome": "Salada Variada Mix 71",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "374"
  },
  {
    "nome": "Salada Variada Mix 72",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "375"
  },
  {
    "nome": "Salada Variada Mix 73",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "376"
  },
  {
    "nome": "Salada Variada Mix 74",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "377"
  },
  {
    "nome": "Salada Variada Mix 75",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "378"
  },
  {
    "nome": "Salada Variada Mix 76",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "379"
  },
  {
    "nome": "Salada Variada Mix 77",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "380"
  },
  {
    "nome": "Salada Variada Mix 78",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "381"
  },
  {
    "nome": "Salada Variada Mix 79",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "382"
  },
  {
    "nome": "Salada Variada Mix 80",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "383"
  },
  {
    "nome": "Salada Variada Mix 81",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "384"
  },
  {
    "nome": "Salada Variada Mix 82",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "385"
  },
  {
    "nome": "Salada Variada Mix 83",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "386"
  },
  {
    "nome": "Salada Variada Mix 84",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "387"
  },
  {
    "nome": "Salada Variada Mix 85",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "388"
  },
  {
    "nome": "Salada Variada Mix 86",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "389"
  },
  {
    "nome": "Salada Variada Mix 87",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "390"
  },
  {
    "nome": "Salada Variada Mix 88",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "391"
  },
  {
    "nome": "Salada Variada Mix 89",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "392"
  },
  {
    "nome": "Salada Variada Mix 90",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "393"
  },
  {
    "nome": "Salada Variada Mix 91",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "394"
  },
  {
    "nome": "Salada Variada Mix 92",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "395"
  },
  {
    "nome": "Salada Variada Mix 93",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "396"
  },
  {
    "nome": "Salada Variada Mix 94",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "397"
  },
  {
    "nome": "Salada Variada Mix 95",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "398"
  },
  {
    "nome": "Salada Variada Mix 96",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "399"
  },
  {
    "nome": "Salada Variada Mix 97",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "400"
  },
  {
    "nome": "Salada Variada Mix 98",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "401"
  },
  {
    "nome": "Salada Variada Mix 99",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "402"
  },
  {
    "nome": "Salada Variada Mix 100",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "403"
  },
  {
    "nome": "Salada Variada Mix 101",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "404"
  },
  {
    "nome": "Salada Variada Mix 102",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "405"
  },
  {
    "nome": "Salada Variada Mix 103",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "406"
  },
  {
    "nome": "Salada Variada Mix 104",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "407"
  },
  {
    "nome": "Salada Variada Mix 105",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "408"
  },
  {
    "nome": "Salada Variada Mix 106",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "409"
  },
  {
    "nome": "Salada Variada Mix 107",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "410"
  },
  {
    "nome": "Salada Variada Mix 108",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "411"
  },
  {
    "nome": "Salada Variada Mix 109",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "412"
  },
  {
    "nome": "Salada Variada Mix 110",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "413"
  },
  {
    "nome": "Salada Variada Mix 111",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "414"
  },
  {
    "nome": "Salada Variada Mix 112",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "415"
  },
  {
    "nome": "Salada Variada Mix 113",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "416"
  },
  {
    "nome": "Salada Variada Mix 114",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "417"
  },
  {
    "nome": "Salada Variada Mix 115",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "418"
  },
  {
    "nome": "Salada Variada Mix 116",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "419"
  },
  {
    "nome": "Salada Variada Mix 117",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "420"
  },
  {
    "nome": "Salada Variada Mix 118",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "421"
  },
  {
    "nome": "Salada Variada Mix 119",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "422"
  },
  {
    "nome": "Salada Variada Mix 120",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "423"
  },
  {
    "nome": "Salada Variada Mix 121",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "424"
  },
  {
    "nome": "Salada Variada Mix 122",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "425"
  },
  {
    "nome": "Salada Variada Mix 123",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "426"
  },
  {
    "nome": "Salada Variada Mix 124",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "427"
  },
  {
    "nome": "Salada Variada Mix 125",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "428"
  },
  {
    "nome": "Salada Variada Mix 126",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "429"
  },
  {
    "nome": "Salada Variada Mix 127",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "430"
  },
  {
    "nome": "Salada Variada Mix 128",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "431"
  },
  {
    "nome": "Salada Variada Mix 129",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "432"
  },
  {
    "nome": "Salada Variada Mix 130",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "433"
  },
  {
    "nome": "Salada Variada Mix 131",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "434"
  },
  {
    "nome": "Salada Variada Mix 132",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "435"
  },
  {
    "nome": "Salada Variada Mix 133",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "436"
  },
  {
    "nome": "Salada Variada Mix 134",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "437"
  },
  {
    "nome": "Salada Variada Mix 135",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "438"
  },
  {
    "nome": "Salada Variada Mix 136",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "439"
  },
  {
    "nome": "Salada Variada Mix 137",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "440"
  },
  {
    "nome": "Salada Variada Mix 138",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "441"
  },
  {
    "nome": "Salada Variada Mix 139",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "442"
  },
  {
    "nome": "Salada Variada Mix 140",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "443"
  },
  {
    "nome": "Salada Variada Mix 141",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "444"
  },
  {
    "nome": "Salada Variada Mix 142",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "445"
  },
  {
    "nome": "Salada Variada Mix 143",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "446"
  },
  {
    "nome": "Salada Variada Mix 144",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "447"
  },
  {
    "nome": "Salada Variada Mix 145",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "448"
  },
  {
    "nome": "Salada Variada Mix 146",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "449"
  },
  {
    "nome": "Salada Variada Mix 147",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "450"
  },
  {
    "nome": "Salada Variada Mix 148",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "451"
  },
  {
    "nome": "Salada Variada Mix 149",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "452"
  },
  {
    "nome": "Salada Variada Mix 150",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Fibras são essenciais, independente dos vegetais folhosos.",
    "id": "453"
  },
  {
    "nome": "Alimento Natural 454",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "454"
  },
  {
    "nome": "Alimento Natural 455",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "455"
  },
  {
    "nome": "Alimento Natural 456",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "456"
  },
  {
    "nome": "Alimento Natural 457",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "457"
  },
  {
    "nome": "Alimento Natural 458",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "458"
  },
  {
    "nome": "Alimento Natural 459",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "459"
  },
  {
    "nome": "Alimento Natural 460",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "460"
  },
  {
    "nome": "Alimento Natural 461",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "461"
  },
  {
    "nome": "Alimento Natural 462",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "462"
  },
  {
    "nome": "Alimento Natural 463",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "463"
  },
  {
    "nome": "Alimento Natural 464",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "464"
  },
  {
    "nome": "Alimento Natural 465",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "465"
  },
  {
    "nome": "Alimento Natural 466",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "466"
  },
  {
    "nome": "Alimento Natural 467",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "467"
  },
  {
    "nome": "Alimento Natural 468",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "468"
  },
  {
    "nome": "Alimento Natural 469",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "469"
  },
  {
    "nome": "Alimento Natural 470",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "470"
  },
  {
    "nome": "Alimento Natural 471",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "471"
  },
  {
    "nome": "Alimento Natural 472",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "472"
  },
  {
    "nome": "Alimento Natural 473",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "473"
  },
  {
    "nome": "Alimento Natural 474",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "474"
  },
  {
    "nome": "Alimento Natural 475",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "475"
  },
  {
    "nome": "Alimento Natural 476",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "476"
  },
  {
    "nome": "Alimento Natural 477",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "477"
  },
  {
    "nome": "Alimento Natural 478",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "478"
  },
  {
    "nome": "Alimento Natural 479",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "479"
  },
  {
    "nome": "Alimento Natural 480",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "480"
  },
  {
    "nome": "Alimento Natural 481",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "481"
  },
  {
    "nome": "Alimento Natural 482",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "482"
  },
  {
    "nome": "Alimento Natural 483",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "483"
  },
  {
    "nome": "Alimento Natural 484",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "484"
  },
  {
    "nome": "Alimento Natural 485",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "485"
  },
  {
    "nome": "Alimento Natural 486",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "486"
  },
  {
    "nome": "Alimento Natural 487",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "487"
  },
  {
    "nome": "Alimento Natural 488",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "488"
  },
  {
    "nome": "Alimento Natural 489",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "489"
  },
  {
    "nome": "Alimento Natural 490",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "490"
  },
  {
    "nome": "Alimento Natural 491",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "491"
  },
  {
    "nome": "Alimento Natural 492",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "492"
  },
  {
    "nome": "Alimento Natural 493",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "493"
  },
  {
    "nome": "Alimento Natural 494",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "494"
  },
  {
    "nome": "Alimento Natural 495",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "495"
  },
  {
    "nome": "Alimento Natural 496",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "496"
  },
  {
    "nome": "Alimento Natural 497",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "497"
  },
  {
    "nome": "Alimento Natural 498",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "498"
  },
  {
    "nome": "Alimento Natural 499",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "499"
  },
  {
    "nome": "Alimento Natural 500",
    "categoria": "fibra",
    "classificacao": "pode",
    "observacao": "Opção de acompanhamento natural para dieta normoglicêmica.",
    "id": "500"
  }
];
