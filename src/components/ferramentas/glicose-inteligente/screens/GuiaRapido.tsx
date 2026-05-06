'use client';

export default function GuiaRapido() {
  return (
    <div className="p-6 pb-24 h-full overflow-y-auto space-y-6">
      
      <div className="bg-emerald-600 text-white p-6 rounded-3xl shadow-md">
        <h2 className="text-xl font-black mb-2">As 3 Regras de Ouro</h2>
        <p className="opacity-90 leading-tight">Siga estas regras para manter sua glicose sempre sob controle num piscar de olhos.</p>
      </div>

      <div className="space-y-4">
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex gap-4 items-start">
          <div className="bg-emerald-100 text-emerald-600 w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-lg">1</div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg leading-tight">Ordem dos Alimentos</h3>
            <p className="text-gray-600 text-sm mt-1 leading-relaxed">Sempre coma primeiro as fibras (saladas/legumes), depois as proteínas/gorduras e por último os carboidratos. Isso reduz o pico glicêmico em até 70%!</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex gap-4 items-start">
          <div className="bg-amber-100 text-amber-600 w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-lg">2</div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg leading-tight">Nunca Carboidrato Sozinho</h3>
            <p className="text-gray-600 text-sm mt-1 leading-relaxed">Comer pão puro, tapioca pura ou uma fruta sozinha faz o açúcar disparar. Sempre adicione ovo, queijo, chia, ou castanhas junto.</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex gap-4 items-start">
          <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-lg">3</div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg leading-tight">Cuidado com Líquidos</h3>
            <p className="text-gray-600 text-sm mt-1 leading-relaxed">Sucos (mesmo naturais) não têm fibra e são absorvidos instantaneamente. Prefira sempre comer a fruta inteira ao invés de beber o seu suco.</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-5 rounded-3xl text-gray-700 text-sm leading-relaxed text-center">
        Lembre-se: O Glicose Inteligente é um guia prático para o dia a dia e não substitui a orientação do seu médico ou nutricionista.
      </div>
      
    </div>
  );
}
