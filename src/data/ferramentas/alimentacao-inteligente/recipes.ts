import { recipesAlmoco } from './recipes_almoco';
import { recipesAlmoco2 } from './recipes_almoco_2';
import { recipesAlmoco3 } from './recipes_almoco_3';
import { recipesAlmoco4 } from './recipes_almoco_4';
import { recipesAlmoco5 } from './recipes_almoco_5';
import { recipesAlmoco6 } from './recipes_almoco_6';
import { recipesAlmoco7 } from './recipes_almoco_7';
import { recipesJantar1 } from './recipes_jantar_1';
import { recipesJantar2 } from './recipes_jantar_2';
import { recipesJantar3 } from './recipes_jantar_3';
import { recipesJantar4 } from './recipes_jantar_4';
import { recipesLanches1 } from './recipes_lanches_1';
import { recipesLanches2 } from './recipes_lanches_2';
import { recipesLanches3 } from './recipes_lanches_3';
import { recipesLanches4 } from './recipes_lanches_4';

export interface Recipe {
  id: string;
  title: string;
  category: string;
  prepTime: number;
  ingredients: string[];
  instructions: string[];
  nutrition: {
    kcal: number;
    cho: number;
    protein: number;
    fat: number;
    fiber: number;
    sugar: number;
  };
  glycemicTip: string;
  glycemicLoad: number;
  faqs: string[];
}

const baseRecipes: Recipe[] = [
  // OMELETES E OVOS
  {
    id: 'o1',
    title: 'Omelete de Espinafre',
    category: 'Omeletes e Ovos',
    prepTime: 15,
    ingredients: [
      '3 ovos (1 gema + 2 claras)',
      '1 xícara de espinafre cozido picado',
      '1/4 de cebola picada',
      '1 dente de alho picado',
      '1 colher de sopa de azeite',
      'Sal e pimenta a gosto'
    ],
    instructions: [
      'Bata os ovos em um recipiente e tempere com sal e pimenta a gosto.',
      'Aqueça uma frigideira levemente untada com azeite ou manteiga.',
      'Despeje a mistura na frigideira, adicione os recheios e cozinhe em fogo médio.',
      'Dobre ao meio (se for omelete) ou mexa bem (se for ovos mexidos) até atingir o ponto desejado.',
      'Sirva imediatamente.'
    ],
    nutrition: { kcal: 210, cho: 4, protein: 18, fat: 14, fiber: 2, sugar: 1 },
    glycemicTip: 'O espinafre é rico em fibras e ajuda a controlar a glicemia.',
    glycemicLoad: 1,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'o2',
    title: 'Ovos Mexidos com Tomate',
    category: 'Omeletes e Ovos',
    prepTime: 10,
    ingredients: [
      '2 ovos',
      '6 tomates cereja picados',
      '1 colher de chá de gergelim',
      '1 colher de sopa de azeite',
      'Sal e pimenta do reino a gosto',
      'Salsinha picada a gosto'
    ],
    instructions: [
      'Bata os ovos em um recipiente e tempere com sal e pimenta a gosto.',
      'Aqueça uma frigideira levemente untada com azeite ou manteiga.',
      'Despeje a mistura na frigideira, adicione os recheios e cozinhe em fogo médio.',
      'Dobre ao meio (se for omelete) ou mexa bem (se for ovos mexidos) até atingir o ponto desejado.',
      'Sirva imediatamente.'
    ],
    nutrition: { kcal: 230, cho: 3, protein: 13, fat: 18, fiber: 1, sugar: 2 },
    glycemicTip: 'Os tomates cereja são pobres em carboidratos e ricos em licopeno.',
    glycemicLoad: 1,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'o3',
    title: 'Omelete com Queijo e Espinafre',
    category: 'Omeletes e Ovos',
    prepTime: 10,
    ingredients: [
      '2 ovos',
      '2 fatias de queijo minas',
      '1 punhado de folhas de espinafre',
      '1 colher de sopa de azeite',
      'Sal e pimenta a gosto'
    ],
    instructions: [
      'Bata os ovos em um recipiente e tempere com sal e pimenta a gosto.',
      'Aqueça uma frigideira levemente untada com azeite ou manteiga.',
      'Despeje a mistura na frigideira, adicione os recheios e cozinhe em fogo médio.',
      'Dobre ao meio (se for omelete) ou mexa bem (se for ovos mexidos) até atingir o ponto desejado.',
      'Sirva imediatamente.'
    ],
    nutrition: { kcal: 280, cho: 2, protein: 20, fat: 21, fiber: 1, sugar: 1 },
    glycemicTip: 'O queijo minas é uma ótima fonte de proteína com baixo teor de carboidratos.',
    glycemicLoad: 1,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'o4',
    title: 'Ovos Mexidos Ricos em Proteínas',
    category: 'Omeletes e Ovos',
    prepTime: 5,
    ingredients: [
      '2 a 3 ovos',
      '1/2 abacate (opcional)',
      'Sal e pimenta a gosto',
      '1 colher de sopa de manteiga ou azeite'
    ],
    instructions: [
      'Bata os ovos em um recipiente e tempere com sal e pimenta a gosto.',
      'Aqueça uma frigideira levemente untada com azeite ou manteiga.',
      'Despeje a mistura na frigideira, adicione os recheios e cozinhe em fogo médio.',
      'Dobre ao meio (se for omelete) ou mexa bem (se for ovos mexidos) até atingir o ponto desejado.',
      'Sirva imediatamente.'
    ],
    nutrition: { kcal: 350, cho: 5, protein: 19, fat: 28, fiber: 4, sugar: 1 },
    glycemicTip: 'O abacate adiciona gorduras boas que retardam a absorção dos alimentos.',
    glycemicLoad: 1,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'o5',
    title: 'Omelete de Queijo com Ervas',
    category: 'Omeletes e Ovos',
    prepTime: 8,
    ingredients: [
      '2 ovos',
      '50g de queijo minas frescal',
      '1 colher de sopa de salsinha picada',
      '1 colher de sopa de cebolinha picada',
      '1 colher de sopa de azeite',
      'Sal e pimenta a gosto'
    ],
    instructions: [
      'Bata os ovos em um recipiente e tempere com sal e pimenta a gosto.',
      'Aqueça uma frigideira levemente untada com azeite ou manteiga.',
      'Despeje a mistura na frigideira, adicione os recheios e cozinhe em fogo médio.',
      'Dobre ao meio (se for omelete) ou mexa bem (se for ovos mexidos) até atingir o ponto desejado.',
      'Sirva imediatamente.'
    ],
    nutrition: { kcal: 260, cho: 2, protein: 18, fat: 20, fiber: 0, sugar: 1 },
    glycemicTip: 'As ervas frescas adicionam sabor sem afetar a glicemia.',
    glycemicLoad: 1,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'o6',
    title: 'Ovos Mexidos com Abacate',
    category: 'Omeletes e Ovos',
    prepTime: 8,
    ingredients: [
      '2 ovos',
      '1/2 abacate',
      '1 colher de sopa de azeite',
      'Sal e pimenta a gosto',
      'Coentro ou salsinha picada'
    ],
    instructions: [
      'Bata os ovos em um recipiente e tempere com sal e pimenta a gosto.',
      'Aqueça uma frigideira levemente untada com azeite ou manteiga.',
      'Despeje a mistura na frigideira, adicione os recheios e cozinhe em fogo médio.',
      'Dobre ao meio (se for omelete) ou mexa bem (se for ovos mexidos) até atingir o ponto desejado.',
      'Sirva imediatamente.'
    ],
    nutrition: { kcal: 320, cho: 6, protein: 14, fat: 27, fiber: 5, sugar: 1 },
    glycemicTip: 'Esta combinação oferece proteínas e gorduras saudáveis, ideal para diabéticos.',
    glycemicLoad: 1,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'o7',
    title: 'Ovos Poche com Espinafre',
    category: 'Omeletes e Ovos',
    prepTime: 15,
    ingredients: [
      '2 ovos',
      '1 maço de espinafre',
      '2 dentes de alho picados',
      '2 colheres de sopa de azeite',
      'Sal e pimenta a gosto',
      'Vinagre para a água do poche'
    ],
    instructions: [
      'Bata os ovos em um recipiente e tempere com sal e pimenta a gosto.',
      'Aqueça uma frigideira levemente untada com azeite ou manteiga.',
      'Despeje a mistura na frigideira, adicione os recheios e cozinhe em fogo médio.',
      'Dobre ao meio (se for omelete) ou mexa bem (se for ovos mexidos) até atingir o ponto desejado.',
      'Sirva imediatamente.'
    ],
    nutrition: { kcal: 290, cho: 4, protein: 15, fat: 24, fiber: 3, sugar: 1 },
    glycemicTip: 'O vinagre na água ajuda a manter a clara do ovo coesa.',
    glycemicLoad: 1,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'o8',
    title: 'Frittata de Legumes',
    category: 'Omeletes e Ovos',
    prepTime: 20,
    ingredients: [
      '4 ovos',
      '1/2 abobrinha ralada',
      '1/2 cenoura ralada',
      '1/2 cebola picada',
      '2 colheres de sopa de azeite',
      'Sal, pimenta e ervas finas a gosto'
    ],
    instructions: [
      'Separe, higienize e meça todos os ingredientes necessários para a receita.',
      'Prepare os alimentos cortando, picando ou ralando conforme a necessidade.',
      'Cozinhe, asse ou misture os ingredientes seguindo a lógica principal do prato.',
      'Ajuste os temperos (sal, pimenta, ervas) a gosto.',
      'Finalize a montagem do prato e sirva em seguida.'
    ],
    nutrition: { kcal: 210, cho: 6, protein: 13, fat: 15, fiber: 2, sugar: 3 }, // Porção (metade)
    glycemicTip: 'A frittata pode ser feita à noite e consumida fria no dia seguinte.',
    glycemicLoad: 2,
    faqs: ['faq1', 'faq2']
  },

  // CREPIOCAS E PANQUECAS
  {
    id: 'cp1',
    title: 'Crepioca Low Carb',
    category: 'Crepiocas e Panquecas',
    prepTime: 10,
    ingredients: [
      '2 ovos',
      '1 colher de sopa de farinha de linhaça',
      'Queijo ralado a gosto',
      'Orégano e pitada de sal'
    ],
    instructions: [
      'Misture todos os ingredientes da massa em um recipiente até ficar homogêneo.',
      'Aqueça uma frigideira antiaderente em fogo médio, levemente untada.',
      'Despeje uma porção da massa e espalhe bem pelo fundo da frigideira.',
      'Cozinhe até as bordas soltarem e o fundo dourar, depois vire para dourar o outro lado.',
      'Adicione o recheio de sua preferência, dobre ou enrole e sirva quente.'
    ],
    nutrition: { kcal: 220, cho: 3, protein: 16, fat: 16, fiber: 3, sugar: 1 },
    glycemicTip: 'A farinha de linhaça é rica em fibras e ômega-3.',
    glycemicLoad: 1,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'cp2',
    title: 'Panqueca de Whey Protein',
    category: 'Crepiocas e Panquecas',
    prepTime: 8,
    ingredients: [
      '1 ovo',
      '1 scoop de whey protein (sabor baunilha ou chocolate)',
      '1 colher de sopa de água (se necessário)',
      'Canela a gosto',
      'Manteiga para untar'
    ],
    instructions: [
      'Misture todos os ingredientes da massa em um recipiente até ficar homogêneo.',
      'Aqueça uma frigideira antiaderente em fogo médio, levemente untada.',
      'Despeje uma porção da massa e espalhe bem pelo fundo da frigideira.',
      'Cozinhe até as bordas soltarem e o fundo dourar, depois vire para dourar o outro lado.',
      'Adicione o recheio de sua preferência, dobre ou enrole e sirva quente.'
    ],
    nutrition: { kcal: 180, cho: 4, protein: 28, fat: 6, fiber: 1, sugar: 1 },
    glycemicTip: 'Esta panqueca é extremamente rica em proteínas e ajuda na saciedade.',
    glycemicLoad: 1,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'cp3',
    title: 'Waffle Proteico',
    category: 'Crepiocas e Panquecas',
    prepTime: 15,
    ingredients: [
      '1 ovo',
      '1 scoop de whey protein',
      '1 colher de sopa de cacau em pó',
      '1 colher de sopa de farinha de amendoim',
      '1 colher de chá de fermento',
      '2 colheres de sopa de água'
    ],
    instructions: [
      'Misture todos os ingredientes da massa em um recipiente até ficar homogêneo.',
      'Aqueça uma frigideira antiaderente em fogo médio, levemente untada.',
      'Despeje uma porção da massa e espalhe bem pelo fundo da frigideira.',
      'Cozinhe até as bordas soltarem e o fundo dourar, depois vire para dourar o outro lado.',
      'Adicione o recheio de sua preferência, dobre ou enrole e sirva quente.'
    ],
    nutrition: { kcal: 240, cho: 7, protein: 32, fat: 10, fiber: 4, sugar: 1 },
    glycemicTip: 'O cacau é rico em antioxidantes e não eleva a glicemia.',
    glycemicLoad: 1,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'cp4',
    title: 'Panqueca Funcional de Amêndoas',
    category: 'Crepiocas e Panquecas',
    prepTime: 10,
    ingredients: [
      '2 ovos',
      '2 colheres de sopa de farinha de amêndoas',
      '1 colher de sopa de sementes variadas (chia, girassol, abóbora)',
      '1 colher de chá de água ou leite vegetal',
      'Sal, orégano e cúrcuma a gosto'
    ],
    instructions: [
      'Misture todos os ingredientes da massa em um recipiente até ficar homogêneo.',
      'Aqueça uma frigideira antiaderente em fogo médio, levemente untada.',
      'Despeje uma porção da massa e espalhe bem pelo fundo da frigideira.',
      'Cozinhe até as bordas soltarem e o fundo dourar, depois vire para dourar o outro lado.',
      'Adicione o recheio de sua preferência, dobre ou enrole e sirva quente.'
    ],
    nutrition: { kcal: 290, cho: 6, protein: 17, fat: 23, fiber: 4, sugar: 1 },
    glycemicTip: 'As sementes adicionam textura e fibras à preparação.',
    glycemicLoad: 1,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'cp5',
    title: 'Panqueca de Banana com Ovo',
    category: 'Crepiocas e Panquecas',
    prepTime: 8,
    ingredients: [
      '1 banana madura',
      '2 ovos',
      '1 colher de chá de canela',
      '1 colher de sopa de farinha de coco (opcional)',
      'Manteiga para untar'
    ],
    instructions: [
      'Bata os ovos em um recipiente e tempere com sal e pimenta a gosto.',
      'Aqueça uma frigideira levemente untada com azeite ou manteiga.',
      'Despeje a mistura na frigideira, adicione os recheios e cozinhe em fogo médio.',
      'Dobre ao meio (se for omelete) ou mexa bem (se for ovos mexidos) até atingir o ponto desejado.',
      'Sirva imediatamente.'
    ],
    nutrition: { kcal: 250, cho: 28, protein: 13, fat: 11, fiber: 5, sugar: 14 },
    glycemicTip: 'Use bananas bem maduras para doçura natural sem açúcar.',
    glycemicLoad: 6,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'cp6',
    title: 'Crepioca de Queijo e Orégano',
    category: 'Crepiocas e Panquecas',
    prepTime: 10,
    ingredients: [
      '2 ovos',
      '1 colher de sopa de farinha de coco',
      '2 colheres de sopa de queijo parmesão ralado',
      'Orégano a gosto',
      'Sal a gosto'
    ],
    instructions: [
      'Misture todos os ingredientes da massa em um recipiente até ficar homogêneo.',
      'Aqueça uma frigideira antiaderente em fogo médio, levemente untada.',
      'Despeje uma porção da massa e espalhe bem pelo fundo da frigideira.',
      'Cozinhe até as bordas soltarem e o fundo dourar, depois vire para dourar o outro lado.',
      'Adicione o recheio de sua preferência, dobre ou enrole e sirva quente.'
    ],
    nutrition: { kcal: 230, cho: 4, protein: 18, fat: 16, fiber: 3, sugar: 1 },
    glycemicTip: 'O queijo parmesão dá sabor intenso com pouco carboidrato.',
    glycemicLoad: 1,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'cp7',
    title: 'Panqueca de Coco e Chia',
    category: 'Crepiocas e Panquecas',
    prepTime: 10,
    ingredients: [
      '2 ovos',
      '2 colheres de sopa de farinha de coco',
      '1 colher de sopa de chia',
      '1 colher de sopa de óleo de coco',
      '1 colher de chá de fermento',
      'Adoçante natural a gosto (opcional)'
    ],
    instructions: [
      'Misture todos os ingredientes da massa em um recipiente até ficar homogêneo.',
      'Aqueça uma frigideira antiaderente em fogo médio, levemente untada.',
      'Despeje uma porção da massa e espalhe bem pelo fundo da frigideira.',
      'Cozinhe até as bordas soltarem e o fundo dourar, depois vire para dourar o outro lado.',
      'Adicione o recheio de sua preferência, dobre ou enrole e sirva quente.'
    ],
    nutrition: { kcal: 310, cho: 9, protein: 15, fat: 25, fiber: 8, sugar: 1 },
    glycemicTip: 'A chia forma um gel que ajuda na textura da panqueca.',
    glycemicLoad: 1,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'cp8',
    title: 'Crepioca de Frango Desfiado',
    category: 'Crepiocas e Panquecas',
    prepTime: 15,
    ingredients: [
      '2 ovos',
      '1 colher de sopa de goma de tapioca',
      '1 colher de sopa de farinha de linhaça',
      '1/2 xícara de frango desfiado temperado',
      'Sal e cheiro-verde a gosto'
    ],
    instructions: [
      'Tempere a proteína com sal, pimenta, alho e os temperos de sua preferência.',
      'Aqueça uma frigideira, grelha ou assadeira com um fio de azeite.',
      'Grelhe ou asse a proteína de ambos os lados até atingir o ponto desejado e estar totalmente cozida por dentro.',
      'Prepare os acompanhamentos enquanto a proteína descansa por 2 minutos.',
      'Sirva a proteína acompanhada dos demais ingredientes da receita.'
    ],
    nutrition: { kcal: 280, cho: 16, protein: 28, fat: 12, fiber: 3, sugar: 1 },
    glycemicTip: 'O frango desfiado pode ser preparado no dia anterior.',
    glycemicLoad: 4,
    faqs: ['faq1', 'faq2']
  },

  // PÃES LOW CARB
  {
    id: 'p1',
    title: 'Pão com Queijo Low Carb (Micro-ondas)',
    category: 'Pães Low Carb',
    prepTime: 5,
    ingredients: [
      '2 colheres de sopa de requeijão',
      '1 ovo',
      '1 colher de chá de fermento em pó',
      'Sal e pimenta a gosto'
    ],
    instructions: [
      'Pré-aqueça o forno a 180°C e unte uma forma adequada.',
      'Em um recipiente, misture bem os ingredientes secos.',
      'Em outro recipiente, bata os ingredientes líquidos e depois incorpore-os aos secos até obter uma massa homogênea.',
      'Despeje a massa na forma e leve ao forno por aproximadamente 25-35 minutos.',
      'Faça o teste do palito: se sair limpo, está pronto. Deixe esfriar antes de desenformar e servir.'
    ],
    nutrition: { kcal: 180, cho: 2, protein: 10, fat: 15, fiber: 0, sugar: 1 },
    glycemicTip: 'Este pão é uma excelente base para sanduíches low carb.',
    glycemicLoad: 1,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'p2',
    title: 'Pão Rápido de Abóbora',
    category: 'Pães Low Carb',
    prepTime: 5,
    ingredients: [
      '50g de abóbora cozida e amassada',
      '1 ovo',
      '2 colheres de sopa de farinha de linhaça',
      '1 colher de chá de fermento',
      'Sal e temperos a gosto'
    ],
    instructions: [
      'Pré-aqueça o forno a 180°C e unte uma forma adequada.',
      'Em um recipiente, misture bem os ingredientes secos.',
      'Em outro recipiente, bata os ingredientes líquidos e depois incorpore-os aos secos até obter uma massa homogênea.',
      'Despeje a massa na forma e leve ao forno por aproximadamente 25-35 minutos.',
      'Faça o teste do palito: se sair limpo, está pronto. Deixe esfriar antes de desenformar e servir.'
    ],
    nutrition: { kcal: 160, cho: 8, protein: 10, fat: 10, fiber: 5, sugar: 2 },
    glycemicTip: 'A abóbora adiciona vitaminas e cor natural ao pão.',
    glycemicLoad: 2,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'p3',
    title: 'Pão de Frigideira Low Carb',
    category: 'Pães Low Carb',
    prepTime: 8,
    ingredients: [
      '1 ovo',
      '1 colher de sopa de farinha de coco',
      '1 colher de sopa de água',
      '1/2 colher de chá de fermento',
      'Pitada de sal',
      'Manteiga para untar'
    ],
    instructions: [
      'Pré-aqueça o forno a 180°C e unte uma forma adequada.',
      'Em um recipiente, misture bem os ingredientes secos.',
      'Em outro recipiente, bata os ingredientes líquidos e depois incorpore-os aos secos até obter uma massa homogênea.',
      'Despeje a massa na forma e leve ao forno por aproximadamente 25-35 minutos.',
      'Faça o teste do palito: se sair limpo, está pronto. Deixe esfriar antes de desenformar e servir.'
    ],
    nutrition: { kcal: 120, cho: 4, protein: 7, fat: 8, fiber: 3, sugar: 1 },
    glycemicTip: 'Cozinhar tampado ajuda o pão a crescer e ficar macio.',
    glycemicLoad: 1,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'p4',
    title: 'Bauru de Aveioca',
    category: 'Pães Low Carb',
    prepTime: 15,
    ingredients: [
      '2 colheres de sopa de aveia em flocos finos',
      '1 colher de sopa de água',
      '1 ovo',
      '2 fatias de queijo minas',
      '2 fatias de tomate',
      'Sal e orégano a gosto'
    ],
    instructions: [
      'Separe, higienize e meça todos os ingredientes necessários para a receita.',
      'Prepare os alimentos cortando, picando ou ralando conforme a necessidade.',
      'Cozinhe, asse ou misture os ingredientes seguindo a lógica principal do prato.',
      'Ajuste os temperos (sal, pimenta, ervas) a gosto.',
      'Finalize a montagem do prato e sirva em seguida.'
    ],
    nutrition: { kcal: 240, cho: 14, protein: 18, fat: 12, fiber: 2, sugar: 2 },
    glycemicTip: 'Use aveia em flocos finos para melhor textura.',
    glycemicLoad: 4,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'p5',
    title: 'Tostadas de Abacate',
    category: 'Pães Low Carb',
    prepTime: 10,
    ingredients: [
      '2 fatias de pão low carb (ou pão de frigideira)',
      '1/2 abacate',
      'Suco de 1/2 limão',
      'Sal, pimenta e alho em pó a gosto',
      'Sementes de gergelim para finalizar'
    ],
    instructions: [
      'Separe, higienize e meça todos os ingredientes necessários para a receita.',
      'Prepare os alimentos cortando, picando ou ralando conforme a necessidade.',
      'Cozinhe, asse ou misture os ingredientes seguindo a lógica principal do prato.',
      'Ajuste os temperos (sal, pimenta, ervas) a gosto.',
      'Finalize a montagem do prato e sirva em seguida.'
    ],
    nutrition: { kcal: 320, cho: 12, protein: 10, fat: 26, fiber: 9, sugar: 2 },
    glycemicTip: 'O limão evita que o abacate escureça rapidamente.',
    glycemicLoad: 2,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'p6',
    title: 'Pão de Queijo Low Carb de Micro-ondas',
    category: 'Pães Low Carb',
    prepTime: 5,
    ingredients: [
      '1 ovo',
      '1 colher de sopa de requeijão',
      '1 colher de sopa de queijo parmesão ralado',
      '1 colher de sopa de polvilho doce',
      '1 colher de chá de fermento'
    ],
    instructions: [
      'Pré-aqueça o forno a 180°C e unte uma forma adequada.',
      'Em um recipiente, misture bem os ingredientes secos.',
      'Em outro recipiente, bata os ingredientes líquidos e depois incorpore-os aos secos até obter uma massa homogênea.',
      'Despeje a massa na forma e leve ao forno por aproximadamente 25-35 minutos.',
      'Faça o teste do palito: se sair limpo, está pronto. Deixe esfriar antes de desenformar e servir.'
    ],
    nutrition: { kcal: 190, cho: 9, protein: 11, fat: 13, fiber: 0, sugar: 1 },
    glycemicTip: 'O polvilho doce pode ser substituído por polvilho azedo para sabor diferente.',
    glycemicLoad: 3,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'p7',
    title: 'Pão de Linhaça',
    category: 'Pães Low Carb',
    prepTime: 12,
    ingredients: [
      '2 colheres de sopa de farinha de linhaça',
      '1 ovo',
      '1 colher de sopa de azeite',
      '1/2 colher de chá de fermento',
      'Pitada de sal'
    ],
    instructions: [
      'Pré-aqueça o forno a 180°C e unte uma forma adequada.',
      'Em um recipiente, misture bem os ingredientes secos.',
      'Em outro recipiente, bata os ingredientes líquidos e depois incorpore-os aos secos até obter uma massa homogênea.',
      'Despeje a massa na forma e leve ao forno por aproximadamente 25-35 minutos.',
      'Faça o teste do palito: se sair limpo, está pronto. Deixe esfriar antes de desenformar e servir.'
    ],
    nutrition: { kcal: 210, cho: 4, protein: 9, fat: 18, fiber: 4, sugar: 0 },
    glycemicTip: 'A linhaça é excelente para o funcionamento intestinal.',
    glycemicLoad: 1,
    faqs: ['faq1', 'faq2']
  },

  // PUDINS E CREMES
  {
    id: 'pu1',
    title: 'Pudim de Chia com Morangos',
    category: 'Pudins e Cremes',
    prepTime: 5,
    ingredients: [
      '3 colheres de sopa de chia',
      '1 xícara de leite de castanha ou leite de coco',
      '1 colher de chá de extrato de baunilha',
      'Adoçante natural a gosto (estévia)',
      '1/2 xícara de morangos picados'
    ],
    instructions: [
      'Em uma tigela ou panela (se for mingau), adicione a base líquida ou cremosa.',
      'Incorpore os ingredientes secos (como chia, aveia ou whey) misturando bem para não empelotar.',
      'Se for uma receita fria, leve à geladeira por pelo menos 2 horas para firmar.',
      'Se for quente, cozinhe em fogo baixo mexendo sempre até engrossar.',
      'Finalize com as frutas ou castanhas por cima e sirva.'
    ],
    nutrition: { kcal: 220, cho: 18, protein: 7, fat: 14, fiber: 12, sugar: 4 },
    glycemicTip: 'Prepare à noite e tenha café da manhã pronto ao acordar.',
    glycemicLoad: 2,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'pu2',
    title: 'Pudim de Coco e Chia',
    category: 'Pudins e Cremes',
    prepTime: 5,
    ingredients: [
      '1/4 xícara de sementes de chia',
      '1 xícara de leite de coco',
      '1 colher de sopa de adoçante',
      '1/2 colher de chá de essência de baunilha',
      'Coco ralado para decorar'
    ],
    instructions: [
      'Em uma tigela ou panela (se for mingau), adicione a base líquida ou cremosa.',
      'Incorpore os ingredientes secos (como chia, aveia ou whey) misturando bem para não empelotar.',
      'Se for uma receita fria, leve à geladeira por pelo menos 2 horas para firmar.',
      'Se for quente, cozinhe em fogo baixo mexendo sempre até engrossar.',
      'Finalize com as frutas ou castanhas por cima e sirva.'
    ],
    nutrition: { kcal: 340, cho: 22, protein: 9, fat: 26, fiber: 16, sugar: 2 },
    glycemicTip: 'O leite de coco dá cremosidade e sabor sem lactose.',
    glycemicLoad: 2,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'pu3',
    title: 'Creme de Abacate',
    category: 'Pudins e Cremes',
    prepTime: 5,
    ingredients: [
      '1/2 abacate maduro',
      '2 colheres de sopa de creme de leite',
      '1 colher de sopa de leite de coco',
      '1 colher de sopa de nata',
      '1 colher de sopa de suco de limão',
      'Adoçante natural a gosto (estévia, xilitol)'
    ],
    instructions: [
      'Em uma panela, refogue cebola e alho com um fio de azeite até dourarem.',
      'Adicione os ingredientes principais picados e cubra com água ou caldo caseiro.',
      'Deixe cozinhar em fogo médio até que todos os ingredientes estejam bem macios.',
      'Se desejar uma textura de creme, bata tudo no liquidificador ou com um mixer de mão.',
      'Volte à panela, ajuste o sal e a pimenta, e sirva bem quente.'
    ],
    nutrition: { kcal: 310, cho: 10, protein: 3, fat: 30, fiber: 7, sugar: 1 },
    glycemicTip: 'Este creme lembra um doce de abacate, perfeito para variar o café da manhã.',
    glycemicLoad: 1,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'pu4',
    title: 'Overnight de Chia',
    category: 'Pudins e Cremes',
    prepTime: 5,
    ingredients: [
      '3 colheres de sopa de chia',
      '1 pote de iogurte natural',
      '1/2 xícara de leite vegetal',
      'Adoçante a gosto',
      'Frutas vermelhas para servir'
    ],
    instructions: [
      'Em uma tigela ou panela (se for mingau), adicione a base líquida ou cremosa.',
      'Incorpore os ingredientes secos (como chia, aveia ou whey) misturando bem para não empelotar.',
      'Se for uma receita fria, leve à geladeira por pelo menos 2 horas para firmar.',
      'Se for quente, cozinhe em fogo baixo mexendo sempre até engrossar.',
      'Finalize com as frutas ou castanhas por cima e sirva.'
    ],
    nutrition: { kcal: 280, cho: 24, protein: 14, fat: 12, fiber: 12, sugar: 8 },
    glycemicTip: 'As frutas vermelhas têm baixo índice glicêmico.',
    glycemicLoad: 3,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'pu5',
    title: 'Pudim de Linhaça',
    category: 'Pudins e Cremes',
    prepTime: 5,
    ingredients: [
      '4 colheres de sopa de farinha de linhaça',
      '1 xícara de leite de amêndoas',
      '1 colher de chá de canela',
      '1 colher de chá de essência de baunilha',
      'Adoçante natural a gosto'
    ],
    instructions: [
      'Em uma tigela ou panela (se for mingau), adicione a base líquida ou cremosa.',
      'Incorpore os ingredientes secos (como chia, aveia ou whey) misturando bem para não empelotar.',
      'Se for uma receita fria, leve à geladeira por pelo menos 2 horas para firmar.',
      'Se for quente, cozinhe em fogo baixo mexendo sempre até engrossar.',
      'Finalize com as frutas ou castanhas por cima e sirva.'
    ],
    nutrition: { kcal: 180, cho: 9, protein: 7, fat: 13, fiber: 8, sugar: 1 },
    glycemicTip: 'A linhaça dourada tem sabor mais suave que a marrom.',
    glycemicLoad: 1,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'pu6',
    title: 'Creme de Coco com Frutas Vermelhas',
    category: 'Pudins e Cremes',
    prepTime: 5,
    ingredients: [
      '1 lata de leite de coco (parte cremosa)',
      '3 colheres de sopa de chia',
      'Adoçante a gosto',
      '1/2 xícara de frutas vermelhas'
    ],
    instructions: [
      'Em uma panela, refogue cebola e alho com um fio de azeite até dourarem.',
      'Adicione os ingredientes principais picados e cubra com água ou caldo caseiro.',
      'Deixe cozinhar em fogo médio até que todos os ingredientes estejam bem macios.',
      'Se desejar uma textura de creme, bata tudo no liquidificador ou com um mixer de mão.',
      'Volte à panela, ajuste o sal e a pimenta, e sirva bem quente.'
    ],
    nutrition: { kcal: 380, cho: 18, protein: 6, fat: 32, fiber: 11, sugar: 4 },
    glycemicTip: 'Use apenas a parte cremosa do leite de coco para maior consistência.',
    glycemicLoad: 2,
    faqs: ['faq1', 'faq2']
  },

  // IOGURTES E GRANOLAS
  {
    id: 'i1',
    title: 'Iogurte Natural com Granola Low Carb',
    category: 'Iogurtes e Granolas',
    prepTime: 25,
    ingredients: [
      '1 pote de iogurte natural sem açúcar',
      '2 colheres de sopa de Granola Low Carb (ver receita)'
    ],
    instructions: [
      'Em uma tigela ou panela (se for mingau), adicione a base líquida ou cremosa.',
      'Incorpore os ingredientes secos (como chia, aveia ou whey) misturando bem para não empelotar.',
      'Se for uma receita fria, leve à geladeira por pelo menos 2 horas para firmar.',
      'Se for quente, cozinhe em fogo baixo mexendo sempre até engrossar.',
      'Finalize com as frutas ou castanhas por cima e sirva.'
    ],
    nutrition: { kcal: 210, cho: 12, protein: 10, fat: 14, fiber: 3, sugar: 6 },
    glycemicTip: 'A granola caseira é mais saudável e sem adição de açúcares.',
    glycemicLoad: 3,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'i2',
    title: 'Granola Low Carb',
    category: 'Iogurtes e Granolas',
    prepTime: 20,
    ingredients: [
      '1 xícara de mix de castanhas (nozes, amêndoas, castanhas)',
      '1/2 xícara de sementes de abóbora',
      '1/2 xícara de sementes de girassol',
      '1/2 xícara de coco ralado',
      '2 colheres de sopa de chia',
      '2 colheres de sopa de óleo de coco',
      '1 clara de ovo',
      'Canela e adoçante a gosto'
    ],
    instructions: [
      'Separe, higienize e meça todos os ingredientes necessários para a receita.',
      'Prepare os alimentos cortando, picando ou ralando conforme a necessidade.',
      'Cozinhe, asse ou misture os ingredientes seguindo a lógica principal do prato.',
      'Ajuste os temperos (sal, pimenta, ervas) a gosto.',
      'Finalize a montagem do prato e sirva em seguida.'
    ],
    nutrition: { kcal: 180, cho: 6, protein: 5, fat: 16, fiber: 4, sugar: 1 }, // Porção de 2 colheres
    glycemicTip: 'A clara de ovo ajuda a formar clusters crocantes.',
    glycemicLoad: 1,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'i3',
    title: 'Iogurte com Sementes',
    category: 'Iogurtes e Granolas',
    prepTime: 5,
    ingredients: [
      '1 pote de iogurte natural',
      '1 colher de sopa de chia',
      '1 colher de sopa de linhaça dourada',
      '1 colher de sopa de castanhas picadas',
      'Canela a gosto'
    ],
    instructions: [
      'Em uma tigela ou panela (se for mingau), adicione a base líquida ou cremosa.',
      'Incorpore os ingredientes secos (como chia, aveia ou whey) misturando bem para não empelotar.',
      'Se for uma receita fria, leve à geladeira por pelo menos 2 horas para firmar.',
      'Se for quente, cozinhe em fogo baixo mexendo sempre até engrossar.',
      'Finalize com as frutas ou castanhas por cima e sirva.'
    ],
    nutrition: { kcal: 240, cho: 14, protein: 12, fat: 15, fiber: 6, sugar: 6 },
    glycemicTip: 'O iogurte natural é fonte de probióticos benéficos para o intestino.',
    glycemicLoad: 3,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'i4',
    title: 'Overnight Oats (versão adaptada)',
    category: 'Iogurtes e Granolas',
    prepTime: 10,
    ingredients: [
      '2 colheres de sopa de aveia em flocos',
      '1 colher de sopa de chia',
      '1/2 pote de iogurte natural',
      '1/2 xícara de leite de amêndoas',
      'Canela a gosto',
      'Adoçante natural a gosto'
    ],
    instructions: [
      'Separe, higienize e meça todos os ingredientes necessários para a receita.',
      'Prepare os alimentos cortando, picando ou ralando conforme a necessidade.',
      'Cozinhe, asse ou misture os ingredientes seguindo a lógica principal do prato.',
      'Ajuste os temperos (sal, pimenta, ervas) a gosto.',
      'Finalize a montagem do prato e sirva em seguida.'
    ],
    nutrition: { kcal: 210, cho: 22, protein: 10, fat: 8, fiber: 7, sugar: 4 },
    glycemicTip: 'A versão com pouca aveia é adequada para diabéticos.',
    glycemicLoad: 5,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'i5',
    title: 'Parfait de Iogurte e Frutas',
    category: 'Iogurtes e Granolas',
    prepTime: 10,
    ingredients: [
      '1 pote de iogurte natural',
      '1/2 xícara de frutas vermelhas (morango, mirtilo, amora)',
      '2 colheres de sopa de granola low carb',
      'Hortelã para decorar'
    ],
    instructions: [
      'Em uma tigela ou panela (se for mingau), adicione a base líquida ou cremosa.',
      'Incorpore os ingredientes secos (como chia, aveia ou whey) misturando bem para não empelotar.',
      'Se for uma receita fria, leve à geladeira por pelo menos 2 horas para firmar.',
      'Se for quente, cozinhe em fogo baixo mexendo sempre até engrossar.',
      'Finalize com as frutas ou castanhas por cima e sirva.'
    ],
    nutrition: { kcal: 230, cho: 18, protein: 11, fat: 12, fiber: 5, sugar: 10 },
    glycemicTip: 'As frutas vermelhas são as mais indicadas para diabéticos.',
    glycemicLoad: 4,
    faqs: ['faq1', 'faq2']
  },

  // BOLOS LOW CARB
  {
    id: 'b1',
    title: 'Bolo de Caneca de Aveia com Banana',
    category: 'Bolos Low Carb',
    prepTime: 5,
    ingredients: [
      '1 banana madura',
      '1 ovo',
      '1 colher de sopa de aveia',
      '1 colher de chá de canela',
      '1 colher de chá de fermento'
    ],
    instructions: [
      'Pré-aqueça o forno a 180°C e unte uma forma adequada.',
      'Em um recipiente, misture bem os ingredientes secos.',
      'Em outro recipiente, bata os ingredientes líquidos e depois incorpore-os aos secos até obter uma massa homogênea.',
      'Despeje a massa na forma e leve ao forno por aproximadamente 25-35 minutos.',
      'Faça o teste do palito: se sair limpo, está pronto. Deixe esfriar antes de desenformar e servir.'
    ],
    nutrition: { kcal: 210, cho: 32, protein: 9, fat: 6, fiber: 4, sugar: 14 },
    glycemicTip: 'A banana substitui o açúcar com seus açúcares naturais.',
    glycemicLoad: 8,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'b2',
    title: 'Bolo Low Carb de Micro-ondas',
    category: 'Bolos Low Carb',
    prepTime: 5,
    ingredients: [
      '1 ovo',
      '2 colheres de sopa de farinha de coco',
      '1 colher de sopa de óleo de coco',
      '1 colher de sopa de cacau em pó',
      '1 colher de chá de fermento',
      'Adoçante a gosto',
      '2 colheres de sopa de água'
    ],
    instructions: [
      'Pré-aqueça o forno a 180°C e unte uma forma adequada.',
      'Em um recipiente, misture bem os ingredientes secos.',
      'Em outro recipiente, bata os ingredientes líquidos e depois incorpore-os aos secos até obter uma massa homogênea.',
      'Despeje a massa na forma e leve ao forno por aproximadamente 25-35 minutos.',
      'Faça o teste do palito: se sair limpo, está pronto. Deixe esfriar antes de desenformar e servir.'
    ],
    nutrition: { kcal: 260, cho: 12, protein: 9, fat: 20, fiber: 8, sugar: 1 },
    glycemicTip: 'A farinha de coco absorve muita umidade, não substitua por outras farinhas.',
    glycemicLoad: 2,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'b3',
    title: 'Bolo de Banana sem Açúcar',
    category: 'Bolos Low Carb',
    prepTime: 30,
    ingredients: [
      '3 bananas maduras amassadas',
      '3 ovos',
      '1/2 xícara de óleo de coco',
      '1 xícara de farinha de aveia',
      '1/2 xícara de farinha de amêndoas',
      '1 colher de sopa de canela',
      '1 colher de sopa de fermento'
    ],
    instructions: [
      'Pré-aqueça o forno a 180°C e unte uma forma adequada.',
      'Em um recipiente, misture bem os ingredientes secos.',
      'Em outro recipiente, bata os ingredientes líquidos e depois incorpore-os aos secos até obter uma massa homogênea.',
      'Despeje a massa na forma e leve ao forno por aproximadamente 25-35 minutos.',
      'Faça o teste do palito: se sair limpo, está pronto. Deixe esfriar antes de desenformar e servir.'
    ],
    nutrition: { kcal: 220, cho: 20, protein: 6, fat: 14, fiber: 4, sugar: 8 }, // Por fatia
    glycemicTip: 'Use bananas bem maduras para doçura natural intensa.',
    glycemicLoad: 6,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'b4',
    title: 'Bolo de Chocolate Zero Açúcar',
    category: 'Bolos Low Carb',
    prepTime: 30,
    ingredients: [
      '4 ovos',
      '1/2 xícara de óleo de coco',
      '1/2 xícara de cacau em pó',
      '1 xícara de farinha de amêndoas',
      '1/2 xícara de xilitol ou adoçante culinário',
      '1 colher de sopa de fermento'
    ],
    instructions: [
      'Pré-aqueça o forno a 180°C e unte uma forma adequada.',
      'Em um recipiente, misture bem os ingredientes secos.',
      'Em outro recipiente, bata os ingredientes líquidos e depois incorpore-os aos secos até obter uma massa homogênea.',
      'Despeje a massa na forma e leve ao forno por aproximadamente 25-35 minutos.',
      'Faça o teste do palito: se sair limpo, está pronto. Deixe esfriar antes de desenformar e servir.'
    ],
    nutrition: { kcal: 190, cho: 8, protein: 6, fat: 16, fiber: 4, sugar: 1 }, // Por fatia
    glycemicTip: 'O xilitol é um adoçante natural com baixo índice glicêmico.',
    glycemicLoad: 2,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'b5',
    title: 'Muffin de Mirtilo',
    category: 'Bolos Low Carb',
    prepTime: 20,
    ingredients: [
      '2 ovos',
      '1/2 xícara de farinha de amêndoas',
      '1/4 xícara de óleo de coco',
      '1/4 xícara de xilitol',
      '1/2 xícara de mirtilos',
      '1 colher de chá de fermento',
      'Raspas de limão'
    ],
    instructions: [
      'Pré-aqueça o forno a 180°C e unte uma forma adequada.',
      'Em um recipiente, misture bem os ingredientes secos.',
      'Em outro recipiente, bata os ingredientes líquidos e depois incorpore-os aos secos até obter uma massa homogênea.',
      'Despeje a massa na forma e leve ao forno por aproximadamente 25-35 minutos.',
      'Faça o teste do palito: se sair limpo, está pronto. Deixe esfriar antes de desenformar e servir.'
    ],
    nutrition: { kcal: 160, cho: 7, protein: 4, fat: 13, fiber: 2, sugar: 2 }, // Por muffin
    glycemicTip: 'Os mirtilos são ricos em antioxidantes e têm baixo índice glicêmico.',
    glycemicLoad: 2,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'b6',
    title: 'Bolo de Fubá Diet',
    category: 'Bolos Low Carb',
    prepTime: 35,
    ingredients: [
      '3 ovos',
      '1/2 xícara de óleo',
      '1 xícara de leite desnatado',
      '1 xícara de fubá',
      '1/2 xícara de farinha de amêndoas',
      '1 colher de sopa de fermento',
      'Adoçante culinário a gosto'
    ],
    instructions: [
      'Pré-aqueça o forno a 180°C e unte uma forma adequada.',
      'Em um recipiente, misture bem os ingredientes secos.',
      'Em outro recipiente, bata os ingredientes líquidos e depois incorpore-os aos secos até obter uma massa homogênea.',
      'Despeje a massa na forma e leve ao forno por aproximadamente 25-35 minutos.',
      'Faça o teste do palito: se sair limpo, está pronto. Deixe esfriar antes de desenformar e servir.'
    ],
    nutrition: { kcal: 180, cho: 16, protein: 5, fat: 11, fiber: 2, sugar: 1 }, // Por fatia
    glycemicTip: 'O fubá tem carboidratos, por isso consuma com moderação.',
    glycemicLoad: 6,
    faqs: ['faq1', 'faq2']
  },

  // BEBIDAS E SMOOTHIES
  {
    id: 'bs1',
    title: 'Smoothie de Morango com Chia',
    category: 'Bebidas e Smoothies',
    prepTime: 10,
    ingredients: [
      '1 pote de iogurte natural',
      '1/2 xícara de morangos',
      '1 colher de sopa de chia',
      '1 colher de chá de linhaça',
      'Adoçante a gosto',
      'Gelo à vontade'
    ],
    instructions: [
      'Corte as frutas e os demais ingredientes em pedaços menores, se necessário.',
      'Coloque todos os ingredientes no copo do liquidificador.',
      'Bata em velocidade alta por cerca de 1 a 2 minutos, até obter uma mistura lisa e homogênea.',
      'Se preferir mais gelado, adicione pedras de gelo e bata novamente.',
      'Sirva imediatamente em um copo grande.'
    ],
    nutrition: { kcal: 190, cho: 18, protein: 10, fat: 8, fiber: 7, sugar: 9 },
    glycemicTip: 'Adicione gelo para uma textura mais refrescante.',
    glycemicLoad: 4,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'bs2',
    title: 'Suco Verde Low Carb',
    category: 'Bebidas e Smoothies',
    prepTime: 5,
    ingredients: [
      '1 folha de couve',
      'Suco de 1 limão',
      '1/2 pepino com casca',
      '1/2 maçã verde',
      '1 colher de sopa de linhaça',
      '200ml de água de coco'
    ],
    instructions: [
      'Corte as frutas e os demais ingredientes em pedaços menores, se necessário.',
      'Coloque todos os ingredientes no copo do liquidificador.',
      'Bata em velocidade alta por cerca de 1 a 2 minutos, até obter uma mistura lisa e homogênea.',
      'Se preferir mais gelado, adicione pedras de gelo e bata novamente.',
      'Sirva imediatamente em um copo grande.'
    ],
    nutrition: { kcal: 120, cho: 22, protein: 3, fat: 3, fiber: 6, sugar: 12 },
    glycemicTip: 'A maçã verde tem menos açúcar que as vermelhas.',
    glycemicLoad: 5,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'bs3',
    title: 'Suco Verde com Linhaça',
    category: 'Bebidas e Smoothies',
    prepTime: 5,
    ingredients: [
      '2 folhas de couve',
      '1 maçã pequena com casca',
      '1 pedaço de gengibre',
      'Suco de 1 limão',
      '1 colher de sopa de linhaça dourada',
      '200ml de água'
    ],
    instructions: [
      'Corte as frutas e os demais ingredientes em pedaços menores, se necessário.',
      'Coloque todos os ingredientes no copo do liquidificador.',
      'Bata em velocidade alta por cerca de 1 a 2 minutos, até obter uma mistura lisa e homogênea.',
      'Se preferir mais gelado, adicione pedras de gelo e bata novamente.',
      'Sirva imediatamente em um copo grande.'
    ],
    nutrition: { kcal: 110, cho: 18, protein: 3, fat: 3, fiber: 6, sugar: 10 },
    glycemicTip: 'O gengibre tem propriedades anti-inflamatórias.',
    glycemicLoad: 4,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'bs4',
    title: 'Shake com Fibras',
    category: 'Bebidas e Smoothies',
    prepTime: 5,
    ingredients: [
      '1 copo de leite de chia (água + chia hidratada)',
      '1/2 abacate',
      '1/2 xícara de morangos',
      '1 colher de sopa de sementes de girassol',
      'Adoçante a gosto'
    ],
    instructions: [
      'Corte as frutas e os demais ingredientes em pedaços menores, se necessário.',
      'Coloque todos os ingredientes no copo do liquidificador.',
      'Bata em velocidade alta por cerca de 1 a 2 minutos, até obter uma mistura lisa e homogênea.',
      'Se preferir mais gelado, adicione pedras de gelo e bata novamente.',
      'Sirva imediatamente em um copo grande.'
    ],
    nutrition: { kcal: 280, cho: 16, protein: 6, fat: 22, fiber: 12, sugar: 4 },
    glycemicTip: 'O leite de chia é feito hidratando as sementes em água por 30 minutos.',
    glycemicLoad: 2,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'bs5',
    title: 'Café da Manhã Líquido Proteico',
    category: 'Bebidas e Smoothies',
    prepTime: 5,
    ingredients: [
      '1 scoop de whey protein (sabor baunilha)',
      '1 colher de sopa de pasta de amendoim',
      '1/2 banana',
      '200ml de leite de amêndoas',
      'Gelo'
    ],
    instructions: [
      'Separe, higienize e meça todos os ingredientes necessários para a receita.',
      'Prepare os alimentos cortando, picando ou ralando conforme a necessidade.',
      'Cozinhe, asse ou misture os ingredientes seguindo a lógica principal do prato.',
      'Ajuste os temperos (sal, pimenta, ervas) a gosto.',
      'Finalize a montagem do prato e sirva em seguida.'
    ],
    nutrition: { kcal: 310, cho: 18, protein: 28, fat: 14, fiber: 4, sugar: 8 },
    glycemicTip: 'Ideal para dias de pressa quando não há tempo de sentar para comer.',
    glycemicLoad: 5,
    faqs: ['faq1', 'faq2']
  },

  // OPÇÕES RÁPIDAS
  {
    id: 'or1',
    title: 'Mingau de Quinoa com Banana',
    category: 'Opções Rápidas',
    prepTime: 10,
    ingredients: [
      '3 colheres de sopa de quinoa em flocos',
      '200ml de leite desnatado ou vegetal',
      '1/2 banana picada',
      'Canela em pó a gosto',
      'Adoçante a gosto (opcional)'
    ],
    instructions: [
      'Em uma tigela ou panela (se for mingau), adicione a base líquida ou cremosa.',
      'Incorpore os ingredientes secos (como chia, aveia ou whey) misturando bem para não empelotar.',
      'Se for uma receita fria, leve à geladeira por pelo menos 2 horas para firmar.',
      'Se for quente, cozinhe em fogo baixo mexendo sempre até engrossar.',
      'Finalize com as frutas ou castanhas por cima e sirva.'
    ],
    nutrition: { kcal: 240, cho: 40, protein: 10, fat: 4, fiber: 5, sugar: 12 },
    glycemicTip: 'A quinoa é uma proteína vegetal completa.',
    glycemicLoad: 12,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'or2',
    title: 'Gelatina com Frutas Naturais',
    category: 'Opções Rápidas',
    prepTime: 5,
    ingredients: [
      '1 pacote de gelatina diet (sabor morango ou framboesa)',
      '1 xícara de água quente',
      '1 xícara de água fria',
      '1/2 xícara de morangos ou mirtilos picados'
    ],
    instructions: [
      'Separe, higienize e meça todos os ingredientes necessários para a receita.',
      'Prepare os alimentos cortando, picando ou ralando conforme a necessidade.',
      'Cozinhe, asse ou misture os ingredientes seguindo a lógica principal do prato.',
      'Ajuste os temperos (sal, pimenta, ervas) a gosto.',
      'Finalize a montagem do prato e sirva em seguida.'
    ],
    nutrition: { kcal: 35, cho: 6, protein: 2, fat: 0, fiber: 2, sugar: 3 },
    glycemicTip: 'A gelatina diet é isenta de açúcar.',
    glycemicLoad: 1,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'or3',
    title: 'Torta de Maçã Low Carb',
    category: 'Opções Rápidas',
    prepTime: 15,
    ingredients: [
      '1 ovo',
      '1/2 maçã picada finamente',
      '2 colheres de sopa de farinha de amêndoas',
      '1 colher de sopa de manteiga derretida',
      'Canela em pó a gosto',
      'Adoçante a gosto',
      '1/2 colher de chá de fermento'
    ],
    instructions: [
      'Pré-aqueça o forno a 180°C e unte uma forma adequada.',
      'Em um recipiente, misture bem os ingredientes secos.',
      'Em outro recipiente, bata os ingredientes líquidos e depois incorpore-os aos secos até obter uma massa homogênea.',
      'Despeje a massa na forma e leve ao forno por aproximadamente 25-35 minutos.',
      'Faça o teste do palito: se sair limpo, está pronto. Deixe esfriar antes de desenformar e servir.'
    ],
    nutrition: { kcal: 280, cho: 14, protein: 9, fat: 22, fiber: 4, sugar: 8 },
    glycemicTip: 'A canela ajuda a controlar a glicemia.',
    glycemicLoad: 4,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'or4',
    title: 'Snack de Grão de Bico',
    category: 'Opções Rápidas',
    prepTime: 25,
    ingredients: [
      '1 xícara de grão de bico cozido',
      '1 colher de sopa de azeite',
      '1 colher de chá de páprica defumada',
      '1/2 colher de chá de cominho',
      'Sal e pimenta a gosto'
    ],
    instructions: [
      'Separe, higienize e meça todos os ingredientes necessários para a receita.',
      'Prepare os alimentos cortando, picando ou ralando conforme a necessidade.',
      'Cozinhe, asse ou misture os ingredientes seguindo a lógica principal do prato.',
      'Ajuste os temperos (sal, pimenta, ervas) a gosto.',
      'Finalize a montagem do prato e sirva em seguida.'
    ],
    nutrition: { kcal: 260, cho: 30, protein: 10, fat: 12, fiber: 8, sugar: 2 },
    glycemicTip: 'Esta opção crocante substitui os cereais matinais industrializados.',
    glycemicLoad: 8,
    faqs: ['faq1', 'faq2']
  },
  {
    id: 'or5',
    title: 'Pasta de Abacate para Torradas',
    category: 'Opções Rápidas',
    prepTime: 5,
    ingredients: [
      '1 abacate maduro',
      'Suco de 1/2 limão',
      '1 colher de sopa de azeite',
      '1 dente de alho picado (opcional)',
      'Sal, pimenta e cheiro-verde a gosto'
    ],
    instructions: [
      'Separe, higienize e meça todos os ingredientes necessários para a receita.',
      'Prepare os alimentos cortando, picando ou ralando conforme a necessidade.',
      'Cozinhe, asse ou misture os ingredientes seguindo a lógica principal do prato.',
      'Ajuste os temperos (sal, pimenta, ervas) a gosto.',
      'Finalize a montagem do prato e sirva em seguida.'
    ],
    nutrition: { kcal: 280, cho: 12, protein: 3, fat: 26, fiber: 9, sugar: 1 }, // Porção inteira
    glycemicTip: 'Esta pasta substitui a manteiga com mais nutrientes e sabor.',
    glycemicLoad: 2,
    faqs: ['faq1', 'faq2']
  }
];

export const recipes: Recipe[] = [...baseRecipes, ...recipesAlmoco, ...recipesAlmoco2, ...recipesAlmoco3, ...recipesAlmoco4, ...recipesAlmoco5, ...recipesAlmoco6, ...recipesAlmoco7, ...recipesJantar1, ...recipesJantar2, ...recipesJantar3, ...recipesJantar4, ...recipesLanches1, ...recipesLanches2, ...recipesLanches3, ...recipesLanches4];

