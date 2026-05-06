export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  { id: 'faq1', question: 'Como isso combate o Fenômeno do Alvorecer?', answer: 'A alta quantidade de proteínas no ovo ajuda a estabilizar a glicemia matinal, evitando picos causados pelos hormônios do despertar.' },
  { id: 'faq2', question: 'Qual a Carga Glicêmica (CG) dessa porção?', answer: 'A CG é muito baixa (2), o que significa que o impacto no açúcar no sangue é mínimo e seguro para o café da manhã.' },
  { id: 'faq3', question: 'Dica para medir a glicemia pré-café?', answer: 'Meça a glicemia em jejum logo ao acordar, antes de qualquer atividade física ou ingestão de alimentos, para ter um valor basal preciso.' },
  { id: 'faq4', question: 'A aveia não aumenta a glicemia?', answer: 'Em porções controladas e combinada com fibras (espinafre) e proteínas (ovo, ricota), a aveia tem sua absorção retardada, evitando picos.' },
  { id: 'faq5', question: 'O que é o Fenômeno do Alvorecer?', answer: 'É o aumento natural da glicose entre 3h e 8h da manhã, causado por hormônios como cortisol e GH, que preparam o corpo para o dia.' },
  { id: 'faq6', question: 'Como o sono afeta a glicemia?', answer: 'Dormir menos de 6 horas aumenta o cortisol, o que eleva a resistência à insulina e a produção de glicose pelo fígado.' },
  { id: 'faq7', question: 'Abóbora é segura para diabéticos?', answer: 'Sim, a abóbora cabotiá tem Índice Glicêmico médio, mas Carga Glicêmica baixa (7) em porções de meia xícara, sendo segura.' },
  { id: 'faq8', question: 'Por que usar gengibre no café da manhã?', answer: 'O gengibre tem propriedades anti-inflamatórias e auxilia na digestão, além de ajudar no controle glicêmico ao longo do dia.' },
  { id: 'faq9', question: 'Devo monitorar a glicemia de madrugada?', answer: 'Se você acorda frequentemente com hiperglicemia, medir às 3h da manhã ajuda a diferenciar o Fenômeno do Alvorecer do Efeito Somogyi.' },
  { id: 'faq10', question: 'Quinoa é melhor que arroz?', answer: 'Sim, a quinoa tem mais proteínas e fibras que o arroz branco, além de um Índice Glicêmico menor, proporcionando mais saciedade.' },
  { id: 'faq11', question: 'Qual a importância das fibras matinais?', answer: 'As fibras atuam como um "gel" no estômago, retardando a passagem da glicose para o sangue e evitando picos abruptos.' },
  { id: 'faq12', question: 'Como a higiene do sono ajuda no diabetes?', answer: 'Um sono de qualidade (quarto escuro, sem telas 1h antes) reduz o estresse e o cortisol, melhorando a sensibilidade à insulina matinal.' },
  { id: 'faq13', question: 'Ricota é uma boa opção de queijo?', answer: 'Sim, a ricota é uma proteína magra, com menos sódio e gordura que queijos amarelos, ideal para compor refeições leves.' },
  { id: 'faq14', question: 'Posso comer abobrinha crua?', answer: 'Sim, a abobrinha crua ou levemente refogada preserva mais nutrientes, fibras e textura crocante, com menor impacto glicêmico.' },
  { id: 'faq15', question: 'O que fazer se a glicemia matinal estiver alta?', answer: 'Anote os valores, revise seu jantar (evite excesso de carboidratos) e a qualidade do sono. Se persistir, consulte seu médico para ajuste de medicação.' },
  { id: 'faq16', question: 'O estresse afeta a glicose?', answer: 'Sim, o estresse eleva o cortisol, que por sua vez eleva a glicose. Práticas de relaxamento antes de dormir são essenciais.' },
  { id: 'faq17', question: 'Qual o impacto da cafeína?', answer: 'A cafeína pode aumentar a resistência à insulina em algumas pessoas. Monitore sua resposta e evite excessos, especialmente perto da hora de dormir.' },
  { id: 'faq18', question: 'Atividade física matinal ajuda?', answer: 'Sim, um exercício leve pela manhã ajuda os músculos a utilizarem o excesso de glicose circulante, reduzindo a hiperglicemia.' },
  { id: 'faq19', question: 'Como diferenciar Alvorecer de Somogyi?', answer: 'No Alvorecer, a glicemia sobe progressivamente após as 3h. No Somogyi, há uma queda (hipoglicemia) às 2h-3h, seguida de um rebote alto.' },
  { id: 'faq20', question: 'O que é Carga Glicêmica (CG)?', answer: 'A CG leva em conta a qualidade (IG) e a quantidade de carboidrato na porção. CG <= 10 é considerada de baixo impacto glicêmico.' }
];
