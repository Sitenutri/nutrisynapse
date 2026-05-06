export type Categoria = 
  | 'LEGUMINOSAS'
  | 'GRÃOS'
  | 'LEGUMES E RAÍZES'
  | 'FOLHAS'
  | 'SEMENTES E OLEAGINOSAS'
  | 'INGREDIENTES DE MOLHO';

export interface Ingrediente {
  nome: string;
  categoria: Categoria;
  quantidade_base: number;
  unidade: string;
}

export interface Semana {
  semana: number;
  titulo: string;
  ingredientes: Ingrediente[];
}

export const receitasData: Semana[] = [
  {
    "semana": 1,
    "titulo": "SEMANA 1 – Base leve e variada",
    "ingredientes": [
      {
        "nome": "Grão-de-bico",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 35,
        "unidade": "g"
      },
      {
        "nome": "Lentilha",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Feijão-branco",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Ervilha",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Quinoa",
        "categoria": "GRÃOS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Cenoura cozida",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 120,
        "unidade": "g"
      },
      {
        "nome": "Pepino",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 100,
        "unidade": "g"
      },
      {
        "nome": "Beterraba",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Repolho (roxo + branco)",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Tomate-cereja",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Abobrinha",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Brócolis",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Rúcula",
        "categoria": "FOLHAS",
        "quantidade_base": 60,
        "unidade": "g"
      },
      {
        "nome": "Alface (roxa + americana)",
        "categoria": "FOLHAS",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Agrião",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Escarola",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Couve-manteiga",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "frescas (salsinha, cebolinha, hortelã)",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      },
      {
        "nome": "Chia",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 2,
        "unidade": "col. sopa"
      },
      {
        "nome": "Linhaça ou girassol",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 1,
        "unidade": "col. sopa"
      },
      {
        "nome": "Gergelim",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 1,
        "unidade": "col. sopa"
      },
      {
        "nome": "Sementes de abóbora",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 1,
        "unidade": "col. sopa"
      },
      {
        "nome": "Nozes",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 1,
        "unidade": "col. sopa"
      },
      {
        "nome": "Azeite",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 1,
        "unidade": "col. sopa"
      },
      {
        "nome": "Limão",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 2,
        "unidade": "col. sopa"
      },
      {
        "nome": "Iogurte natural",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 4,
        "unidade": "col. sopa"
      },
      {
        "nome": "Tahine",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 22,
        "unidade": "ml"
      },
      {
        "nome": "Mostarda",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 7,
        "unidade": "ml"
      },
      {
        "nome": "Vinagre de maçã",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 15,
        "unidade": "ml"
      },
      {
        "nome": "Sal",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 1,
        "unidade": "g"
      },
      {
        "nome": "Pimenta",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "Orégano",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "Cúrcuma",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "Alho",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      }
    ]
  },
  {
    "semana": 2,
    "titulo": "SEMANA 2 – Crucíferas e folhas amargas",
    "ingredientes": [
      {
        "nome": "Quinoa",
        "categoria": "GRÃOS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Grão-de-bico",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 35,
        "unidade": "g"
      },
      {
        "nome": "Lentilha",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Ervilha",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Feijão-branco",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Abóbora em cubos",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 60,
        "unidade": "g"
      },
      {
        "nome": "Cenoura",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 85,
        "unidade": "g"
      },
      {
        "nome": "Pepino",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 100,
        "unidade": "g"
      },
      {
        "nome": "Beterraba cozida",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Brócolis",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Repolho (roxo + branco)",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Tomate sem sementes",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Pimentão amarelo",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Almeirão",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Agrião",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Rúcula",
        "categoria": "FOLHAS",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Alface (americana + crespa)",
        "categoria": "FOLHAS",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Couve-manteiga",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Espinafre",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "frescas Salsinha ¼ maço pequeno",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      },
      {
        "nome": "Coentro ¼ maço pequeno",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      },
      {
        "nome": "Linhaça",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Castanha-do-pará",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Gergelim",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Sementes de girassol",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 15,
        "unidade": "g"
      },
      {
        "nome": "Chia",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 15,
        "unidade": "g"
      },
      {
        "nome": "Amêndoas",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 15,
        "unidade": "g"
      },
      {
        "nome": "Azeite",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 15,
        "unidade": "ml"
      },
      {
        "nome": "Limão 1 un.",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 2,
        "unidade": "col. sopa"
      },
      {
        "nome": "Iogurte natural",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 60,
        "unidade": "ml"
      },
      {
        "nome": "Tahine",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 22,
        "unidade": "ml"
      },
      {
        "nome": "Vinagre de maçã",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 22,
        "unidade": "ml"
      },
      {
        "nome": "Sal",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 1,
        "unidade": "g"
      },
      {
        "nome": "Alho",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "Orégano",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "Cúrcuma",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "Hortelã",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "Alho-poró",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      }
    ]
  },
  {
    "semana": 3,
    "titulo": "SEMANA 3 – Raízes e amido resistente",
    "ingredientes": [
      {
        "nome": "Quinoa",
        "categoria": "GRÃOS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Lentilha",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Grão-de-bico",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 35,
        "unidade": "g"
      },
      {
        "nome": "Ervilha",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Feijão-vermelho",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Batata-doce",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 60,
        "unidade": "g"
      },
      {
        "nome": "Cenoura ralada",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 85,
        "unidade": "g"
      },
      {
        "nome": "Pepino",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 100,
        "unidade": "g"
      },
      {
        "nome": "Beterraba cozida",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 60,
        "unidade": "g"
      },
      {
        "nome": "Mandioquinha",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 60,
        "unidade": "g"
      },
      {
        "nome": "Brócolis",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 60,
        "unidade": "g"
      },
      {
        "nome": "Couve-flor",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 60,
        "unidade": "g"
      },
      {
        "nome": "Pimentão vermelho",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Alface crespa",
        "categoria": "FOLHAS",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Rúcula",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Agrião",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Alface americana",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Espinafre",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Alface roxa",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Coentro ½ maço",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      },
      {
        "nome": "Chia",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Castanha de caju",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 20,
        "unidade": "g"
      },
      {
        "nome": "Gergelim",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 20,
        "unidade": "g"
      },
      {
        "nome": "Nozes",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 15,
        "unidade": "g"
      },
      {
        "nome": "Linhaça",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 15,
        "unidade": "g"
      },
      {
        "nome": "Sementes de abóbora",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 15,
        "unidade": "g"
      },
      {
        "nome": "Azeite",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 15,
        "unidade": "ml"
      },
      {
        "nome": "Limão 1 un.",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 2,
        "unidade": "col. sopa"
      },
      {
        "nome": "Iogurte natural",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 30,
        "unidade": "ml"
      },
      {
        "nome": "Tahine",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 15,
        "unidade": "ml"
      },
      {
        "nome": "Mostarda",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 15,
        "unidade": "ml"
      },
      {
        "nome": "Vinagre de maçã",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 15,
        "unidade": "ml"
      },
      {
        "nome": "Sal",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 1,
        "unidade": "g"
      },
      {
        "nome": "Alho",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "Páprica doce",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "Ervas finas",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      }
    ]
  },
  {
    "semana": 4,
    "titulo": "SEMANA 4 – Cores roxas e vermelhas",
    "ingredientes": [
      {
        "nome": "Lentilha",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Grão-de-bico",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 35,
        "unidade": "g"
      },
      {
        "nome": "Quinoa",
        "categoria": "GRÃOS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Feijão-branco",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Ervilha",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Beterraba",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 130,
        "unidade": "g"
      },
      {
        "nome": "Tomate-cereja",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Pimentão vermelho",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Pepino",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 100,
        "unidade": "g"
      },
      {
        "nome": "Cenoura",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Repolho (roxo + branco)",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Tomate sem sementes",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Alface roxa",
        "categoria": "FOLHAS",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Rúcula",
        "categoria": "FOLHAS",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Agrião",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Couve-manteiga",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Alface crespa",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Espinafre",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Manjericão ½ maço",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      },
      {
        "nome": "Salsinha ¼ maço pequeno",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      },
      {
        "nome": "Coentro ½ maço",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      },
      {
        "nome": "Chia",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Linhaça",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Gergelim",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Sementes de girassol",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 15,
        "unidade": "g"
      },
      {
        "nome": "Castanha-do-pará",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 15,
        "unidade": "g"
      },
      {
        "nome": "Nozes",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 15,
        "unidade": "g"
      },
      {
        "nome": "Azeite",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 15,
        "unidade": "ml"
      },
      {
        "nome": "Limão 1 un.",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 2,
        "unidade": "col. sopa"
      },
      {
        "nome": "Iogurte natural",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 45,
        "unidade": "ml"
      },
      {
        "nome": "Tahine",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 22,
        "unidade": "ml"
      },
      {
        "nome": "Vinagre de maçã",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 22,
        "unidade": "ml"
      },
      {
        "nome": "Sal",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 1,
        "unidade": "g"
      },
      {
        "nome": "Alho",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "Orégano",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "Páprica",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "5g",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      }
    ]
  },
  {
    "semana": 5,
    "titulo": "SEMANA 5 – Verdes escuros e folhas brasileiras",
    "ingredientes": [
      {
        "nome": "Quinoa",
        "categoria": "GRÃOS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Lentilha",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Grão-de-bico",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 35,
        "unidade": "g"
      },
      {
        "nome": "Feijão-vermelho",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Ervilha",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Abobrinha crua",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Pepino",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 100,
        "unidade": "g"
      },
      {
        "nome": "Cenoura",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Brócolis",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Pimentão verde",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Beterraba",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Couve-flor",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Abóbora em cubos",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Couve-manteiga",
        "categoria": "FOLHAS",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Alface crespa",
        "categoria": "FOLHAS",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Alface americana",
        "categoria": "FOLHAS",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Rúcula",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Agrião",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Escarola",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Espinafre",
        "categoria": "FOLHAS",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Alface roxa",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Coentro ½ maço",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      },
      {
        "nome": "Salsinha ¼ maço pequeno",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      },
      {
        "nome": "Linhaça",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Castanha de caju",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Gergelim",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Sementes de abóbora",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 15,
        "unidade": "g"
      },
      {
        "nome": "Chia",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 15,
        "unidade": "g"
      },
      {
        "nome": "Nozes",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 15,
        "unidade": "g"
      },
      {
        "nome": "Azeite",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 15,
        "unidade": "ml"
      },
      {
        "nome": "Limão 1 un.",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 2,
        "unidade": "col. sopa"
      },
      {
        "nome": "Iogurte natural",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 45,
        "unidade": "ml"
      },
      {
        "nome": "Tahine",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 22,
        "unidade": "ml"
      },
      {
        "nome": "Mostarda",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 15,
        "unidade": "ml"
      },
      {
        "nome": "Vinagre",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 15,
        "unidade": "ml"
      },
      {
        "nome": "Sal",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 1,
        "unidade": "g"
      },
      {
        "nome": "Alho",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "Cúrcuma",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "Orégano",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      }
    ]
  },
  {
    "semana": 6,
    "titulo": "SEMANA 6 – Fibras solúveis e ervas aromáticas",
    "ingredientes": [
      {
        "nome": "Lentilha",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Grão-de-bico",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 35,
        "unidade": "g"
      },
      {
        "nome": "Quinoa",
        "categoria": "GRÃOS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Feijão-verde/corda",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Ervilha",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Cenoura",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 130,
        "unidade": "g"
      },
      {
        "nome": "Pepino",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 100,
        "unidade": "g"
      },
      {
        "nome": "Beterraba",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Repolho roxo",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Abóbora em cubos",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Couve-flor",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Tomate sem sementes",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Mandioquinha",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Repolho branco",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Alface americana",
        "categoria": "FOLHAS",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Rúcula",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Agrião",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Alface crespa",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Espinafre",
        "categoria": "FOLHAS",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Alface roxa",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Hortelã ½ maço",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      },
      {
        "nome": "Endro ½ maço",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      },
      {
        "nome": "Manjericão ½ maço",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      },
      {
        "nome": "Coentro ½ maço",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      },
      {
        "nome": "Chia",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Linhaça",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Gergelim",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Sementes de girassol",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 15,
        "unidade": "g"
      },
      {
        "nome": "Castanha-do-pará",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Nozes",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 15,
        "unidade": "g"
      },
      {
        "nome": "Azeite",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 15,
        "unidade": "ml"
      },
      {
        "nome": "Limão 1 un.",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 2,
        "unidade": "col. sopa"
      },
      {
        "nome": "Iogurte natural",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 45,
        "unidade": "ml"
      },
      {
        "nome": "Tahine",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 22,
        "unidade": "ml"
      },
      {
        "nome": "Vinagre",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 22,
        "unidade": "ml"
      },
      {
        "nome": "Sal",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 1,
        "unidade": "g"
      },
      {
        "nome": "Alho-poró",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "Alho",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "Gengibre",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "Páprica",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      }
    ]
  },
  {
    "semana": 7,
    "titulo": "SEMANA 7 – Perfil quase mediterrâneo",
    "ingredientes": [
      {
        "nome": "Grão-de-bico",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 35,
        "unidade": "g"
      },
      {
        "nome": "Lentilha",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Feijão-branco",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Quinoa",
        "categoria": "GRÃOS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Ervilha",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Tomate-cereja",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 85,
        "unidade": "g"
      },
      {
        "nome": "Pepino",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 100,
        "unidade": "g"
      },
      {
        "nome": "Pimentão amarelo",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 90,
        "unidade": "g"
      },
      {
        "nome": "Cenoura",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 90,
        "unidade": "g"
      },
      {
        "nome": "Abobrinha em cubos",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 90,
        "unidade": "g"
      },
      {
        "nome": "Beterraba",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 90,
        "unidade": "g"
      },
      {
        "nome": "Repolho roxo",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 90,
        "unidade": "g"
      },
      {
        "nome": "Couve-flor",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 90,
        "unidade": "g"
      },
      {
        "nome": "Alface americana",
        "categoria": "FOLHAS",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Rúcula",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Agrião",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Alface crespa",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Espinafre",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Escarola",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Orégano ½ maço",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      },
      {
        "nome": "Za'atar ½ maço",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      },
      {
        "nome": "Manjericão ½ maço",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      },
      {
        "nome": "Coentro ½ maço",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      },
      {
        "nome": "Gergelim",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 35,
        "unidade": "g"
      },
      {
        "nome": "Linhaça",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Sementes de abóbora",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 15,
        "unidade": "g"
      },
      {
        "nome": "Chia",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 15,
        "unidade": "g"
      },
      {
        "nome": "Castanha de caju",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 15,
        "unidade": "g"
      },
      {
        "nome": "Azeite",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 15,
        "unidade": "ml"
      },
      {
        "nome": "Limão 1 un.",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 2,
        "unidade": "col. sopa"
      },
      {
        "nome": "Iogurte natural",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 45,
        "unidade": "ml"
      },
      {
        "nome": "Tahine",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 22,
        "unidade": "ml"
      },
      {
        "nome": "Vinagre de maçã",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 15,
        "unidade": "ml"
      },
      {
        "nome": "Sal",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 1,
        "unidade": "g"
      },
      {
        "nome": "Alho",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "Páprica",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "Orégano",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "Alho-poró",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      }
    ]
  },
  {
    "semana": 8,
    "titulo": "SEMANA 8 – Mais raízes e crucíferas",
    "ingredientes": [
      {
        "nome": "Quinoa",
        "categoria": "GRÃOS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Grão-de-bico",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 35,
        "unidade": "g"
      },
      {
        "nome": "Lentilha",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Feijão-branco",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Ervilha",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Batata-doce",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 130,
        "unidade": "g"
      },
      {
        "nome": "Beterraba",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 130,
        "unidade": "g"
      },
      {
        "nome": "Cenoura",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 130,
        "unidade": "g"
      },
      {
        "nome": "Couve-flor",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 100,
        "unidade": "g"
      },
      {
        "nome": "Brócolis",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 100,
        "unidade": "g"
      },
      {
        "nome": "Mandioquinha",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 130,
        "unidade": "g"
      },
      {
        "nome": "Repolho (branco + roxo)",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 85,
        "unidade": "g"
      },
      {
        "nome": "Abobrinha ralada",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 85,
        "unidade": "g"
      },
      {
        "nome": "Alface crespa",
        "categoria": "FOLHAS",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Rúcula",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Agrião",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Alface americana",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Espinafre",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Couve-manteiga",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Alface roxa",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Coentro ¼ maço pequeno",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      },
      {
        "nome": "Salsinha ¼ maço pequeno",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      },
      {
        "nome": "Chia",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Linhaça",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Gergelim",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Sementes de girassol",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 15,
        "unidade": "g"
      },
      {
        "nome": "Castanha-do-pará",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Nozes",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 15,
        "unidade": "g"
      },
      {
        "nome": "Azeite",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 15,
        "unidade": "ml"
      },
      {
        "nome": "Limão 1 un.",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 2,
        "unidade": "col. sopa"
      },
      {
        "nome": "Iogurte natural",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 45,
        "unidade": "ml"
      },
      {
        "nome": "Tahine",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 22,
        "unidade": "ml"
      },
      {
        "nome": "Mostarda",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 15,
        "unidade": "ml"
      },
      {
        "nome": "Vinagre",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 15,
        "unidade": "ml"
      },
      {
        "nome": "Sal",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 1,
        "unidade": "g"
      },
      {
        "nome": "Alho",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "Cúrcuma",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "Ervas finas",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "Alho-poró",
        "categoria": "FOLHAS",
        "quantidade_base": 5,
        "unidade": "g"
      }
    ]
  },
  {
    "semana": 9,
    "titulo": "SEMANA 9 – Sabores simples brasileiros",
    "ingredientes": [
      {
        "nome": "Feijão-vermelho",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Lentilha",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Grão-de-bico",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 35,
        "unidade": "g"
      },
      {
        "nome": "Quinoa",
        "categoria": "GRÃOS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Ervilha",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Cenoura crua",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 85,
        "unidade": "g"
      },
      {
        "nome": "Pepino",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 100,
        "unidade": "g"
      },
      {
        "nome": "Beterraba",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 85,
        "unidade": "g"
      },
      {
        "nome": "Repolho roxo",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Couve-flor",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 85,
        "unidade": "g"
      },
      {
        "nome": "Abóbora",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 130,
        "unidade": "g"
      },
      {
        "nome": "Tomate em cubos",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 85,
        "unidade": "g"
      },
      {
        "nome": "Brócolis",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 85,
        "unidade": "g"
      },
      {
        "nome": "Alface americana",
        "categoria": "FOLHAS",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Rúcula",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Agrião",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Alface crespa",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Espinafre",
        "categoria": "FOLHAS",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Alface roxa",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Coentro ¼ maço pequeno",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      },
      {
        "nome": "Salsinha ¼ maço pequeno",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      },
      {
        "nome": "Chia",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Linhaça",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Gergelim",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Sementes de abóbora",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 15,
        "unidade": "g"
      },
      {
        "nome": "Castanha de caju",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Nozes",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 15,
        "unidade": "g"
      },
      {
        "nome": "Azeite",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 15,
        "unidade": "ml"
      },
      {
        "nome": "Limão 1 un.",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 2,
        "unidade": "col. sopa"
      },
      {
        "nome": "Iogurte natural",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 45,
        "unidade": "ml"
      },
      {
        "nome": "Tahine",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 22,
        "unidade": "ml"
      },
      {
        "nome": "Vinagre",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 22,
        "unidade": "ml"
      },
      {
        "nome": "Sal",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 1,
        "unidade": "g"
      },
      {
        "nome": "Alho",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "Páprica",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "Orégano",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "Alho-poró",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "5g",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      }
    ]
  },
  {
    "semana": 10,
    "titulo": "SEMANA 10 – Mais fermentados (consumir em até 2-5 dias)",
    "ingredientes": [
      {
        "nome": "Grão-de-bico",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 35,
        "unidade": "g"
      },
      {
        "nome": "Lentilha",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Feijão-branco",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Quinoa",
        "categoria": "GRÃOS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Ervilha",
        "categoria": "LEGUMINOSAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Pepino",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 100,
        "unidade": "g"
      },
      {
        "nome": "Cenoura",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 130,
        "unidade": "g"
      },
      {
        "nome": "Beterraba",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 130,
        "unidade": "g"
      },
      {
        "nome": "Repolho roxo",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 130,
        "unidade": "g"
      },
      {
        "nome": "Tomate-cereja",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 100,
        "unidade": "g"
      },
      {
        "nome": "Couve-flor",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 85,
        "unidade": "g"
      },
      {
        "nome": "Pimentão amarelo",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 85,
        "unidade": "g"
      },
      {
        "nome": "Abóbora em cubos",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 130,
        "unidade": "g"
      },
      {
        "nome": "Brócolis",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 85,
        "unidade": "g"
      },
      {
        "nome": "Rabanete",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Chucrute",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 45,
        "unidade": "ml"
      },
      {
        "nome": "Cenoura fermentada",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 15,
        "unidade": "ml"
      },
      {
        "nome": "Missô",
        "categoria": "LEGUMES E RAÍZES",
        "quantidade_base": 15,
        "unidade": "g"
      },
      {
        "nome": "Alface americana",
        "categoria": "FOLHAS",
        "quantidade_base": 90,
        "unidade": "g"
      },
      {
        "nome": "Rúcula",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Agrião",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Alface crespa",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Espinafre",
        "categoria": "FOLHAS",
        "quantidade_base": 45,
        "unidade": "g"
      },
      {
        "nome": "Alface roxa",
        "categoria": "FOLHAS",
        "quantidade_base": 30,
        "unidade": "g"
      },
      {
        "nome": "Salsinha ¼ maço pequeno",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      },
      {
        "nome": "Coentro ¼ maço pequeno",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      },
      {
        "nome": "Chia",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Linhaça",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Gergelim",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Sementes de girassol",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 15,
        "unidade": "g"
      },
      {
        "nome": "Castanha-do-pará",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 25,
        "unidade": "g"
      },
      {
        "nome": "Nozes",
        "categoria": "SEMENTES E OLEAGINOSAS",
        "quantidade_base": 15,
        "unidade": "g"
      },
      {
        "nome": "Iogurte natural",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 15,
        "unidade": "ml"
      },
      {
        "nome": "Kefir",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 45,
        "unidade": "ml"
      },
      {
        "nome": "Azeite",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 15,
        "unidade": "ml"
      },
      {
        "nome": "Limão 1 un.",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 2,
        "unidade": "col. sopa"
      },
      {
        "nome": "Vinagre",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 15,
        "unidade": "ml"
      },
      {
        "nome": "Sal",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 1,
        "unidade": "g"
      },
      {
        "nome": "Alho",
        "categoria": "INGREDIENTES DE MOLHO",
        "quantidade_base": 5,
        "unidade": "g"
      },
      {
        "nome": "5g",
        "categoria": "FOLHAS",
        "quantidade_base": 1,
        "unidade": "un."
      }
    ]
  }
];
