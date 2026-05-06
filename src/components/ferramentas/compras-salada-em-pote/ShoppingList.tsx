'use client';

import React from 'react';
import { receitasData, Categoria } from '@/data/ferramentas/compras-salada-em-pote/receitas';
import { cardapiosData } from '@/data/ferramentas/compras-salada-em-pote/cardapios';
import { FiShoppingBag, FiCopy, FiCheckCircle } from 'react-icons/fi';

interface ShoppingListProps {
  semanaId: number;
  jarsCount: number;
}

export default function ShoppingList({ semanaId, jarsCount }: ShoppingListProps) {
  const [copiedShop, setCopiedShop] = React.useState(false);
  const [copiedMenu, setCopiedMenu] = React.useState(false);

  const semana = receitasData.find((s) => s.semana === semanaId);
  const cardapio = cardapiosData.find((c) => c.semana === semanaId);

  if (!semana) {
    return (
      <div className="p-6 text-center text-stone-500">
        Semana não encontrada.
      </div>
    );
  }

  const { ingredientes } = semana;

  if (ingredientes.length === 0) {
    return (
      <div className="p-8 text-center bg-white rounded-xl shadow-sm border border-stone-200 mt-6">
        <FiShoppingBag className="w-12 h-12 text-stone-300 mx-auto mb-3" />
        <h3 className="text-lg font-medium text-stone-800 mb-1">Semana em branco</h3>
        <p className="text-stone-500 text-sm max-w-sm mx-auto">
          Você não adicionou nenhum ingrediente para esta semana.
        </p>
      </div>
    );
  }

  const categoriasOrdem: Categoria[] = [
    'LEGUMINOSAS',
    'GRÃOS',
    'LEGUMES E RAÍZES',
    'FOLHAS',
    'SEMENTES E OLEAGINOSAS',
    'INGREDIENTES DE MOLHO'
  ];

  const ingredientesPorCategoria = categoriasOrdem.reduce((acc, cat) => {
    acc[cat] = [];
    return acc;
  }, {} as Record<Categoria, Array<{ nome: string; quantidade: string }>>);

  ingredientes.forEach((ing) => {
    const total = ing.quantidade_base * jarsCount;
    const totalStr = Number.isInteger(total) ? total.toString() : total.toFixed(1).replace('.0', '');

    if (ingredientesPorCategoria[ing.categoria]) {
      ingredientesPorCategoria[ing.categoria].push({
        nome: ing.nome,
        quantidade: `${totalStr} ${ing.unidade}`,
      });
    }
  });

  const formatTextForWhatsAppShop = () => {
    let text = `*${semana.titulo}* – Lista de compras (${jarsCount} potes de 500 ml)\n\n`;

    categoriasOrdem.forEach((cat) => {
      const items = ingredientesPorCategoria[cat];
      if (items && items.length > 0) {
        text += `*${cat}*\n`;
        items.forEach((item) => {
          text += `• ${item.nome}: ${item.quantidade}\n`;
        });
        text += '\n';
      }
    });

    return text.trim();
  };

  const formatTextForWhatsAppMenu = () => {
    if (!cardapio) return '';
    let text = `*${semana.titulo}* – Receitas\n\n`;

    cardapio.dias.forEach((dia) => {
      text += `*Dia ${dia.dia} (${dia.tipo})*\n`;
      text += `Molho: ${dia.molho}\n`;
      text += `Camadas: ${dia.camadas}\n\n`;
    });

    if (cardapio.dicas && cardapio.dicas.length > 0) {
      cardapio.dicas.forEach((dica) => {
        text += `_Dica: ${dica}_\n`;
      });
    }

    return text.trim();
  };

  const handleCopyShop = () => {
    navigator.clipboard.writeText(formatTextForWhatsAppShop()).then(() => {
      setCopiedShop(true);
      setTimeout(() => setCopiedShop(false), 2000);
    });
  };

  const handleCopyMenu = () => {
    navigator.clipboard.writeText(formatTextForWhatsAppMenu()).then(() => {
      setCopiedMenu(true);
      setTimeout(() => setCopiedMenu(false), 2000);
    });
  };

  return (
    <div className="flex flex-col gap-4 overflow-visible h-full pb-4">

      {cardapio && (
        <div
          className="flex flex-col p-5 rounded-[24px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] shrink-0 min-h-0"
          style={{ backgroundColor: '#ffffff' }}
        >
          <div className="flex flex-col mb-4 shrink-0">
            <h3 className="text-xs uppercase font-bold" style={{ color: '#8a8a7c' }}>Receitas da Semana</h3>
            <span className="text-sm font-semibold mt-1" style={{ color: '#5A5A40' }}>{semana.titulo}</span>
          </div>

          <div className="overflow-y-auto pr-3 space-y-4 max-h-[300px]">
            {cardapio.dias.map(dia => (
              <div key={dia.dia} className="space-y-1">
                <h4
                  className="text-[12px] font-bold pb-1 uppercase tracking-wider"
                  style={{ color: '#5A5A40', borderBottom: '1px solid #f0f0e8' }}
                >
                  Dia {dia.dia} <span className="text-xs font-normal opacity-70">({dia.tipo})</span>
                </h4>
                <p className="text-sm" style={{ color: '#2d2d2a' }}><span className="font-semibold">Molho:</span> {dia.molho}</p>
                <p className="text-sm" style={{ color: '#2d2d2a' }}><span className="font-semibold">Camadas:</span> {dia.camadas}</p>
              </div>
            ))}
            {cardapio.dicas && cardapio.dicas.length > 0 && (
              <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: '#f5f5f0' }}>
                {cardapio.dicas.map((dica, idx) => (
                  <p key={idx} className="text-xs italic" style={{ color: '#5A5A40' }}>Dica: {dica}</p>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={handleCopyMenu}
            className="text-white font-bold w-full py-3 rounded-xl mt-4 flex items-center justify-center gap-2 text-xs shrink-0 transition-opacity hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: '#25D366' }}
          >
            {copiedMenu ? (
              <>
                <FiCheckCircle className="w-4 h-4" />
                <span>Copiado com sucesso!</span>
              </>
            ) : (
              <>
                <FiCopy className="w-4 h-4 text-white/80" />
                <span>Copiar Receitas para WhatsApp</span>
              </>
            )}
          </button>
        </div>
      )}

      <div
        className="flex flex-col p-5 rounded-[24px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex-1 overflow-hidden min-h-0"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="flex justify-between items-start mb-4 shrink-0">
          <div className="flex flex-col">
            <h3 className="text-xs uppercase font-bold" style={{ color: '#8a8a7c' }}>Lista de Compras Consolidada</h3>
            <span className="text-sm font-semibold mt-1" style={{ color: '#5A5A40' }}>Semana {semana.semana}</span>
          </div>
          <span
            className="text-white text-[10px] px-2 py-1 rounded-full mt-1"
            style={{ backgroundColor: '#B95B34' }}
          >
            {jarsCount} {jarsCount === 1 ? 'POTE' : 'POTES'}
          </span>
        </div>

        <div className="overflow-y-auto pr-3 space-y-4 flex-1">
          {categoriasOrdem.map((cat) => {
            const items = ingredientesPorCategoria[cat];
            if (!items || items.length === 0) return null;

            return (
              <div key={cat} className="space-y-2">
                <h4
                  className="text-[11px] font-bold pb-1 uppercase tracking-wider"
                  style={{ color: '#5A5A40', borderBottom: '1px solid #f0f0e8' }}
                >
                  {cat}
                </h4>
                {items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm" style={{ color: '#2d2d2a' }}>
                    <span>{item.nome}</span>
                    <span className="font-medium">{item.quantidade}</span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        <button
          onClick={handleCopyShop}
          className="text-white font-bold w-full py-4 rounded-xl mt-4 flex items-center justify-center gap-2 text-sm shrink-0 transition-opacity hover:opacity-90 cursor-pointer"
          style={{ backgroundColor: '#25D366' }}
        >
          {copiedShop ? (
            <>
              <FiCheckCircle className="w-4 h-4" />
              <span>Copiado com sucesso!</span>
            </>
          ) : (
            <>
              <FiCopy className="w-4 h-4 text-white/80" />
              <span>Copiar Lista para WhatsApp</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
}
