'use client';

import { useState } from 'react';
import { ingredientesPerigosos } from '@/data/ferramentas/glicose-inteligente/foods';
import { LuCircleAlert, LuCircleCheck, LuInfo } from 'react-icons/lu';

export default function AnalisarRotulo() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const toggleIngredient = (ingrediente: string) => {
    setSelectedIngredients(prev => 
      prev.includes(ingrediente)
        ? prev.filter(i => i !== ingrediente)
        : [...prev, ingrediente]
    );
  };

  return (
    <div className="p-6 pb-24 h-full flex flex-col">
      <div className="mb-6 shrink-0">
        <p className="text-gray-600">Selecione os ingredientes que você encontrou no rótulo do produto:</p>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 mb-6">
        {ingredientesPerigosos.map(ing => (
          <label 
            key={ing}
            onClick={() => toggleIngredient(ing)}
            className={`flex items-center gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
              selectedIngredients.includes(ing) 
                ? 'bg-red-50 border-red-200 text-red-900 ring-2 ring-red-500 ring-opacity-50' 
                : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <div className={`w-6 h-6 rounded-md flex items-center justify-center border transition-colors ${
              selectedIngredients.includes(ing) ? 'bg-red-500 border-red-500' : 'border-gray-300 bg-white'
            }`}>
              {selectedIngredients.includes(ing) && <LuCircleCheck size={16} className="text-white" />}
            </div>
            <span className="font-medium text-lg">{ing}</span>
          </label>
        ))}
      </div>

      <div className="shrink-0 mt-auto">
        {selectedIngredients.length === 0 ? (
          <div className="bg-emerald-50 border border-emerald-100 p-5 rounded-3xl text-emerald-800 flex items-start gap-4 shadow-sm">
            <LuCircleCheck className="text-emerald-500 mt-1 shrink-0" size={24} />
            <div>
              <h3 className="font-bold text-lg">Parece seguro!</h3>
              <p className="text-sm mt-1 opacity-90">Mas lembre-se: a ordem dos ingredientes importa. Os primeiros aparecem em maior quantidade.</p>
            </div>
          </div>
        ) : (
          <div className="bg-red-50 border border-red-200 p-5 rounded-3xl text-red-900 flex items-start gap-4 shadow-sm">
            <LuCircleAlert className="text-red-500 mt-1 shrink-0" size={24} />
            <div>
              <h3 className="font-bold text-lg">Pode causar pico glicêmico!</h3>
              <p className="text-sm mt-2 opacity-90 leading-relaxed">
                Você selecionou ingredientes que são absorvidos muito rapidamente, virando açúcar no sangue.
              </p>
              <div className="mt-3 bg-red-100/50 p-3 rounded-xl flex gap-2">
                <LuInfo size={16} className="shrink-0 mt-0.5" />
                <p className="text-xs font-medium">Sugestão: Evite o consumo frequente ou prefira alternativas in natura.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
