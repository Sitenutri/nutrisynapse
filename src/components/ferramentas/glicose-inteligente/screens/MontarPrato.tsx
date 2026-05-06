'use client';

import { useState } from 'react';

type ComponentePrato = 'fibra' | 'proteina' | 'gordura' | 'carboidrato';

export default function MontarPrato() {
  const [prato, setPrato] = useState<Record<ComponentePrato, boolean>>({
    fibra: false,
    proteina: false,
    gordura: false,
    carboidrato: false,
  });

  const toggle = (comp: ComponentePrato) => {
    setPrato(prev => ({ ...prev, [comp]: !prev[comp] }));
  };

  const hasFibraOuProteina = prato.fibra || prato.proteina;
  const isCarboSozinho = prato.carboidrato && !hasFibraOuProteina && !prato.gordura;
  const isEquilibrado = prato.carboidrato ? (prato.fibra && prato.proteina) : (prato.fibra && prato.proteina);
  const isParcial = !isCarboSozinho && !isEquilibrado && Object.values(prato).some(v => v);
  const isEmpty = !Object.values(prato).some(v => v);

  return (
    <div className="p-6 pb-24 h-full flex flex-col">
      <p className="text-gray-600 mb-6 shrink-0">Marque o que você vai colocar no seu prato hoje:</p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <label onClick={() => toggle('fibra')} className={`p-4 rounded-3xl border-2 flex flex-col gap-2 cursor-pointer transition-all ${prato.fibra ? 'border-emerald-500 bg-emerald-50' : 'border-gray-100 bg-white hover:border-emerald-200'}`}>
          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${prato.fibra ? 'border-emerald-500 bg-emerald-500' : 'border-gray-300'}`}>
            {prato.fibra && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Fibras</h3>
            <p className="text-xs text-gray-500 mt-1 leading-tight">Salada, legumes, verduras</p>
          </div>
        </label>

        <label onClick={() => toggle('proteina')} className={`p-4 rounded-3xl border-2 flex flex-col gap-2 cursor-pointer transition-all ${prato.proteina ? 'border-blue-500 bg-blue-50' : 'border-gray-100 bg-white hover:border-blue-200'}`}>
          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${prato.proteina ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}>
            {prato.proteina && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Proteínas</h3>
            <p className="text-xs text-gray-500 mt-1 leading-tight">Frango, ovo, carne, peixe</p>
          </div>
        </label>

        <label onClick={() => toggle('gordura')} className={`p-4 rounded-3xl border-2 flex flex-col gap-2 cursor-pointer transition-all ${prato.gordura ? 'border-amber-500 bg-amber-50' : 'border-gray-100 bg-white hover:border-amber-200'}`}>
          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${prato.gordura ? 'border-amber-500 bg-amber-500' : 'border-gray-300'}`}>
            {prato.gordura && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Gorduras Boas</h3>
            <p className="text-xs text-gray-500 mt-1 leading-tight">Azeite, abacate, castanhas</p>
          </div>
        </label>

        <label onClick={() => toggle('carboidrato')} className={`p-4 rounded-3xl border-2 flex flex-col gap-2 cursor-pointer transition-all ${prato.carboidrato ? 'border-red-500 bg-red-50' : 'border-gray-100 bg-white hover:border-red-200'}`}>
          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${prato.carboidrato ? 'border-red-500 bg-red-500' : 'border-gray-300'}`}>
            {prato.carboidrato && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Carboidratos</h3>
            <p className="text-xs text-gray-500 mt-1 leading-tight">Arroz, pão, batata, massa</p>
          </div>
        </label>
      </div>

      <div className="mt-auto">
        {isEmpty ? (
          <div className="bg-gray-100 p-6 rounded-3xl text-center text-gray-500">
            Selecione o que terá no seu prato para ver o resultado.
          </div>
        ) : isCarboSozinho ? (
          <div className="bg-red-50 border border-red-200 p-6 rounded-3xl text-red-900 shadow-sm">
            <h3 className="font-bold text-xl mb-2 flex items-center gap-2">{"🔴 Alto Risco de Pico"}</h3>
            <p className="opacity-90 mb-4">{"Nunca coma carboidrato sozinho! A absorção é muito rápida."}</p>
            <div className="bg-red-100/50 p-3 rounded-xl text-sm font-medium">
              {"💡 Dica: Adicione fibra (salada) ou proteína (ovo, carne) para atrasar a absorção do açúcar."}
            </div>
          </div>
        ) : isEquilibrado ? (
          <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-3xl text-emerald-900 shadow-sm">
            <h3 className="font-bold text-xl mb-2 flex items-center gap-2">{"🟢 Prato Equilibrado!"}</h3>
            <p className="opacity-90 mb-4">{"Composição excelente para manter a glicose estável."}</p>
            <div className="bg-emerald-100/50 p-3 rounded-xl text-sm font-medium">
              {"💡 Dica de ouro: Comece comendo as fibras, depois a proteína e deixe o carboidrato por último!"}
            </div>
          </div>
        ) : isParcial ? (
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-3xl text-amber-900 shadow-sm">
            <h3 className="font-bold text-xl mb-2 flex items-center gap-2">{"🟡 Faltam Ajustes"}</h3>
            <p className="opacity-90 mb-4">{"O prato não está ruim, mas pode melhorar."}</p>
            <div className="bg-amber-100/50 p-3 rounded-xl text-sm font-medium">
              {prato.carboidrato && !prato.fibra && '💡 Dica: Falta fibra! Adicionar salada ou legumes ajuda muito a segurar o pico do carboidrato.'}
              {prato.carboidrato && !prato.proteina && prato.fibra && '💡 Dica: Tente incluir uma fonte de proteína magra para dar mais saciedade e segurar ainda mais a glicose.'}
              {!prato.carboidrato && !prato.proteina && '💡 Dica: Adicione uma fonte de proteína para manter sua energia estável por mais tempo.'}
              {!prato.carboidrato && prato.proteina && !prato.fibra && '💡 Dica: Um prato só com proteína precisa de fibras para ajudar na digestão. Que tal uma salada?'}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
