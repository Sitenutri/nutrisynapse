'use client';

import React, { useState, useEffect } from 'react';
import { Activity, Moon, Sun, Sunset, Droplets, Utensils } from 'lucide-react';
import Logo from './Logo';

export default function Home({ setTab }: { setTab: (tab: string) => void }) {
  const [timeOfDay, setTimeOfDay] = useState<'morning' | 'afternoon' | 'night'>('morning');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour <= 12) {
      setTimeOfDay('morning');
    } else if (hour > 12 && hour <= 18) {
      setTimeOfDay('afternoon');
    } else {
      setTimeOfDay('night');
    }
  }, []);

  const content = {
    morning: {
      greeting: 'Bom dia!',
      subtitle: 'Pronto para comecar bem o dia?',
      icon: <Sun className="text-amber-500" size={24} />,
      iconBg: 'bg-amber-100',
      focusTitle: 'Como foi seu sono?',
      focusDesc: 'Dormir bem reduz o cortisol e ajuda a evitar o Fenomeno do Alvorecer.',
      focusIcon: <Moon className="text-indigo-600" />,
      focusBg: 'bg-indigo-50 border-indigo-100',
      focusBtn: 'bg-indigo-500 text-white',
      focusAction: 'Registrar Sono e Glicemia',
      tipTitle: 'Dica da Manha',
      tipDesc: 'Beba um copo de agua ao acordar. Para o cafe da manha, prefira proteinas e gorduras boas para evitar picos de insulina logo cedo.'
    },
    afternoon: {
      greeting: 'Boa tarde!',
      subtitle: 'Como esta a sua energia?',
      icon: <Sun className="text-orange-500" size={24} />,
      iconBg: 'bg-orange-100',
      focusTitle: 'Glicemia Pos-Almoco',
      focusDesc: 'Verifique sua glicemia 2 horas apos o almoco para entender como seu corpo reagiu a refeicao.',
      focusIcon: <Activity className="text-orange-600" />,
      focusBg: 'bg-orange-50 border-orange-100',
      focusBtn: 'bg-orange-500 text-white',
      focusAction: 'Registrar Glicemia',
      tipTitle: 'Dica da Tarde',
      tipDesc: 'Se bater aquela fome, escolha um lanche rico em fibras (como castanhas ou abacate). Aproveite para dar uma leve caminhada!'
    },
    night: {
      greeting: 'Boa noite!',
      subtitle: 'Hora de desacelerar.',
      icon: <Sunset className="text-indigo-500" size={24} />,
      iconBg: 'bg-indigo-100',
      focusTitle: 'Resumo do Dia',
      focusDesc: 'Como foram seus niveis hoje? Registre sua glicemia antes de dormir para um controle seguro durante a noite.',
      focusIcon: <Droplets className="text-blue-600" />,
      focusBg: 'bg-blue-50 border-blue-100',
      focusBtn: 'bg-blue-500 text-white',
      focusAction: 'Registro Noturno',
      tipTitle: 'Dica da Noite',
      tipDesc: 'Um jantar leve e com poucos carboidratos ajuda a acordar com a glicemia controlada. Evite telas 1 hora antes de dormir.'
    }
  };

  const current = content[timeOfDay];

  return (
    <div className="p-4 pb-24 space-y-4">
      <div className="pt-2 pb-0">
        <Logo />
      </div>

      <header className="flex justify-between items-center mt-2">
        <div>
          <h2 className="text-2xl font-bold text-[#317b8a]">{current.greeting}</h2>
          <p className="text-gray-600">{current.subtitle}</p>
        </div>
        <div className={`${current.iconBg} p-3 rounded-full`}>
          {current.icon}
        </div>
      </header>

      <section className={`${current.focusBg} p-4 rounded-2xl border`}>
        <div className="flex items-center gap-3 mb-2">
          {current.focusIcon}
          <h2 className="font-semibold text-gray-800">{current.focusTitle}</h2>
        </div>
        <p className="text-sm text-gray-700 mb-4">
          {current.focusDesc}
        </p>
        <button
          onClick={() => setTab('tracker')}
          className={`w-full ${current.focusBtn} py-2 rounded-xl font-medium active:scale-95 transition-transform`}
        >
          {current.focusAction}
        </button>
      </section>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => setTab('recipes')}
          className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 active:scale-95 transition-transform"
        >
          <div className="bg-[#317b8a]/10 p-3 rounded-full">
            <Utensils className="text-[#317b8a]" size={24} />
          </div>
          <span className="font-medium text-gray-800">Receitas</span>
        </button>

        <button
          onClick={() => setTab('scanner')}
          className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 active:scale-95 transition-transform"
        >
          <div className="bg-[#b83b5e]/10 p-3 rounded-full">
            <Activity className="text-[#b83b5e]" size={24} />
          </div>
          <span className="font-medium text-gray-800 text-center">Scanner sua refeicao</span>
        </button>
      </div>

      <section className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="font-semibold text-[#317b8a] mb-3">{current.tipTitle}</h2>
        <p className="text-sm text-gray-600">
          {current.tipDesc}
        </p>
      </section>
    </div>
  );
}
