"use client";

import {
  CheckCircle2,
  ChevronRight,
  AlertTriangle,
  ArrowRight,
  Smartphone,
  BookOpen,
  Gift,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";

export default function LandingPageClient() {
  return (
    <div className="bg-white">
      {/* 1. HEADLINE & 2. SUBHEADLINE (HERO) */}
      <header className="bg-slate-900 text-white pt-20 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-slate-950"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-block bg-rose-500/20 text-rose-300 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-6 uppercase border border-rose-500/30">
            Atenção: Para quem luta diariamente contra a balança e a vontade de
            comer
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
            Descubra o &lsquo;Botão de Desliga&rsquo; da Sua Fome e Volte a Ter
            o Controle do Seu Corpo.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Um método simples para estabilizar e controlar seu peso,{" "}
            <strong className="text-white font-semibold">
              frear a compulsão por doce
            </strong>{" "}
            e eliminar aquele cansaço diário...{" "}
            <span className="text-emerald-400 font-semibold border-b border-emerald-400/50">
              Sem precisar de dietas malucas ou cortar o que você ama.
            </span>
          </p>
          <a
            href="https://pay.kiwify.com.br/bzmmUlP"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 text-xl font-bold py-5 px-10 rounded-full shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all transform hover:scale-105 inline-flex items-center justify-center gap-3"
          >
            Quero Controlar Minha Fome Agora
            <ChevronRight className="w-6 h-6" />
          </a>
          <p className="text-slate-400 text-sm mt-4">
            Acesso imediato &bull; Compra 100% segura
          </p>
        </div>
      </header>

      {/* 3. PRIMEIRA DOBRA (IDENTIFICAÇÃO) */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Você se reconhece em alguma destas situações?
            </h2>
            <p className="text-lg text-slate-600">
              Seja sincero consigo mesmo por um momento...
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Você acaba de almoçar e, uma hora depois, já está caçando algo na geladeira?",
              "Sente um cansaço absurdo à tarde, como se tivessem drenado sua energia?",
              "Tem uma vontade incontrolável de comer doce (como se fosse uma necessidade física)?",
              "Sabe que está exagerando na comida, promete que vai parar, mas perde o controle de novo?",
              "A barriga não diminui por nada, mesmo quando você tenta segurar a alimentação?",
              "Foi avisado(a) que o açúcar no sangue está no limite (ou já tem o diagnóstico) e bate aquele medo silencioso do que pode acontecer no futuro?",
            ].map((text, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100 items-start"
              >
                <div className="bg-rose-100 p-2 rounded-full mt-1 shrink-0">
                  <AlertTriangle className="w-5 h-5 text-rose-500" />
                </div>
                <p className="text-lg text-slate-700 font-medium">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-white border border-slate-200 rounded-2xl shadow-lg">
            <p className="text-2xl font-bold text-slate-800 mb-2">
              Se você respondeu{" "}
              <span className="text-rose-600">SIM</span> para qualquer uma
              delas...
            </p>
            <p className="text-xl text-slate-600">
              Por favor, preste muita atenção no que vou te revelar agora.
            </p>
          </div>
        </div>
      </section>

      {/* 4. QUEBRA DE CRENÇA & 5. EXPLICAÇÃO DO PROBLEMA */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              A culpa dos exageros{" "}
              <span className="text-rose-600 underline decoration-rose-200 underline-offset-4">
                NÃO
              </span>{" "}
              é da sua força de vontade.
            </h2>
            <p className="text-2xl font-medium text-slate-600 leading-relaxed">
              O problema não é o carboidrato que você come.
              <br />O problema é{" "}
              <strong className="text-slate-900">como ele entra</strong> na sua
              corrente sanguínea.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="bg-rose-100 text-rose-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  X
                </span>
                O Ciclo do Sofrimento
              </h3>
              <p className="text-slate-600 text-lg mb-4">
                Quando você come um carboidrato sozinho (como um pão puro ou um
                doce), ele vira açúcar no seu sangue muito rápido.
              </p>
              <p className="text-slate-600 text-lg mb-4">
                Isso gera um <strong>&ldquo;pico&rdquo; violento</strong> de
                energia. O seu corpo, em desespero para baixar isso, produz
                muita insulina.
              </p>
              <div className="bg-rose-50 p-4 border-l-4 border-rose-500 rounded-r-lg mb-4 text-rose-900 font-medium">
                O resultado? O açúcar despenca. Junto com ele, despenca a sua
                energia.
              </div>
              <p className="text-slate-700 text-lg font-bold">
                E o que seu cérebro faz quando a energia cai rápido? Ele grita
                pedindo mais comida. Especialmente doce. É aí que a compulsão
                vence.
              </p>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 text-white relative shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-emerald-500/10 blur-3xl rounded-full"></div>
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">
                A Solução Invisível
              </h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "Colocar um 'freio' nesse açúcar.",
                  "Ensinar o corpo a digerir devagar.",
                  "Estabilizar a energia o dia todo.",
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-300">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-slate-700 relative z-10">
                <p className="text-emerald-300 font-medium text-lg leading-snug">
                  Quando você elimina os &ldquo;picos&rdquo;, a fome constante
                  simplesmente desaparece. A compulsão some. E o peso começa a
                  ceder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. APRESENTAÇÃO DO MÉTODO */}
      <section className="py-24 px-4 bg-emerald-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-emerald-300 font-semibold uppercase tracking-widest text-sm mb-4">
            Apresentando a Solução Definitiva
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
            Método Glicose Inteligente&trade;
          </h2>
          <p className="text-xl md:text-2xl text-emerald-100 font-light max-w-3xl mx-auto leading-relaxed mb-12">
            Um protocolo simples e prático onde você não corta o que gosta. Você
            apenas aprende as{" "}
            <strong>combinações corretas</strong> para blindar seu
            corpo contra a fome oculta e a fadiga.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-emerald-800/50 p-8 rounded-2xl border border-emerald-700/50 backdrop-blur-sm">
              <div className="bg-emerald-700 w-12 h-12 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">
                Combinações Blindadas
              </h4>
              <p className="text-emerald-200">
                Aprenda a juntar a proteína ou fibra certa na sua refeição para
                diminuir pela metade o impacto de qualquer carboidrato.
              </p>
            </div>
            <div className="bg-emerald-800/50 p-8 rounded-2xl border border-emerald-700/50 backdrop-blur-sm">
              <div className="bg-emerald-700 w-12 h-12 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">
                A Ordem Certa
              </h4>
              <p className="text-emerald-200">
                Um truque incrivelmente simples: a ordem em que você come os
                alimentos do prato muda tudo na sua saciedade.
              </p>
            </div>
            <div className="bg-emerald-800/50 p-8 rounded-2xl border border-emerald-700/50 backdrop-blur-sm">
              <div className="bg-emerald-700 w-12 h-12 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">
                Resgates Rápidos
              </h4>
              <p className="text-emerald-200">
                Exagerou? Comeu muito doce na festa? O método ensina o movimento
                exato para você não travar seu organismo no dia seguinte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BENEFÍCIOS */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-16">
            O que acontece com seu corpo nas{" "}
            <span className="text-emerald-600">primeiras semanas:</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              {
                title: "Silêncio Alimentar",
                desc: 'Sabe aquela vozinha na cabeça dizendo "estou com fome" o tempo todo? Ela cala a boca. Você passa a sentir uma saciedade real e prolongada.',
              },
              {
                title: "Desmame do Açúcar",
                desc: "Sem sofrimento, seu paladar muda. A vontade desesperada por um docinho depois do almoço despenca assustadoramente.",
              },
              {
                title: "Energia Linear",
                desc: "Acabe com a 'moleza' das 15h. Seu corpo passa a ter energia constante do momento que acorda até a hora de dormir.",
              },
              {
                title: "Adeus, Culpa",
                desc: "A sensação reconfortante de comer algo gostoso sabendo que você preparou o seu corpo para receber aquilo. Fim dos exageros noturnos.",
              },
              {
                title: "O Corpo Desincha",
                desc: "Ao equilibrar seus hormônios naturalmente pela comida, a retenção de líquido e o inchaço abdominal começam a ir embora.",
              },
              {
                title: "Controle Retomado",
                desc: "O alívio de fazer exames e ver os números caindo, e de saber que o volante da sua saúde voltou para a sua mão.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. O QUE VAI RECEBER & 9. BÔNUS & 10. APP */}
      <section className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">O Novo Padrão de Vida</h2>
            <p className="text-xl text-slate-400">
              Tudo que você recebe ao entrar para o Método hoje.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
              <div className="bg-emerald-500/20 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="text-emerald-400 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Livro Digital: O Método Completo
              </h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Um material de leitura rápida e direta ao ponto que te ensina a
                ciência simples por trás do seu corpo. Zero jargão médico, 100%
                de aplicação prática para sua próxima refeição.
              </p>
              <p className="text-emerald-400 font-medium">
                De{" "}
                <span className="line-through opacity-70">R$ 97,00</span> por{" "}
                <strong className="text-white">GRÁTIS</strong>
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                BÔNUS PREMIUM
              </div>
              <div className="bg-rose-500/20 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Gift className="text-rose-400 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Mapa de Combinações Inteligentes
              </h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Um guia visual para você colar na geladeira ou salvar no
                celular. Mostra exatamente o que misturar com aquele macarrão ou
                chocolate para ele não causar estragos na sua fome e energia.
              </p>
              <p className="text-rose-400 font-medium">
                De{" "}
                <span className="line-through opacity-70">R$ 47,00</span> por{" "}
                <strong className="text-white">GRÁTIS</strong>
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                BÔNUS DE ACELERAÇÃO
              </div>
              <div className="bg-amber-500/20 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <ArrowRight className="text-amber-400 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Plano de 7 Dias para &lsquo;Zerar&rsquo;
              </h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Um protocolo de apenas uma semana desenhado para desintoxicar
                seu paladar viciado em doce e reiniciar seus sensores de
                saciedade sem passar fome.
              </p>
              <p className="text-amber-400 font-medium">
                De{" "}
                <span className="line-through opacity-70">R$ 67,00</span> por{" "}
                <strong className="text-white">GRÁTIS</strong>
              </p>
            </div>

            {/* THE APP SHOWCASE */}
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 p-8 rounded-3xl border border-indigo-500/30 relative overflow-hidden shadow-[0_0_30px_rgba(79,70,229,0.2)] md:row-span-2 flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-24 bg-indigo-500/20 blur-3xl rounded-full"></div>
              <div className="relative z-10">
                <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                  EXCLUSIVO
                </div>
                <div className="bg-indigo-500/20 w-14 h-14 rounded-full flex items-center justify-center mb-6 mt-4">
                  <Smartphone className="text-indigo-400 w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">
                  App Glicose Inteligente
                </h3>
                <p className="text-indigo-100/80 mb-6 text-lg leading-relaxed">
                  Seu assistente alimentar pessoal no bolso. Vai a um
                  restaurante? Pensa em comer uma sobremesa? O App te diz
                  exatamente o que fazer antes ou depois para proteger seu corpo
                  e evitar o pico de fome minutos depois. Tecnologia prática
                  para decisões do dia a dia, para você nunca mais se sentir
                  perdido(a).
                </p>
                <div className="p-4 bg-black/30 rounded-xl mb-4 border border-white/5">
                  <p className="text-sm text-slate-300 italic">
                    &ldquo;Ter o app na mão é como andar com um nutricionista no
                    bolso. Eu digito a comida da festa, e ele me diz a estratégia
                    exata.&rdquo;
                  </p>
                </div>
                <p className="text-indigo-400 font-bold text-xl mb-4">
                  De{" "}
                  <span className="line-through opacity-70">R$ 197,00</span>{" "}
                  por <strong className="text-white">GRÁTIS</strong>
                </p>
                <div className="bg-rose-500/20 text-rose-200 text-sm font-semibold px-4 py-3 rounded-xl border border-rose-500/30 w-full mt-2">
                  &#9888;&#65039; Bônus por tempo limitado: o Mini App Glicose
                  Inteligente será disponibilizado apenas para as primeiras 500
                  compras.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. TRANSFORMAÇÃO & 12. DEPOIMENTOS & CTA */}
      <section className="py-24 px-4 bg-emerald-50">
        <div className="max-w-5xl mx-auto text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
            Histórias reais de quem assumiu o controle
          </h2>
          <p className="text-2xl text-slate-600 mb-16 font-medium max-w-3xl mx-auto">
            Veja o que acontece quando você para de lutar contra a sua fome e
            começa a usar a ciência das combinações a seu favor.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left mb-20">
            {[
              {
                text: 'Eu vivia com um cansaço absurdo depois do almoço. Achava que era normal da idade. Bastou eu começar a aplicar a "ordem certa" e adicionar as superfibras explicadas no método que minha energia à tarde mudou completamente. E o melhor: aquela vontade louca de comer doce às 16h simplesmente sumiu.',
                name: "Marta Silvério",
                age: "45 anos",
              },
              {
                text: "Meu médico tinha me alertado sobre o pré-diabetes. Eu estava apavorada achando que nunca mais ia poder comer um pão francês. Com o Mapa de Combinações, eu aprendi a 'vestir' o carboidrato. Refiz meus exames e, em 60 dias, minha hemoglobina glicada caiu de 6,2 para 5,5! O médico ficou impressionado e eu recuperei minha paz.",
                name: "Sandra Lima",
                age: "52 anos",
              },
              {
                text: 'Eu já tinha tentado de tudo para emagrecer, mas a compulsão noturna sempre me sabotava. O plano de 7 dias me ajudou a sair da montanha-russa de glicose. Hoje eu tenho saciedade real. A sensação de abrir a geladeira à noite e não sentir necessidade de "atacar" nada é libertadora. O peso está caindo naturalmente, sem sofrimento.',
                name: "Henrique Luis Ortiz",
                age: "38 anos",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 relative"
              >
                <div className="text-amber-400 flex gap-1 mb-4 text-xl">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.age}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
            Seu corpo responde rápido quando você aprende a usar o manual de
            instruções.
          </h2>
          <p className="text-2xl text-slate-600 mb-12 font-medium max-w-2xl mx-auto">
            Imagine acordar leve, passar o dia cheio de energia, comer o que
            gosta sem medo da culpa e ver suas roupas voltando a servir.
          </p>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-xl mx-auto">
            <p className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-2">
              Acesso Completo
            </p>
            <div className="flex flex-col items-center justify-center gap-1 mb-6">
              <span className="text-lg text-slate-400 line-through font-medium">
                R$ 408,00
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-slate-700">3x</span>
                <span className="text-6xl font-black text-slate-900">
                  R$ 15<span className="text-4xl">,66</span>
                </span>
              </div>
              <span className="text-lg text-slate-500 font-medium">
                ou R$ 47,00 à vista
              </span>
            </div>

            <a
              href="https://pay.kiwify.com.br/bzmmUlP"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-rose-600 hover:bg-rose-500 text-white text-xl font-bold py-6 px-8 rounded-2xl transition-all transform hover:scale-105 flex flex-col items-center justify-center gap-1 shadow-lg shadow-rose-600/30"
            >
              <span>QUERO COMEÇAR A MUDANÇA AGORA</span>
              <span className="text-sm font-normal text-rose-200">
                Acesso imediato ao Método, Mapas e ao App
              </span>
            </a>
            <p className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Pagamento criptografado e 100% seguro.
            </p>
          </div>
        </div>
      </section>

      {/* 13. GARANTIA */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-slate-800 p-8 rounded-3xl border border-slate-700">
          <div className="bg-emerald-500 w-24 h-24 rounded-full flex items-center justify-center shrink-0">
            <ShieldCheck className="w-12 h-12 text-slate-900" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">
              Sua Segurança Total: Garantia Blindada de 7 Dias
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Entre, leia o livro, devore o plano de 7 dias, baixe os bônus e
              teste o App. Aplique a primeira estratégia na sua próxima
              refeição. Se você não sentir a redução da fome e o aumento da
              energia imediatamente, ou se achar que não é pra você, devolvemos
              100% do seu dinheiro. Sem perguntas difíceis.
            </p>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 flex items-center justify-center gap-3">
              <HelpCircle className="w-10 h-10 text-emerald-500" />
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Serve para quem tem pré-diabetes ou diabetes?",
                a: "Sim, absolutamente. O princípio central do Método Glicose Inteligente é exatamente evitar os sobressaltos e picos de açúcar no sangue. Aplicar essas estratégias é uma das melhores coisas que você pode fazer pela sua saúde metabólica para voltar ao controle dos seus exames, associado ao tratamento médico.",
              },
              {
                q: "Vou precisar cortar pão, macarrão e doce para dar certo?",
                a: "De jeito nenhum. O método ensina como VESTIR o carboidrato usando as superfibras e gorduras certas. Você aprende a ordem correta no prato para que ele não traga os efeitos negativos do pico glicêmico, como fome rebote e cansaço.",
              },
              {
                q: "Isso é mais uma dieta restritiva?",
                a: "Não. Não vamos contar calorias nem pesar comida. É um método de organização inteligente do alimento, onde você aprende combinações práticas (como proteínas e gorduras antes do carboidrato).",
              },
              {
                q: "Preciso comprar suplementos caros?",
                a: 'Não. O foco do Método é usar "comida de verdade" (vegetais, proteínas, azeite, etc). Há um bônus extra no material ensinando sobre crononutrição e fitoterápicos (como canela e chás), mas eles são estratégias complementares de baixo custo, não obrigatoriedades caras.',
              },
              {
                q: "É muito difícil manter isso no dia a dia?",
                a: "Pelo contrário. Com o Mapa de Combinações Inteligentes e a abordagem simplificada, você consegue aplicar o método em qualquer restaurante ou até num simples lanche de tarde. É um conhecimento para levar pra vida.",
              },
              {
                q: "Em quanto tempo percebo diferença?",
                a: "Na energia e na fome? Em um ou dois dias. O fim da sonolência da tarde e o controle da compulsão por doce acontecem rapidamente quando você estabiliza sua insulina com as combinações certas e o Plano de 7 Dias.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200"
              >
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {faq.q}
                </h4>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-500 py-8 text-center text-sm border-t border-slate-800">
        <p className="max-w-4xl mx-auto px-4">
          Aviso Legal: As informações contidas neste produto não substituem
          aconselhamento médico profissional, diagnóstico ou tratamento.
          Consulte sempre seu médico ou nutricionista antes de fazer mudanças na
          dieta.
        </p>
        <p className="mt-4">
          &copy; 2025 Método Glicose Inteligente. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
