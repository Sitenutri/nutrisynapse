'use client';

import React, { useState } from 'react';
import { Home as HomeIcon, BookOpen, Camera, Activity, FileText } from 'lucide-react';
import Home from './Home';
import Recipes from './Recipes';
import Scanner from './Scanner';
import Tracker from './Tracker';
import Guides from './Guides';

export default function AlimentacaoInteligente() {
  const [tab, setTab] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 max-w-md mx-auto relative overflow-hidden shadow-2xl">
      <main className="h-full overflow-y-auto">
        {tab === 'home' && <Home setTab={setTab} />}
        {tab === 'recipes' && <Recipes />}
        {tab === 'scanner' && <Scanner />}
        {tab === 'tracker' && <Tracker />}
        {tab === 'guides' && <Guides />}
      </main>

      <nav className="fixed bottom-0 w-full max-w-md bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center z-50">
        <button
          onClick={() => setTab('home')}
          className={`flex flex-col items-center gap-1 ${tab === 'home' ? 'text-[#317b8a]' : 'text-gray-400'}`}
        >
          <HomeIcon size={24} strokeWidth={tab === 'home' ? 2.5 : 2} />
          <span className="text-[10px] font-medium">Inicio</span>
        </button>
        <button
          onClick={() => setTab('recipes')}
          className={`flex flex-col items-center gap-1 ${tab === 'recipes' ? 'text-[#317b8a]' : 'text-gray-400'}`}
        >
          <BookOpen size={24} strokeWidth={tab === 'recipes' ? 2.5 : 2} />
          <span className="text-[10px] font-medium">Receitas</span>
        </button>
        <button
          onClick={() => setTab('scanner')}
          className={`flex flex-col items-center gap-1 -mt-5 bg-white p-2 rounded-full border border-gray-100 shadow-sm ${tab === 'scanner' ? 'text-[#317b8a]' : 'text-gray-400'}`}
        >
          <div className={`p-3 rounded-full ${tab === 'scanner' ? 'bg-[#317b8a] text-white' : 'bg-gray-100 text-gray-500'}`}>
            <Camera size={24} strokeWidth={2} />
          </div>
        </button>
        <button
          onClick={() => setTab('tracker')}
          className={`flex flex-col items-center gap-1 ${tab === 'tracker' ? 'text-[#317b8a]' : 'text-gray-400'}`}
        >
          <Activity size={24} strokeWidth={tab === 'tracker' ? 2.5 : 2} />
          <span className="text-[10px] font-medium">Tracker</span>
        </button>
        <button
          onClick={() => setTab('guides')}
          className={`flex flex-col items-center gap-1 ${tab === 'guides' ? 'text-[#317b8a]' : 'text-gray-400'}`}
        >
          <FileText size={24} strokeWidth={tab === 'guides' ? 2.5 : 2} />
          <span className="text-[10px] font-medium">Guias</span>
        </button>
      </nav>
    </div>
  );
}
