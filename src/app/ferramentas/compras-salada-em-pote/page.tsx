import type { Metadata } from 'next';
import ComprasSaladaEmPote from '@/components/ferramentas/compras-salada-em-pote/ComprasSaladaEmPote';

export const metadata: Metadata = {
  title: 'Compras Salada em Pote',
  description:
    'Gerador de lista de compras para salada em pote. 10 semanas de cardápios temáticos com lista de ingredientes escalável e tempos de preparo de leguminosas.',
  openGraph: {
    title: 'Compras Salada em Pote | Nutrisynapse',
    description:
      'Monte sua lista de compras semanal para saladas em pote de 500ml. Escolha a semana, ajuste a quantidade e copie para o WhatsApp.',
  },
};

export default function ComprasSaladaEmPotePage() {
  return <ComprasSaladaEmPote />;
}
