'use client';

import { LuSearch, LuScanLine, LuUtensils, LuHeart, LuUser, LuChevronRight } from 'react-icons/lu';
import { useFavorites } from '../hooks/useFavorites';
import type { Screen } from '../types';

interface DashboardProps {
  onNavigate: (screen: Screen) => void;
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  const { favorites } = useFavorites();

  return (
    <div className="p-6 pb-24 h-full overflow-y-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">O que você vai comer agora?</h1>
          <p className="text-gray-500 mt-1">Decida em segundos. Sem dúvida.</p>
        </div>
        <button onClick={() => onNavigate('perfil')} className="bg-white p-3 rounded-full shadow-sm text-emerald-600 hover:bg-emerald-50 transition-colors">
          <LuUser size={24} />
        </button>
      </div>

      <div className="grid gap-4">
        <button
          onClick={() => onNavigate('podeOuNao')}
          className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow text-left group"
        >
          <div className="bg-emerald-100 p-4 rounded-2xl text-emerald-600 group-hover:scale-105 transition-transform">
            <LuSearch size={32} />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-gray-900">Pode ou Não Pode?</h2>
            <p className="text-sm text-gray-500 mt-1">Busque um alimento rápido</p>
          </div>
          <LuChevronRight className="text-gray-300" />
        </button>

        <button
          onClick={() => onNavigate('rotulo')}
          className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow text-left group"
        >
          <div className="bg-amber-100 p-4 rounded-2xl text-amber-600 group-hover:scale-105 transition-transform">
            <LuScanLine size={32} />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-gray-900">Analisar Rótulo</h2>
            <p className="text-sm text-gray-500 mt-1">Detecte ingredientes perigosos</p>
          </div>
          <LuChevronRight className="text-gray-300" />
        </button>

        <button
          onClick={() => onNavigate('montar')}
          className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow text-left group"
        >
          <div className="bg-blue-100 p-4 rounded-2xl text-blue-600 group-hover:scale-105 transition-transform">
            <LuUtensils size={32} />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-gray-900">Montar Prato</h2>
            <p className="text-sm text-gray-500 mt-1">Verifique se está equilibrado</p>
          </div>
          <LuChevronRight className="text-gray-300" />
        </button>
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-900">Favoritos Rápidos</h3>
          <button onClick={() => onNavigate('favoritos')} className="text-emerald-600 text-sm font-medium hover:underline flex items-center gap-1">
            Ver todos <LuChevronRight size={16} />
          </button>
        </div>
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer group" onClick={() => onNavigate('favoritos')}>
          {favorites.length === 0 ? (
            <div className="flex items-center gap-3 text-gray-500 flex-1">
              <LuHeart size={20} className="text-gray-300" />
              <span className="text-sm">Você ainda não tem favoritos guardados.</span>
            </div>
          ) : (
            <div className="flex items-center gap-3 text-emerald-700 flex-1">
              <div className="bg-red-50 p-2 rounded-full">
                <LuHeart size={20} className="text-red-500 fill-red-500" />
              </div>
              <span className="text-sm font-medium">Você tem {favorites.length} alimento{favorites.length === 1 ? '' : 's'} salvo{favorites.length === 1 ? '' : 's'}.</span>
            </div>
          )}
          <LuChevronRight className="text-gray-300 group-hover:text-emerald-500 transition-colors" />
        </div>
      </div>
    </div>
  );
}
