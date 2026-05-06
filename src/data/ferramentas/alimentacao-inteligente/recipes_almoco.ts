import { Recipe } from './recipes';

export const recipesAlmoco: Recipe[] = [
  // SALADAS COMPLETAS
  {
    id: 'al1',
    title: 'Salada de Frango Desfiado com Maçã Verde',
    category: 'Saladas Completas',
    prepTime: 15,
    ingredients: [
      '120g frango desfiado',
      '½ maçã verde picada',
      'Salsão a gosto',
      'Cebola a gosto',
      '1 col. sopa de iogurte natural',
      'Sal a gosto'
    ],
    instructions: [
      'Lave bem e higienize todas as folhas e vegetais frescos.',
      'Pique ou rale os ingredientes conforme a sua preferência.',
      'Em um bowl grande, adicione a base de folhas e distribua os demais ingredientes por cima.',
      'Prepare um molho simples com azeite, limão, sal e pimenta e regue a salada antes de servir.'
    ],
    nutrition: { kcal: 250, cho: 14, protein: 26, fat: 8, fiber: 4, sugar: 0 },
    glycemicTip: 'A maçã verde tem menos açúcar que a vermelha.',
    glycemicLoad: 2,
    faqs: []
  },
  {
    id: 'al2',
    title: 'Salada de Atum com Pepino',
    category: 'Saladas Completas',
    prepTime: 10,
    ingredients: [
      '100g atum em água',
      '1 pepino fatiado',
      '100g alface',
      '1 col. chá de azeite',
      'Limão a gosto'
    ],
    instructions: [
      'Lave bem e higienize todas as folhas e vegetais frescos.',
      'Pique ou rale os ingredientes conforme a sua preferência.',
      'Em um bowl grande, adicione a base de folhas e distribua os demais ingredientes por cima.',
      'Prepare um molho simples com azeite, limão, sal e pimenta e regue a salada antes de servir.'
    ],
    nutrition: { kcal: 200, cho: 6, protein: 22, fat: 10, fiber: 3, sugar: 0 },
    glycemicTip: 'Refeição fria ideal para dias quentes.',
    glycemicLoad: 1,
    faqs: []
  },
  
  // AVES
  {
    id: 'al3',
    title: 'Frango Grelhado com Arroz de Couve-Flor',
    category: 'Aves',
    prepTime: 25,
    ingredients: [
      '1 peito de frango (120g)',
      '1 xíc. couve-flor processada',
      '1 col. chá de azeite',
      'Alho e cebola a gosto',
      'Sal e limão a gosto'
    ],
    instructions: [
      'Tempere a proteína com sal, pimenta, alho e os temperos de sua preferência.',
      'Aqueça uma frigideira, grelha ou assadeira com um fio de azeite.',
      'Grelhe ou asse a proteína de ambos os lados até atingir o ponto desejado e estar totalmente cozida por dentro.',
      'Prepare os acompanhamentos enquanto a proteína descansa por 2 minutos.',
      'Sirva a proteína acompanhada dos demais ingredientes da receita.'
    ],
    nutrition: { kcal: 240, cho: 8, protein: 32, fat: 9, fiber: 4, sugar: 0 },
    glycemicTip: 'A couve-flor simula o arroz com 90% menos carboidratos.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'al4',
    title: 'Iscas de Frango ao Molho de Mostarda',
    category: 'Aves',
    prepTime: 20,
    ingredients: [
      '120g frango em tiras',
      '1 col. sopa de mostarda amarela',
      '1 col. sopa de creme de ricota light',
      '1 col. chá de azeite',
      'Sal a gosto'
    ],
    instructions: [
      'Tempere a proteína com sal, pimenta, alho e os temperos de sua preferência.',
      'Aqueça uma frigideira, grelha ou assadeira com um fio de azeite.',
      'Grelhe ou asse a proteína de ambos os lados até atingir o ponto desejado e estar totalmente cozida por dentro.',
      'Prepare os acompanhamentos enquanto a proteína descansa por 2 minutos.',
      'Sirva a proteína acompanhada dos demais ingredientes da receita.'
    ],
    nutrition: { kcal: 255, cho: 5, protein: 30, fat: 12, fiber: 1, sugar: 0 },
    glycemicTip: 'Use mostarda sem mel para evitar açúcar oculto.',
    glycemicLoad: 1,
    faqs: []
  },

  // CARNES VERMELHAS E SUÍNOS
  {
    id: 'al5',
    title: 'Bife de Patinho com Salada Colorida',
    category: 'Carnes Vermelhas e Suínos',
    prepTime: 20,
    ingredients: [
      '1 bife de patinho (100g)',
      'Mix de folhas',
      'Tomate e pepino a gosto',
      '1 col. chá de azeite',
      'Vinagre e sal a gosto'
    ],
    instructions: [
      'Lave bem e higienize todas as folhas e vegetais frescos.',
      'Pique ou rale os ingredientes conforme a sua preferência.',
      'Em um bowl grande, adicione a base de folhas e distribua os demais ingredientes por cima.',
      'Prepare um molho simples com azeite, limão, sal e pimenta e regue a salada antes de servir.'
    ],
    nutrition: { kcal: 250, cho: 6, protein: 28, fat: 13, fiber: 3, sugar: 0 },
    glycemicTip: 'Corte magro que não exige retirada excessiva de gordura.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'al6',
    title: 'Carne Moída com Abóbora em Cubos',
    category: 'Carnes Vermelhas e Suínos',
    prepTime: 30,
    ingredients: [
      '100g carne moída magra',
      '½ xíc. abóbora em cubos',
      'Cebola e alho a gosto',
      'Sal a gosto',
      '1 col. chá de azeite'
    ],
    instructions: [
      'Tempere a proteína com sal, pimenta, alho e os temperos de sua preferência.',
      'Aqueça uma frigideira, grelha ou assadeira com um fio de azeite.',
      'Grelhe ou asse a proteína de ambos os lados até atingir o ponto desejado e estar totalmente cozida por dentro.',
      'Prepare os acompanhamentos enquanto a proteína descansa por 2 minutos.',
      'Sirva a proteína acompanhada dos demais ingredientes da receita.'
    ],
    nutrition: { kcal: 260, cho: 12, protein: 24, fat: 13, fiber: 3, sugar: 0 },
    glycemicTip: 'A abóbora substitui parte do arroz ou batata.',
    glycemicLoad: 2,
    faqs: []
  },

  // PEIXES E FRUTOS DO MAR
  {
    id: 'al7',
    title: 'Tilápia com Legumes Assados',
    category: 'Peixes e Frutos do Mar',
    prepTime: 30,
    ingredients: [
      '1 filé de tilápia (150g)',
      '1 xíc. mix de legumes (abobrinha, berinjela)',
      '1 col. chá de azeite',
      'Sal a gosto'
    ],
    instructions: [
      'Tempere a proteína com sal, pimenta, alho e os temperos de sua preferência.',
      'Aqueça uma frigideira, grelha ou assadeira com um fio de azeite.',
      'Grelhe ou asse a proteína de ambos os lados até atingir o ponto desejado e estar totalmente cozida por dentro.',
      'Prepare os acompanhamentos enquanto a proteína descansa por 2 minutos.',
      'Sirva a proteína acompanhada dos demais ingredientes da receita.'
    ],
    nutrition: { kcal: 230, cho: 8, protein: 28, fat: 9, fiber: 3, sugar: 0 },
    glycemicTip: 'O papel manteiga facilita a limpeza e evita gordura extra.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'al8',
    title: 'Salmão Grelhado com Aspargos',
    category: 'Peixes e Frutos do Mar',
    prepTime: 20,
    ingredients: [
      '1 posta de salmão (120g)',
      '6 aspargos',
      'Limão a gosto',
      '1 col. chá de azeite',
      'Sal a gosto'
    ],
    instructions: [
      'Tempere a proteína com sal, pimenta, alho e os temperos de sua preferência.',
      'Aqueça uma frigideira, grelha ou assadeira com um fio de azeite.',
      'Grelhe ou asse a proteína de ambos os lados até atingir o ponto desejado e estar totalmente cozida por dentro.',
      'Prepare os acompanhamentos enquanto a proteína descansa por 2 minutos.',
      'Sirva a proteína acompanhada dos demais ingredientes da receita.'
    ],
    nutrition: { kcal: 265, cho: 4, protein: 26, fat: 16, fiber: 2, sugar: 0 },
    glycemicTip: 'Ômega-3 ajuda na saúde cardiovascular do diabético.',
    glycemicLoad: 1,
    faqs: []
  },

  // VEGETARIANAS E OVOS
  {
    id: 'al9',
    title: 'Berinjela Parmegiana Light (Sem Empanar)',
    category: 'Vegetarianas e Ovos',
    prepTime: 40,
    ingredients: [
      '1 berinjela fatiada',
      '½ xíc. molho de tomate',
      '2 col. sopa de queijo mussarela light',
      'Manjericão a gosto'
    ],
    instructions: [
      'Separe, higienize e meça todos os ingredientes necessários para a receita.',
      'Prepare os alimentos cortando, picando ou ralando conforme a necessidade.',
      'Cozinhe, asse ou misture os ingredientes seguindo a lógica principal do prato.',
      'Ajuste os temperos (sal, pimenta, ervas) a gosto.',
      'Finalize a montagem do prato e sirva em seguida.'
    ],
    nutrition: { kcal: 240, cho: 15, protein: 14, fat: 14, fiber: 6, sugar: 0 },
    glycemicTip: 'Não empanar reduz carboidratos e gordura da fritura.',
    glycemicLoad: 2,
    faqs: []
  },

  // MASSAS & GRÃOS ALTERNATIVOS
  {
    id: 'al10',
    title: 'Macarrão de Palmito Pupunha ao Molho de Tomate',
    category: 'Massas & Grãos Alternativos',
    prepTime: 25,
    ingredients: [
      '200g palmito pupunha em tiras',
      '100g frango desfiado',
      '2 tomates maduros',
      '1 dente alho e 1/4 cebola',
      'Manjericão fresco, azeite, sal, pimenta'
    ],
    instructions: [
      'Cozinhe a massa em água fervente com sal até ficar al dente (ou prepare a massa alternativa, como abobrinha/pupunha).',
      'Em uma panela separada, prepare o molho refogando os temperos e adicionando os ingredientes principais.',
      'Deixe o molho apurar em fogo baixo por alguns minutos.',
      'Incorpore a massa cozida ao molho, misturando bem para absorver os sabores.',
      'Sirva quente, finalizando com queijo ralado ou ervas frescas se desejar.'
    ],
    nutrition: { kcal: 210, cho: 12, protein: 22, fat: 7, fiber: 5, sugar: 0 },
    glycemicTip: 'Palmito pupunha substitui o macarrão com apenas 3g de carboidratos por porção.',
    glycemicLoad: 1,
    faqs: []
  }
];
