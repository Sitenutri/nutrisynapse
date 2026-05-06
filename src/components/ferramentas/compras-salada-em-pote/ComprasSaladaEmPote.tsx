'use client';

import { useState } from 'react';
import ShoppingList from './ShoppingList';
import PrepInfo from './PrepInfo';
import { receitasData } from '@/data/ferramentas/compras-salada-em-pote/receitas';

export default function ComprasSaladaEmPote() {
  const [selectedWeekId, setSelectedWeekId] = useState(1);
  const [jarsCount, setJarsCount] = useState(1);

  return (
    <div
      className="min-h-[80vh] font-sans p-4 md:p-6 flex flex-col"
      style={{ backgroundColor: '#f5f5f0', color: '#2d2d2a' }}
    >
      <div className="max-w-[1200px] w-full mx-auto flex-1 flex flex-col">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-3">
          <div className="flex flex-col">
            <span
              className="text-[10px] uppercase tracking-widest font-bold"
              style={{ color: '#8a8a7c' }}
            >
              Ferramenta Nutrisynapse
            </span>
            <h1
              className="font-serif text-2xl md:text-4xl mt-1 font-black"
              style={{ color: '#5A5A40' }}
            >
              Compras Salada em Pote
            </h1>
          </div>
          <div className="text-right">
            <div className="text-xs" style={{ color: '#8a8a7c' }}>Volume Padrão</div>
            <div className="font-bold text-lg">Pote 500 ml</div>
          </div>
        </header>

        <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0 overflow-y-auto lg:overflow-hidden">

          {/* Controles de Semana e Potes */}
          <aside className="lg:col-span-3 flex flex-col gap-4 overflow-visible lg:overflow-hidden">

            <div
              className="p-4 rounded-[24px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex flex-col gap-3 min-h-0"
              style={{ backgroundColor: '#ffffff' }}
            >
              <h3
                className="text-xs uppercase font-bold"
                style={{ color: '#8a8a7c' }}
              >
                Escolher Semana
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-1 gap-2 overflow-y-auto pr-2">
                {receitasData.map((semana) => (
                  <button
                    key={semana.semana}
                    onClick={() => setSelectedWeekId(semana.semana)}
                    className="py-2 px-3 text-sm rounded-lg border text-left transition-colors cursor-pointer"
                    style={
                      selectedWeekId === semana.semana
                        ? {
                            backgroundColor: '#5A5A40',
                            color: '#ffffff',
                            borderColor: '#5A5A40',
                          }
                        : {
                            borderColor: '#e0e0d5',
                            color: '#2d2d2a',
                          }
                    }
                  >
                    {semana.titulo}
                  </button>
                ))}
              </div>
            </div>

            <div
              className="p-4 rounded-[24px] shadow-[0_4px_15px_rgba(0,0,0,0.05)]"
              style={{ backgroundColor: '#ffffff' }}
            >
              <h3
                className="text-xs uppercase font-bold mb-3"
                style={{ color: '#8a8a7c' }}
              >
                Quantidade de Potes
              </h3>
              <div
                className="flex items-center justify-between p-2 rounded-xl"
                style={{ backgroundColor: '#f5f5f0' }}
              >
                <button
                  onClick={() => setJarsCount(Math.max(1, jarsCount - 1))}
                  className="w-10 h-10 rounded-full border flex items-center justify-center font-bold transition-colors cursor-pointer"
                  style={{
                    backgroundColor: '#ffffff',
                    borderColor: '#e0e0d5',
                    color: '#2d2d2a',
                  }}
                >
                  -
                </button>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-black" style={{ color: '#5A5A40' }}>
                    {jarsCount.toString().padStart(2, '0')}
                  </span>
                  <span
                    className="text-[10px] uppercase font-bold"
                    style={{ color: '#8a8a7c' }}
                  >
                    Unidades
                  </span>
                </div>
                <button
                  onClick={() => setJarsCount(jarsCount + 1)}
                  className="w-10 h-10 rounded-full border flex items-center justify-center font-bold transition-colors cursor-pointer"
                  style={{
                    backgroundColor: '#ffffff',
                    borderColor: '#e0e0d5',
                    color: '#2d2d2a',
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </aside>

          {/* Shopping List */}
          <section className="lg:col-span-5 flex flex-col gap-4 overflow-visible lg:overflow-hidden">
            <ShoppingList semanaId={selectedWeekId} jarsCount={jarsCount} />
          </section>

          {/* Prep Info */}
          <section className="lg:col-span-4 flex flex-col gap-4 overflow-visible lg:overflow-hidden">
            <PrepInfo />
          </section>

        </main>
      </div>
    </div>
  );
}
