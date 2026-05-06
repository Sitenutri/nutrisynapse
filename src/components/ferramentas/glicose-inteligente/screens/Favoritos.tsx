'use client';

import { useMemo } from 'react';
import { LuHeart, LuSearch, LuCircleCheck, LuTriangleAlert, LuCircleX, LuInfo } from 'react-icons/lu';
import type { Screen } from '../types';
import { foodsDb } from '@/data/ferramentas/glicose-inteligente/foods';
import { useFavorites } from '../hooks/useFavorites';

export default function Favoritos({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const { favorites, toggleFavorite } = useFavorites();

  const favoriteFoods = useMemo(() => {
    return foodsDb.filter(f => favorites.includes(f.id));
  }, [favorites]);

  const renderBadge = (classificacao: string) => {
    switch (classificacao) {
      case 'pode':
        return <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1"><LuCircleCheck size={12}/> Pode</span>;
      case 'cuidado':
        return <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1"><LuTriangleAlert size={12}/> Cuidado</span>;
      case 'evitar':
        return <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1"><LuCircleX size={12}/> Evitar</span>;
    }
  };

  if (favoriteFoods.length === 0) {
    return (
      <div className="p-6 h-full flex flex-col items-center justify-center text-center pb-32">
        <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mb-6">
          <LuHeart size={48} className="text-gray-300" />
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-2">Nenhum favorito ainda</h2>
        <p className="text-gray-500 mb-8 max-w-[250px]">
          Você pode salvar seus alimentos e combinações preferidas aqui para acesso rápido.
        </p>

        <button 
          onClick={() => onNavigate('podeOuNao')}
          className="bg-emerald-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-emerald-700 transition-colors flex items-center gap-2"
        >
          <LuSearch size={20} />
          Buscar alimentos
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 h-full flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto pb-24 space-y-4">
        {favoriteFoods.map((food) => (
          <div key={food.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3 relative overflow-hidden">
            <div className="flex justify-between items-start gap-4">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-gray-900">{food.nome}</h3>
                <button 
                  onClick={() => toggleFavorite(food.id)}
                  className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <LuHeart 
                    size={20} 
                    className="fill-red-500 text-red-500"
                  />
                </button>
              </div>
              {renderBadge(food.classificacao)}
            </div>
            
            <p className="text-gray-600 text-sm">{food.observacao}</p>
            
            {food.combinar_com && (
              <div className="mt-2 bg-emerald-50 p-3 rounded-xl border border-emerald-100 flex gap-2 items-start">
                <LuCircleCheck className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                <p className="text-sm text-emerald-800"><span className="font-semibold">Melhor combinação:</span> {food.combinar_com}</p>
              </div>
            )}
            
            {food.alerta && (
              <div className="mt-2 bg-red-50 p-3 rounded-xl border border-red-100 flex gap-2 items-start">
                <LuTriangleAlert className="text-red-500 shrink-0 mt-0.5" size={16} />
                <p className="text-sm text-red-800"><span className="font-semibold">Alerta:</span> {food.alerta}</p>
              </div>
            )}

            {food.alternativa && (
              <div className="mt-2 bg-blue-50 p-3 rounded-xl border border-blue-100 flex gap-2 items-start">
                <LuInfo className="text-blue-500 shrink-0 mt-0.5" size={16} />
                <p className="text-sm text-blue-800"><span className="font-semibold">Alternativa:</span> {food.alternativa}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
