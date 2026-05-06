import { Recipe } from './recipes';

export const recipesLanches1: Recipe[] = [
  // LANCHES DOCES (1-18)
  {
    id: 'la01',
    title: 'Iogurte Natural com Morangos e Chia',
    category: 'Lanches Doces',
    prepTime: 5,
    ingredients: [
      '1 pote de iogurte natural desnatado (150g)',
      '5 morangos fatiados',
      '1 col. chá de chia',
      'Adoçante stévia (opcional)'
    ],
    instructions: [
      'Em uma tigela ou panela (se for mingau), adicione a base líquida ou cremosa.',
      'Incorpore os ingredientes secos (como chia, aveia ou whey) misturando bem para não empelotar.',
      'Se for uma receita fria, leve à geladeira por pelo menos 2 horas para firmar.',
      'Se for quente, cozinhe em fogo baixo mexendo sempre até engrossar.',
      'Finalize com as frutas ou castanhas por cima e sirva.'
    ],
    nutrition: { kcal: 125, cho: 12, protein: 9, fat: 4, fiber: 3, sugar: 9 },
    glycemicTip: 'A chia forma gel que retarda absorção do açúcar da fruta.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'la02',
    title: 'Maçã Assada com Canela e Nozes',
    category: 'Lanches Doces',
    prepTime: 20,
    ingredients: [
      '1 maçã média',
      '1 col. chá de nozes picadas',
      'Canela em pó',
      '1 col. chá de água'
    ],
    instructions: [
      'Separe, higienize e meça todos os ingredientes necessários para a receita.',
      'Prepare os alimentos cortando, picando ou ralando conforme a necessidade.',
      'Cozinhe, asse ou misture os ingredientes seguindo a lógica principal do prato.',
      'Ajuste os temperos (sal, pimenta, ervas) a gosto.',
      'Finalize a montagem do prato e sirva em seguida.'
    ],
    nutrition: { kcal: 110, cho: 18, protein: 2, fat: 4, fiber: 4, sugar: 13 },
    glycemicTip: 'Canela pode ajudar na sensibilidade à insulina.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'la03',
    title: 'Mousse de Abacate com Cacau',
    category: 'Lanches Doces',
    prepTime: 10,
    ingredients: [
      '½ abacate pequeno',
      '1 col. sopa de cacau em pó 100%',
      'Adoçante eritritol a gosto',
      '1 col. sopa de leite de coco'
    ],
    instructions: [
      'Em uma tigela ou panela (se for mingau), adicione a base líquida ou cremosa.',
      'Incorpore os ingredientes secos (como chia, aveia ou whey) misturando bem para não empelotar.',
      'Se for uma receita fria, leve à geladeira por pelo menos 2 horas para firmar.',
      'Se for quente, cozinhe em fogo baixo mexendo sempre até engrossar.',
      'Finalize com as frutas ou castanhas por cima e sirva.'
    ],
    nutrition: { kcal: 145, cho: 10, protein: 3, fat: 11, fiber: 6, sugar: 2 },
    glycemicTip: 'Abacate oferece gorduras boas que promovem saciedade prolongada.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'la04',
    title: 'Banana Verde Biomassa com Canela',
    category: 'Lanches Doces',
    prepTime: 5,
    ingredients: [
      '2 col. sopa de biomassa de banana verde',
      '1 col. chá de canela',
      '1 col. sopa de leite desnatado'
    ],
    instructions: [
      'Separe, higienize e meça todos os ingredientes necessários para a receita.',
      'Prepare os alimentos cortando, picando ou ralando conforme a necessidade.',
      'Cozinhe, asse ou misture os ingredientes seguindo a lógica principal do prato.',
      'Ajuste os temperos (sal, pimenta, ervas) a gosto.',
      'Finalize a montagem do prato e sirva em seguida.'
    ],
    nutrition: { kcal: 95, cho: 15, protein: 3, fat: 2, fiber: 4, sugar: 3 },
    glycemicTip: 'Biomassa é rica em amido resistente, que não eleva glicemia.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'la05',
    title: 'Pera com Queijo Cottage e Canela',
    category: 'Lanches Doces',
    prepTime: 5,
    ingredients: [
      '1 pera pequena fatiada',
      '2 col. sopa de queijo cottage',
      'Canela em pó'
    ],
    instructions: [
      'Separe, higienize e meça todos os ingredientes necessários para a receita.',
      'Prepare os alimentos cortando, picando ou ralando conforme a necessidade.',
      'Cozinhe, asse ou misture os ingredientes seguindo a lógica principal do prato.',
      'Ajuste os temperos (sal, pimenta, ervas) a gosto.',
      'Finalize a montagem do prato e sirva em seguida.'
    ],
    nutrition: { kcal: 115, cho: 16, protein: 7, fat: 3, fiber: 4, sugar: 12 },
    glycemicTip: 'Proteína do cottage equilibra o açúcar natural da pera.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'la06',
    title: 'Pudim de Chia com Leite de Amêndoas',
    category: 'Lanches Doces',
    prepTime: 10,
    ingredients: [
      '2 col. sopa de chia',
      '½ xíc. leite de amêndoas sem açúcar',
      'Adoçante stévia',
      'Essência de baunilha'
    ],
    instructions: [
      'Em uma tigela ou panela (se for mingau), adicione a base líquida ou cremosa.',
      'Incorpore os ingredientes secos (como chia, aveia ou whey) misturando bem para não empelotar.',
      'Se for uma receita fria, leve à geladeira por pelo menos 2 horas para firmar.',
      'Se for quente, cozinhe em fogo baixo mexendo sempre até engrossar.',
      'Finalize com as frutas ou castanhas por cima e sirva.'
    ],
    nutrition: { kcal: 130, cho: 12, protein: 5, fat: 8, fiber: 7, sugar: 2 },
    glycemicTip: 'Prepare vários potes na semana para lanches rápidos.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'la07',
    title: 'Morangos com Creme de Ricota',
    category: 'Lanches Doces',
    prepTime: 10,
    ingredients: [
      '8 morangos',
      '2 col. sopa de ricota amassada',
      'Adoçante',
      'Raspas de limão'
    ],
    instructions: [
      'Em uma panela, refogue cebola e alho com um fio de azeite até dourarem.',
      'Adicione os ingredientes principais picados e cubra com água ou caldo caseiro.',
      'Deixe cozinhar em fogo médio até que todos os ingredientes estejam bem macios.',
      'Se desejar uma textura de creme, bata tudo no liquidificador ou com um mixer de mão.',
      'Volte à panela, ajuste o sal e a pimenta, e sirva bem quente.'
    ],
    nutrition: { kcal: 95, cho: 8, protein: 6, fat: 4, fiber: 2, sugar: 6 },
    glycemicTip: 'Lanche visualmente atraente e leve para tardes quentes.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'la08',
    title: 'Kiwi com Iogurte Grego Light',
    category: 'Lanches Doces',
    prepTime: 5,
    ingredients: [
      '1 kiwi fatiado',
      '3 col. sopa de iogurte grego light',
      '1 col. chá de sementes de girassol'
    ],
    instructions: [
      'Em uma tigela ou panela (se for mingau), adicione a base líquida ou cremosa.',
      'Incorpore os ingredientes secos (como chia, aveia ou whey) misturando bem para não empelotar.',
      'Se for uma receita fria, leve à geladeira por pelo menos 2 horas para firmar.',
      'Se for quente, cozinhe em fogo baixo mexendo sempre até engrossar.',
      'Finalize com as frutas ou castanhas por cima e sirva.'
    ],
    nutrition: { kcal: 120, cho: 14, protein: 8, fat: 4, fiber: 3, sugar: 10 },
    glycemicTip: 'Kiwi é rico em vitamina C e tem baixo índice glicêmico.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'la09',
    title: 'Doce de Abóbora Light (Sem Açúcar)',
    category: 'Lanches Doces',
    prepTime: 25,
    ingredients: [
      '1 xíc. abóbora cabotiá cozida',
      'Canela, cravo',
      'Adoçante culinário',
      '1 col. chá de coco ralado sem açúcar'
    ],
    instructions: [
      'Separe, higienize e meça todos os ingredientes necessários para a receita.',
      'Prepare os alimentos cortando, picando ou ralando conforme a necessidade.',
      'Cozinhe, asse ou misture os ingredientes seguindo a lógica principal do prato.',
      'Ajuste os temperos (sal, pimenta, ervas) a gosto.',
      'Finalize a montagem do prato e sirva em seguida.'
    ],
    nutrition: { kcal: 85, cho: 15, protein: 2, fat: 2, fiber: 3, sugar: 7 },
    glycemicTip: 'Porção controlada: 2 col. sopa por lanche.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'la10',
    title: 'Smoothie Verde de Abacate e Espinafre',
    category: 'Lanches Doces',
    prepTime: 5,
    ingredients: [
      '¼ abacate',
      '½ xíc. espinafre',
      '½ xíc. leite de amêndoas',
      'Gelo, adoçante (opcional)'
    ],
    instructions: [
      'Corte as frutas e os demais ingredientes em pedaços menores, se necessário.',
      'Coloque todos os ingredientes no copo do liquidificador.',
      'Bata em velocidade alta por cerca de 1 a 2 minutos, até obter uma mistura lisa e homogênea.',
      'Se preferir mais gelado, adicione pedras de gelo e bata novamente.',
      'Sirva imediatamente em um copo grande.'
    ],
    nutrition: { kcal: 110, cho: 8, protein: 4, fat: 8, fiber: 5, sugar: 2 },
    glycemicTip: 'Espinafre não altera sabor, mas adiciona nutrientes poderosos.',
    glycemicLoad: 1,
    faqs: []
  }
];
