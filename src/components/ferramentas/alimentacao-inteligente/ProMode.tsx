'use client';

import React from 'react';
import { FileText, Share2, Users, Download } from 'lucide-react';

export default function ProMode() {
  return (
    <div className="p-4 pb-24 space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900">Modo Profissional</h1>
        <p className="text-gray-600">Ferramentas para Nutricionistas</p>
      </header>

      <section className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Users className="text-[#317b8a]" size={20} />
          Meus Pacientes
        </h2>
        <div className="space-y-3">
          {['Maria Silva', 'Joao Santos', 'Ana Oliveira'].map((name, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
              <div>
                <p className="font-medium text-gray-800">{name}</p>
                <p className="text-xs text-gray-500">Ultimo registro: Hoje, 08:30</p>
              </div>
              <button className="text-[#317b8a] text-sm font-medium">Ver</button>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-2 gap-4">
        <button className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 active:scale-95 transition-transform">
          <div className="bg-red-100 p-3 rounded-full">
            <FileText className="text-red-500" size={24} />
          </div>
          <span className="font-medium text-gray-800 text-center text-sm">Gerar PDF do Plano</span>
        </button>

        <button className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 active:scale-95 transition-transform">
          <div className="bg-green-100 p-3 rounded-full">
            <Share2 className="text-green-500" size={24} />
          </div>
          <span className="font-medium text-gray-800 text-center text-sm">Enviar via WhatsApp</span>
        </button>
      </div>

      <section className="bg-gradient-to-br from-[#317b8a] to-[#76a86b] p-6 rounded-2xl shadow-sm text-white">
        <h2 className="font-bold text-lg mb-2">Guia Completo Premium</h2>
        <p className="text-white/90 text-sm mb-4">
          Ofereca aos seus pacientes o guia completo com receitas para Almoco e Jantar, alem do Cafe da Manha.
        </p>
        <button className="w-full bg-white text-[#317b8a] py-2.5 rounded-xl font-medium flex items-center justify-center gap-2">
          <Download size={18} />
          Baixar Material de Apoio
        </button>
      </section>
    </div>
  );
}
