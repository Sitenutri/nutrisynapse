import type { Metadata } from 'next';
import AlimentacaoInteligente from '@/components/ferramentas/alimentacao-inteligente/AlimentacaoInteligente';

export const metadata: Metadata = {
  title: 'Alimentacao Inteligente | NutriSynapse',
  description: 'Ferramenta de gerenciamento de diabetes com receitas, scanner de refeicoes, tracker de glicemia e guias educativos.',
};

export default function AlimentacaoInteligentePage() {
  return <AlimentacaoInteligente />;
}
