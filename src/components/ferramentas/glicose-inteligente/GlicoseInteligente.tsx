'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuHouse, LuSearch, LuUtensils, LuBookOpen } from 'react-icons/lu';
import Dashboard from './screens/Dashboard';
import PodeOuNaoPode from './screens/PodeOuNaoPode';
import AnalisarRotulo from './screens/AnalisarRotulo';
import MontarPrato from './screens/MontarPrato';
import GuiaRapido from './screens/GuiaRapido';
import Favoritos from './screens/Favoritos';
import Perfil from './screens/Perfil';
import type { Screen } from './types';

export default function GlicoseInteligente() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard': return <Dashboard onNavigate={setCurrentScreen} />;
      case 'podeOuNao': return <PodeOuNaoPode />;
      case 'rotulo': return <AnalisarRotulo />;
      case 'montar': return <MontarPrato />;
      case 'guia': return <GuiaRapido />;
      case 'favoritos': return <Favoritos onNavigate={setCurrentScreen} />;
      case 'perfil': return <Perfil />;
      default: return <Dashboard onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900 pb-20">
      
      {/* Internal Header - back button when not on dashboard */}
      {currentScreen !== 'dashboard' && (
        <header className="p-4 bg-white shadow-sm flex items-center shrink-0 sticky top-0 z-10">
          <button 
            onClick={() => setCurrentScreen('dashboard')}
            className="text-emerald-600 font-medium flex items-center"
          >
            ← Voltar
          </button>
          <span className="ml-auto font-semibold text-gray-800">
            {currentScreen === 'podeOuNao' && 'Pode ou Não Pode?'}
            {currentScreen === 'rotulo' && 'Analisar Rótulo'}
            {currentScreen === 'montar' && 'Montar Prato'}
            {currentScreen === 'guia' && 'Guia Rápido'}
            {currentScreen === 'favoritos' && 'Meus Favoritos'}
            {currentScreen === 'perfil' && 'Meu Perfil'}
          </span>
        </header>
      )}

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-md mx-auto overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 flex justify-around p-3 shadow-lg text-xs z-50">
        <button onClick={() => setCurrentScreen('dashboard')} className={`flex flex-col items-center p-2 rounded-xl transition-colors ${currentScreen === 'dashboard' ? 'text-emerald-600 bg-emerald-50' : 'text-gray-500 hover:text-emerald-500'}`}>
          <LuHouse size={24} />
          <span className="mt-1 font-medium">Início</span>
        </button>
        <button onClick={() => setCurrentScreen('podeOuNao')} className={`flex flex-col items-center p-2 rounded-xl transition-colors ${currentScreen === 'podeOuNao' ? 'text-emerald-600 bg-emerald-50' : 'text-gray-500 hover:text-emerald-500'}`}>
          <LuSearch size={24} />
          <span className="mt-1 font-medium">Busca</span>
        </button>
        <button onClick={() => setCurrentScreen('montar')} className={`flex flex-col items-center p-2 rounded-xl transition-colors ${currentScreen === 'montar' ? 'text-emerald-600 bg-emerald-50' : 'text-gray-500 hover:text-emerald-500'}`}>
          <LuUtensils size={24} />
          <span className="mt-1 font-medium">Prato</span>
        </button>
        <button onClick={() => setCurrentScreen('guia')} className={`flex flex-col items-center p-2 rounded-xl transition-colors ${currentScreen === 'guia' ? 'text-emerald-600 bg-emerald-50' : 'text-gray-500 hover:text-emerald-500'}`}>
          <LuBookOpen size={24} />
          <span className="mt-1 font-medium">Guia</span>
        </button>
      </nav>
    </div>
  );
}
