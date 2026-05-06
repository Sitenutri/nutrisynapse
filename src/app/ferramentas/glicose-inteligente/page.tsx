import type { Metadata } from 'next';
import GlicoseInteligente from '@/components/ferramentas/glicose-inteligente/GlicoseInteligente';

export const metadata: Metadata = {
  title: 'Glicose Inteligente | Nutrisynapse',
  description: 'Guia prático para diabéticos: descubra quais alimentos pode comer, analise rótulos, monte pratos equilibrados e controle sua glicose no dia a dia.',
};

export default function GlicoseInteligentePage() {
  return <GlicoseInteligente />;
}
