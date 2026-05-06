'use client';

import React, { useState } from 'react';
import { ChevronRight, Info, Coffee, Wine, Activity, Search, Utensils, Leaf, Calculator, ArrowRightLeft } from 'lucide-react';
import SubstitutionsTable from './SubstitutionsTable';

const guides = [
  {
    id: 'substituicoes',
    title: 'Tabela de Substituicoes Inteligentes',
    icon: <ArrowRightLeft className="text-teal-500" size={24} />,
    bg: 'bg-teal-100',
    content: `
      <h3 class="font-bold text-lg mb-2 text-gray-800">Trocas que salvam a sua glicemia</h3>
      <p class="mb-4 text-gray-600">Pequenas trocas no dia a dia podem reduzir o impacto glicemico das suas refeicoes em ate 80%. Veja as melhores opcoes baseadas na tabela oficial:</p>

      <h4 class="font-semibold text-[#317b8a] mb-2 mt-6">Carboidratos</h4>
      <div class="space-y-3 mb-6">
        <div class="bg-gray-50 p-3 rounded-xl border border-gray-100">
          <p class="text-sm text-red-500 font-medium line-through mb-1">Arroz Branco</p>
          <p class="text-sm text-[#76a86b] font-medium flex items-center gap-2">
            Arroz Integral, Quinoa ou Couve-Flor em graos
          </p>
          <p class="text-xs text-gray-500 mt-1 ml-5">Reduz o impacto em ate 80% (Couve-flor)</p>
        </div>

        <div class="bg-gray-50 p-3 rounded-xl border border-gray-100">
          <p class="text-sm text-red-500 font-medium line-through mb-1">Macarrao Branco</p>
          <p class="text-sm text-[#76a86b] font-medium flex items-center gap-2">
            Espaguete de Abobrinha ou Macarrao Integral
          </p>
          <p class="text-xs text-gray-500 mt-1 ml-5">Reduz o impacto em ate 85% (Abobrinha)</p>
        </div>

        <div class="bg-gray-50 p-3 rounded-xl border border-gray-100">
          <p class="text-sm text-red-500 font-medium line-through mb-1">Batata Inglesa / Frita</p>
          <p class="text-sm text-[#76a86b] font-medium flex items-center gap-2">
            Batata-Doce, Abobora Cabotia ou Chuchu
          </p>
          <p class="text-xs text-gray-500 mt-1 ml-5">Mais fibras e vitaminas, menor indice glicemico</p>
        </div>
      </div>

      <h4 class="font-semibold text-[#b83b5e] mb-2">Proteinas e Preparacoes</h4>
      <div class="space-y-3 mb-6">
        <div class="bg-gray-50 p-3 rounded-xl border border-gray-100">
          <p class="text-sm text-red-500 font-medium line-through mb-1">Carnes e Frangos Fritos</p>
          <p class="text-sm text-[#76a86b] font-medium flex items-center gap-2">
            Grelhados ou Assados
          </p>
          <p class="text-xs text-gray-500 mt-1 ml-5">Reduz o impacto glicemico em 80% (elimina a farinha de trigo)</p>
        </div>

        <div class="bg-gray-50 p-3 rounded-xl border border-gray-100">
          <p class="text-sm text-red-500 font-medium line-through mb-1">Embutidos (Presunto, Salsicha)</p>
          <p class="text-sm text-[#76a86b] font-medium flex items-center gap-2">
            Frango Desfiado, Ovos ou Carne Fresca
          </p>
          <p class="text-xs text-gray-500 mt-1 ml-5">Zero aditivos e muito menos sodio</p>
        </div>
      </div>

      <h4 class="font-semibold text-purple-500 mb-2">Bebidas e Lanches</h4>
      <div class="space-y-3 mb-6">
        <div class="bg-gray-50 p-3 rounded-xl border border-gray-100">
          <p class="text-sm text-red-500 font-medium line-through mb-1">Suco de Caixinha / Refrigerante</p>
          <p class="text-sm text-[#76a86b] font-medium flex items-center gap-2">
            Agua com Limao ou Gas Natural
          </p>
          <p class="text-xs text-gray-500 mt-1 ml-5">Reduz o impacto glicemico em 100%</p>
        </div>

        <div class="bg-gray-50 p-3 rounded-xl border border-gray-100">
          <p class="text-sm text-red-500 font-medium line-through mb-1">Biscoito Doce / Bolo Comum</p>
          <p class="text-sm text-[#76a86b] font-medium flex items-center gap-2">
            Biscoito Integral, Bolo de Abobora/Cenoura
          </p>
          <p class="text-xs text-gray-500 mt-1 ml-5">Reduz o impacto em ate 70%</p>
        </div>
      </div>

      <div class="bg-teal-50 p-4 rounded-xl border border-teal-100 mt-4">
        <p class="text-sm text-gray-700"><strong>Dica Pratica:</strong> Voce pode combinar multiplas substituicoes! Trocar o arroz branco por integral E a carne frita por grelhada na mesma refeicao potencializa muito o controle da sua glicemia.</p>
      </div>
    `
  },
  {
    id: 'indice-carga',
    title: 'Indice Glicemico vs. Carga Glicemica',
    icon: <Activity className="text-[#317b8a]" size={24} />,
    bg: 'bg-[#317b8a]/10',
    content: `
      <h3 class="font-bold text-lg mb-2 text-gray-800">Qual a diferenca?</h3>
      <p class="mb-4 text-gray-600">Muitas pessoas confundem esses dois termos, mas entender a diferenca e fundamental para o controle do diabetes.</p>

      <h4 class="font-semibold text-[#317b8a] mb-1">Indice Glicemico (IG)</h4>
      <p class="mb-4 text-gray-600">Mede a <strong>velocidade</strong> com que um carboidrato aumenta a glicose no sangue. Alimentos com alto IG (como pao branco) causam picos rapidos, enquanto os de baixo IG (como aveia) liberam energia lentamente.</p>

      <h4 class="font-semibold text-[#76a86b] mb-1">Carga Glicemica (CG)</h4>
      <p class="mb-4 text-gray-600">Leva em consideracao nao apenas a velocidade (IG), mas tambem a <strong>quantidade</strong> de carboidratos na porcao consumida. E uma medida muito mais precisa do impacto real na sua glicemia.</p>

      <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 mt-4">
        <p class="text-sm text-gray-700"><strong>Exemplo pratico:</strong> A melancia tem um Indice Glicemico alto, mas como e composta quase inteiramente por agua, uma fatia normal tem pouquissimo carboidrato. Portanto, sua Carga Glicemica e baixa e ela pode ser consumida com moderacao.</p>
      </div>
    `
  },
  {
    id: 'adocantes',
    title: 'Guia de Adocantes',
    icon: <Coffee className="text-[#b83b5e]" size={24} />,
    bg: 'bg-[#b83b5e]/10',
    content: `
      <h3 class="font-bold text-lg mb-2 text-gray-800">Quais adocantes escolher?</h3>
      <p class="mb-4 text-gray-600">Nem todo adocante e igual. Alguns podem causar desconforto intestinal ou ate mesmo ter um leve impacto na glicemia.</p>

      <h4 class="font-semibold text-[#76a86b] mb-1">Os Melhores (Naturais)</h4>
      <ul class="list-disc pl-5 mb-4 text-gray-600 space-y-1">
        <li><strong>Stevia:</strong> 100% natural, zero calorias e zero impacto glicemico. Pode ter um retrogosto amargo para algumas pessoas.</li>
        <li><strong>Eritritol:</strong> Alcool de acucar natural. Quase zero calorias e nao afeta a glicemia. Excelente para cozinhar.</li>
        <li><strong>Xilitol:</strong> Tem impacto glicemico muito baixo, mas pode causar gases ou efeito laxativo se consumido em excesso.</li>
        <li><strong>Taumatina:</strong> Proteina natural extremamente doce, sem calorias.</li>
      </ul>

      <h4 class="font-semibold text-red-500 mb-1">Evite ou Consuma com Cautela</h4>
      <ul class="list-disc pl-5 mb-4 text-gray-600 space-y-1">
        <li><strong>Sucralose:</strong> Artificial. Embora nao eleve a glicemia diretamente, estudos recentes sugerem que pode alterar a flora intestinal.</li>
        <li><strong>Maltitol:</strong> Muito comum em chocolates "diet", mas eleva a glicemia (tem cerca de metade do impacto do acucar normal) e causa muito desconforto abdominal.</li>
        <li><strong>Aspartame e Ciclamato:</strong> Artificiais e controversos. Prefira as opcoes naturais.</li>
      </ul>
    `
  },
  {
    id: 'bebidas',
    title: 'Bebidas Alcoolicas e Diabetes',
    icon: <Wine className="text-purple-500" size={24} />,
    bg: 'bg-purple-100',
    content: `
      <h3 class="font-bold text-lg mb-2 text-gray-800">Como o alcool afeta a glicemia?</h3>
      <p class="mb-4 text-gray-600">O consumo de alcool requer atencao especial para quem tem diabetes, pois o figado prioriza a metabolizacao do alcool em vez de liberar glicose, o que pode causar <strong>hipoglicemia</strong> (queda perigosa do acucar no sangue).</p>

      <h4 class="font-semibold text-[#317b8a] mb-1">Regras de Ouro</h4>
      <ul class="list-disc pl-5 mb-4 text-gray-600 space-y-1">
        <li><strong>Nunca beba de estomago vazio:</strong> Sempre consuma alcool junto com alimentos, preferencialmente proteinas e gorduras.</li>
        <li><strong>Cuidado com a hipoglicemia tardia:</strong> O risco de queda de glicose pode durar ate 24 horas apos o consumo.</li>
        <li><strong>Meca com mais frequencia:</strong> Monitore sua glicemia antes, durante e depois de beber, e antes de dormir.</li>
      </ul>

      <h4 class="font-semibold text-[#76a86b] mb-1">Melhores Opcoes (Menos Carboidratos)</h4>
      <ul class="list-disc pl-5 mb-4 text-gray-600 space-y-1">
        <li>Vinhos secos (tinto, branco ou espumante brut)</li>
        <li>Destilados puros (vodka, gin, whisky) com gelo ou agua com gas</li>
      </ul>

      <h4 class="font-semibold text-red-500 mb-1">Piores Opcoes (Ricas em Acucar)</h4>
      <ul class="list-disc pl-5 text-gray-600 space-y-1">
        <li>Cervejas tradicionais (ricas em carboidratos)</li>
        <li>Drinks doces, licores e batidas com leite condensado</li>
        <li>Misturas com refrigerantes normais ou sucos de caixinha</li>
      </ul>
    `
  },
  {
    id: 'rotulos',
    title: 'Como Ler Rotulos de Alimentos',
    icon: <Search className="text-blue-500" size={24} />,
    bg: 'bg-blue-100',
    content: `
      <h3 class="font-bold text-lg mb-2 text-gray-800">Nao se deixe enganar pelas embalagens</h3>
      <p class="mb-4 text-gray-600">Produtos que dizem "Diet", "Light" ou "Zero Acucar" nem sempre sao as melhores opcoes. Aprender a ler a tabela nutricional e a lista de ingredientes e a sua maior defesa.</p>

      <h4 class="font-semibold text-[#317b8a] mb-1">1. Lista de Ingredientes</h4>
      <p class="mb-4 text-gray-600">A regra de ouro: os ingredientes estao em ordem decrescente de quantidade. O primeiro ingrediente e o que tem mais no produto. Se acucar (ou seus disfarces) estiver entre os tres primeiros, evite.</p>

      <h4 class="font-semibold text-[#b83b5e] mb-1">2. Os Disfarces do Acucar</h4>
      <p class="mb-4 text-gray-600">A industria usa varios nomes para o acucar. Fique atento a: Maltodextrina, Xarope de Milho, Acucar Invertido, Dextrose, Frutose, Nectar de Agave, Mel e Melaco.</p>

      <h4 class="font-semibold text-[#76a86b] mb-1">3. Tabela Nutricional</h4>
      <ul class="list-disc pl-5 mb-4 text-gray-600 space-y-1">
        <li><strong>Porcao:</strong> Sempre verifique qual e a porcao indicada. As vezes o carboidrato parece baixo, mas a porcao e de apenas 1 colher.</li>
        <li><strong>Carboidratos Totais:</strong> E o numero mais importante.</li>
        <li><strong>Fibras:</strong> Quanto mais, melhor. Subtraia as fibras dos carboidratos totais para obter os "carboidratos liquidos" (aqueles que realmente impactam a glicemia).</li>
      </ul>
    `
  },
  {
    id: 'prato-ideal',
    title: 'O Prato Ideal para Diabeticos',
    icon: <Utensils className="text-orange-500" size={24} />,
    bg: 'bg-orange-100',
    content: `
      <h3 class="font-bold text-lg mb-2 text-gray-800">A Regra do Prato</h3>
      <p class="mb-4 text-gray-600">Montar o prato corretamente e a forma mais facil de controlar a glicemia sem precisar pesar alimentos o tempo todo.</p>

      <h4 class="font-semibold text-[#76a86b] mb-1">50% do Prato: Vegetais Nao-Amilaceos</h4>
      <p class="mb-4 text-gray-600">Metade do seu prato deve ser de saladas e legumes (alface, tomate, brocolis, couve-flor, abobrinha, espinafre). Eles sao ricos em fibras, vitaminas e tem pouquissimo carboidrato.</p>

      <h4 class="font-semibold text-[#b83b5e] mb-1">25% do Prato: Proteinas Magras</h4>
      <p class="mb-4 text-gray-600">Um quarto do prato vai para as proteinas (frango, peixe, ovos, tofu, cortes magros de carne). A proteina da saciedade e ajuda a estabilizar a curva glicemica da refeicao.</p>

      <h4 class="font-semibold text-[#317b8a] mb-1">25% do Prato: Carboidratos Complexos</h4>
      <p class="mb-4 text-gray-600">O ultimo quarto e para os carboidratos de boa qualidade (arroz integral, feijao, lentilha, batata doce, quinoa, mandioca). Evite carboidratos refinados como arroz branco e macarrao tradicional.</p>

      <div class="bg-orange-50 p-4 rounded-xl border border-orange-100 mt-4">
        <p class="text-sm text-gray-700"><strong>Dica de Ouro:</strong> A ordem que voce come importa! Comece sempre pela salada (fibras), depois a proteina, e deixe o carboidrato por ultimo. Isso reduz o pico glicemico em ate 30%!</p>
      </div>
    `
  },
  {
    id: 'fibras',
    title: 'O Poder das Fibras',
    icon: <Leaf className="text-emerald-500" size={24} />,
    bg: 'bg-emerald-100',
    content: `
      <h3 class="font-bold text-lg mb-2 text-gray-800">O "Freio" da Glicemia</h3>
      <p class="mb-4 text-gray-600">As fibras sao o melhor amigo de quem tem diabetes. Elas sao a parte dos alimentos vegetais que o nosso corpo nao consegue digerir.</p>

      <h4 class="font-semibold text-[#76a86b] mb-1">Como elas funcionam?</h4>
      <p class="mb-4 text-gray-600">As fibras formam uma especie de "gel" no estomago e no intestino. Esse gel atrasa a digestao e a absorcao dos carboidratos. O resultado? O acucar entra no sangue aos poucos, evitando picos.</p>

      <h4 class="font-semibold text-[#317b8a] mb-1">Onde encontrar?</h4>
      <ul class="list-disc pl-5 mb-4 text-gray-600 space-y-1">
        <li><strong>Sementes:</strong> Chia, linhaca, semente de abobora (excelentes para adicionar no iogurte ou salada).</li>
        <li><strong>Cereais Integrais:</strong> Aveia em flocos (evite a farinha), quinoa, arroz integral.</li>
        <li><strong>Leguminosas:</strong> Feijoes, lentilha, grao de bico.</li>
        <li><strong>Frutas com casca e bagaco:</strong> Maca com casca, laranja com bagaco (evite sucos).</li>
      </ul>
    `
  },
  {
    id: 'contagem-carb',
    title: 'Contagem de Carboidratos',
    icon: <Calculator className="text-indigo-500" size={24} />,
    bg: 'bg-indigo-100',
    content: `
      <h3 class="font-bold text-lg mb-2 text-gray-800">O Basico da Contagem</h3>
      <p class="mb-4 text-gray-600">A contagem de carboidratos e uma tecnica que da mais liberdade alimentar, permitindo ajustar a dose de insulina (ou medicacao) de acordo com o que voce vai comer.</p>

      <h4 class="font-semibold text-[#317b8a] mb-1">Como funciona?</h4>
      <p class="mb-4 text-gray-600">Voce soma a quantidade de carboidratos (em gramas) de todos os alimentos da refeicao. Use o <strong>Scanner sua refeicao</strong> do nosso app para ajudar nessa estimativa!</p>

      <h4 class="font-semibold text-[#b83b5e] mb-1">Carboidratos Liquidos</h4>
      <p class="mb-4 text-gray-600">Se um alimento tem muita fibra (mais de 5g por porcao), voce pode subtrair as fibras do total de carboidratos. Exemplo: Um alimento com 20g de carboidratos e 6g de fibras tem apenas 14g de carboidratos liquidos.</p>

      <h4 class="font-semibold text-[#76a86b] mb-1">Alimentos Livres</h4>
      <p class="mb-4 text-gray-600">Carnes, peixes, ovos, azeite, manteiga e a maioria das folhas verdes (alface, rucula) tem zero ou quase zero carboidratos e nao precisam ser contados.</p>
    `
  }
];

export default function Guides() {
  const [activeGuide, setActiveGuide] = useState<string | null>(null);

  if (activeGuide) {
    const guide = guides.find(g => g.id === activeGuide);
    if (!guide) return null;

    return (
      <div className="p-4 pb-24 space-y-6">
        <button
          onClick={() => setActiveGuide(null)}
          className="text-[#317b8a] font-medium flex items-center gap-1 mb-2"
        >
          <ChevronRight className="rotate-180" size={20} />
          Voltar para Guias
        </button>

        <header className="flex items-center gap-4 mb-6">
          <div className={`${guide.bg} p-4 rounded-2xl`}>
            {guide.icon}
          </div>
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">{guide.title}</h1>
        </header>

        <div
          className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: guide.content }}
        />

        {guide.id === 'substituicoes' && <SubstitutionsTable />}

        <div className="bg-[#317b8a]/5 p-4 rounded-2xl border border-[#317b8a]/20 flex gap-3 mt-6">
          <Info className="text-[#317b8a] shrink-0 mt-0.5" size={20} />
          <p className="text-sm text-[#317b8a] leading-relaxed">
            Em breve, adicionaremos mais conteudos aqui. Voce pode nos enviar os arquivos para incluirmos mais informacoes!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 pb-24 space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900">Biblioteca</h1>
        <p className="text-gray-600">Informacoes essenciais dos guias</p>
      </header>

      <div className="space-y-4">
        {guides.map((guide) => (
          <button
            key={guide.id}
            onClick={() => setActiveGuide(guide.id)}
            className="w-full bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 active:scale-95 transition-transform text-left"
          >
            <div className={`${guide.bg} p-3 rounded-xl shrink-0`}>
              {guide.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{guide.title}</h3>
              <p className="text-sm text-gray-500 line-clamp-1">Toque para ler o guia completo</p>
            </div>
            <ChevronRight className="text-gray-400 shrink-0" size={20} />
          </button>
        ))}
      </div>
    </div>
  );
}
