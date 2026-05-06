'use client';

import { LuAward, LuZap, LuHeartPulse } from 'react-icons/lu';

export default function Perfil() {
  return (
    <div className="p-6 h-full overflow-y-auto pb-24">
      
      <div className="flex flex-col items-center mt-6 mb-10">
        <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4 shadow-sm">
          <span className="text-3xl font-black">Você</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Usuário Inteligente</h2>
        <p className="text-gray-500">Focado na saúde</p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-2xl text-blue-600">
            <LuAward size={24} />
          </div>
          <div>
            <h3 className="text-xs text-gray-500 font-bold uppercase tracking-wider">Sequência</h3>
            <p className="text-lg font-bold text-gray-900 leading-tight">Dia 1</p>
          </div>
        </div>
        <div className="text-blue-500 text-sm font-semibold">
          Ótimo começo!
        </div>
      </div>

      <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl p-6 shadow-md text-white relative overflow-hidden mb-6">
        <LuZap size={120} className="absolute -right-6 -bottom-6 text-white opacity-10" />
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          <LuHeartPulse size={24} />
          Mensagem do dia
        </h3>
        <p className="opacity-95 leading-relaxed text-emerald-50 text-sm font-medium">
          {'"Cada refeição equilibrada é uma vitória para o seu corpo. Não se trata de perfeição, e sim de consistência. Você está no controle!"'}
        </p>
      </div>

      <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
        <button className="w-full text-left py-3 border-b border-gray-100 font-medium text-gray-700 flex justify-between items-center">
          Configurações
          <span className="text-gray-400">›</span>
        </button>
        <button className="w-full text-left py-3 border-b border-gray-100 font-medium text-gray-700 flex justify-between items-center">
          Compartilhar App
          <span className="text-gray-400">›</span>
        </button>
        <button className="w-full text-left py-3 font-medium text-red-500 flex justify-between items-center">
          Sair da conta
        </button>
      </div>

    </div>
  );
}
