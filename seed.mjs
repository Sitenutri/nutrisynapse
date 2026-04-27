import bcrypt from 'bcryptjs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PrismaClient } from './src/generated/prisma/client.js';
import { PrismaLibSql } from '@prisma/adapter-libsql';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.resolve(__dirname, 'dev.db');
const adapter = new PrismaLibSql({ url: `file:${dbPath}` });
const prisma = new PrismaClient({ adapter });

function slugify(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

async function seed() {
  /* ═══════════════════════════════════════════════════════════════════ */
  /*  Admin user                                                        */
  /* ═══════════════════════════════════════════════════════════════════ */
  const hash = await bcrypt.hash('nutri2026', 10);
  const user = await prisma.user.upsert({
    where: { email: 'admin@nutrisynapse.com' },
    update: {},
    create: { email: 'admin@nutrisynapse.com', password: hash, name: 'Bibi Admin' }
  });
  console.log('Admin:', user.email);

  /* ═══════════════════════════════════════════════════════════════════ */
  /*  Tags                                                              */
  /* ═══════════════════════════════════════════════════════════════════ */
  const tagNames = ['Neurociência', 'Nutrição', 'Sabedoria', 'Mudança de Hábitos', 'Microbiota', 'Diabetes', 'Psicanálise'];
  const tagMap = {};
  for (const name of tagNames) {
    const slug = slugify(name);
    const tag = await prisma.tag.upsert({ where: { slug }, update: {}, create: { name, slug } });
    tagMap[name] = tag.id;
    console.log('Tag:', name, '->', slug);
  }

  /* ═══════════════════════════════════════════════════════════════════ */
  /*  Blog Posts                                                        */
  /* ═══════════════════════════════════════════════════════════════════ */
  const posts = [
    {
      title: 'Eixo Intestino-Cérebro: Como Sua Microbiota Influencia Suas Emoções',
      slug: 'eixo-intestino-cerebro-como-sua-microbiota-influencia-suas-emocoes',
      description: 'Descubra como as bactérias do seu intestino conversam diretamente com o seu cérebro e de que forma isso afeta humor, ansiedade e até a tomada de decisões.',
      published: true,
      featured: true,
      tags: ['Microbiota', 'Neurociência'],
      createdAt: new Date('2026-04-25T10:00:00Z'),
      contents: [
        { type: 'text', content: 'O intestino é frequentemente chamado de "segundo cérebro" — e com razão. Ele contém mais de 100 milhões de neurônios e produz cerca de 90% da serotonina do nosso corpo, o neurotransmissor do bem-estar.\n\nMas a conversa entre intestino e cérebro vai muito além da serotonina. Através do nervo vago — a principal autoestrada de comunicação do corpo — bilhões de sinais trafegam diariamente, influenciando desde o nosso humor até decisões que acreditamos ser puramente racionais.', order: 1 },
        { type: 'text', content: '## O Eixo Intestino-Cérebro\n\nO eixo intestino-cérebro é uma rede bidirecional de comunicação entre o sistema nervoso entérico (do intestino) e o sistema nervoso central (cérebro e medula). Essa rede inclui:\n\n- **Nervo vago**: o principal canal de comunicação, com 80% das fibras levando informação do intestino para o cérebro\n- **Eixo HPA**: o sistema de resposta ao estresse\n- **Sistema imunológico**: 70% das nossas células imunes estão no intestino\n- **Metabólitos microbianos**: ácidos graxos de cadeia curta, neurotransmissores e outros compostos produzidos pelas bactérias', order: 2 },
        { type: 'text', content: '## Como Cuidar Dessa Conexão\n\n1. **Diversifique sua alimentação**: quanto mais variada a dieta, mais diversa a microbiota\n2. **Inclua fibras prebióticas**: alho, cebola, banana verde, aveia\n3. **Consuma probióticos naturais**: iogurte, kefir, kombucha, chucrute\n4. **Reduza ultraprocessados**: eles reduzem a diversidade microbiana\n5. **Gerencie o estresse**: o estresse crônico altera a composição da microbiota\n6. **Durma bem**: a privação de sono afeta negativamente as bactérias intestinais', order: 3 },
      ],
    },
    {
      title: 'Neuroplasticidade e Alimentação: Nutrientes que Moldam seu Cérebro',
      slug: 'neuroplasticidade-e-alimentacao-nutrientes-que-moldam-seu-cerebro',
      description: 'Ômega-3, polifenóis e vitaminas do complexo B são aliados poderosos da neuroplasticidade. Saiba como incluir esses nutrientes no dia a dia.',
      published: true,
      tags: ['Neurociência', 'Nutrição'],
      createdAt: new Date('2026-04-20T08:00:00Z'),
      contents: [
        { type: 'text', content: 'A neuroplasticidade — a capacidade do cérebro de se reorganizar, criar novas conexões e até gerar novos neurônios — é uma das descobertas mais revolucionárias da neurociência moderna. E a alimentação desempenha um papel fundamental nesse processo.\n\nCada refeição é uma oportunidade de nutrir (ou prejudicar) a capacidade do seu cérebro de se adaptar e evoluir.', order: 1 },
        { type: 'text', content: '## Nutrientes-Chave para a Neuroplasticidade\n\n### Ômega-3 (DHA e EPA)\nOs ácidos graxos ômega-3 são componentes estruturais das membranas neuronais. O DHA, em particular, é essencial para a fluidez das membranas sinápticas, facilitando a transmissão de sinais entre neurônios.\n\n**Fontes**: salmão, sardinha, linhaça, chia, nozes\n\n### Polifenóis\nPresentes em frutas vermelhas, chá verde e cacau, os polifenóis atravessam a barreira hematoencefálica e exercem efeitos neuroprotetores, estimulando o BDNF (fator neurotrófico derivado do cérebro).\n\n### Vitaminas do Complexo B\nEssenciais para a síntese de neurotransmissores e para a manutenção da bainha de mielina que protege os axônios.\n\n**Fontes**: ovos, leguminosas, vegetais verde-escuros, grãos integrais', order: 2 },
      ],
    },
    {
      title: 'Hábitos Alimentares: Por que é tão Difícil Mudar?',
      slug: 'habitos-alimentares-por-que-e-tao-dificil-mudar',
      description: 'A neurociência explica os circuitos de recompensa que mantêm padrões alimentares — e o que realmente funciona para transformá-los.',
      published: true,
      tags: ['Mudança de Hábitos', 'Neurociência'],
      createdAt: new Date('2026-04-15T12:00:00Z'),
      contents: [
        { type: 'text', content: 'Você já tentou mudar sua alimentação e desistiu depois de poucos dias? Não se culpe. A dificuldade de mudar hábitos alimentares não é falta de força de vontade — é neurociência.\n\nOs hábitos estão profundamente enraizados nos gânglios da base, uma região cerebral que opera de forma automática e inconsciente. Quando um comportamento se torna habitual, ele sai do controle do córtex pré-frontal (a parte "racional" do cérebro) e passa a ser executado no "piloto automático".', order: 1 },
        { type: 'text', content: '## O Loop do Hábito\n\nTodo hábito segue um ciclo de três etapas:\n\n1. **Gatilho**: o estímulo que dispara o comportamento (estresse, tédio, horário)\n2. **Rotina**: o comportamento em si (comer doce, beliscar)\n3. **Recompensa**: a sensação de prazer que reforça o ciclo (dopamina)\n\nPara mudar um hábito, você não precisa eliminar o gatilho nem a recompensa — precisa substituir a rotina por algo que ofereça uma recompensa similar.\n\n## Estratégias Baseadas em Neurociência\n\n- **Comece ridiculamente pequeno**: trocar o refrigerante por água com limão, não eliminar todo açúcar de uma vez\n- **Empilhe hábitos**: "depois de tomar café, vou comer uma fruta"\n- **Modifique o ambiente**: se o pacote de biscoito está na bancada, vai ser comido\n- **Seja compassivo**: recaídas fazem parte do processo neural de mudança', order: 2 },
      ],
    },
    {
      title: 'Sabedoria Ancestral e Ciência Moderna: o que Nossas Avós já Sabiam',
      slug: 'sabedoria-ancestral-e-ciencia-moderna-o-que-nossas-avos-ja-sabiam',
      description: 'De caldos de osso a fermentados caseiros, práticas tradicionais estão sendo validadas pela ciência contemporânea. Veja as evidências.',
      published: true,
      tags: ['Sabedoria', 'Nutrição'],
      createdAt: new Date('2026-04-10T09:00:00Z'),
      contents: [
        { type: 'text', content: 'Muito antes dos laboratórios e dos estudos randomizados, nossas avós já sabiam: caldo de galinha cura resfriado, chá de camomila acalma, e alimentos fermentados "fazem bem para a barriga".\n\nO fascinante é que a ciência moderna está, cada vez mais, validando essas tradições milenares.', order: 1 },
        { type: 'text', content: '## Tradições Validadas pela Ciência\n\n### Caldo de Osso\nRico em colágeno, glicina e glutamina — aminoácidos que nutrem a mucosa intestinal e reduzem inflamação sistêmica. Estudos mostram benefícios para a permeabilidade intestinal.\n\n### Fermentados Caseiros\nIogurte, kefir, chucrute e missô são fontes naturais de probióticos. A diversidade microbiana que eles promovem está associada a melhor humor, imunidade e digestão.\n\n### Temperos e Especiarias\nAçafrão (cúrcuma), gengibre, canela e alho não são apenas sabor — são compostos bioativos com propriedades anti-inflamatórias, antioxidantes e até neuroprotetoras.\n\n### Comer Devagar e em Comunidade\nNossas avós comiam devagar, em família. A ciência hoje chama isso de "mindful eating" e sabe que comer com atenção melhora a saciedade, a digestão e reduz o comer emocional.', order: 2 },
      ],
    },
    {
      title: 'Açúcar e Inflamação: o Ciclo Silencioso que Envelhece seu Corpo',
      slug: 'acucar-e-inflamacao-o-ciclo-silencioso-que-envelhece-seu-corpo',
      description: 'Entenda como o consumo excessivo de açúcar alimenta processos inflamatórios crônicos e o que isso significa para o envelhecimento celular.',
      published: true,
      tags: ['Nutrição', 'Neurociência'],
      createdAt: new Date('2026-04-05T14:00:00Z'),
      contents: [
        { type: 'text', content: 'O açúcar é, talvez, o ingrediente mais controverso da alimentação moderna. Não por acaso: o consumo excessivo está no centro de um ciclo silencioso que conecta inflamação crônica, envelhecimento acelerado e doenças neurodegenerativas.\n\nQuando consumimos açúcar em excesso, o corpo inicia uma cascata de reações que vai muito além do pico glicêmico.', order: 1 },
        { type: 'text', content: '## O Mecanismo da Inflamação\n\nO excesso de glicose no sangue:\n1. Gera **produtos de glicação avançada (AGEs)** — moléculas que danificam proteínas e tecidos\n2. Ativa o **NF-kB**, o principal regulador de inflamação do corpo\n3. Aumenta a produção de **citocinas pró-inflamatórias** (TNF-α, IL-6)\n4. Prejudica a **microbiota intestinal**, reduzindo bactérias anti-inflamatórias\n\n## Impacto no Cérebro\n\nA inflamação crônica de baixo grau é chamada de "inflammaging" — e tem efeitos devastadores no cérebro:\n- Reduz a produção de **BDNF** (fator de crescimento neuronal)\n- Prejudica a **memória** e o **foco**\n- Está associada a maior risco de **Alzheimer** e **depressão**\n\n## O que Fazer\n\nNão é necessário eliminar todo açúcar. A chave é:\n- Reduzir **ultraprocessados** (onde se esconde a maioria do açúcar)\n- Preferir **frutas inteiras** (a fibra modula a absorção)\n- Incluir **anti-inflamatórios naturais**: cúrcuma, gengibre, frutas vermelhas, peixes gordos', order: 2 },
      ],
    },
    {
      title: 'Fibras Prebióticas e o Jardim Interior',
      slug: 'fibras-prebioticas-e-o-jardim-interior',
      description: 'Alimentar suas bactérias benéficas é tão importante quanto alimentar você. Conheça os melhores prebióticos e como incorporá-los.',
      published: true,
      tags: ['Microbiota', 'Nutrição'],
      createdAt: new Date('2026-03-28T11:00:00Z'),
      contents: [
        { type: 'text', content: 'Se a microbiota intestinal é um jardim, as fibras prebióticas são o adubo. Essas fibras não são digeridas pelo nosso organismo — elas servem de alimento exclusivo para as bactérias benéficas do intestino.\n\nQuando bem alimentadas, essas bactérias produzem ácidos graxos de cadeia curta (como butirato), que têm efeitos profundos na saúde: reduzem inflamação, fortalecem a barreira intestinal e até melhoram o humor.', order: 1 },
        { type: 'text', content: '## Os Melhores Prebióticos\n\n- **Inulina**: chicória, alho, cebola, aspargos\n- **Frutooligossacarídeos (FOS)**: banana, tomate, alcachofra\n- **Amido resistente**: banana verde, batata cozida e resfriada, arroz requentado\n- **Beta-glucanas**: aveia, cogumelos, cevada\n- **Pectina**: maçã, frutas cítricas\n\n## Dicas Práticas\n\n1. Comece devagar — aumentar fibra muito rápido pode causar desconforto\n2. Beba bastante água\n3. Varie as fontes — cada tipo de fibra alimenta diferentes bactérias\n4. Combine prebióticos com probióticos para efeito sinérgico', order: 2 },
      ],
    },
    {
      title: 'Jejum Intermitente e Cognição: o que a Ciência Diz',
      slug: 'jejum-intermitente-e-cognicao-o-que-a-ciencia-diz',
      description: 'O jejum intermitente pode melhorar o foco e a clareza mental? Analisamos os estudos mais recentes sobre restrição alimentar e função cognitiva.',
      published: true,
      tags: ['Neurociência', 'Mudança de Hábitos'],
      createdAt: new Date('2026-03-20T07:00:00Z'),
      contents: [
        { type: 'text', content: 'O jejum intermitente (JI) saiu das margens da nutrição alternativa para o centro das pesquisas neurocientíficas. Estudos recentes sugerem que períodos controlados de jejum podem ter efeitos notáveis na função cognitiva, na neuroplasticidade e até na prevenção de doenças neurodegenerativas.\n\nMas como sempre na ciência, a resposta não é simples — e o que funciona para um pode não funcionar para outro.', order: 1 },
        { type: 'text', content: '## Mecanismos Neuroprotetores do Jejum\n\nDurante o jejum, o corpo:\n- Aumenta a produção de **BDNF** (fator neurotrófico derivado do cérebro)\n- Ativa a **autofagia** — processo de "limpeza celular" que remove proteínas danificadas\n- Melhora a **sensibilidade à insulina cerebral**\n- Reduz o **estresse oxidativo**\n\n## Cautelas Importantes\n\n- JI não é indicado para todos — gestantes, pessoas com transtornos alimentares e diabéticos tipo 1 devem evitar\n- O estresse do jejum prolongado pode ser contraproducente em quem já está muito estressado\n- A qualidade do que se come nas janelas alimentares importa tanto quanto o jejum em si\n- Mulheres podem responder diferentemente aos protocolos de jejum', order: 2 },
      ],
    },
    {
      title: 'Diário Alimentar Consciente: Ferramenta de Autoconhecimento',
      slug: 'diario-alimentar-consciente-ferramenta-de-autoconhecimento',
      description: 'Mais do que contar calorias, um diário alimentar consciente revela padrões emocionais e te ajuda a construir uma relação saudável com a comida.',
      published: true,
      tags: ['Mudança de Hábitos', 'Sabedoria'],
      createdAt: new Date('2026-03-12T16:00:00Z'),
      contents: [
        { type: 'text', content: 'Esqueça o diário alimentar que pede gramas de arroz e calorias de molho de tomate. O diário alimentar consciente é uma ferramenta completamente diferente — e muito mais poderosa.\n\nEm vez de focar no "quanto", ele foca no "como" e no "por quê". Ele te convida a observar não apenas o que come, mas as emoções, pensamentos e circunstâncias que cercam cada refeição.', order: 1 },
        { type: 'text', content: '## O que Registrar\n\nPara cada refeição ou lanche, anote:\n- **O que comeu** (sem pesar, só descrever)\n- **Nível de fome antes** (0-10)\n- **Nível de saciedade depois** (0-10)\n- **Emoção predominante** (ansiedade, tédio, alegria, pressa...)\n- **Onde e com quem** comeu\n- **Velocidade**: comeu rápido ou devagar?\n\n## O que Você Vai Descobrir\n\nDepois de 2-3 semanas, padrões começam a emergir:\n- Você come mais quando está sozinho? Com pressa? Entediado?\n- Existe um horário em que a fome emocional aparece?\n- Quanto da sua alimentação é por hábito automático vs. escolha consciente?\n\nEssas descobertas são ouro. Elas permitem intervenções específicas, não genéricas. É a diferença entre "preciso comer melhor" e "percebo que como doce toda vez que tenho uma reunião estressante".', order: 2 },
      ],
    },
    // Original seed posts (keep them too)
    {
      title: 'Como a Neurociência Explica Seus Desejos Alimentares',
      slug: 'como-a-neurociencia-explica-seus-desejos-alimentares',
      description: 'Descubra o que acontece no seu cérebro quando você sente vontade de comer doces e como reprogramar esses padrões.',
      published: true,
      featured: true,
      tags: ['Neurociência', 'Nutrição'],
      createdAt: new Date('2026-04-22T10:00:00Z'),
      contents: [
        { type: 'text', content: 'Você já se perguntou por que, em momentos de estresse, seu corpo parece "pedir" chocolate ou alimentos açucarados? A resposta está na neurociência — mais especificamente, nos circuitos de recompensa do cérebro.\n\nQuando comemos algo doce, o cérebro libera dopamina, um neurotransmissor associado ao prazer. Com o tempo, esse padrão cria uma associação: estresse → doce → alívio. É um ciclo que pode parecer incontrolável, mas não é.', order: 1 },
        { type: 'text', content: '## O Papel do Córtex Pré-Frontal\n\nO córtex pré-frontal é responsável pelo autocontrole e pela tomada de decisões. Quando estamos sob estresse crônico, essa região do cérebro fica "enfraquecida", tornando mais difícil resistir aos impulsos alimentares.\n\nA boa notícia? Práticas como meditação, sono adequado e exercício físico fortalecem essa região, aumentando nossa capacidade de fazer escolhas conscientes.', order: 2 },
        { type: 'text', content: '## Estratégias Práticas\n\n1. **Identifique os gatilhos**: Anote quando sente vontade de comer fora de hora\n2. **Substitua progressivamente**: Troque doces ultraprocessados por frutas com chocolate amargo\n3. **Cuide do sono**: Dormir menos de 7h aumenta a grelina (hormônio da fome)\n4. **Pratique mindful eating**: Coma devagar, prestando atenção aos sabores e texturas', order: 3 },
      ],
    },
    {
      title: 'Microbiota e Humor: A Conexão Intestino-Cérebro',
      slug: 'microbiota-e-humor-a-conexao-intestino-cerebro',
      description: 'Saiba como as bactérias do seu intestino influenciam diretamente seu estado emocional.',
      published: true,
      tags: ['Neurociência', 'Microbiota'],
      createdAt: new Date('2026-04-18T10:00:00Z'),
      contents: [
        { type: 'text', content: 'O intestino é frequentemente chamado de "segundo cérebro" — e com razão. Ele contém mais de 100 milhões de neurônios e produz cerca de 90% da serotonina do nosso corpo, o neurotransmissor do bem-estar.\n\nEssa conexão profunda entre intestino e cérebro tem implicações enormes para a saúde mental. Pesquisas recentes mostram que alterações na microbiota intestinal estão associadas a depressão, ansiedade e até autismo.', order: 1 },
        { type: 'text', content: '## Alimentos que Nutrem sua Microbiota\n\n- **Probióticos**: Iogurte natural, kefir, kombucha, chucrute\n- **Prebióticos**: Alho, cebola, banana verde, aveia\n- **Polifenóis**: Frutas vermelhas, chá verde, cacau puro\n\nDiversidade no prato = diversidade no intestino = melhor saúde mental.\n\n## O Impacto dos Antibióticos e Ultraprocessados\n\nAntibióticos, quando usados em excesso, podem devastar a microbiota — como uma bomba num jardim. Ultraprocessados, por sua vez, alimentam bactérias pró-inflamatórias e reduzem a diversidade microbiana.\n\nReconstruir uma microbiota saudável é possível, mas leva tempo. Pense em meses, não dias.', order: 2 },
      ],
    },
    {
      title: 'Diabetes Infantil: Guia Prático para Pais',
      slug: 'diabetes-infantil-guia-pratico-para-pais',
      description: 'Um guia acolhedor e científico para pais que convivem com o diabetes tipo 1 em seus filhos.',
      published: true,
      tags: ['Diabetes', 'Nutrição'],
      createdAt: new Date('2026-04-12T10:00:00Z'),
      contents: [
        { type: 'text', content: 'Receber o diagnóstico de diabetes tipo 1 em um filho muda a vida da família inteira. É natural sentir medo, culpa e sobrecarga. Mas com informação de qualidade e apoio adequado, é possível construir uma rotina leve, segura e cheia de vida.\n\nEste guia foi escrito com carinho e ciência, para que nenhuma família se sinta sozinha nessa jornada.', order: 1 },
        { type: 'text', content: '## Alimentação: Além dos Números\n\nA contagem de carboidratos é importante, mas a relação da criança com a comida é ainda mais.\n\n**Dicas práticas:**\n- Envolva a criança no preparo das refeições\n- Ofereça variedade sem forçar\n- Celebre pequenas conquistas na autonomia alimentar\n- Uma glicemia fora da faixa não é fracasso — é informação\n- Não proíba alimentos; ensine a lidar com eles\n\n## O Emocional Importa Tanto Quanto o Glicêmico\n\nCrianças com diabetes precisam de mais do que monitoramento — precisam de acolhimento. O medo de hipoglicemia, a frustração com restrições e o desejo de "ser normal" são sentimentos reais que merecem atenção.\n\nConverse, ouça, e lembre: seu filho não é o diabetes dele.', order: 2 },
      ],
    },
  ];

  for (const p of posts) {
    const existing = await prisma.post.findUnique({ where: { slug: p.slug } });
    if (existing) {
      console.log('Post exists, skipping:', p.slug);
      continue;
    }
    const post = await prisma.post.create({
      data: {
        title: p.title,
        slug: p.slug,
        description: p.description,
        published: p.published ?? false,
        featured: p.featured ?? false,
        createdAt: p.createdAt || new Date(),
        contents: {
          create: p.contents.map(c => ({ type: c.type, content: c.content, order: c.order })),
        },
        tags: {
          create: p.tags.map(t => ({ tagId: tagMap[t] })).filter(t => t.tagId),
        },
      },
    });
    console.log('Post created:', post.title);
  }

  /* ═══════════════════════════════════════════════════════════════════ */
  /*  E-books                                                           */
  /* ═══════════════════════════════════════════════════════════════════ */
  const ebooks = [
    // Neurociência
    { title: 'NeuroNutrir — Alimente seu Cérebro', slug: 'neuronutrir-alimente-seu-cerebro', description: 'Um guia completo sobre como a alimentação impacta diretamente a saúde cerebral. Descubra nutrientes essenciais para memória, foco e bem-estar emocional.', price: 47.90, originalPrice: 59.90, category: 'neurociencia', targetAudience: 'Profissionais de saúde e interessados em neurociência aplicada', published: true, featured: true },
    { title: 'Cérebro em Equilíbrio — Guia de Neuronutrição', slug: 'cerebro-em-equilibrio-guia-de-neuronutricao', description: 'Estratégias baseadas em evidências para otimizar a função cerebral através da dieta. Inclui planos alimentares e receitas neurotrópicas.', price: 39.90, category: 'neurociencia', targetAudience: 'Público geral interessado em saúde mental e alimentação', published: true },
    { title: 'Sinapses & Sabores — Neurociência na Cozinha', slug: 'sinapses-e-sabores-neurociencia-na-cozinha', description: 'A ponte entre o laboratório e a cozinha. Aprenda a preparar refeições que estimulam neurotransmissores do bem-estar.', price: 34.90, originalPrice: 44.90, category: 'neurociencia', targetAudience: 'Cozinheiros curiosos e entusiastas da neurociência', published: true },

    // Diabetes
    { title: 'DoceEquilíbrio — Guia para Famílias com Diabetes Infantil', slug: 'doce-equilibrio', description: 'Orientações práticas e acolhedoras para famílias que convivem com a diabetes tipo 1 em crianças. Da escola à cozinha, com carinho e ciência.', price: 47.90, originalPrice: 79.90, category: 'diabetes', targetAudience: 'Famílias com crianças diagnosticadas com diabetes', published: true, featured: true },
    { title: 'NeuroDoces — 150 Receitas sem Açúcar', slug: 'neurodoces', description: 'Receitas deliciosas e seguras para quem precisa controlar a glicemia sem abrir mão do prazer à mesa. Cada receita pensada para nutrir o cérebro.', price: 39.90, originalPrice: 54.90, category: 'diabetes', targetAudience: 'Pessoas com diabetes e seus cuidadores', published: true, featured: true },
    { title: 'Guia de Segurança Alimentar para Diabetes', slug: 'guia-seguranca-alimentar', description: 'Prevenção de infecções e picos glicêmicos. Um manual indispensável para manter a segurança alimentar no dia a dia.', price: 29.90, category: 'diabetes', targetAudience: 'Cuidadores e profissionais de saúde', published: true },

    // Nutrição
    { title: 'Nutrição Consciente — Comer com Presença', slug: 'nutricao-consciente-comer-com-presenca', description: 'Aprenda a desenvolver uma relação saudável e atenta com a alimentação. Mindful eating encontra a nutrição baseada em evidências.', price: 37.90, originalPrice: 49.90, category: 'nutricao', targetAudience: 'Pessoas em busca de uma relação mais saudável com a comida', published: true },
    { title: 'Pratos que Curam — Nutrição Funcional na Prática', slug: 'pratos-que-curam-nutricao-funcional-na-pratica', description: 'Receitas e orientações de nutrição funcional para apoiar o corpo em processos inflamatórios, hormonais e imunológicos.', price: 44.90, category: 'nutricao', targetAudience: 'Interessados em nutrição funcional e autocuidado', published: true },

    // Sabedoria
    { title: 'Sabedoria Ancestral, Ciência Atual', slug: 'sabedoria-ancestral-ciencia-atual', description: 'Resgatando tradições alimentares de diferentes culturas sob a lente da ciência moderna. Uma jornada de sabor e conhecimento.', price: 34.90, category: 'sabedoria', targetAudience: 'Amantes de cultura, história e gastronomia', published: true },
    { title: 'O Tempo na Mesa — Alimentação e Longevidade', slug: 'o-tempo-na-mesa-alimentacao-e-longevidade', description: 'Lições das zonas azuis e da ciência da longevidade para construir hábitos alimentares que honram o tempo e a vida.', price: 42.90, originalPrice: 54.90, category: 'sabedoria', targetAudience: 'Adultos em busca de envelhecimento saudável', published: true },

    // Mudança de Hábitos
    { title: 'Pequenos Passos, Grandes Mudanças', slug: 'pequenos-passos-grandes-mudancas', description: 'Um programa de 21 dias para transformar seus hábitos alimentares com compaixão e estratégia. Sem dietas restritivas, com muita ciência.', price: 37.90, category: 'mudanca-habitos', targetAudience: 'Pessoas que desejam mudar hábitos sem radicalismo', published: true },
    { title: 'Reprogramando o Paladar — Neurociência dos Hábitos', slug: 'reprogramando-o-paladar-neurociencia-dos-habitos', description: 'Entenda como o cérebro forma hábitos alimentares e aprenda técnicas baseadas em neurociência para reprogramar preferências.', price: 39.90, originalPrice: 49.90, category: 'mudanca-habitos', targetAudience: 'Profissionais de saúde e público geral', published: true },
    { title: 'Diário de Transformação Alimentar', slug: 'diario-de-transformacao-alimentar', description: 'Um workbook interativo para registrar, refletir e transformar sua jornada alimentar ao longo de 30 dias.', price: 27.90, category: 'mudanca-habitos', targetAudience: 'Qualquer pessoa em processo de mudança alimentar', published: true },

    // Microbiota
    { title: 'Jardim Interior — Cuidando da sua Microbiota', slug: 'jardim-interior-cuidando-da-sua-microbiota', description: 'Um guia poético e científico sobre o universo de trilhões de microorganismos que habitam seu intestino e influenciam sua saúde.', price: 44.90, originalPrice: 57.90, category: 'microbiota', targetAudience: 'Interessados em saúde intestinal e bem-estar integral', published: true },
    { title: 'Receitas Probióticas — Fermentação em Casa', slug: 'receitas-probioticas-fermentacao-em-casa', description: 'Aprenda a preparar alimentos fermentados que nutrem sua microbiota. De kefir a kimchi, com ciência e sabor.', price: 32.90, category: 'microbiota', targetAudience: 'Entusiastas da fermentação e saúde digestiva', published: true },

    // Keep original seed ebook
    { title: 'Refeições Saudáveis Congeladas', slug: 'refeicoes-saudaveis-congeladas', description: 'Praticidade para rotinas corridas sem perder o controle glicêmico. Meal prep inteligente.', price: 34.90, category: 'diabetes', targetAudience: 'Famílias com rotinas agitadas', published: true },
  ];

  for (const e of ebooks) {
    const existing = await prisma.ebook.findUnique({ where: { slug: e.slug } });
    if (existing) {
      console.log('Ebook exists, skipping:', e.slug);
      continue;
    }
    const ebook = await prisma.ebook.create({
      data: {
        title: e.title,
        slug: e.slug,
        description: e.description,
        price: e.price,
        originalPrice: e.originalPrice || null,
        category: e.category,
        targetAudience: e.targetAudience || null,
        buyLink: 'https://kiwify.com.br',
        published: e.published ?? false,
        featured: e.featured ?? false,
      },
    });
    console.log('Ebook created:', ebook.title);
  }

  await prisma.$disconnect();
  console.log('\nSeed complete!');
}

seed().catch(e => { console.error(e); process.exit(1); });
