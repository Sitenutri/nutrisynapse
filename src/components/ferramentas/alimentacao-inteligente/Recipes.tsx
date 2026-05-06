'use client';

import React, { useState } from 'react';
import { recipes, Recipe } from '@/data/ferramentas/alimentacao-inteligente/recipes';
import { ChevronRight, Clock, Info, ArrowLeft, ChevronDown, ChevronUp, Coffee, Sun, Moon, Baby, Apple, Utensils } from 'lucide-react';

const MAIN_CATEGORIES = [
  { id: 'cafe', label: 'Cafe da Manha', icon: <Coffee size={20} /> },
  { id: 'almoco', label: 'Almoco', icon: <Sun size={20} /> },
  { id: 'lanches', label: 'Lanches', icon: <Apple size={20} /> },
  { id: 'jantar', label: 'Jantar', icon: <Moon size={20} /> },
  { id: 'infantil', label: 'Infantil', icon: <Baby size={20} /> }
];

const categoryMapping: Record<string, string[]> = {
  'cafe': ['Omeletes e Ovos', 'Crepiocas e Panquecas', 'P\u00e3es Low Carb', 'Pudins e Cremes', 'Iogurtes e Granolas', 'Bolos Low Carb', 'Bebidas e Smoothies', 'Op\u00e7\u00f5es R\u00e1pidas'],
  'lanches': ['Lanches Doces', 'Lanches Salgados', 'Lanches R\u00e1pidos'],
  'almoco': ['Saladas Completas', 'Aves', 'Carnes Vermelhas e Su\u00ednos', 'Peixes e Frutos do Mar', 'Vegetarianas e Ovos', 'Massas & Gr\u00e3os Alternativos', 'Receitas Especiais', 'Sopas & Caldos', 'Ovos & Queijos'],
  'jantar': ['Peixes e Frutos do Mar', 'Aves', 'Carnes Magras e Ovos', 'Vegetarianas e Leguminosas'],
  'infantil': []
};

export default function Recipes() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('cafe');

  if (selectedRecipe) {
    const dynamicFaqs = [
      {
        id: 'dyn-cg',
        question: 'Qual a Carga Glicemica (CG) dessa porcao?',
        answer: `A Carga Glicemica desta receita e ${selectedRecipe.glycemicLoad}. ${
          selectedRecipe.glycemicLoad <= 10
            ? 'Isso e considerado baixo e tem um impacto minimo no acucar no sangue, sendo muito seguro.'
            : selectedRecipe.glycemicLoad <= 19
              ? 'Isso e considerado medio. E seguro, mas consuma com moderacao e monitore sua glicemia.'
              : 'Isso e considerado alto. Fique atento ao tamanho da porcao e tente combinar com mais fibras ou proteinas.'
        }`
      },
      {
        id: 'dyn-fiber',
        question: 'Como posso melhorar ainda mais o impacto glicemico?',
        answer: `Esta receita ja contem ${selectedRecipe.nutrition.fiber}g de fibras. Para melhorar ainda mais, voce pode adicionar uma colher de sementes de chia, linhaca ou psyllium, que ajudam a retardar a absorcao dos carboidratos.`
      },
      {
        id: 'dyn-category',
        question: 'Posso comer isso em outros horarios?',
        answer: `Sim! Embora seja classificada como ${selectedRecipe.category}, voce pode adaptar o tamanho da porcao para consumir em outros momentos do dia, dependendo da sua fome e da sua meta de carboidratos.`
      }
    ];

    if (selectedRecipe.ingredients.some(i => i.toLowerCase().includes('ovo'))) {
      dynamicFaqs.push({
        id: 'dyn-egg',
        question: 'Por que o ovo e bom para diabeticos?',
        answer: 'O ovo e rico em proteinas e gorduras boas, o que ajuda a estabilizar a glicemia e proporciona saciedade prolongada, evitando picos de acucar no sangue.'
      });
    }

    if (selectedRecipe.ingredients.some(i => i.toLowerCase().includes('aveia'))) {
      dynamicFaqs.push({
        id: 'dyn-oats',
        question: 'A aveia nao aumenta a glicemia?',
        answer: 'A aveia contem beta-glucana, uma fibra soluvel que forma um gel no estomago, atrasando a digestao e a absorcao dos carboidratos, o que ajuda a evitar picos glicemicos.'
      });
    }

    if (selectedRecipe.ingredients.some(i => i.toLowerCase().includes('abobora') || i.toLowerCase().includes('abóbora'))) {
      dynamicFaqs.push({
        id: 'dyn-pumpkin',
        question: 'Abobora e segura para diabeticos?',
        answer: 'Sim, a abobora cabotia tem Indice Glicemico medio, mas Carga Glicemica baixa em porcoes controladas, sendo segura e nutritiva.'
      });
    }

    if (selectedRecipe.ingredients.some(i => i.toLowerCase().includes('quinoa'))) {
      dynamicFaqs.push({
        id: 'dyn-quinoa',
        question: 'Quinoa e melhor que arroz?',
        answer: 'Sim, a quinoa tem mais proteinas e fibras que o arroz branco, alem de um Indice Glicemico menor, proporcionando mais saciedade e controle glicemico.'
      });
    }

    if (selectedRecipe.ingredients.some(i => i.toLowerCase().includes('ricota') || i.toLowerCase().includes('queijo branco'))) {
      dynamicFaqs.push({
        id: 'dyn-cheese',
        question: 'Posso comer queijo a vontade?',
        answer: 'Queijos brancos e ricota sao otimas opcoes por terem menos gordura saturada e sodio que os amarelos, mas ainda contem calorias, entao o consumo deve ser moderado.'
      });
    }

    if (selectedRecipe.ingredients.some(i => i.toLowerCase().includes('azeite'))) {
      dynamicFaqs.push({
        id: 'dyn-oliveoil',
        question: 'O azeite ajuda na glicemia?',
        answer: 'Sim! O azeite e uma gordura saudavel que, quando consumida junto com carboidratos, ajuda a diminuir a velocidade de absorcao do acucar no sangue.'
      });
    }

    const recipeFaqs = dynamicFaqs;

    return (
      <div className="p-4 pb-24 bg-white min-h-screen">
        <button
          onClick={() => setSelectedRecipe(null)}
          className="flex items-center text-[#317b8a] mb-4 font-medium"
        >
          <ArrowLeft size={20} className="mr-1" /> Voltar
        </button>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">{selectedRecipe.title}</h1>
        <div className="flex items-center text-gray-500 text-sm mb-6">
          <Clock size={16} className="mr-1" /> {selectedRecipe.prepTime} min
          <span className="mx-2">&bull;</span>
          <span className="bg-[#317b8a]/10 text-[#317b8a] px-2 py-0.5 rounded-full text-xs font-medium">
            CG: {selectedRecipe.glycemicLoad}
          </span>
        </div>

        <div className="bg-[#317b8a]/5 p-4 rounded-2xl mb-6 border border-[#317b8a]/20">
          <div className="flex items-start gap-3">
            <Info className="text-[#317b8a] shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-[#317b8a] leading-relaxed">
              {selectedRecipe.glycemicTip}
            </p>
          </div>
        </div>

        <h2 className="text-lg font-semibold text-gray-800 mb-3">Ingredientes</h2>
        <ul className="space-y-2 mb-6">
          {selectedRecipe.ingredients.map((ing, i) => (
            <li key={i} className="flex items-center text-gray-700">
              <div className="w-1.5 h-1.5 bg-[#317b8a] rounded-full mr-2"></div>
              {ing}
            </li>
          ))}
        </ul>

        {selectedRecipe.instructions && selectedRecipe.instructions.length > 0 && (
          <>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Modo de Preparo</h2>
            <ol className="space-y-3 mb-6">
              {selectedRecipe.instructions.map((step, i) => (
                <li key={i} className="flex text-gray-700">
                  <span className="font-bold text-[#317b8a] mr-3">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </>
        )}

        <h2 className="text-lg font-semibold text-gray-800 mb-3">Informacao Nutricional</h2>
        <div className="grid grid-cols-3 gap-2 mb-8">
          <div className="bg-gray-50 p-3 rounded-xl text-center">
            <div className="text-xs text-gray-500 uppercase">Kcal</div>
            <div className="font-semibold text-gray-800">{selectedRecipe.nutrition.kcal}</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-xl text-center">
            <div className="text-xs text-gray-500 uppercase">Carb</div>
            <div className="font-semibold text-gray-800">{selectedRecipe.nutrition.cho}g</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-xl text-center">
            <div className="text-xs text-gray-500 uppercase">Prot</div>
            <div className="font-semibold text-gray-800">{selectedRecipe.nutrition.protein}g</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-xl text-center">
            <div className="text-xs text-gray-500 uppercase">Gord</div>
            <div className="font-semibold text-gray-800">{selectedRecipe.nutrition.fat}g</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-xl text-center">
            <div className="text-xs text-gray-500 uppercase">Fibras</div>
            <div className="font-semibold text-gray-800">{selectedRecipe.nutrition.fiber}g</div>
          </div>
        </div>

        {recipeFaqs.length > 0 && (
          <>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Duvidas Frequentes</h2>
            <div className="space-y-3">
              {recipeFaqs.map(faq => (
                <div key={faq.id} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left bg-white"
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  >
                    <span className="font-medium text-gray-800 pr-4">{faq.question}</span>
                    {openFaq === faq.id ? <ChevronUp size={20} className="text-gray-400 shrink-0" /> : <ChevronDown size={20} className="text-gray-400 shrink-0" />}
                  </button>
                  {openFaq === faq.id && (
                    <div className="p-4 pt-0 text-gray-600 text-sm bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  const activeSubcategories = categoryMapping[activeTab] || [];
  const filteredRecipes = recipes.filter(r => activeSubcategories.includes(r.category));

  return (
    <div className="p-4 pb-24 space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900">Receitas</h1>
        <p className="text-gray-600">Opcoes seguras e deliciosas para o seu dia</p>
      </header>

      <div className="flex overflow-x-auto pb-2 -mx-4 px-4 gap-2 scrollbar-hide">
        {MAIN_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap transition-colors ${
              activeTab === cat.id
                ? 'bg-[#317b8a] text-white font-medium shadow-md'
                : 'bg-white text-gray-600 border border-gray-200'
            }`}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {filteredRecipes.length > 0 ? (
          activeSubcategories.map(subcategory => {
            const subRecipes = filteredRecipes.filter(r => r.category === subcategory);
            if (subRecipes.length === 0) return null;

            return (
              <div key={subcategory}>
                <h2 className="text-lg font-semibold text-gray-800 mb-3">{subcategory}</h2>
                <div className="space-y-3">
                  {subRecipes.map(recipe => (
                    <button
                      key={recipe.id}
                      onClick={() => setSelectedRecipe(recipe)}
                      className="w-full bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between active:scale-95 transition-transform text-left"
                    >
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">{recipe.title}</h3>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock size={14} className="mr-1" /> {recipe.prepTime} min
                          <span className="mx-2">&bull;</span>
                          CG: {recipe.glycemicLoad}
                        </div>
                      </div>
                      <ChevronRight className="text-gray-400" />
                    </button>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Utensils className="text-gray-400" size={32} />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-1">Em breve!</h3>
            <p className="text-gray-500 text-sm max-w-[250px] mx-auto">
              Estamos preparando receitas deliciosas para esta categoria. Volte em breve!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
