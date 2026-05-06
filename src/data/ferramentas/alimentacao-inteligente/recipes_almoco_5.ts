import { Recipe } from './recipes';

export const recipesAlmoco5: Recipe[] = [
  // SALADAS COMPLETAS (novas)
  {
    id: 'al61',
    title: 'Salada de Maçã, Cenoura e Repolho',
    category: 'Saladas Completas',
    prepTime: 15,
    ingredients: [
      '1 maçã média',
      '1 cenoura ralada',
      '150g repolho picado',
      '1 col. sopa de maionese light',
      'Manjericão fresco'
    ],
    instructions: [
      'Lave bem e higienize todas as folhas e vegetais frescos.',
      'Pique ou rale os ingredientes conforme a sua preferência.',
      'Em um bowl grande, adicione a base de folhas e distribua os demais ingredientes por cima.',
      'Prepare um molho simples com azeite, limão, sal e pimenta e regue a salada antes de servir.'
    ],
    nutrition: { kcal: 180, cho: 20, protein: 2, fat: 8, fiber: 6, sugar: 12 },
    glycemicTip: 'A maçã com casca aumenta o teor de fibras.',
    glycemicLoad: 2,
    faqs: []
  },
  {
    id: 'al62',
    title: 'Salada Completa com Ovo e Grão-de-Bico',
    category: 'Saladas Completas',
    prepTime: 20,
    ingredients: [
      '1 ovo cozido',
      '½ xíc. grão-de-bico cozido',
      'Folhas verdes, tomate, pepino',
      '1 col. chá de azeite'
    ],
    instructions: [
      'Bata os ovos em um recipiente e tempere com sal e pimenta a gosto.',
      'Aqueça uma frigideira levemente untada com azeite ou manteiga.',
      'Despeje a mistura na frigideira, adicione os recheios e cozinhe em fogo médio.',
      'Dobre ao meio (se for omelete) ou mexa bem (se for ovos mexidos) até atingir o ponto desejado.',
      'Sirva imediatamente.'
    ],
    nutrition: { kcal: 260, cho: 24, protein: 14, fat: 12, fiber: 8, sugar: 5 },
    glycemicTip: 'Refeição fria que não esquenta o ambiente de trabalho.',
    glycemicLoad: 2,
    faqs: []
  },
  {
    id: 'al63',
    title: 'Sardinha com Salada Verde',
    category: 'Saladas Completas',
    prepTime: 12,
    ingredients: [
      '120g sardinha em lata (escorrida)',
      '100g rúcula',
      '1 col. chá de azeite, limão'
    ],
    instructions: [
      'Lave bem e higienize todas as folhas e vegetais frescos.',
      'Pique ou rale os ingredientes conforme a sua preferência.',
      'Em um bowl grande, adicione a base de folhas e distribua os demais ingredientes por cima.',
      'Prepare um molho simples com azeite, limão, sal e pimenta e regue a salada antes de servir.'
    ],
    nutrition: { kcal: 260, cho: 4, protein: 24, fat: 20, fiber: 2, sugar: 1 },
    glycemicTip: 'Sardinha enlatada é prática e rica em cálcio.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'al64',
    title: 'Bife de Fígado com Salada de Tomate',
    category: 'Saladas Completas',
    prepTime: 20,
    ingredients: [
      '80g fígado bovino',
      '2 tomates fatiados, cebola',
      '1 col. chá de azeite, vinagre, sal'
    ],
    instructions: [
      'Lave bem e higienize todas as folhas e vegetais frescos.',
      'Pique ou rale os ingredientes conforme a sua preferência.',
      'Em um bowl grande, adicione a base de folhas e distribua os demais ingredientes por cima.',
      'Prepare um molho simples com azeite, limão, sal e pimenta e regue a salada antes de servir.'
    ],
    nutrition: { kcal: 220, cho: 8, protein: 22, fat: 11, fiber: 2, sugar: 5 },
    glycemicTip: 'Rico em ferro, ideal para quem tem anemia associada.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'al65',
    title: 'Salada de Grão-de-Bico com Atum e Hortelã',
    category: 'Saladas Completas',
    prepTime: 15,
    ingredients: [
      '1 xíc. grão-de-bico cozido',
      '1 lata de atum em água',
      '½ cebola roxa picada',
      '10 folhas de hortelã, suco de limão',
      '1 col. sopa de azeite, sal'
    ],
    instructions: [
      'Lave bem e higienize todas as folhas e vegetais frescos.',
      'Pique ou rale os ingredientes conforme a sua preferência.',
      'Em um bowl grande, adicione a base de folhas e distribua os demais ingredientes por cima.',
      'Prepare um molho simples com azeite, limão, sal e pimenta e regue a salada antes de servir.'
    ],
    nutrition: { kcal: 310, cho: 28, protein: 24, fat: 12, fiber: 9, sugar: 5 },
    glycemicTip: 'Hortelã dá frescor e ajuda na digestão.',
    glycemicLoad: 3,
    faqs: []
  },

  // AVES (novas)
  {
    id: 'al66',
    title: 'Frango com Berinjela ao Forno',
    category: 'Aves',
    prepTime: 40,
    ingredients: [
      '120g frango em cubos',
      '1 berinjela pequena',
      'Tomate, cebola, orégano, sal',
      '1 col. chá de azeite'
    ],
    instructions: [
      'Tempere a proteína com sal, pimenta, alho e os temperos de sua preferência.',
      'Aqueça uma frigideira, grelha ou assadeira com um fio de azeite.',
      'Grelhe ou asse a proteína de ambos os lados até atingir o ponto desejado e estar totalmente cozida por dentro.',
      'Prepare os acompanhamentos enquanto a proteína descansa por 2 minutos.',
      'Sirva a proteína acompanhada dos demais ingredientes da receita.'
    ],
    nutrition: { kcal: 220, cho: 12, protein: 26, fat: 9, fiber: 5, sugar: 6 },
    glycemicTip: 'Prato único prático para levar na marmita.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'al67',
    title: 'Frango ao Molho de Ervas Finas',
    category: 'Aves',
    prepTime: 25,
    ingredients: [
      '120g peito de frango',
      '1 col. sopa de mix de ervas',
      '1 col. chá de azeite, alho, sal, limão'
    ],
    instructions: [
      'Tempere a proteína com sal, pimenta, alho e os temperos de sua preferência.',
      'Aqueça uma frigideira, grelha ou assadeira com um fio de azeite.',
      'Grelhe ou asse a proteína de ambos os lados até atingir o ponto desejado e estar totalmente cozida por dentro.',
      'Prepare os acompanhamentos enquanto a proteína descansa por 2 minutos.',
      'Sirva a proteína acompanhada dos demais ingredientes da receita.'
    ],
    nutrition: { kcal: 215, cho: 3, protein: 30, fat: 9, fiber: 1, sugar: 1 },
    glycemicTip: 'Ervas frescas dão sabor sem necessidade de molhos prontos.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'al68',
    title: 'Frango com Espaguete de Abobrinha',
    category: 'Aves',
    prepTime: 20,
    ingredients: [
      '120g frango em tiras',
      '1 abobrinha em espiral',
      'Alho, manjericão, 1 col. chá de azeite, sal'
    ],
    instructions: [
      'Tempere a proteína com sal, pimenta, alho e os temperos de sua preferência.',
      'Aqueça uma frigideira, grelha ou assadeira com um fio de azeite.',
      'Grelhe ou asse a proteína de ambos os lados até atingir o ponto desejado e estar totalmente cozida por dentro.',
      'Prepare os acompanhamentos enquanto a proteína descansa por 2 minutos.',
      'Sirva a proteína acompanhada dos demais ingredientes da receita.'
    ],
    nutrition: { kcal: 225, cho: 10, protein: 28, fat: 9, fiber: 3, sugar: 6 },
    glycemicTip: 'Abobrinha crua ou levemente refogada preserva mais nutrientes.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'al69',
    title: 'Frango com Couve-Manteiga e Bacon (Pouco)',
    category: 'Aves',
    prepTime: 25,
    ingredients: [
      '120g frango desfiado',
      '1 xíc. couve fatiada',
      '1 fatia fina de bacon picado',
      'Alho, sal'
    ],
    instructions: [
      'Tempere a proteína com sal, pimenta, alho e os temperos de sua preferência.',
      'Aqueça uma frigideira, grelha ou assadeira com um fio de azeite.',
      'Grelhe ou asse a proteína de ambos os lados até atingir o ponto desejado e estar totalmente cozida por dentro.',
      'Prepare os acompanhamentos enquanto a proteína descansa por 2 minutos.',
      'Sirva a proteína acompanhada dos demais ingredientes da receita.'
    ],
    nutrition: { kcal: 265, cho: 7, protein: 28, fat: 14, fiber: 3, sugar: 2 },
    glycemicTip: 'Use o bacon apenas para dar sabor, não como ingrediente principal.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'al70',
    title: 'Estrogonofe de Frango com Berinjela',
    category: 'Aves',
    prepTime: 25,
    ingredients: [
      '150g frango em tiras',
      '1 berinjela média, cebola',
      'Mostarda, 50ml creme de leite light'
    ],
    instructions: [
      'Tempere a proteína com sal, pimenta, alho e os temperos de sua preferência.',
      'Aqueça uma frigideira, grelha ou assadeira com um fio de azeite.',
      'Grelhe ou asse a proteína de ambos os lados até atingir o ponto desejado e estar totalmente cozida por dentro.',
      'Prepare os acompanhamentos enquanto a proteína descansa por 2 minutos.',
      'Sirva a proteína acompanhada dos demais ingredientes da receita.'
    ],
    nutrition: { kcal: 280, cho: 12, protein: 26, fat: 15, fiber: 5, sugar: 4 },
    glycemicTip: 'Versão sem ketchup e sem açúcar.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'al71',
    title: 'Frango com Chuchu',
    category: 'Aves',
    prepTime: 30,
    ingredients: [
      '150g frango em cubos',
      '2 chuchus em cubos',
      'Cebola, alho, sal, 1 col. chá de azeite'
    ],
    instructions: [
      'Tempere a proteína com sal, pimenta, alho e os temperos de sua preferência.',
      'Aqueça uma frigideira, grelha ou assadeira com um fio de azeite.',
      'Grelhe ou asse a proteína de ambos os lados até atingir o ponto desejado e estar totalmente cozida por dentro.',
      'Prepare os acompanhamentos enquanto a proteína descansa por 2 minutos.',
      'Sirva a proteína acompanhada dos demais ingredientes da receita.'
    ],
    nutrition: { kcal: 280, cho: 14, protein: 28, fat: 12, fiber: 5, sugar: 4 },
    glycemicTip: 'O chuchu absorve o sabor do frango.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'al72',
    title: 'Frango com Cenoura',
    category: 'Aves',
    prepTime: 25,
    ingredients: [
      '150g frango em cubos',
      '150g cenoura em rodelas',
      'Cebola, alho, ervas, 1 col. chá de azeite'
    ],
    instructions: [
      'Tempere a proteína com sal, pimenta, alho e os temperos de sua preferência.',
      'Aqueça uma frigideira, grelha ou assadeira com um fio de azeite.',
      'Grelhe ou asse a proteína de ambos os lados até atingir o ponto desejado e estar totalmente cozida por dentro.',
      'Prepare os acompanhamentos enquanto a proteína descansa por 2 minutos.',
      'Sirva a proteína acompanhada dos demais ingredientes da receita.'
    ],
    nutrition: { kcal: 300, cho: 15, protein: 28, fat: 14, fiber: 5, sugar: 6 },
    glycemicTip: 'Cenoura cozida tem IG maior que crua; controle a porção.',
    glycemicLoad: 2,
    faqs: []
  },
  {
    id: 'al73',
    title: 'Frango com Pepino',
    category: 'Aves',
    prepTime: 18,
    ingredients: [
      '150g frango grelhado',
      '1 pepino grande',
      'Limão, sal, 1 col. chá de azeite'
    ],
    instructions: [
      'Tempere a proteína com sal, pimenta, alho e os temperos de sua preferência.',
      'Aqueça uma frigideira, grelha ou assadeira com um fio de azeite.',
      'Grelhe ou asse a proteína de ambos os lados até atingir o ponto desejado e estar totalmente cozida por dentro.',
      'Prepare os acompanhamentos enquanto a proteína descansa por 2 minutos.',
      'Sirva a proteína acompanhada dos demais ingredientes da receita.'
    ],
    nutrition: { kcal: 280, cho: 8, protein: 30, fat: 13, fiber: 3, sugar: 3 },
    glycemicTip: 'Refeição refrescante para dias quentes.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'al74',
    title: 'Frango com Couve',
    category: 'Aves',
    prepTime: 20,
    ingredients: [
      '150g frango desfiado',
      '200g couve fatiada',
      'Alho, cebola, 1 col. chá de azeite'
    ],
    instructions: [
      'Tempere a proteína com sal, pimenta, alho e os temperos de sua preferência.',
      'Aqueça uma frigideira, grelha ou assadeira com um fio de azeite.',
      'Grelhe ou asse a proteína de ambos os lados até atingir o ponto desejado e estar totalmente cozida por dentro.',
      'Prepare os acompanhamentos enquanto a proteína descansa por 2 minutos.',
      'Sirva a proteína acompanhada dos demais ingredientes da receita.'
    ],
    nutrition: { kcal: 310, cho: 8, protein: 32, fat: 16, fiber: 6, sugar: 2 },
    glycemicTip: 'Prato rápido e rico em fibras.',
    glycemicLoad: 1,
    faqs: []
  },
  {
    id: 'al75',
    title: 'Peru com Vagem',
    category: 'Aves',
    prepTime: 20,
    ingredients: [
      '150g peito de peru',
      '200g vagem',
      'Alho, cebola, 1 col. chá de azeite'
    ],
    instructions: [
      'Separe, higienize e meça todos os ingredientes necessários para a receita.',
      'Prepare os alimentos cortando, picando ou ralando conforme a necessidade.',
      'Cozinhe, asse ou misture os ingredientes seguindo a lógica principal do prato.',
      'Ajuste os temperos (sal, pimenta, ervas) a gosto.',
      'Finalize a montagem do prato e sirva em seguida.'
    ],
    nutrition: { kcal: 280, cho: 12, protein: 30, fat: 15, fiber: 6, sugar: 4 },
    glycemicTip: 'Vagem é fonte de fibras e vitaminas.',
    glycemicLoad: 1,
    faqs: []
  }
];
