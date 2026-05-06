'use client';

import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

const SubstitutionsTable = () => {
  const [openCategory, setOpenCategory] = useState<string | null>('Café da Manhã');
  const [openSubcategory, setOpenSubcategory] = useState<string | null>(null);

  const toggleCategory = (cat: string) => {
    setOpenCategory(openCategory === cat ? null : cat);
    setOpenSubcategory(null);
  };

  const toggleSubcategory = (subcat: string) => {
    setOpenSubcategory(openSubcategory === subcat ? null : subcat);
  };

  const data = [
  {
    "category": "Café da Manhã",
    "subcategories": [
      {
        "title": "Proteínas",
        "items": [
          {
            "from": "Ovo Frito em Óleo",
            "to": "Ovo Cozido ou Mexido com Pouco Óleo",
            "impact": "0%",
            "benefit": "Mesma proteína; menos calorias"
          },
          {
            "from": "Ovo Frito em Óleo",
            "to": "Clara de Ovo",
            "impact": "0%",
            "benefit": "Proteína pura; sem gordura"
          },
          {
            "from": "Ovo Frito em Óleo",
            "to": "Omelete com Vegetais",
            "impact": "0%",
            "benefit": "Proteína + fibra; mais saciante"
          },
          {
            "from": "Presunto Processado",
            "to": "Frango Desfiado",
            "impact": "0%",
            "benefit": "Menos sódio; menos gordura saturada"
          },
          {
            "from": "Presunto Processado",
            "to": "Ovos",
            "impact": "0%",
            "benefit": "Mais proteína; sem aditivos"
          },
          {
            "from": "Queijo Amarelo Gorduroso",
            "to": "Queijo Branco (Minas Frescal)",
            "impact": "0%",
            "benefit": "Menos gordura; mais cálcio"
          },
          {
            "from": "Queijo Amarelo Gorduroso",
            "to": "Ricota",
            "impact": "0%",
            "benefit": "Menos calorias; mais proteína"
          },
          {
            "from": "Iogurte Integral com Açúcar",
            "to": "Iogurte Natural Desnatado",
            "impact": "50%",
            "benefit": "Menos açúcar; menos gordura"
          },
          {
            "from": "Leite Integral",
            "to": "Leite Desnatado",
            "impact": "0%",
            "benefit": "Menos gordura; mesma proteína"
          },
          {
            "from": "Leite com Açúcar",
            "to": "Leite com Adoçante (Estévia/Eritritol)",
            "impact": "100%",
            "benefit": "Zero açúcar adicionado"
          },
          {
            "from": "Requeijão Gorduroso",
            "to": "Requeijão Light",
            "impact": "0%",
            "benefit": "Menos calorias; menos gordura"
          },
          {
            "from": "Presunto Frito",
            "to": "Presunto Grelhado",
            "impact": "30%",
            "benefit": "Menos gordura; menos calorias"
          }
        ]
      },
      {
        "title": "Carboidratos",
        "items": [
          {
            "from": "Pão Branco",
            "to": "Pão Integral",
            "impact": "30%",
            "benefit": "Mais fibras; IG mais baixo"
          },
          {
            "from": "Pão Branco",
            "to": "Pão Low-Carb",
            "impact": "80%",
            "benefit": "Menos carboidratos; mais proteína"
          },
          {
            "from": "Pão Branco",
            "to": "Tapioca com Queijo",
            "impact": "20%",
            "benefit": "Menos glúten; mais proteína"
          },
          {
            "from": "Biscoito Doce",
            "to": "Biscoito Integral ou Sem Açúcar",
            "impact": "70%",
            "benefit": "Menos açúcar; mais fibras"
          },
          {
            "from": "Biscoito Doce",
            "to": "Granola Sem Açúcar",
            "impact": "50%",
            "benefit": "Mais fibras; mais nutrientes"
          },
          {
            "from": "Cereal Açucarado",
            "to": "Aveia em Flocos",
            "impact": "60%",
            "benefit": "Mais fibras; IG mais baixo"
          },
          {
            "from": "Cereal Açucarado",
            "to": "Granola Natural (sem açúcar)",
            "impact": "70%",
            "benefit": "Mais nutrientes; mais fibras"
          },
          {
            "from": "Suco de Laranja (Caixinha)",
            "to": "Suco Natural Fresco",
            "impact": "20%",
            "benefit": "Menos processado; mais vitaminas"
          },
          {
            "from": "Suco de Laranja",
            "to": "Laranja Inteira com Casca",
            "impact": "50%",
            "benefit": "Mais fibra; menor IG"
          },
          {
            "from": "Suco de Maçã",
            "to": "Maçã Inteira com Casca",
            "impact": "50%",
            "benefit": "Mais fibra; menor IG"
          },
          {
            "from": "Mel",
            "to": "Estévia ou Eritritol",
            "impact": "100%",
            "benefit": "Zero impacto glicêmico"
          },
          {
            "from": "Açúcar Mascavo",
            "to": "Adoçante Natural (Estévia)",
            "impact": "100%",
            "benefit": "Zero açúcar"
          },
          {
            "from": "Geleia Açucarada",
            "to": "Geleia Sem Açúcar",
            "impact": "80%",
            "benefit": "Menos açúcar; mesma textura"
          },
          {
            "from": "Leite Condensado",
            "to": "Leite Integral + Adoçante",
            "impact": "70%",
            "benefit": "Menos açúcar; menos gordura"
          },
          {
            "from": "Banana",
            "to": "Morango ou Melancia",
            "impact": "30%",
            "benefit": "Menor IG; mais vitamina C"
          },
          {
            "from": "Banana",
            "to": "Maçã com Casca",
            "impact": "40%",
            "benefit": "Mais fibra; menor IG"
          },
          {
            "from": "Granola Açucarada",
            "to": "Granola Sem Açúcar",
            "impact": "60%",
            "benefit": "Menos açúcar; mais fibras"
          },
          {
            "from": "Waffle Branco",
            "to": "Waffle Integral ou Low-Carb",
            "impact": "50%",
            "benefit": "Mais fibra; menos carboidrato"
          },
          {
            "from": "Panqueca Branca",
            "to": "Panqueca de Aveia",
            "impact": "40%",
            "benefit": "Mais fibra; mais proteína"
          },
          {
            "from": "Bolo Comum",
            "to": "Bolo de Abóbora ou Cenoura",
            "impact": "50%",
            "benefit": "Mais fibra; mais nutrientes"
          }
        ]
      },
      {
        "title": "Gorduras",
        "items": [
          {
            "from": "Manteiga Comum",
            "to": "Manteiga com Moderação",
            "impact": "0%",
            "benefit": "Mesma proteína; controle de porção"
          },
          {
            "from": "Margarina Processada",
            "to": "Azeite de Oliva",
            "impact": "0%",
            "benefit": "Gordura saudável; ômega-3"
          },
          {
            "from": "Óleo de Soja",
            "to": "Óleo de Coco ou Azeite",
            "impact": "0%",
            "benefit": "Menos inflamação; melhor qualidade"
          },
          {
            "from": "Leite Integral",
            "to": "Leite Desnatado",
            "impact": "0%",
            "benefit": "Menos gordura saturada"
          },
          {
            "from": "Creme de Leite",
            "to": "Iogurte Natural Desnatado",
            "impact": "0%",
            "benefit": "Menos calorias; probióticos"
          }
        ]
      },
      {
        "title": "Bebidas",
        "items": [
          {
            "from": "Suco de Caixinha",
            "to": "Suco Natural Fresco",
            "impact": "20%",
            "benefit": "Menos processado; mais vitaminas"
          },
          {
            "from": "Refrigerante Comum",
            "to": "Água com Limão",
            "impact": "100%",
            "benefit": "Zero açúcar; zero calorias"
          },
          {
            "from": "Refrigerante Diet",
            "to": "Água com Gás Natural",
            "impact": "100%",
            "benefit": "Sem adoçantes artificiais"
          },
          {
            "from": "Café com Açúcar",
            "to": "Café com Adoçante (Estévia)",
            "impact": "100%",
            "benefit": "Zero açúcar"
          },
          {
            "from": "Leite Integral Açucarado",
            "to": "Leite Desnatado com Adoçante",
            "impact": "80%",
            "benefit": "Menos açúcar; menos gordura"
          },
          {
            "from": "Chocolate Quente Açucarado",
            "to": "Chocolate Quente com Adoçante",
            "impact": "80%",
            "benefit": "Menos açúcar; mesmo sabor"
          }
        ]
      }
    ]
  },
  {
    "category": "Almoço",
    "subcategories": [
      {
        "title": "Proteínas",
        "items": [
          {
            "from": "Carne Vermelha Gorda (Costela)",
            "to": "Carne Magra (Filé, Patinho)",
            "impact": "0%",
            "benefit": "Menos gordura saturada; mesma proteína"
          },
          {
            "from": "Carne Vermelha Gorda",
            "to": "Carne Moída (90% magra)",
            "impact": "0%",
            "benefit": "Menos gordura; mesma proteína"
          },
          {
            "from": "Carne Vermelha Frita",
            "to": "Carne Vermelha Grelhada ou Assada",
            "impact": "80%",
            "benefit": "Menos gordura; menos calorias"
          },
          {
            "from": "Carne Vermelha Frita",
            "to": "Carne de Bison ou Veado",
            "impact": "0%",
            "benefit": "Proteína similar; menor teor de gordura"
          },
          {
            "from": "Carne Processada (Salsicha)",
            "to": "Carne Vermelha Fresca",
            "impact": "0%",
            "benefit": "Menos sódio; sem aditivos"
          },
          {
            "from": "Frango com Pele",
            "to": "Frango sem Pele",
            "impact": "0%",
            "benefit": "Menos gordura saturada; mesma proteína"
          },
          {
            "from": "Peito de Frango Frito",
            "to": "Coxa de Frango (sem pele)",
            "impact": "0%",
            "benefit": "Mais suculento; ligeiramente mais proteína"
          },
          {
            "from": "Frango Frito",
            "to": "Frango Grelhado ou Assado",
            "impact": "80%",
            "benefit": "Menos gordura; menos calorias"
          },
          {
            "from": "Frango Temperado com Açúcar",
            "to": "Frango com Ervas Secas (alecrim, tomilho)",
            "impact": "100%",
            "benefit": "Sem picos de glicemia; mais sabor natural"
          },
          {
            "from": "Frango",
            "to": "Peru (sem pele)",
            "impact": "0%",
            "benefit": "Proteína similar; menos gordura"
          },
          {
            "from": "Peixe Branco (Tilápia, Merluza)",
            "to": "Salmão, Sardinha, Atum",
            "impact": "0%",
            "benefit": "Ômega-3 aumentado; melhor sensibilidade à insulina"
          },
          {
            "from": "Peixe Branco",
            "to": "Truta, Peixe-Espada",
            "impact": "0%",
            "benefit": "Proteína similar; mais acessível em algumas regiões"
          },
          {
            "from": "Camarão",
            "to": "Polvo, Lula",
            "impact": "0%",
            "benefit": "Proteína similar; menor teor de colesterol"
          },
          {
            "from": "Atum Enlatado (em óleo)",
            "to": "Atum Fresco ou Enlatado em Água",
            "impact": "20%",
            "benefit": "Menos gordura saturada"
          },
          {
            "from": "Frutos do Mar Fritos",
            "to": "Frutos do Mar Grelhados ou Assados",
            "impact": "80%",
            "benefit": "Eliminação de carboidratos da farinha de trigo"
          },
          {
            "from": "Tofu Frito",
            "to": "Tofu Grelhado ou Assado",
            "impact": "50%",
            "benefit": "Menos calorias; menos gordura"
          },
          {
            "from": "Tofu",
            "to": "Tempeh",
            "impact": "0%",
            "benefit": "Proteína similar; mais fibras; melhor absorção"
          },
          {
            "from": "Proteína Isolada (Pó)",
            "to": "Proteína em Pó Natural (Ovos, Leite)",
            "impact": "0%",
            "benefit": "Menos processada; mais nutrientes"
          },
          {
            "from": "Carne Vermelha Processada (Salsichão)",
            "to": "Carne Vermelha Fresca",
            "impact": "0%",
            "benefit": "Menos sódio; sem aditivos"
          }
        ]
      },
      {
        "title": "Carboidratos",
        "items": [
          {
            "from": "Arroz Branco",
            "to": "Arroz Integral ou Arroz Selvagem",
            "impact": "40%",
            "benefit": "Mais fibras; IG mais baixo"
          },
          {
            "from": "Arroz Branco",
            "to": "Couve-Flor em Grãos",
            "impact": "80%",
            "benefit": "Quase zero carboidratos; mais volume"
          },
          {
            "from": "Arroz Branco",
            "to": "Quinoa",
            "impact": "30%",
            "benefit": "Proteína completa; mais fibras"
          },
          {
            "from": "Macarrão Branco",
            "to": "Macarrão Integral",
            "impact": "35%",
            "benefit": "Mais fibras; IG mais baixo"
          },
          {
            "from": "Macarrão Branco",
            "to": "Espaguete de Abobrinha ou Abóbora",
            "impact": "85%",
            "benefit": "Quase zero carboidratos; mais nutrientes"
          },
          {
            "from": "Macarrão Branco",
            "to": "Macarrão de Lentilha ou Grão-de-Bico",
            "impact": "50%",
            "benefit": "Mais proteína; mais fibras"
          },
          {
            "from": "Pão Branco",
            "to": "Pão Integral (com moderação)",
            "impact": "30%",
            "benefit": "Mais fibras; IG mais baixo"
          },
          {
            "from": "Pão Branco",
            "to": "Pão Low-Carb",
            "impact": "80%",
            "benefit": "Menos carboidratos; mais proteína"
          },
          {
            "from": "Biscoito Doce",
            "to": "Biscoito Integral ou Sem Açúcar",
            "impact": "70%",
            "benefit": "Menos açúcar; mais fibras"
          },
          {
            "from": "Batata Inglesa",
            "to": "Batata-Doce",
            "impact": "20%",
            "benefit": "Mais fibras; mais vitaminas"
          },
          {
            "from": "Batata Inglesa",
            "to": "Chuchu",
            "impact": "60%",
            "benefit": "Menos carboidratos; mais volume"
          },
          {
            "from": "Batata Inglesa",
            "to": "Abóbora ou Cabotiá",
            "impact": "40%",
            "benefit": "Mais fibras; mais vitaminas"
          },
          {
            "from": "Batata Frita",
            "to": "Batata Assada com Casca",
            "impact": "50%",
            "benefit": "Menos gordura; mais fibras"
          },
          {
            "from": "Batata Frita",
            "to": "Chips de Vegetais (Cenoura, Beterraba)",
            "impact": "30%",
            "benefit": "Menos gordura; mais nutrientes"
          },
          {
            "from": "Mandioca",
            "to": "Mandioquinha",
            "impact": "25%",
            "benefit": "Mais fibras; IG mais baixo"
          },
          {
            "from": "Batata Inglesa",
            "to": "Nabo ou Rabanete",
            "impact": "75%",
            "benefit": "Quase zero carboidratos; mais volume"
          },
          {
            "from": "Feijão Branco",
            "to": "Lentilha",
            "impact": "10%",
            "benefit": "Mais fibras; IG mais baixo"
          },
          {
            "from": "Feijão Branco",
            "to": "Grão-de-Bico",
            "impact": "15%",
            "benefit": "Mais proteína; mais fibras"
          },
          {
            "from": "Feijão Carioca",
            "to": "Feijão Preto",
            "impact": "5%",
            "benefit": "Mais antioxidantes; similar em CG"
          },
          {
            "from": "Feijão com Arroz (1:1)",
            "to": "Feijão com Arroz (2:1)",
            "impact": "40%",
            "benefit": "Mais proteína; menos carboidratos"
          },
          {
            "from": "Feijão Enlatado (com xarope)",
            "to": "Feijão Enlatado (sem xarope) ou Fresco",
            "impact": "30%",
            "benefit": "Menos açúcar adicionado"
          }
        ]
      },
      {
        "title": "Vegetais",
        "items": [
          {
            "from": "Alface Comum",
            "to": "Espinafre ou Rúcula",
            "impact": "0%",
            "benefit": "Mais ferro; mais nutrientes"
          },
          {
            "from": "Alface Comum",
            "to": "Couve ou Couve-Manteiga",
            "impact": "0%",
            "benefit": "Mais cálcio; mais fibras"
          },
          {
            "from": "Salada Pronta (com molho açucarado)",
            "to": "Salada Fresca com Azeite e Limão",
            "impact": "100%",
            "benefit": "Sem açúcar adicionado"
          },
          {
            "from": "Acelga",
            "to": "Brócolis ou Couve-Flor",
            "impact": "20%",
            "benefit": "Mais proteína; mais fibras"
          },
          {
            "from": "Brócolis Cozido",
            "to": "Brócolis Cru ou Levemente Cozido",
            "impact": "0%",
            "benefit": "Mais enzimas; mais nutrientes"
          },
          {
            "from": "Cenoura Cozida",
            "to": "Cenoura Crua",
            "impact": "30%",
            "benefit": "Menor IG; mais fibra"
          },
          {
            "from": "Milho",
            "to": "Ervilha",
            "impact": "20%",
            "benefit": "Mais proteína; mais fibra"
          },
          {
            "from": "Milho",
            "to": "Brócolis ou Couve-Flor",
            "impact": "70%",
            "benefit": "Menos carboidratos; mais nutrientes"
          },
          {
            "from": "Tomate Enlatado (com açúcar)",
            "to": "Tomate Fresco ou Enlatado Sem Açúcar",
            "impact": "80%",
            "benefit": "Menos açúcar adicionado"
          },
          {
            "from": "Abóbora Doce",
            "to": "Abóbora Cabotiá ou Moranga",
            "impact": "10%",
            "benefit": "Menos açúcar natural"
          },
          {
            "from": "Batata-Doce",
            "to": "Cenoura ou Beterraba",
            "impact": "40%",
            "benefit": "Menos carboidratos; mais fibra"
          },
          {
            "from": "Beterraba Cozida",
            "to": "Beterraba Crua",
            "impact": "20%",
            "benefit": "Menor IG; mais enzimas"
          },
          {
            "from": "Molho de Tomate Açucarado",
            "to": "Molho de Tomate Caseiro ou Sem Açúcar",
            "impact": "90%",
            "benefit": "Menos açúcar; mais controle"
          },
          {
            "from": "Vegetais Fritos",
            "to": "Vegetais Grelhados ou Assados",
            "impact": "50%",
            "benefit": "Menos gordura; menos calorias"
          }
        ]
      },
      {
        "title": "Bebidas",
        "items": [
          {
            "from": "Suco de Caixinha",
            "to": "Suco Natural Fresco",
            "impact": "20%",
            "benefit": "Menos processado; mais vitaminas"
          },
          {
            "from": "Refrigerante Comum",
            "to": "Água com Limão",
            "impact": "100%",
            "benefit": "Zero açúcar; zero calorias"
          },
          {
            "from": "Refrigerante Diet",
            "to": "Água com Gás Natural",
            "impact": "100%",
            "benefit": "Sem adoçantes artificiais"
          },
          {
            "from": "Suco Açucarado",
            "to": "Chá Gelado Sem Açúcar",
            "impact": "100%",
            "benefit": "Zero açúcar; antioxidantes"
          },
          {
            "from": "Bebida de Soja Açucarada",
            "to": "Bebida de Soja Sem Açúcar",
            "impact": "80%",
            "benefit": "Menos açúcar; mesma proteína"
          }
        ]
      }
    ]
  },
  {
    "category": "Lanches",
    "subcategories": [
      {
        "title": "Proteínas",
        "items": [
          {
            "from": "Iogurte com Açúcar",
            "to": "Iogurte Natural Desnatado",
            "impact": "50%",
            "benefit": "Menos açúcar; probióticos"
          },
          {
            "from": "Queijo Amarelo Gorduroso",
            "to": "Queijo Branco (Minas Frescal)",
            "impact": "0%",
            "benefit": "Menos gordura; mais cálcio"
          },
          {
            "from": "Iogurte Grego Açucarado",
            "to": "Iogurte Grego Natural",
            "impact": "70%",
            "benefit": "Menos açúcar; mais proteína"
          },
          {
            "from": "Leite com Açúcar",
            "to": "Leite com Adoçante (Estévia)",
            "impact": "100%",
            "benefit": "Zero açúcar adicionado"
          },
          {
            "from": "Presunto Processado",
            "to": "Frango Desfiado",
            "impact": "0%",
            "benefit": "Menos sódio; menos gordura"
          },
          {
            "from": "Ovo Frito",
            "to": "Ovo Cozido",
            "impact": "0%",
            "benefit": "Mesma proteína; menos calorias"
          }
        ]
      },
      {
        "title": "Carboidratos",
        "items": [
          {
            "from": "Biscoito Doce",
            "to": "Biscoito Integral ou Sem Açúcar",
            "impact": "70%",
            "benefit": "Menos açúcar; mais fibras"
          },
          {
            "from": "Biscoito Doce",
            "to": "Biscoito de Queijo",
            "impact": "60%",
            "benefit": "Menos açúcar; mais proteína"
          },
          {
            "from": "Bolo Comum",
            "to": "Bolo de Abóbora ou Cenoura",
            "impact": "50%",
            "benefit": "Mais fibra; mais nutrientes"
          },
          {
            "from": "Bolo Açucarado",
            "to": "Bolo com Adoçante Natural",
            "impact": "80%",
            "benefit": "Menos açúcar; mesmo sabor"
          },
          {
            "from": "Chocolate com Açúcar",
            "to": "Chocolate Amargo (70%+)",
            "impact": "60%",
            "benefit": "Menos açúcar; mais antioxidantes"
          },
          {
            "from": "Doce de Leite",
            "to": "Doce de Leite com Adoçante",
            "impact": "80%",
            "benefit": "Menos açúcar; mesmo sabor"
          },
          {
            "from": "Geleia Açucarada",
            "to": "Geleia Sem Açúcar",
            "impact": "80%",
            "benefit": "Menos açúcar; mesma textura"
          },
          {
            "from": "Banana",
            "to": "Morango ou Melancia",
            "impact": "30%",
            "benefit": "Menor IG; mais vitamina C"
          },
          {
            "from": "Banana",
            "to": "Maçã com Casca",
            "impact": "40%",
            "benefit": "Mais fibra; menor IG"
          },
          {
            "from": "Suco de Fruta",
            "to": "Fruta Inteira",
            "impact": "50%",
            "benefit": "Mais fibra; menor IG"
          },
          {
            "from": "Granola Açucarada",
            "to": "Granola Sem Açúcar",
            "impact": "60%",
            "benefit": "Menos açúcar; mais fibras"
          },
          {
            "from": "Barra de Cereal Açucarada",
            "to": "Barra de Cereal Sem Açúcar",
            "impact": "70%",
            "benefit": "Menos açúcar; mais fibras"
          },
          {
            "from": "Pão Branco",
            "to": "Pão Integral",
            "impact": "30%",
            "benefit": "Mais fibras; IG mais baixo"
          },
          {
            "from": "Pão Branco",
            "to": "Pão Low-Carb",
            "impact": "80%",
            "benefit": "Menos carboidratos; mais proteína"
          },
          {
            "from": "Waffle Açucarado",
            "to": "Waffle Integral ou Low-Carb",
            "impact": "50%",
            "benefit": "Mais fibra; menos carboidrato"
          },
          {
            "from": "Bolo de Chocolate",
            "to": "Bolo de Chocolate com Adoçante",
            "impact": "80%",
            "benefit": "Menos açúcar; mesmo sabor"
          },
          {
            "from": "Pudim Açucarado",
            "to": "Pudim com Adoçante Natural",
            "impact": "80%",
            "benefit": "Menos açúcar; mesma textura"
          },
          {
            "from": "Sorvete Comum",
            "to": "Sorvete Diet ou Sem Açúcar",
            "impact": "70%",
            "benefit": "Menos açúcar; menos calorias"
          }
        ]
      },
      {
        "title": "Frutas",
        "items": [
          {
            "from": "Banana",
            "to": "Morango",
            "impact": "30%",
            "benefit": "Menor IG; mais vitamina C"
          },
          {
            "from": "Banana",
            "to": "Maçã com Casca",
            "impact": "40%",
            "benefit": "Mais fibra; menor IG"
          },
          {
            "from": "Abacaxi",
            "to": "Melancia",
            "impact": "30%",
            "benefit": "Menor IG; mais hidratação"
          },
          {
            "from": "Uva Comum",
            "to": "Melancia ou Melão",
            "impact": "20%",
            "benefit": "Menor IG; mais volume"
          },
          {
            "from": "Suco de Laranja",
            "to": "Laranja Inteira com Casca",
            "impact": "50%",
            "benefit": "Mais fibra; menor IG"
          },
          {
            "from": "Suco de Maçã",
            "to": "Maçã Inteira com Casca",
            "impact": "50%",
            "benefit": "Mais fibra; menor IG"
          },
          {
            "from": "Fruta Seca (Tâmara)",
            "to": "Fruta Seca com Moderação (Ameixa)",
            "impact": "20%",
            "benefit": "Menos açúcar natural"
          },
          {
            "from": "Melancia Açucarada",
            "to": "Melancia Fresca",
            "impact": "0%",
            "benefit": "Mesma fruta; melhor qualidade"
          }
        ]
      },
      {
        "title": "Bebidas",
        "items": [
          {
            "from": "Suco de Caixinha",
            "to": "Suco Natural Fresco",
            "impact": "20%",
            "benefit": "Menos processado; mais vitaminas"
          },
          {
            "from": "Refrigerante Comum",
            "to": "Água com Limão",
            "impact": "100%",
            "benefit": "Zero açúcar; zero calorias"
          },
          {
            "from": "Refrigerante Diet",
            "to": "Água com Gás Natural",
            "impact": "100%",
            "benefit": "Sem adoçantes artificiais"
          },
          {
            "from": "Chocolate Quente Açucarado",
            "to": "Chocolate Quente com Adoçante",
            "impact": "80%",
            "benefit": "Menos açúcar; mesmo sabor"
          },
          {
            "from": "Café com Açúcar",
            "to": "Café com Adoçante (Estévia)",
            "impact": "100%",
            "benefit": "Zero açúcar"
          },
          {
            "from": "Chá Açucarado",
            "to": "Chá com Adoçante ou Sem Açúcar",
            "impact": "100%",
            "benefit": "Zero açúcar; antioxidantes"
          },
          {
            "from": "Bebida de Soja Açucarada",
            "to": "Bebida de Soja Sem Açúcar",
            "impact": "80%",
            "benefit": "Menos açúcar; mesma proteína"
          }
        ]
      }
    ]
  },
  {
    "category": "Jantar",
    "subcategories": [
      {
        "title": "Proteínas",
        "items": [
          {
            "from": "Carne Vermelha Gorda (Costela)",
            "to": "Carne Magra (Filé, Patinho)",
            "impact": "0%",
            "benefit": "Menos gordura saturada; mesma proteína"
          },
          {
            "from": "Carne Vermelha Gorda",
            "to": "Carne Moída (90% magra)",
            "impact": "0%",
            "benefit": "Menos gordura; mesma proteína"
          },
          {
            "from": "Carne Vermelha Frita",
            "to": "Carne Vermelha Grelhada ou Assada",
            "impact": "80%",
            "benefit": "Menos gordura; menos calorias"
          },
          {
            "from": "Carne Vermelha Frita",
            "to": "Carne de Bison ou Veado",
            "impact": "0%",
            "benefit": "Proteína similar; menor teor de gordura"
          },
          {
            "from": "Carne Processada (Salsicha)",
            "to": "Carne Vermelha Fresca",
            "impact": "0%",
            "benefit": "Menos sódio; sem aditivos"
          },
          {
            "from": "Frango com Pele",
            "to": "Frango sem Pele",
            "impact": "0%",
            "benefit": "Menos gordura saturada; mesma proteína"
          },
          {
            "from": "Peito de Frango Frito",
            "to": "Coxa de Frango (sem pele)",
            "impact": "0%",
            "benefit": "Mais suculento; ligeiramente mais proteína"
          },
          {
            "from": "Frango Frito",
            "to": "Frango Grelhado ou Assado",
            "impact": "80%",
            "benefit": "Menos gordura; menos calorias"
          },
          {
            "from": "Frango Temperado com Açúcar",
            "to": "Frango com Ervas Secas (alecrim, tomilho)",
            "impact": "100%",
            "benefit": "Sem picos de glicemia; mais sabor natural"
          },
          {
            "from": "Frango",
            "to": "Peru (sem pele)",
            "impact": "0%",
            "benefit": "Proteína similar; menos gordura"
          },
          {
            "from": "Peixe Branco (Tilápia, Merluza)",
            "to": "Salmão, Sardinha, Atum",
            "impact": "0%",
            "benefit": "Ômega-3 aumentado; melhor sensibilidade à insulina"
          },
          {
            "from": "Peixe Branco",
            "to": "Truta, Peixe-Espada",
            "impact": "0%",
            "benefit": "Proteína similar; mais acessível em algumas regiões"
          },
          {
            "from": "Camarão",
            "to": "Polvo, Lula",
            "impact": "0%",
            "benefit": "Proteína similar; menor teor de colesterol"
          },
          {
            "from": "Atum Enlatado (em óleo)",
            "to": "Atum Fresco ou Enlatado em Água",
            "impact": "20%",
            "benefit": "Menos gordura saturada"
          },
          {
            "from": "Frutos do Mar Fritos",
            "to": "Frutos do Mar Grelhados ou Assados",
            "impact": "80%",
            "benefit": "Eliminação de carboidratos da farinha de trigo"
          },
          {
            "from": "Tofu Frito",
            "to": "Tofu Grelhado ou Assado",
            "impact": "50%",
            "benefit": "Menos calorias; menos gordura"
          },
          {
            "from": "Tofu",
            "to": "Tempeh",
            "impact": "0%",
            "benefit": "Proteína similar; mais fibras; melhor absorção"
          },
          {
            "from": "Proteína Isolada (Pó)",
            "to": "Proteína em Pó Natural (Ovos, Leite)",
            "impact": "0%",
            "benefit": "Menos processada; mais nutrientes"
          },
          {
            "from": "Carne Vermelha Processada (Salsichão)",
            "to": "Carne Vermelha Fresca",
            "impact": "0%",
            "benefit": "Menos sódio; sem aditivos"
          }
        ]
      },
      {
        "title": "Carboidratos",
        "items": [
          {
            "from": "Arroz Branco",
            "to": "Arroz Integral ou Arroz Selvagem",
            "impact": "40%",
            "benefit": "Mais fibras; IG mais baixo"
          },
          {
            "from": "Arroz Branco",
            "to": "Couve-Flor em Grãos",
            "impact": "80%",
            "benefit": "Quase zero carboidratos; mais volume"
          },
          {
            "from": "Arroz Branco",
            "to": "Quinoa",
            "impact": "30%",
            "benefit": "Proteína completa; mais fibras"
          },
          {
            "from": "Macarrão Branco",
            "to": "Macarrão Integral",
            "impact": "35%",
            "benefit": "Mais fibras; IG mais baixo"
          },
          {
            "from": "Macarrão Branco",
            "to": "Espaguete de Abobrinha ou Abóbora",
            "impact": "85%",
            "benefit": "Quase zero carboidratos; mais nutrientes"
          },
          {
            "from": "Macarrão Branco",
            "to": "Macarrão de Lentilha ou Grão-de-Bico",
            "impact": "50%",
            "benefit": "Mais proteína; mais fibras"
          },
          {
            "from": "Pão Branco",
            "to": "Pão Integral (com moderação)",
            "impact": "30%",
            "benefit": "Mais fibras; IG mais baixo"
          },
          {
            "from": "Pão Branco",
            "to": "Pão Low-Carb",
            "impact": "80%",
            "benefit": "Menos carboidratos; mais proteína"
          },
          {
            "from": "Batata Inglesa",
            "to": "Batata-Doce",
            "impact": "20%",
            "benefit": "Mais fibras; mais vitaminas"
          },
          {
            "from": "Batata Inglesa",
            "to": "Chuchu",
            "impact": "60%",
            "benefit": "Menos carboidratos; mais volume"
          },
          {
            "from": "Batata Inglesa",
            "to": "Abóbora ou Cabotiá",
            "impact": "40%",
            "benefit": "Mais fibras; mais vitaminas"
          },
          {
            "from": "Batata Frita",
            "to": "Batata Assada com Casca",
            "impact": "50%",
            "benefit": "Menos gordura; mais fibras"
          },
          {
            "from": "Batata Frita",
            "to": "Chips de Vegetais (Cenoura, Beterraba)",
            "impact": "30%",
            "benefit": "Menos gordura; mais nutrientes"
          },
          {
            "from": "Mandioca",
            "to": "Mandioquinha",
            "impact": "25%",
            "benefit": "Mais fibras; IG mais baixo"
          },
          {
            "from": "Batata Inglesa",
            "to": "Nabo ou Rabanete",
            "impact": "75%",
            "benefit": "Quase zero carboidratos; mais volume"
          },
          {
            "from": "Feijão Branco",
            "to": "Lentilha",
            "impact": "10%",
            "benefit": "Mais fibras; IG mais baixo"
          },
          {
            "from": "Feijão Branco",
            "to": "Grão-de-Bico",
            "impact": "15%",
            "benefit": "Mais proteína; mais fibras"
          },
          {
            "from": "Feijão Carioca",
            "to": "Feijão Preto",
            "impact": "5%",
            "benefit": "Mais antioxidantes; similar em CG"
          },
          {
            "from": "Feijão com Arroz (1:1)",
            "to": "Feijão com Arroz (2:1)",
            "impact": "40%",
            "benefit": "Mais proteína; menos carboidratos"
          },
          {
            "from": "Feijão Enlatado (com xarope)",
            "to": "Feijão Enlatado (sem xarope) ou Fresco",
            "impact": "30%",
            "benefit": "Menos açúcar adicionado"
          }
        ]
      },
      {
        "title": "Vegetais",
        "items": [
          {
            "from": "Alface Comum",
            "to": "Espinafre ou Rúcula",
            "impact": "0%",
            "benefit": "Mais ferro; mais nutrientes"
          },
          {
            "from": "Alface Comum",
            "to": "Couve ou Couve-Manteiga",
            "impact": "0%",
            "benefit": "Mais cálcio; mais fibras"
          },
          {
            "from": "Salada Pronta (com molho açucarado)",
            "to": "Salada Fresca com Azeite e Limão",
            "impact": "100%",
            "benefit": "Sem açúcar adicionado"
          },
          {
            "from": "Acelga",
            "to": "Brócolis ou Couve-Flor",
            "impact": "20%",
            "benefit": "Mais proteína; mais fibras"
          },
          {
            "from": "Brócolis Cozido",
            "to": "Brócolis Cru ou Levemente Cozido",
            "impact": "0%",
            "benefit": "Mais enzimas; mais nutrientes"
          },
          {
            "from": "Cenoura Cozida",
            "to": "Cenoura Crua",
            "impact": "30%",
            "benefit": "Menor IG; mais fibra"
          },
          {
            "from": "Milho",
            "to": "Ervilha",
            "impact": "20%",
            "benefit": "Mais proteína; mais fibra"
          },
          {
            "from": "Milho",
            "to": "Brócolis ou Couve-Flor",
            "impact": "70%",
            "benefit": "Menos carboidratos; mais nutrientes"
          },
          {
            "from": "Tomate Enlatado (com açúcar)",
            "to": "Tomate Fresco ou Enlatado Sem Açúcar",
            "impact": "80%",
            "benefit": "Menos açúcar adicionado"
          },
          {
            "from": "Abóbora Doce",
            "to": "Abóbora Cabotiá ou Moranga",
            "impact": "10%",
            "benefit": "Menos açúcar natural"
          },
          {
            "from": "Batata-Doce",
            "to": "Cenoura ou Beterraba",
            "impact": "40%",
            "benefit": "Menos carboidratos; mais fibra"
          },
          {
            "from": "Beterraba Cozida",
            "to": "Beterraba Crua",
            "impact": "20%",
            "benefit": "Menor IG; mais enzimas"
          },
          {
            "from": "Molho de Tomate Açucarado",
            "to": "Molho de Tomate Caseiro ou Sem Açúcar",
            "impact": "90%",
            "benefit": "Menos açúcar; mais controle"
          },
          {
            "from": "Vegetais Fritos",
            "to": "Vegetais Grelhados ou Assados",
            "impact": "50%",
            "benefit": "Menos gordura; menos calorias"
          }
        ]
      },
      {
        "title": "Bebidas",
        "items": [
          {
            "from": "Suco de Caixinha",
            "to": "Suco Natural Fresco",
            "impact": "20%",
            "benefit": "Menos processado; mais vitaminas"
          },
          {
            "from": "Refrigerante Comum",
            "to": "Água com Limão",
            "impact": "100%",
            "benefit": "Zero açúcar; zero calorias"
          },
          {
            "from": "Refrigerante Diet",
            "to": "Água com Gás Natural",
            "impact": "100%",
            "benefit": "Sem adoçantes artificiais"
          },
          {
            "from": "Suco Açucarado",
            "to": "Chá Gelado Sem Açúcar",
            "impact": "100%",
            "benefit": "Zero açúcar; antioxidantes"
          },
          {
            "from": "Bebida de Soja Açucarada",
            "to": "Bebida de Soja Sem Açúcar",
            "impact": "80%",
            "benefit": "Menos açúcar; mesma proteína"
          },
          {
            "from": "Vinho Tinto Comum",
            "to": "Vinho Tinto Seco",
            "impact": "30%",
            "benefit": "Menos açúcar residual"
          }
        ]
      }
    ]
  }
];

  return (
    <div className="space-y-4 mt-6">
      <h3 className="font-bold text-lg mb-2 text-gray-800">Tabela de Substituições Expandida</h3>
      <p className="mb-4 text-gray-600">Explore as melhores opções de substituição para cada refeição do dia.</p>
      
      {data.map((cat, i) => (
        <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
          <button 
            onClick={() => toggleCategory(cat.category)}
            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <span className="font-bold text-[#317b8a] text-lg">{cat.category}</span>
            {openCategory === cat.category ? <ChevronDown size={20} className="text-[#317b8a]" /> : <ChevronRight size={20} className="text-gray-400" />}
          </button>
          
          {openCategory === cat.category && (
            <div className="p-2 space-y-2 bg-white">
              {cat.subcategories.map((subcat, j) => (
                <div key={j} className="border border-gray-100 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => toggleSubcategory(cat.category + '-' + subcat.title)}
                    className="w-full flex items-center justify-between p-3 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-700">{subcat.title}</span>
                    {openSubcategory === (cat.category + '-' + subcat.title) ? <ChevronDown size={18} className="text-gray-500" /> : <ChevronRight size={18} className="text-gray-400" />}
                  </button>
                  
                  {openSubcategory === (cat.category + '-' + subcat.title) && (
                    <div className="p-3 bg-gray-50/50 space-y-3">
                      {subcat.items.map((item, k) => (
                        <div key={k} className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <span className="text-sm font-medium text-red-500 line-through">{item.from}</span>
                            <ChevronRight size={14} className="hidden sm:block text-gray-400" />
                            <span className="text-sm font-bold text-[#76a86b]">{item.to}</span>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-md font-medium">
                              Redução: {item.impact}
                            </span>
                            <span className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded-md">
                              {item.benefit}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SubstitutionsTable;
