import { Recipe } from './recipes';

export const recipesJantar1: Recipe[] = [
  {
    id: 'ja01',
    title: 'Tilápia ao Limão com Brócolis',
    category: 'Peixes e Frutos do Mar',
    prepTime: 25,
    ingredients: [
      '1 filé de tilápia (150g)',
      '1 xíc. de brócolis no vapor',
      '1 col. sopa de azeite',
      'Suco de ½ limão',
      'Alho, sal, pimenta'
    ],
    instructions: [
      'Tempere a proteína com sal, pimenta, alho e os temperos de sua preferência.',
      'Aqueça uma frigideira, grelha ou assadeira com um fio de azeite.',
      'Grelhe ou asse a proteína de ambos os lados até atingir o ponto desejado e estar totalmente cozida por dentro.',
      'Prepare os acompanhamentos enquanto a proteína descansa por 2 minutos.',
      'Sirva a proteína acompanhada dos demais ingredientes da receita.'
    ],
    nutrition: { kcal: 215, cho: 6, protein: 28, fat: 9, fiber: 3, sugar: 0 },
    glycemicTip: 'O ômega-3 do peixe ajuda na sensibilidade à insulina',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'ja02',
    title: 'Salmão Assado com Aspargos',
    category: 'Peixes e Frutos do Mar',
    prepTime: 30,
    ingredients: [
      '1 posta de salmão (120g)',
      '6 aspargos',
      '1 col. chá de azeite',
      'Alecrim, limão, sal'
    ],
    instructions: [
      'Tempere a proteína com sal, pimenta, alho e os temperos de sua preferência.',
      'Aqueça uma frigideira, grelha ou assadeira com um fio de azeite.',
      'Grelhe ou asse a proteína de ambos os lados até atingir o ponto desejado e estar totalmente cozida por dentro.',
      'Prepare os acompanhamentos enquanto a proteína descansa por 2 minutos.',
      'Sirva a proteína acompanhada dos demais ingredientes da receita.'
    ],
    nutrition: { kcal: 245, cho: 4, protein: 26, fat: 14, fiber: 2, sugar: 0 },
    glycemicTip: 'Aspargos são diuréticos e pobres em carboidratos.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'ja03',
    title: 'Bacalhau com Abobrinha Grelhada',
    category: 'Peixes e Frutos do Mar',
    prepTime: 20,
    ingredients: [
      '1 posta de bacalhau dessalgado (100g)',
      '1 abobrinha média fatiada',
      '1 col. sopa de azeite',
      'Alho, cebola, salsinha'
    ],
    instructions: [
      'Separe, higienize e meça todos os ingredientes necessários para a receita.',
      'Prepare os alimentos cortando, picando ou ralando conforme a necessidade.',
      'Cozinhe, asse ou misture os ingredientes seguindo a lógica principal do prato.',
      'Ajuste os temperos (sal, pimenta, ervas) a gosto.',
      'Finalize a montagem do prato e sirva em seguida.'
    ],
    nutrition: { kcal: 198, cho: 7, protein: 22, fat: 9, fiber: 3, sugar: 0 },
    glycemicTip: 'Hidrate o bacalhau com antecedência para reduzir sódio.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'ja04',
    title: 'Camarão ao Alho e Óleo com Espinafre',
    category: 'Peixes e Frutos do Mar',
    prepTime: 15,
    ingredients: [
      '10 camarões médios',
      '2 xíc. de espinafre',
      '2 dentes de alho fatiados',
      '1 col. sopa de azeite',
      'Limão, sal'
    ],
    instructions: [
      'Separe, higienize e meça todos os ingredientes necessários para a receita.',
      'Prepare os alimentos cortando, picando ou ralando conforme a necessidade.',
      'Cozinhe, asse ou misture os ingredientes seguindo a lógica principal do prato.',
      'Ajuste os temperos (sal, pimenta, ervas) a gosto.',
      'Finalize a montagem do prato e sirva em seguida.'
    ],
    nutrition: { kcal: 185, cho: 5, protein: 24, fat: 8, fiber: 2, sugar: 0 },
    glycemicTip: 'Camarão é rico em proteínas e quase zero carboidrato.',
    glycemicLoad: 0,
    faqs: []
  },
  {
    id: 'ja05',
    title: 'Peixe Branco ao Molho de Ervas',
    category: 'Peixes e Frutos do Mar',
    prepTime: 25,
    ingredients: [
      '1 filé de pescada (150g)',
      '1 col. sopa de azeite',
      'Manjericão, orégano, limão',
      '1 xíc. de vagem cozida'
    ],
    instructions: [
      'Tempere a proteína com sal, pimenta, alho e os temperos de sua preferência.',
      'Aqueça uma frigideira, grelha ou assadeira com um fio de azeite.',
      'Grelhe ou asse a proteína de ambos os lados até atingir o ponto desejado e estar totalmente cozida por dentro.',
      'Prepare os acompanhamentos enquanto a proteína descansa por 2 minutos.',
      'Sirva a proteína acompanhada dos demais ingredientes da receita.'
    ],
    nutrition: { kcal: 205, cho: 8, protein: 25, fat: 8, fiber: 3, sugar: 0 },
    glycemicTip: 'Ervas frescas intensificam sabor sem adicionar sódio.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'ja06',
    title: 'Atum Grelhado com Salada de Pepino',
    category: 'Peixes e Frutos do Mar',
    prepTime: 15,
    ingredients: [
      '1 filé de atum fresco (120g)',
      '½ pepino fatiado',
      '1 col. chá de azeite',
      'Vinagre, sal, orégano'
    ],
    instructions: [
      'Lave bem e higienize todas as folhas e vegetais frescos.',
      'Pique ou rale os ingredientes conforme a sua preferência.',
      'Em um bowl grande, adicione a base de folhas e distribua os demais ingredientes por cima.',
      'Prepare um molho simples com azeite, limão, sal e pimenta e regue a salada antes de servir.'
    ],
    nutrition: { kcal: 195, cho: 4, protein: 26, fat: 8, fiber: 1, sugar: 0 },
    glycemicTip: 'Atum fresco tem mais ômega-3 que o enlatado.',
    glycemicLoad: 0,
    faqs: []
  },
  {
    id: 'ja07',
    title: 'Robalo com Purê de Couve-Flor',
    category: 'Peixes e Frutos do Mar',
    prepTime: 30,
    ingredients: [
      '1 filé de robalo (150g)',
      '1 xíc. de couve-flor cozida',
      '1 col. chá de azeite',
      'Noz-moscada, sal'
    ],
    instructions: [
      'Separe, higienize e meça todos os ingredientes necessários para a receita.',
      'Prepare os alimentos cortando, picando ou ralando conforme a necessidade.',
      'Cozinhe, asse ou misture os ingredientes seguindo a lógica principal do prato.',
      'Ajuste os temperos (sal, pimenta, ervas) a gosto.',
      'Finalize a montagem do prato e sirva em seguida.'
    ],
    nutrition: { kcal: 210, cho: 9, protein: 27, fat: 7, fiber: 3, sugar: 0 },
    glycemicTip: 'Couve-flor substitui batata com 80% menos carboidratos.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'ja08',
    title: 'Sardinha Assada com Tomate Cereja',
    category: 'Peixes e Frutos do Mar',
    prepTime: 20,
    ingredients: [
      '2 sardinhas frescas',
      '10 tomates cereja',
      '1 col. sopa de azeite',
      'Alecrim, limão, sal'
    ],
    instructions: [
      'Separe, higienize e meça todos os ingredientes necessários para a receita.',
      'Prepare os alimentos cortando, picando ou ralando conforme a necessidade.',
      'Cozinhe, asse ou misture os ingredientes seguindo a lógica principal do prato.',
      'Ajuste os temperos (sal, pimenta, ervas) a gosto.',
      'Finalize a montagem do prato e sirva em seguida.'
    ],
    nutrition: { kcal: 225, cho: 6, protein: 20, fat: 13, fiber: 2, sugar: 0 },
    glycemicTip: 'Sardinha é fonte acessível de ômega-3 e vitamina D.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'ja09',
    title: 'Linguado ao Vapor com Legumes',
    category: 'Peixes e Frutos do Mar',
    prepTime: 25,
    ingredients: [
      '1 filé de linguado (150g)',
      '½ xíc. cenoura em rodelas',
      '½ xíc. brócolis',
      '1 col. chá de azeite',
      'Gengibre, sal'
    ],
    instructions: [
      'Separe, higienize e meça todos os ingredientes necessários para a receita.',
      'Prepare os alimentos cortando, picando ou ralando conforme a necessidade.',
      'Cozinhe, asse ou misture os ingredientes seguindo a lógica principal do prato.',
      'Ajuste os temperos (sal, pimenta, ervas) a gosto.',
      'Finalize a montagem do prato e sirva em seguida.'
    ],
    nutrition: { kcal: 190, cho: 10, protein: 24, fat: 6, fiber: 3, sugar: 0 },
    glycemicTip: 'Cozimento a vapor preserva nutrientes e não adiciona gordura.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'ja10',
    title: 'Mix de Frutos do Mar Light',
    category: 'Peixes e Frutos do Mar',
    prepTime: 20,
    ingredients: [
      '5 camarões',
      '5 mexilhões',
      '1 col. sopa de azeite',
      'Alho, cebola, pimentão',
      'Coentro e limão'
    ],
    instructions: [
      'Separe, higienize e meça todos os ingredientes necessários para a receita.',
      'Prepare os alimentos cortando, picando ou ralando conforme a necessidade.',
      'Cozinhe, asse ou misture os ingredientes seguindo a lógica principal do prato.',
      'Ajuste os temperos (sal, pimenta, ervas) a gosto.',
      'Finalize a montagem do prato e sirva em seguida.'
    ],
    nutrition: { kcal: 215, cho: 8, protein: 26, fat: 9, fiber: 2, sugar: 0 },
    glycemicTip: 'Varie as proteínas do mar para ampliar ingestão de minerais.',
    glycemicLoad: 1,
    faqs: []
  }
];
