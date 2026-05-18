"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  XOctagon,
  ChevronDown,
  Smartphone,
  BookOpen,
  Activity,
  HeartPulse,
  Gift,
} from "lucide-react";
import { useState } from "react";

export default function LandingPageAlimentacaoInteligente() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-200">

      {/* 1. HERO / HEADLINE */}
      <section className="relative bg-white pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490818387583-1b5ba45227fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-[0.03]"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold tracking-wider uppercase mb-6">
              Método Comprovado
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-8">
              Controle sua glicose e reduza os picos em poucos dias —{" "}
              <span className="text-emerald-600">
                sem dietas malucas, sem passar fome e sem viver escravo(a) da comida.
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-3xl mx-auto">
              Aprenda como montar refeições que estabilizam sua glicemia naturalmente — mesmo que hoje você esteja perdido(a), cansado(a) e sem saber o que comer.
            </p>
            <a
              href="#checkout"
              className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white text-xl font-bold py-4 px-8 rounded-lg shadow-lg shadow-emerald-200 transform transition hover:-translate-y-1 mx-auto gap-3 w-full sm:w-auto"
            >
              QUERO ESTABILIZAR MINHA GLICOSE AGORA <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 3. ABERTURA EMOCIONAL */}
      <section className="py-20 bg-slate-900 text-white border-t-4 border-rose-600">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-rose-100">
            Você já acordou exausto(a) só de pensar no que vai ter que comer hoje?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex gap-4 items-start bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <AlertTriangle className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                <p className="text-slate-300 text-lg leading-relaxed">
                  O medo silencioso antes de cada garfada:{" "}
                  <span className="text-white font-semibold">&quot;Isso vai disparar minha glicose?&quot;</span>
                </p>
              </div>
              <div className="flex gap-4 items-start bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <AlertTriangle className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                <p className="text-slate-300 text-lg leading-relaxed">
                  A <span className="text-white font-semibold flex-shrink-0">culpa devastadora</span> que bate logo após comer algo que você gosta ou sair do planejado.
                </p>
              </div>
              <div className="flex gap-4 items-start bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <AlertTriangle className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                <p className="text-slate-300 text-lg leading-relaxed">
                  A exaustão mental de passar o dia inteiro{" "}
                  <span className="text-white font-semibold">calculando, contando e se preocupando.</span>
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 items-start bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <AlertTriangle className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                <p className="text-slate-300 text-lg leading-relaxed">
                  O cansaço constante e inexplicável, com picos e quedas contínuos sugando sua energia vital.
                </p>
              </div>
              <div className="flex gap-4 items-start bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <AlertTriangle className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                <p className="text-slate-300 text-lg leading-relaxed">
                  A sensação asfixiante de viver preso(a), como se a comida fosse sua maior inimiga no mundo.
                </p>
              </div>
              <div className="flex gap-4 items-start bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <AlertTriangle className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                <p className="text-slate-300 text-lg leading-relaxed">
                  O desespero de tentar fazer &quot;tudo certo&quot;, seguir regras complexas, e mesmo assim{" "}
                  <span className="text-rose-400 font-bold">ver a glicose agir de forma imprevisível.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 p-8 rounded-2xl border border-emerald-500/30 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <p className="text-2xl font-bold text-emerald-400 italic mb-4 relative z-10">
              &quot;Finalmente alguém entendeu aquilo que eu vivo.&quot;
            </p>
            <p className="text-slate-300 text-lg relative z-10">
              Você não está sozinho(a). E mais importante:{" "}
              <strong className="text-white underline decoration-emerald-500 underline-offset-4">a culpa não é sua.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 4. QUEBRA DE CRENÇA */}
      <section className="py-24 bg-white relative">
        <div className="absolute left-0 top-0 w-1/3 h-full bg-slate-50 -skew-x-12 origin-top transform -translate-x-1/2"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-800 text-sm font-bold tracking-wider uppercase mb-6">
              A GRANDE MENTIRA
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              O problema NÃO é falta de disciplina. <br />
              <span className="text-rose-600 bg-rose-50 px-2 leading-relaxed">
                O problema é falta de estrutura.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-2xl border-2 border-slate-100 shadow-xl shadow-slate-200/50 hover:border-rose-200 transition-colors">
              <XOctagon className="w-10 h-10 text-rose-500 mb-6" />
              <h3 className="font-bold text-xl mb-3 text-slate-900">Dietas Complicadas Falham.</h3>
              <p className="text-slate-600 leading-relaxed">
                Ninguém sustenta regras matemáticas no prato a longo prazo, principalmente quando o cansaço bate.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border-2 border-slate-100 shadow-xl shadow-slate-200/50 hover:border-rose-200 transition-colors">
              <XOctagon className="w-10 h-10 text-rose-500 mb-6" />
              <h3 className="font-bold text-xl mb-3 text-slate-900">Contagem Obsessiva Esgota.</h3>
              <p className="text-slate-600 leading-relaxed">
                Você gasta uma energia mental imensa que deveria ser usada livremente para curtir a vida e a família.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border-2 border-slate-100 shadow-xl shadow-slate-200/50 hover:border-rose-200 transition-colors">
              <XOctagon className="w-10 h-10 text-rose-500 mb-6" />
              <h3 className="font-bold text-xl mb-3 text-slate-900">Restrição Gera Compulsão.</h3>
              <p className="text-slate-600 leading-relaxed">
                Cortar tudo que você gosta repentinamente só cria uma bomba-relógio emocional prestes a explodir.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-emerald-50 border-2 border-emerald-500 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/50 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="text-center mb-10">
                <span className="inline-block bg-emerald-600 text-white text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                  A SOLUÇÃO DEFINITIVA
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-950">
                  Apresentamos o conceito de{" "}
                  <span className="text-emerald-700 border-b-4 border-emerald-500 pb-1">
                    Alimentação Inteligente
                  </span>
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
                <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-emerald-950 block text-lg mb-1">Combinação correta dos alimentos</span>
                    <span className="text-slate-600 text-sm">A união estratégica entre fibras e proteínas.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-emerald-950 block text-lg mb-1">Estrutura do prato simplificada</span>
                    <span className="text-slate-600 text-sm">Visual, rápido e sem precisar de balanças.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-emerald-950 block text-lg mb-1">Controle glicêmico inteligente</span>
                    <span className="text-slate-600 text-sm">Suaviza os picos e quedas de energia.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-emerald-950 block text-lg mb-1">Previsibilidade alimentar</span>
                    <span className="text-slate-600 text-sm">Saber o impacto de cada refeição antecipadamente.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-emerald-600 p-4 rounded-xl md:col-span-2 shadow-sm text-white justify-center text-center">
                  <CheckCircle2 className="w-8 h-8 text-white flex-shrink-0" />
                  <div>
                    <span className="font-bold block text-xl mb-1">Redução drástica da compulsão</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5 e 6. PRODUTO E O QUE VAI DESBLOQUEAR */}
      <section className="py-24 bg-slate-900 border-t border-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 w-full max-w-md mx-auto">
              <div className="relative aspect-[3/4] bg-white rounded-xl shadow-[0_0_50px_-12px_rgba(16,185,129,0.4)] overflow-hidden border border-slate-200 transform -rotate-2 hover:rotate-0 transition-transform duration-500 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/book-alimentacao.png"
                  alt="Capa do Livro Alimentação Inteligente para Diabetes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <span className="text-emerald-400 font-bold tracking-wider uppercase text-sm mb-4 block">
                SEU NOVO ESTILO DE VIDA
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                Controle sua glicose e recupere sua energia em poucas semanas —{" "}
                <span className="text-emerald-400 border-b-2 border-emerald-400/30 pb-1">
                  sem dietas impossíveis.
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
                Sem cortar tudo que você gosta, sem contar calorias irritantes o dia inteiro e sem viver em medo constante. Apenas aprendendo a montar refeições que{" "}
                <strong className="text-white">trabalham a favor do seu corpo</strong>.
              </p>

              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl shadow-black/50">
                <h3 className="font-bold text-2xl mb-8 text-white flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-emerald-500" />
                  O que exatamente você vai acessar:
                </h3>
                <ul className="grid sm:grid-cols-2 gap-y-6 gap-x-4">
                  {[
                    "Como montar pratos que reduzem picos",
                    "Comer carboidratos em segurança",
                    "A técnica do Urge Surfing para compulsão",
                    "Como diferenciar fome física e emocional",
                    "Guia de Meal Prep para a semana toda",
                    "Sobrevivência em restaurantes e festas",
                    "Listas de compras organizadas por corredor",
                    "Caderno com 10 Receitas Comentadas",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 font-medium leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. O QUE TORNA ESSE MÉTODO DIFERENTE */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-slate-200 text-slate-700 text-sm font-bold tracking-wider uppercase mb-4">
              MUDANÇA DE PARADIGMA
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900">O que torna esse método diferente?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-3xl border border-slate-200 shadow-2xl">
            <div className="bg-rose-50/80 p-10 md:p-14 border-b md:border-b-0 md:border-r border-rose-100 flex flex-col justify-center">
              <h3 className="text-rose-900 font-bold text-2xl mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                  <XOctagon className="w-6 h-6 text-rose-600" />
                </div>
                O que NÃO É:
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-rose-800 text-lg">
                  <span className="w-2 h-2 rounded-full bg-rose-400 mt-2 flex-shrink-0"></span>
                  <strong>Não é dieta restritiva</strong> que te faz passar fome.
                </li>
                <li className="flex items-start gap-4 text-rose-800 text-lg">
                  <span className="w-2 h-2 rounded-full bg-rose-400 mt-2 flex-shrink-0"></span>
                  <strong>Não é terrorismo alimentar</strong> sobre ingredientes normais.
                </li>
                <li className="flex items-start gap-4 text-rose-800 text-lg">
                  <span className="w-2 h-2 rounded-full bg-rose-400 mt-2 flex-shrink-0"></span>
                  <strong>Não é &quot;nunca mais coma isso&quot;,</strong> abolindo o prazer.
                </li>
                <li className="flex items-start gap-4 text-rose-800 text-lg">
                  <span className="w-2 h-2 rounded-full bg-rose-400 mt-2 flex-shrink-0"></span>
                  <strong>Não é matemática nutricional</strong> que ninguém sustenta.
                </li>
              </ul>
            </div>
            <div className="bg-emerald-500 text-white p-10 md:p-14 flex flex-col justify-center">
              <h3 className="font-bold text-2xl mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-400 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                O QUE É DE VERDADE:
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-lg">
                  <span className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></span>
                  <strong>Estrutura simples</strong> que cabe em qualquer rotina.
                </li>
                <li className="flex items-start gap-4 text-lg">
                  <span className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></span>
                  <strong>Combinação inteligente</strong> de forma extremamente visual.
                </li>
                <li className="flex items-start gap-4 text-lg">
                  <span className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></span>
                  <strong>Previsibilidade glicêmica</strong> para evitar sustos de forma natural.
                </li>
                <li className="flex items-start gap-4 text-lg">
                  <span className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></span>
                  <strong>Aplicação prática imediata,</strong> sem precisar cozinhar 10 horas.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BÔNUS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-800 text-sm font-bold tracking-wider uppercase mb-4">
              FERRAMENTAS DE ALTO IMPACTO
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">Você também vai levar:</h2>
            <p className="text-slate-600 text-xl max-w-2xl mx-auto">
              Arsenais táticos completos, pensados exclusivamente para acelerar seus resultados hoje.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-3xl uppercase tracking-widest">
                BÔNUS 1
              </div>
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 leading-snug">
                Mapa de Combinações que Controlam a Glicose
              </h3>
              <p className="text-slate-500 font-medium mb-6 italic leading-relaxed">
                &quot;Aprenda exatamente COMO combinar alimentos para reduzir picos glicêmicos em qualquer refeição.&quot;
              </p>
              <div className="bg-slate-50 p-5 rounded-xl">
                <ul className="space-y-3 text-slate-700 font-medium">
                  <li className="flex gap-2 items-start">
                    <span className="text-indigo-600 mt-0.5">•</span> Nunca mais comer carboidrato sozinho
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-indigo-600 mt-0.5">•</span> Estrutura prática, rápida e visual do prato inteligente
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-indigo-600 mt-0.5">•</span> Exemplos práticos por refeição para aplicar hoje
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-indigo-600 mt-0.5">•</span> Como corrigir imediatamente refeições desequilibradas
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 relative">
              <div className="absolute top-0 right-0 bg-teal-600 text-white text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-3xl uppercase tracking-widest">
                BÔNUS 2
              </div>
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
                <Activity className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 leading-snug">
                Guia de Consistência Intestinal &amp; Diário
              </h3>
              <p className="text-slate-500 font-medium mb-6 italic leading-relaxed">
                &quot;Reequilibre seu intestino e reduza desconfortos digestivos em até 70 dias — sem extremismos.&quot;
              </p>
              <div className="bg-slate-50 p-5 rounded-xl">
                <ul className="space-y-3 text-slate-700 font-medium">
                  <li className="flex gap-2 items-start">
                    <span className="text-teal-600 mt-0.5">•</span> A conexão silenciosa: intestino e glicose equilibrados
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-teal-600 mt-0.5">•</span> Sensivelmente menos inflamação corporal
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-teal-600 mt-0.5">•</span> Protocolo simples, direto e muito seguro
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-teal-600 mt-0.5">•</span> Acompanhamento diário visual motivador
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 relative">
              <div className="absolute top-0 right-0 bg-rose-500 text-white text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-3xl uppercase tracking-widest">
                BÔNUS 3
              </div>
              <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-6">
                <HeartPulse className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 leading-snug">Plano Estratégico de 7 Dias</h3>
              <p className="text-slate-500 font-medium mb-6 italic leading-relaxed">
                &quot;Pare o caos alimentar e estabilize sua glicemia nos próximos 7 dias com um plano absurdamente executável.&quot;
              </p>
              <div className="bg-slate-50 p-5 rounded-xl">
                <ul className="space-y-3 text-slate-700 font-medium">
                  <li className="flex gap-2 items-start">
                    <span className="text-rose-500 mt-0.5">•</span> Passo a passo lógico para toda a sua semana
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-rose-500 mt-0.5">•</span> Fim definitivo do improviso que acaba mal na cozinha
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-rose-500 mt-0.5">•</span> Várias refeições base totalmente estruturadas
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-rose-500 mt-0.5">•</span> Execução imediata que descomplica sua vida
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BÔNUS ESPECIAL ESCASSEZ */}
      <section className="py-20 bg-amber-400 text-amber-950 relative overflow-hidden border-t border-amber-300 border-b shadow-inner">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex justify-center w-full">
              <div className="bg-white rounded-3xl shadow-2xl transform md:-rotate-6 hover:rotate-0 transition-transform duration-300 border-8 border-white w-full max-w-[280px] aspect-[9/16] relative overflow-hidden flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/app-alimentacao.png"
                  alt="Aplicativo Alimentação Inteligente"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <div className="inline-flex items-center justify-center md:justify-start gap-2 bg-amber-950 text-amber-400 px-5 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-6 shadow-md border border-amber-800">
                <Gift className="w-4 h-4" /> BÔNUS DE AÇÃO RÁPIDA (500 PRIMEIROS)
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
                Receba acesso ao moderno{" "}
                <span className="text-white underline decoration-amber-950">App Alimentação Inteligente</span>
              </h2>
              <p className="text-amber-900 text-xl font-medium mb-8 leading-relaxed">
                Transforme a teoria lida em execução diária clicável. É a ferramenta prática brutal na palma da sua mão, para atuar como um apoio inteligente e simplificador de escolhas na rotina.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-lg font-bold text-amber-950 shadow-sm border border-amber-200 flex items-center gap-2">
                  🔥 Praticidade Extrema
                </span>
                <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-lg font-bold text-amber-950 shadow-sm border border-amber-200 flex items-center gap-2">
                  ⚡ Velocidade
                </span>
                <span className="bg-white/80 backdrop-blur px-4 py-2 rounded-lg font-bold text-amber-950 shadow-sm border border-amber-200 flex items-center gap-2">
                  🛡️ Sensação de Controle
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11 & 12. ANCORAGEM DE VALOR, RECAP E PREÇO */}
      <section className="py-24 bg-slate-900 text-white" id="checkout">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              O custo do caos é <span className="text-rose-500">MUITO MAIOR</span>.
            </h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
              Pagar mensalidades inacabáveis de consultas, comprar dietas prontas que falham, realizar exames extras e lidar com o incalculável desgaste mental.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-14 text-slate-900 shadow-2xl relative overflow-hidden border-8 border-emerald-500 max-w-3xl mx-auto">
            <h3 className="text-3xl font-extrabold mb-8 text-center border-b border-slate-200 pb-8">
              Resumo da Sua Compra:
            </h3>

            <div className="space-y-5 mb-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg font-bold">Livro: Alimentação Inteligente para Diabetes</span>
                </div>
                <div className="text-left sm:text-right flex-shrink-0 ml-12 sm:ml-0 gap-2 sm:gap-0 flex sm:flex-col items-center sm:items-end">
                  <span className="text-sm text-rose-400 line-through block">De: R$ 97,00</span>
                  <span className="text-emerald-600 font-bold block">Por: R$ 67,00</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <Gift className="w-8 h-8 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg font-semibold">Mapa de Combinações de Glicose</span>
                </div>
                <div className="text-left sm:text-right flex-shrink-0 ml-12 sm:ml-0 gap-2 sm:gap-0 flex sm:flex-col items-center sm:items-end">
                  <span className="text-sm text-rose-400 line-through block">De: R$ 47,00</span>
                  <span className="text-emerald-600 font-bold block">Por: R$ 0,00</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <Gift className="w-8 h-8 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg font-semibold">Guia &amp; Diário de Consistência Intestinal</span>
                </div>
                <div className="text-left sm:text-right flex-shrink-0 ml-12 sm:ml-0 gap-2 sm:gap-0 flex sm:flex-col items-center sm:items-end">
                  <span className="text-sm text-rose-400 line-through block">De: R$ 67,00</span>
                  <span className="text-emerald-600 font-bold block">Por: R$ 0,00</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <Gift className="w-8 h-8 text-emerald-500 flex-shrink-0" />
                  <span className="text-lg font-semibold">Plano de 7 Dias para Estabilização</span>
                </div>
                <div className="text-left sm:text-right flex-shrink-0 ml-12 sm:ml-0 gap-2 sm:gap-0 flex sm:flex-col items-center sm:items-end">
                  <span className="text-sm text-rose-400 line-through block">De: R$ 47,00</span>
                  <span className="text-emerald-600 font-bold block">Por: R$ 0,00</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-amber-50 p-4 rounded-xl border border-amber-200 shadow-sm mt-6">
                <div className="flex items-center gap-4">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <Smartphone className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-amber-600 uppercase tracking-widest mb-1">
                      Oferta por Tempo Limitado
                    </span>
                    <span className="text-lg font-extrabold text-amber-950">Acesso ao App Alimentação Inteligente</span>
                  </div>
                </div>
                <div className="text-left sm:text-right flex-shrink-0 ml-12 sm:ml-0 gap-2 sm:gap-0 flex sm:flex-col items-center sm:items-end">
                  <span className="text-sm text-rose-500 line-through block">De: R$ 197,00</span>
                  <span className="text-emerald-600 font-black block">Por: R$ 0,00</span>
                </div>
              </div>
            </div>

            <div className="text-center pt-8 border-t-2 border-dashed border-slate-200">
              <p className="text-slate-500 font-bold uppercase tracking-wider mb-2">Tudo isso por apenas:</p>
              <div className="text-rose-400 text-2xl line-through font-bold mb-1">De R$ 455,00</div>
              <div className="text-7xl font-black text-slate-900 mb-8 tracking-tighter">
                R$ 67<span className="text-3xl text-slate-400 font-medium tracking-normal">,00</span>
              </div>
              <a
                href="https://pay.kiwify.com.br/2aobDGU"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-emerald-600 hover:bg-emerald-500 text-white text-2xl font-black py-6 px-10 rounded-2xl shadow-xl shadow-emerald-600/30 transform transition hover:-translate-y-1 uppercase tracking-wider"
              >
                COMEÇAR AGORA <ArrowRight className="w-8 h-8" />
              </a>
              <p className="text-slate-500 text-sm mt-6 font-medium flex items-center justify-center gap-2">
                🔒 Compra 100% Segura • Acesso imediato
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FAQ */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-16">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            <FaqItem
              question="Funciona para Diabetes Tipo 2?"
              answer="Sim! As estratégias de estrutura e combinação são perfeitamente desenhadas para estabilizar a glicemia e ajudar na perda de peso (com foco em remissão baseado no estudo DiRECT)."
            />
            <FaqItem
              question="E quem tem Diabetes Tipo 1?"
              answer="O material inclui o 'Protocolo Diferenciado: Se Você é Tipo 1', com foco total em estabilidade glicêmica e segurança. Lembre-se que o DM1 continua exigindo o uso de insulina, mas o guia ajudará a evitar os grandes picos e vales (aumentando o seu tempo no alvo / TIR)."
            />
            <FaqItem
              question="Serve para pré-diabetes?"
              answer="Absolutamente. Aplicar este conceito no estágio de pré-diabetes é a forma mais eficaz e sensata de evitar a progressão completa da doença."
            />
            <FaqItem
              question="Preciso cortar todos os carboidratos?"
              answer="NÃO! Você vai aprender táticas para comer carboidratos de forma inteligente, combinando-os com fibras e proteínas de alto valor biológico para minimizar o pico glicêmico, sem restrições severas intoleráveis."
            />
            <FaqItem
              question="Posso aplicar mesmo sendo um completo iniciante na cozinha?"
              answer="Com certeza. O foco aqui não é em pratos difíceis. Focamos estritamente na estrutura simples do prato ensinada nos pilares do método."
            />
            <FaqItem
              question="Quanto tempo por dia preciso dedicar à dieta?"
              answer="Praticamente nenhum extra! O Guia foi desenhado para facilitar a vida através de bases prontas, agilizando seu dia."
            />
            <FaqItem
              question="E se eu já tentei outras dietas e falhei?"
              answer="Dietas falham porque são baseadas apenas em restrições absurdas. A restrição drástica aciona mecanismos de sobrevivência que geram compulsão rebote. O nosso foco aqui é na criação de uma Estrutura que você realmente siga sem sentir falta."
            />
            <FaqItem
              question="Como recebo o material e o Aplicativo Bônus?"
              answer="Logo após a confirmação total do pagamento na plataforma segura, você recebe um email automático com seu acesso definitivo a todos os PDF's e os links para ativar o seu Aplicativo."
            />
          </div>
        </div>
      </section>

      {/* 14. FECHAMENTO FINAL */}
      <section className="py-24 bg-white text-center border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-slate-900">
            Você não precisa de mais uma dieta. <br />
            <span className="text-rose-600 block mt-2">Precisa parar de viver em guerra com a comida.</span>
          </h2>
          <p className="text-2xl text-slate-600 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
            A liberdade alimentar, a estabilidade glicêmica e a energia que você tanto busca estão a apenas uma decisão lúcida de distância.
          </p>
          <a
            href="#checkout"
            className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white text-2xl font-black py-6 px-12 rounded-2xl shadow-2xl transform transition hover:scale-105 uppercase tracking-wide gap-4"
          >
            Comece sua reestruturação agora <ArrowRight className="w-8 h-8 text-emerald-400" />
          </a>
        </div>
      </section>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border-2 border-slate-100 rounded-xl overflow-hidden hover:border-slate-300 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
      >
        <span className="font-bold text-slate-900 text-lg">{question}</span>
        <ChevronDown
          className={`w-6 h-6 text-slate-400 transition-transform ${isOpen ? "rotate-180 text-emerald-500" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-slate-600 border-t border-slate-50 pt-4 text-lg leading-relaxed font-medium">
          {answer}
        </div>
      )}
    </div>
  );
}
