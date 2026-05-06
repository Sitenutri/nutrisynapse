'use client';

import { useState, useMemo } from 'react';
import { LuSearch, LuInfo, LuTriangleAlert, LuCircleCheck, LuCircleX, LuHeart } from 'react-icons/lu';
import { foodsDb, type Alimento } from '@/data/ferramentas/glicose-inteligente/foods';
import { useFavorites } from '../hooks/useFavorites';

export default function PodeOuNaoPode() {
  const [query, setQuery] = useState('');
  const { favorites, toggleFavorite } = useFavorites();

  const filteredFoods = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return foodsDb.filter(food => food.nome.toLowerCase().includes(lowerQuery));
  }, [query]);

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

  return (
    <div className="p-6 h-full flex flex-col overflow-hidden">
      <div className="relative mb-6 shrink-0">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <LuSearch className="text-gray-400" size={20} />
        </div>
        <input
          type="text"
          className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg transition-shadow"
          placeholder="Ex: Arroz, Pão, Maçã..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
      </div>

      <div className="flex-1 overflow-y-auto pb-24 space-y-4">
        {query.trim() === '' ? (
          <div className="text-center text-gray-400 mt-10">
            <LuSearch size={48} className="mx-auto mb-4 opacity-20" />
            <p>Comece a digitar para buscar um alimento.</p>
          </div>
        ) : filteredFoods.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">
            <p>Alimento não encontrado.</p>
            <p className="text-sm mt-2 opacity-70">Tente buscar por um termo mais simples.</p>
          </div>
        ) : (
          filteredFoods.map((food) => (
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
                      className={favorites.includes(food.id) ? "fill-red-500 text-red-500" : "text-gray-400"} 
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
          ))
        )}
      </div>
    </div>
  );
}
