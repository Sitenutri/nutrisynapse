'use client';

import React, { useState } from 'react';
import { leguminosasPrep } from '@/data/ferramentas/compras-salada-em-pote/leguminosas';

export default function PrepInfo() {
  const [selectedLegumes, setSelectedLegumes] = useState<string[]>([]);

  const toggleSelection = (id: string) => {
    setSelectedLegumes((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedAlerts = leguminosasPrep.filter((leg) =>
    selectedLegumes.includes(leg.id)
  );

  return (
    <div className="flex flex-col gap-4 h-full min-h-0">
      {selectedAlerts.length > 0 && (
        <div
          className="text-white p-5 rounded-[24px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] shrink-0"
          style={{ backgroundColor: '#5A5A40' }}
        >
          <h3 className="text-xs uppercase font-bold text-white/60 mb-3">
            Alerta de Planejamento da Semana
          </h3>
          <ul className="space-y-2">
            {selectedAlerts.map((leg) => (
              <li key={`alert-${leg.id}`} className="font-serif text-lg leading-snug">
                {leg.alerta}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div
        className="p-5 rounded-[24px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex flex-col flex-1 min-h-0 overflow-hidden"
        style={{ backgroundColor: '#ffffff' }}
      >
        <h3 className="text-xs uppercase font-bold mb-1" style={{ color: '#8a8a7c' }}>
          Tempos de Preparo
        </h3>
        <p className="text-[10px] mb-4" style={{ color: '#8a8a7c' }}>
          Selecione as leguminosas que farão parte do seu cardápio desta semana:
        </p>

        <div className="overflow-y-auto flex-1 space-y-3 pr-2">
          {leguminosasPrep.map((leg) => {
            const isSelected = selectedLegumes.includes(leg.id);
            return (
              <div
                key={leg.id}
                onClick={() => toggleSelection(leg.id)}
                className="flex flex-col gap-1 p-3 rounded-xl border cursor-pointer transition-colors"
                style={{
                  borderColor: isSelected ? '#B95B34' : '#f0f0e8',
                  backgroundColor: isSelected ? 'rgba(185, 91, 52, 0.05)' : 'transparent',
                }}
              >
                <div className="flex justify-between items-center">
                  <span
                    className="text-sm font-bold"
                    style={{ color: isSelected ? '#B95B34' : '#2d2d2a' }}
                  >
                    {leg.nome}
                  </span>
                  <span
                    className="text-[10px] px-[6px] py-[2px] rounded uppercase tracking-[0.5px]"
                    style={{ backgroundColor: '#e0e0d5', color: '#2d2d2a' }}
                  >
                    {leg.cozimento.includes('pressão') ? 'Pressão' : 'Panela'}
                  </span>
                </div>
                <p className="text-xs leading-tight" style={{ color: '#8a8a7c' }}>
                  Remolho: {leg.remolho} <br /> Cozimento: {leg.cozimento}
                </p>
              </div>
            );
          })}
        </div>

        <div
          className="mt-4 pt-4 text-[10px] italic shrink-0"
          style={{ borderTop: '1px solid #f0f0e8', color: '#8a8a7c' }}
        >
          A microbiota agradece cada fibra consumida. Bom preparo!
        </div>
      </div>
    </div>
  );
}
