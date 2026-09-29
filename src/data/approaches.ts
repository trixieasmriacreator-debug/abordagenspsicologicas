import { ApproachMeta, CoreConcept, HistoricalFigure, ReferenceItem, TimelineMilestone } from '../types';

export const APPROACHES: ApproachMeta[] = [
  {
    id: 'gestalt',
    number: '01',
    title: 'Gestalt-terapia',
    shortTitle: 'Gestalt',
    subtitle: 'Uma história construída no encontro',
    period: 'Décadas de 1940 e 1950',
    keyFigures: ['Fritz Perls', 'Laura Perls', 'Paul Goodman', 'Ralph Hefferline'],
    status: 'completo',
    description: 'Abordagem fenomenológico-existencial fundada no contato, na autorregulação organísmica e na experiência viva do aqui-e-agora.',
  },
  {
    id: 'tcc',
    number: '02',
    title: 'Terapia Cognitivo-Comportamental',
    shortTitle: 'TCC',
    subtitle: 'Do comportamento aos pensamentos: a construção de uma nova forma de fazer psicoterapia',
    period: 'Meados do séc. XX às décadas de 1960–1970',
    keyFigures: ['Aaron T. Beck', 'Albert Ellis', 'Joseph Wolpe', 'B. F. Skinner'],
    status: 'completo',
    description: 'Convergência histórica entre o rigor empírico comportamental e a investigação das estruturas cognitivas e crenças mediadoras.',
  },
  {
    id: 'sistemica',
    number: '03',
    title: 'Terapia Familiar Sistêmica',
    shortTitle: 'Sistêmica',
    subtitle: 'Quando o foco deixa de ser apenas o indivíduo e passa a incluir as relações',
    period: 'Décadas de 1950 a 1970 em diante',
    keyFigures: ['Gregory Bateson', 'Salvador Minuchin', 'Virginia Satir', 'Murray Bowen', 'Jay Haley'],
    status: 'completo',
    description: 'Salto paradigmático que deslocou o olhar clínico do psiquismo isolado para a teia dos sistemas, comunicação e vínculos intergeracionais.',
  },
  {
    id: 'psicoterapia-breve',
    number: '04',
    title: 'Psicoterapia Breve Focal',
    shortTitle: 'Breve Focal',
    subtitle: 'Tempo delimitado, foco definido e uma história de reformulação da psicoterapia',
    period: '1946 às décadas de 1970–1980',
    keyFigures: ['Franz Alexander', 'Michael Balint', 'David Malan', 'Peter Sifneos', 'Habib Davanloo'],
    status: 'completo',
    description: 'Tradição psicodinâmica inovadora fundada na delimitação do foco conflitual, experiência emocional corretiva e atitude ativa do terapeuta.',
  },
];

/* =========================================================================
   01 — GESTALT-TERAPIA
   ========================================================================= */

export const GESTALT_FOUNDERS: HistoricalFigure[] = [
  {
    name: 'Fritz Perls',
    dates: '1893–1970',
    role: 'Médico Neuropsiquiatra e Psicanalista',
    contribution:
      'Formado em medicina pela Universidade de Berlim, Perls trouxe sua vivência com neuropsiquiatria de guerra (sob Kurt Goldstein), sua formação psicanalítica com Wilhelm Reich e Karen Horney, e sua inventividade cênica. Converteu insights teóricos em experimentos vivos de tomada de consciência corporal e confronto experiencial.',
    imageSrc: '/images/fritz_perls.jpg',
    imageAlt: 'Retrato de Friedrich Salomon Perls jovem',
    caption: 'Fritz Perls (1893–1970) em Berlim (c. 1923), período inicial de sua formação médica e psicanalítica.',
    source: 'Arquivo Histórico / Wikimedia Commons (Domínio Público)',
  },
  {
    name: 'Laura Perls',
    dates: '1905–1990',
    role: 'Doutora em Psicologia da Gestalt e Psicanalista',
    contribution:
      'Nascida Lore Posner em Pforzheim, doutorou-se em Psicologia da Gestalt na Universidade de Frankfurt sob orientação de Max Wertheimer e Adhémar Gelb. Pianista e estudiosa da dança moderna, Laura inseriu na abordagem a centralidade da postura, respiração, suporte organísmico e a ética do contato delicado. Liderou o New York Institute for Gestalt Therapy por três décadas.',
    imageSrc: '/images/laura_perls.jpg',
    imageAlt: 'Retrato histórico de Laura Perls em workshop',
    caption: 'Laura Perls (1905–1990), cofundadora da Gestalt-terapia e diretora do Instituto de Nova York.',
    source: 'Arquivo The Gestalt Therapy Page / Cortesia de Renate Perls',
  },
  {
    name: 'Paul Goodman',
    dates: '1911–1972',
    role: 'Filósofo, Crítico Social e Escritor',
    contribution:
      'Proeminente intelectual e teórico anarquista nova-iorquino, Goodman foi o principal redator teórico do livro fundador de 1951. Coube a ele a estruturação conceitual da "Teoria do Self" como a função integradora do contato na fronteira organismo/ambiente, aliando a clínica psicológica a uma aguçada crítica política das patologias institucionais contemporâneas.',
    imageSrc: '/images/paul_goodman.jpg',
    imageAlt: 'Retrato de Paul Goodman em 1969',
    caption: 'Paul Goodman (1911–1972), fotografado por Paul Hawken para a edição de The Open Look (1969).',
    source: 'The Open Look dust jacket / Wikimedia Commons (Domínio Público)',
  },
];

export const GESTALT_INFLUENCES = [
  {
    title: 'Psicologia da Gestalt',
    thinker: 'Max Wertheimer, Wolfgang Köhler e Kurt Koffka',
    text: 'A mente percebe o mundo em totalidades organizadas, onde o todo é diferente da soma das partes. A Gestalt-terapia transpôs as leis da percepção (figura-fundo, fechamento e boa forma) da ótica laboratorial para a vivência clínica das necessidades emocionais e das situações inacabadas.',
    imageSrc: '/images/max_wertheimer.jpg',
    imageAlt: 'Max Wertheimer, fundador da Psicologia da Gestalt',
    caption: 'Max Wertheimer (1880–1943), pioneiro da Psicologia da Gestalt.',
    source: 'Wikimedia Commons (Domínio Público)',
  },
  {
    title: 'Pensamento Organísmico',
    thinker: 'Kurt Goldstein',
    text: 'Neurologista e psiquiatra sob cuja direção Fritz e Laura trabalharam em Frankfurt tratando soldados com lesões cerebrais na década de 1920. Goldstein demonstrou que o organismo humano não é um agregado mecânico de reflexos isolados, mas uma unidade biológica total com tendência inata à auto-atualização.',
    imageSrc: '/images/kurt_goldstein.jpg',
    imageAlt: 'Kurt Goldstein, neurologista e autor de O Organismo',
    caption: 'Dr. Kurt Goldstein (1878–1965), mentor de Fritz e Laura em Frankfurt.',
    source: 'National Library of Medicine / Wikimedia Commons (Domínio Público)',
  },
  {
    title: 'Teoria de Campo',
    thinker: 'Kurt Lewin',
    text: 'Nenhum organismo existe isolado no vácuo; o comportamento é uma função contínua da interação entre a pessoa e o seu ambiente circundante: B = f(P, E). Na Gestalt-terapia, todo sofrimento e todo contato ocorrem dentro de um campo ecológico, social e relacional.',
    imageSrc: '/images/kurt_lewin.jpg',
    imageAlt: 'Kurt Lewin, teórico de campo',
    caption: 'Kurt Lewin (1890–1947), formulador da Teoria de Campo.',
    source: 'Arquivo Histórico / Wikimedia Commons',
  },
  {
    title: 'Revisão Crítica da Psicanálise',
    thinker: 'Sigmund Freud, Wilhelm Reich e Karen Horney',
    text: 'Fritz e Laura Perls iniciaram suas trajetórias como psicanalistas ortodoxos. A ruptura deu-se pela crítica ao distanciamento do analista, ao modelo pulsional puramente hidráulico e à arqueologia do passado. A Gestalt deslocou o foco das razões inconscientes distantes para o "como" o sujeito se bloqueia no presente.',
    imageSrc: '/images/sigmund_freud.jpg',
    imageAlt: 'Sigmund Freud',
    caption: 'Sigmund Freud (1856–1939), cujo modelo foi criticamente revisado por Perls em 1942.',
    source: 'Max Halberstadt / Wikimedia Commons (Domínio Público)',
  },
];

export const GESTALT_TIMELINE: TimelineMilestone[] = [
  {
    id: '1942',
    year: '1942',
    title: 'Ego, Hunger and Aggression',
    subtitle: 'A ruptura com o modelo freudiano ortodoxo',
    shortSummary: 'Publicado na África do Sul com subtítulo de revisão crítica da psicanálise, introduzindo o papel biológico da agressão oral assimilativa.',
    detailedText:
      'Refugiados na África do Sul fugindo do nazismo, Fritz e Laura Perls elaboram a primeira obra de transição teórica. Perls questiona o conceito de fixação e a primazia sexual freudiana, propondo o instinto da fome e a mastigação como protótipo da assimilação psíquica: para crescer, o indivíduo deve "morder, triturar e saborear" a realidade, rejeitando a introjeção cega de ideias alheias. O livro contou com capítulos e contribuições diretas de Laura Perls.',
    imageSrc: '/images/ego_hunger_1942.jpg',
    imageAlt: 'Capa da primeira edição de Ego, Hunger and Aggression (1942)',
    imageCaption: 'Primeira edição de Ego, Hunger and Aggression (Durban, África do Sul, 1942).',
    source: 'Open Library / The Gestalt Journal Archives',
    quote: {
      text: 'Assimilar significa transformar substância estranha em substância própria. Isso só é possível através de um processo de destruição e reestruturação ativas.',
      author: 'Fritz Perls, 1942',
    },
  },
  {
    id: '1951',
    year: '1951',
    title: 'O Livro Fundador',
    subtitle: 'Gestalt Therapy: Excitement and Growth in the Human Personality',
    shortSummary: 'Obra marco em dois volumes publicada pela The Julian Press em Nova York, consolidando os princípios e a prática da nova abordagem.',
    detailedText:
      'Fruto da colaboração em Nova York entre Fritz Perls, Ralph Hefferline e Paul Goodman. O Volume I, estruturado pelo professor Ralph Hefferline da Columbia University, apresenta exercícios práticos de "awareness" (tomada de consciência) testados com seus estudantes. O Volume II, redigido magistralmente pelo intelectual Paul Goodman, oferece o edifício conceitual definitivo: a teoria do self, o contato na fronteira do campo organismo/ambiente e as funções ego, id e personalidade.',
    imageSrc: '/images/gestalt_book_1951.jpg',
    imageAlt: 'Capa histórica do livro fundador Gestalt Therapy de 1951',
    imageCaption: 'Gestalt Therapy (The Julian Press, NY, 1951), obra fundadora escrita por Perls, Hefferline e Goodman.',
    source: 'Open Library Archives / Julian Press Record',
    quote: {
      text: 'O contato é a realidade mais simples e primeira. Ele não pertence exclusivamente ao sujeito nem ao objeto, mas à fronteira onde ambos se tocam.',
      author: 'Perls, Hefferline & Goodman, 1951',
    },
  },
  {
    id: '1952',
    year: '1952',
    title: 'Fundação do NYIGT',
    subtitle: 'New York Institute for Gestalt Therapy',
    shortSummary: 'Criação do primeiro instituto oficial de formação no Upper West Side de Manhattan, reunindo o núcleo pioneiro de pensadores.',
    detailedText:
      'Fundado no apartamento de Fritz e Laura Perls na 313 West 82nd Street e logo consolidado próximo ao Central Park West. O instituto tornou-se a sede de seminários semanais que lapidaram a clínica gestáltica. Reuniu o chamado "Core Group": Laura Perls, Paul Goodman, Isadore From, Paul Weisz, Sylvester Eastman e Ralph Hefferline. Enquanto Fritz partia mais tarde em itinerância pelos EUA, Laura Perls manteve a estabilidade institucional e o ensino rigoroso do instituto pelas três décadas seguintes.',
    imageSrc: '/images/laura_perls_book.jpg',
    imageAlt: 'Capa da coletânea de textos históricos de Laura Perls',
    imageCaption: 'Living at the Boundary (Laura Perls), obra que reúne os escritos e seminários clínicos gerados no Instituto de Nova York.',
    source: 'The Gestalt Journal Press / Open Library',
    quote: {
      text: 'A terapia não é uma técnica a ser aplicada sobre alguém, mas uma atitude mútua de atenção e compromisso com o que emerge.',
      author: 'Laura Perls',
    },
  },
  {
    id: 'depois',
    year: 'Depois',
    title: 'Expansão Internacional',
    subtitle: 'Do Esalen Institute na Califórnia à clínica relacional contemporânea',
    shortSummary: 'Difusão global nos anos 1960 através do movimento do potencial humano, ramificação europeia e consolidação acadêmica internacional.',
    detailedText:
      'Em 1964, Fritz Perls estabeleceu-se no lendário Esalen Institute em Big Sur, Califórnia. O ambiente fértil da contracultura deu grande visibilidade midiática aos seus workshops de demonstração e à técnica da "cadeira vazia" (hot seat). Paralelamente, em Nova York e na Europa (com nomes como Erving e Miriam Polster em Cleveland, e institutos na Alemanha, França e América Latina), a abordagem consolidou-se em seu viés terapêutico contínuo e relacional. No Brasil, a Gestalt-terapia floresceu a partir da década de 1970 com pioneiros em Brasília, Rio de Janeiro e São Paulo.',
    imageSrc: '/images/esalen_institute.jpg',
    imageAlt: 'Fotografia histórica da costa de Big Sur e Esalen Institute',
    imageCaption: 'A costa de Big Sur, Califórnia, cenário do Instituto Esalen, onde Fritz Perls conduziu seus famosos workshops nos anos 1960.',
    source: 'Wikimedia Commons / Historic Coastal Archives',
    quote: {
      text: 'A maturidade é a passagem do apoio ambiental para a capacidade de auto-apoio organísmico.',
      author: 'Fritz Perls',
    },
  },
];

export const GESTALT_CONCEPTS: CoreConcept[] = [
  {
    id: 'aqui-e-agora',
    term: 'Aqui-e-Agora',
    translation: 'Here and Now',
    essence: 'O tempo real da vivência',
    elaboration:
      'Para a Gestalt-terapia, nada existe fora do momento presente. O passado é rememorado no agora; o futuro é antecipado no agora. Em vez de perguntar "por que" algo ocorreu há vinte anos, o terapeuta investiga "como" esse fato reverbera, tensiona o corpo e organiza a percepção no instante presente da sessão.',
  },
  {
    id: 'awareness',
    term: 'Awareness',
    translation: 'Tomada de Consciência',
    essence: 'O dar-se conta espontâneo do fluxo perceptivo',
    elaboration:
      'Diferente da reflexão puramente cognitiva ou intelectual, awareness é um estado organísmico integral: sentir a própria respiração, notar a contração muscular, reconhecer a emoção emergente e perceber o ambiente ao redor sem julgamentos antecipados.',
  },
  {
    id: 'contato',
    term: 'Contato',
    translation: 'Contact Boundary',
    essence: 'O encontro na fronteira entre o eu e o mundo',
    elaboration:
      'O contato é a operação elementar do crescimento humano. Ocorre na fronteira entre o organismo e o meio ambiente: tocar uma pessoa, saborear um alimento, ouvir uma ideia nova. Não há self sem o contato com o outro; quando a fronteira se fecha em isolamento ou se dissolve em confluência, a experiência empobrece.',
  },
  {
    id: 'responsabilidade',
    term: 'Responsabilidade',
    translation: 'Response-ability',
    essence: 'A capacidade de responder pela própria existência',
    elaboration:
      'Perls desdobrou o termo como "response-ability" (habilidade de responder). Não se trata de culpa moral ou dever cívico, mas de reconhecer a si próprio como sujeito ativo das próprias escolhas, palavras, posturas e sentimentos, abandonando o papel passivo de vítima das circunstâncias.',
  },
  {
    id: 'integracao',
    term: 'Integração Organísmica',
    translation: 'Holismo Sentir-Pensar-Agir',
    essence: 'A dissolução do dualismo mente-corpo',
    elaboration:
      'O ser humano não "tem" um corpo: ele "é" um organismo integral. Pensamentos, sintomas corporais, posturas e ações não são compartimentos estanques. O processo terapêutico busca reintegrar as partes alienadas ou polarizadas da personalidade para restituir a espontaneidade organísmica.',
  },
];

export const GESTALT_REFERENCES: ReferenceItem[] = [
  {
    id: 'ref1',
    citation:
      'PERLS, Frederick S.; HEFFERLINE, Ralph F.; GOODMAN, Paul. Gestalt Therapy: Excitement and Growth in the Human Personality. New York: The Julian Press, 1951.',
    note: 'Obra inaugural e fundadora da abordagem, dividida em exercícios práticos e fundamentação teórica.',
  },
  {
    id: 'ref2',
    citation:
      'YONTEF, Gary M.; JACOBS, Lynne. Introduction to Gestalt Therapy. In: WINFREE, S. (Ed.). Gestalt Therapy: History, Theory, and Practice. Los Angeles: Pacific Gestalt Institute, 2000.',
    note: 'Ensaio canônico sobre a dimensão dialógica, fenomenológica e contemporânea da Gestalt-terapia.',
  },
  {
    id: 'ref3',
    citation:
      'WULF, Richard. The Historical Roots of Gestalt Therapy Theory. The Gestalt Journal, v. 21, n. 1, p. 81–92, 1998.',
    note: 'Pesquisa historiográfica detalhada sobre as influências do pensamento organísmico e da Psicologia da Gestalt.',
  },
  {
    id: 'ref4',
    citation:
      'NEW YORK INSTITUTE FOR GESTALT THERAPY (NYIGT). Historical Archives and Foundational Documents. New York: NYIGT, 1952–2024.',
    note: 'Arquivo do instituto pioneiro cofundado por Laura e Fritz Perls na 313 West 82nd Street, Manhattan.',
  },
  {
    id: 'ref5',
    citation:
      'PACIFIC GESTALT INSTITUTE (PGI). Relational Gestalt Therapy Archive & Research Papers. Los Angeles: PGI, 2001–2024.',
    note: 'Centro de referência para o desenvolvimento contemporâneo da Gestalt dialógica e da teoria de campo.',
  },
  {
    id: 'ref6',
    citation:
      'PERLS, Laura. Living at the Boundary. Highland, NY: The Gestalt Journal Press, 1992.',
    note: 'Compilação de artigos, entrevistas e transcrições de seminários de Laura Perls sobre a prática gestáltica e a sustentação no contato.',
  },
  {
    id: 'ref7',
    citation:
      'GOLDSTEIN, Kurt. The Organism: A Holistic Approach to Biology Derived from Pathological Data in Man. New York: American Book Company, 1939.',
    note: 'Tratado de neurobiologia holística que fundamentou a teoria da autorregulação organísmica em Perls.',
  },
];

/* =========================================================================
   02 — TERAPIA COGNITIVO-COMPORTAMENTAL (TCC)
   ========================================================================= */

export const TCC_FOUNDERS: HistoricalFigure[] = [
  {
    name: 'Aaron T. Beck',
    dates: '1921–2021',
    role: 'Psiquiatra, Psicanalista e Pesquisador Universitário',
    contribution:
      'Professor da Universidade da Pensilvânia com formação psicanalítica. Ao conduzir pesquisas empíricas buscando comprovar as teorias freudianas da depressão (hostilidade retroflexa), descobriu que os pacientes não buscavam o sofrimento, mas apresentavam distorções cognitivas sistemáticas e pensamentos automáticos negativos sobre si, o mundo e o futuro (tríade cognitiva). Sistematizou a Terapia Cognitiva a partir dos anos 1960.',
    imageSrc: '/images/aaron_beck.jpg',
    imageAlt: 'Retrato histórico de Aaron T. Beck jovem',
    caption: 'Aaron T. Beck (1921–2021) em sua formação universitária na Brown University (1942), antes de iniciar suas pesquisas clínicas na Pensilvânia.',
    source: 'Liber Brunensis 1942 / Wikimedia Commons (Domínio Público)',
  },
  {
    name: 'Albert Ellis',
    dates: '1913–2007',
    role: 'Psicólogo Clínico e Filósofo Humanista',
    contribution:
      'Frustrado com a lentidão e a ineficácia da psicanálise clássica, Ellis desenvolveu em Nova York, a partir de 1955, a Terapia Racional (posteriormente Terapia Racional-Emotiva Comportamental - REBT). Inspirado no estoicismo de Epicteto ("não são os fatos que perturbam os homens, mas a visão que eles têm dos fatos"), formulou o célebre modelo A-B-C (Acontecimento - Crença - Consequência emocional).',
    imageSrc: '/images/albert_ellis.jpg',
    imageAlt: 'Retrato de Albert Ellis em capa de livro histórico',
    caption: 'Dr. Albert Ellis (1913–2007), pioneiro da Terapia Racional-Emotiva (REBT) em Nova York.',
    source: 'Arquivo Fotográfico Editorial / Wikimedia Commons (Domínio Público)',
  },
  {
    name: 'B. F. Skinner',
    dates: '1904–1990',
    role: 'Psicólogo e Teórico do Comportamento',
    contribution:
      'Pilar do behaviorismo radical na Universidade de Harvard. Desenvolveu a análise experimental do comportamento e o conceito de condicionamento operante (reforçamento e punição), fornecendo a metodologia científica de mensuração e modificação comportamental que nutriu as terapias de primeira onda.',
    imageSrc: '/images/bf_skinner.jpg',
    imageAlt: 'B. F. Skinner em Harvard circa 1950',
    caption: 'B. F. Skinner (1904–1990) no laboratório de psicologia de Harvard (c. 1950).',
    source: 'Harvard University Archives / Wikimedia Commons (Domínio Público)',
  },
];

export const TCC_INFLUENCES = [
  {
    title: 'Terapias Comportamentais (Primeira Onda)',
    thinker: 'John B. Watson, B. F. Skinner e Joseph Wolpe',
    text: 'Surgidas na década de 1950 na África do Sul (Wolpe), Inglaterra (Eysenck) e EUA (Skinner). Rejeitaram as especulações intrapsíquicas e focaram em comportamentos observáveis regidos por leis de aprendizagem (condicionamento clássico e operante). Wolpe introduziu a dessensibilização sistemática baseada no princípio da inibição recíproca.',
    imageSrc: '/images/john_watson.jpg',
    imageAlt: 'John B. Watson, pioneiro do behaviorismo',
    caption: 'John B. Watson (1878–1958), fundador do behaviorismo clássico.',
    source: 'Wikimedia Commons (Domínio Público)',
  },
  {
    title: 'A Revolução Cognitiva na Psicologia',
    thinker: 'George Miller, Jerome Bruner e Ulric Neisser',
    text: 'Nas décadas de 1950 e 1960, a psicologia experimental superou o modelo mecanicista de estímulo-resposta (E-R), demonstrando que o ser humano processa ativamente informações, armazena esquemas na memória e constrói representações internas do mundo.',
  },
  {
    title: 'Filosofia Estoica e Epistemologia Construtivista',
    thinker: 'Epicteto, Marco Aurélio e George Kelly',
    text: 'A ideia de que o sofrimento humano decorre dos significados atribuídos às circunstâncias, e não dos acontecimentos em si. George Kelly (1955) antecipou a visão do paciente como um "cientista", testando hipóteses existenciais sobre sua realidade.',
  },
];

export const TCC_TIMELINE: TimelineMilestone[] = [
  {
    id: '1950s',
    year: '1950s',
    title: 'Consolidação Comportamental & Ellis',
    subtitle: 'A emergência da Terapia Racional-Emotiva (RET)',
    shortSummary: 'As terapias comportamentais ganham força e Albert Ellis rompe com a psicanálise para fundar a terapia focada em crenças irracionais.',
    detailedText:
      'Em meados do século XX, terapeutas comportamentais como Joseph Wolpe demonstram que fobias e ansiedades podem ser tratadas empiricamente por descondicionamento. Concomitantemente, em 1955, Albert Ellis anuncia em Nova York a Terapia Racional: a tese de que perturbações emocionais não resultam de traumas passados, mas de crenças dogmáticas e absolutistas ("eu tenho que ser perfeito", "o mundo deve ser justo").',
    imageSrc: '/images/ellis_1961_rational_living.jpg',
    imageAlt: 'Capa histórica de A Guide to Rational Living de Albert Ellis',
    imageCaption: 'A Guide to Rational Living (1961), manifesto canônico de Albert Ellis que popularizou a reestruturação cognitiva.',
    source: 'Prentice-Hall / Open Library Archives',
    quote: {
      text: 'Os homens não se perturbam com as coisas, mas com os princípios e noções que formam a respeito delas.',
      author: 'Epicteto (lema fundamental de Albert Ellis)',
    },
  },
  {
    id: '1960s',
    year: '1960s',
    title: 'Pesquisas de Beck na Pensilvânia',
    subtitle: 'A descoberta empírica da Terapia Cognitiva',
    shortSummary: 'Aaron Beck estuda a depressão com rigor científico e identifica pensamentos automáticos e esquemas cognitivos disfuncionais.',
    detailedText:
      'Trabalhando no Departamento de Psiquiatria da Universidade da Pensilvânia, Aaron T. Beck tentava testar experimentalmente a hipótese psicanalítica de que a depressão era "raiva voltada para dentro". Suas investigações clínicas revelaram algo inteiramente diferente: os pacientes deprimidos sofriam de um viés negativo sistemático no processamento de informações, caracterizado por pensamentos automáticos de derrota e desvalia.',
    imageSrc: '/images/beck_1976_book.jpg',
    imageAlt: 'Capa de Cognitive Therapy and the Emotional Disorders (1976)',
    imageCaption: 'Cognitive Therapy and the Emotional Disorders (1976), texto seminal de Beck que estabeleceu a fundamentação conceitual da abordagem.',
    source: 'International Universities Press / Open Library',
    quote: {
      text: 'Ao corrigir as crenças errôneas, podemos diminuir reações emocionais e condutas excessivas ou desadaptativas.',
      author: 'Aaron T. Beck',
    },
  },
  {
    id: '1979',
    year: '1979',
    title: 'Cognitive Therapy of Depression',
    subtitle: 'O protocolo clínico manualizado e testado',
    shortSummary: 'Publicação do marco que estabeleceu a eficácia da Terapia Cognitiva em ensaios clínicos controlados.',
    detailedText:
      'Beck, Rush, Shaw e Emery publicam "Cognitive Therapy of Depression", o primeiro grande manual clínico estruturado com procedimentos detalhados de registro de pensamentos disfuncionais (RPD), questionamento socrático e tarefas comportamentais entre sessões. Ensaios clínicos demonstraram que a terapia cognitiva era tão eficaz quanto os antidepressivos tricíclicos, apresentando menor taxa de recaída.',
    imageSrc: '/images/beck_1979_depression.jpg',
    imageAlt: 'Capa de Cognitive Therapy of Depression (Guilford Press, 1979)',
    imageCaption: 'Cognitive Therapy of Depression (Guilford Press, 1979), obra monumental na história da psicoterapia baseada em evidências.',
    source: 'The Guilford Press / Open Library Records',
  },
  {
    id: '1980s-1990s',
    year: '1980s–90s',
    title: 'A Fusão Cognitivo-Comportamental',
    subtitle: 'Nascimento formal da TCC e expansão internacional',
    shortSummary: 'Aproximação orgânica entre técnicas comportamentais e formulação cognitiva dá origem ao termo consagrado TCC.',
    detailedText:
      'Durante as décadas de 1980 e 1990, terapeutas comportamentais reconheceram a indispensabilidade dos mediadores cognitivos, enquanto terapeutas cognitivos incorporaram sistematicamente o reforço, a exposição gradual e o treino de habilidades. Surgiu a síntese que hoje denominamos Terapia Cognitivo-Comportamental (TCC), expandindo seu campo para transtornos de ansiedade, pânico, TOC, transtornos alimentares e dor crônica.',
  },
  {
    id: 'hoje',
    year: 'Hoje',
    title: 'Diversificação & Terceira Onda',
    subtitle: 'Pluralidade teórica e sofisticação clínica',
    shortSummary: 'O campo expandiu-se em modelos contemporâneos baseados em esquemas, aceitação, atenção plena e metacognição.',
    detailedText:
      'Longe de ser uma técnica homogênea, o campo contemporâneo abrange a TCC clássica de Beck, a Terapia do Esquema (Jeffrey Young), a Terapia de Aceitação e Compromisso (ACT - Steven Hayes), a Terapia Comportamental Dialética (DBT - Marsha Linehan) e a Terapia Cognitiva Baseada em Mindfulness (MBCT - Segal, Williams e Teasdale).',
  },
];

export const TCC_CONCEPTS: CoreConcept[] = [
  {
    id: 'triade-cognitiva',
    term: 'Tríade Cognitiva',
    translation: 'Cognitive Triad',
    essence: 'A visão sobre si mesmo, o mundo e o futuro',
    elaboration:
      'Formulada por Beck na depressão: visão negativa de si ("sou incapaz/defeituoso"), do mundo e das relações ("o mundo é exigente e injusto") e do futuro ("nada vai melhorar, é desesperador"). Essa lente distorcida filtra ativamente a percepção de eventos cotidianos.',
  },
  {
    id: 'pensamentos-automaticos',
    term: 'Pensamentos Automáticos',
    translation: 'Automatic Thoughts',
    essence: 'O fluxo involuntário e imediato de interpretações',
    elaboration:
      'Pensamentos breves, rápidos e telegráficos que surgem espontaneamente diante de situações concretas. O paciente não os escolhe deliberadamente, mas os aceita como verdades absolutas sem questionar sua validade empírica.',
  },
  {
    id: 'empirismo-colaborativo',
    term: 'Empirismo Colaborativo',
    translation: 'Collaborative Empiricism',
    essence: 'Terapeuta e paciente como investigadores científicos',
    elaboration:
      'A relação terapêutica não é autoritária nem passiva. Paciente e terapeuta formam uma dupla de pesquisadores que examinam as crenças como "hipóteses" a serem testadas na realidade por meio de experimentos e coleta de evidências reais.',
  },
  {
    id: 'questionamento-socratico',
    term: 'Questionamento Socrático',
    translation: 'Guided Discovery',
    essence: 'A descoberta guiada em vez de confronto doutrinário',
    elaboration:
      'Método de perguntas reflexivas que ajuda o próprio paciente a examinar as evidências lógicas e empíricas a favor e contra seus pensamentos, estimulando a flexibilidade cognitiva e a resolução autônoma de problemas.',
  },
  {
    id: 'experimento-comportamental',
    term: 'Experimentos Comportamentais',
    translation: 'Behavioral Experiments',
    essence: 'Testar crenças diretamente na prática viva',
    elaboration:
      'Atividades planejadas na sessão para serem executadas entre sessões. Em vez de apenas debater racionalmente se algo vai dar errado, o paciente testa a predição no mundo real, colhendo dados novos que reformulam esquemas rígidos.',
  },
];

export const TCC_REFERENCES: ReferenceItem[] = [
  {
    id: 'tcc-ref1',
    citation:
      'BECK, Aaron T. Cognitive Therapy and the Emotional Disorders. New York: International Universities Press, 1976.',
    note: 'A obra que formalizou os princípios fundamentais da Terapia Cognitiva e o modelo conceitual das emoções.',
  },
  {
    id: 'tcc-ref2',
    citation:
      'BECK, Aaron T.; RUSH, A. John; SHAW, Brian F.; EMERY, Gary. Cognitive Therapy of Depression. New York: The Guilford Press, 1979.',
    note: 'O manual clínico pioneiro que estabeleceu os protocolos de intervenção empírica na depressão.',
  },
  {
    id: 'tcc-ref3',
    citation:
      'ELLIS, Albert. Reason and Emotion in Psychotherapy. New York: Lyle Stuart, 1962.',
    note: 'Texto fundador da Terapia Racional-Emotiva (REBT) detalhando o modelo A-B-C e o combate a crenças irracionais.',
  },
  {
    id: 'tcc-ref4',
    citation:
      'CLARK, David A.; BECK, Aaron T. Cognitive Therapy of Anxiety Disorders: Science and Practice. New York: The Guilford Press, 2010.',
    note: 'Revisão contemporânea aprofundada dos modelos cognitivos aplicados aos transtornos de ansiedade.',
  },
  {
    id: 'tcc-ref5',
    citation:
      'DOBSON, Keith S. (Ed.). Handbook of Cognitive-Behavioral Therapies. 4th ed. New York: The Guilford Press, 2019.',
    note: 'Tratado de referência que documenta a história, a evolução empírica e a diversificação metodológica da TCC.',
  },
  {
    id: 'tcc-ref6',
    citation:
      'BECK INSTITUTE FOR COGNITIVE BEHAVIOR THERAPY. Historical Archives & Clinical Resources. Bala Cynwyd, PA.',
    note: 'Instituto fundado por Aaron Beck e Judith Beck dedicado à formação clínica e preservação do acervo histórico.',
  },
];

/* =========================================================================
   03 — TERAPIA FAMILIAR SISTÊMICA
   ========================================================================= */

export const SISTEMICA_FOUNDERS: HistoricalFigure[] = [
  {
    name: 'Gregory Bateson',
    dates: '1904–1980',
    role: 'Antropólogo, Biólogo e Epistemólogo',
    contribution:
      'Liderou o seminal "Projeto Bateson" em Palo Alto (Califórnia) entre 1952 e 1962, reunindo Jay Haley, John Weakland, William Fry e Don Jackson. Aplicou a cibernética e a teoria dos tipos lógicos à comunicação humana, formulando a hipótese do "Duplo Vínculo" (Double Bind) no estudo da esquizofrenia. Foi o principal arquiteto epistemológico do pensamento sistêmico nas ciências humanas.',
    imageSrc: '/images/bateson_mead.jpg',
    imageAlt: 'Gregory Bateson e Margaret Mead em expedição científica histórica',
    caption: 'Gregory Bateson (1904–1980) ao lado de Margaret Mead em registro documental histórico (década de 1930).',
    source: 'Library of Congress / Wikimedia Commons (Domínio Público)',
  },
  {
    name: 'Salvador Minuchin',
    dates: '1921–2017',
    role: 'Médico Psiquiatra e Pediatra',
    contribution:
      'Nascido na Argentina, Minuchin desenvolveu a Terapia Familiar Estrutural trabalhando com jovens delinquentes na Wiltwyck School e posteriormente na renomada Philadelphia Child Guidance Clinic. Formulou a compreensão da família através de sua estrutura: subsistemas (conjugal, parental, fraternal), fronteiras (claras, difusas ou rígidas) e dinâmicas de alianças e coalizões.',
    imageSrc: '/images/minuchin_haley.jpg',
    imageAlt: 'Salvador Minuchin com Braulio Montalvo e Jay Haley na Filadélfia',
    caption: 'Braulio Montalvo, Salvador Minuchin (ao centro) e Jay Haley reunidos na Philadelphia Child Guidance Clinic durante o apogeu da terapia estrutural.',
    source: 'Arquivo Histórico de Terapia Familiar / Wikimedia Commons',
  },
  {
    name: 'Virginia Satir',
    dates: '1916–1988',
    role: 'Assistente Social e Terapeuta Familiar',
    contribution:
      'Conhecida como uma das mais compassivas e inventivas terapeutas do século XX. Integrou a equipe fundadora do Mental Research Institute (MRI) em Palo Alto e concebeu a Terapia Familiar Experiencial. Focou na auto-estima, na comunicação congruente e na desativação das posturas defensivas universais de sobrevivência (apaziguador, acusador, super-razoável e irrelevante).',
    imageSrc: '/images/virginia_satir.jpg',
    imageAlt: 'Retrato de Virginia Satir',
    caption: 'Virginia Satir (1916–1988), pioneira da terapia familiar humanista e experiencial.',
    source: 'Arquivo Histórico / Wikimedia Commons',
  },
  {
    name: 'Jay Haley',
    dates: '1923–2007',
    role: 'Comunicólogo e Terapeuta Estratégico',
    contribution:
      'Membro do Projeto Bateson, cofundador do periódico Family Process e figura-chave no MRI e no Family Therapy Institute de Washington. Influenciado pelo trabalho hipnótico de Milton Erickson, formulou a Terapia Familiar Estratégica, na qual o terapeuta assume a responsabilidade direta de planejar estratégias e diretivas personalizadas para a resolução dos problemas familiares apresentados.',
    imageSrc: '/images/jay_haley.jpg',
    imageAlt: 'Retrato de Jay Haley',
    caption: 'Jay Haley (1923–2007), pioneiro da Terapia Familiar Estratégica e teórico da comunicação.',
    source: 'Wikimedia Commons / Historic Portrait Archive',
  },
];

export const SISTEMICA_INFLUENCES = [
  {
    title: 'Teoria Geral dos Sistemas',
    thinker: 'Ludwig von Bertalanffy (1901–1972)',
    text: 'Biólogo austríaco que propôs nos anos 1930 e 1940 a superação do reducionismo mecanicista. Demonstrou que os seres vivos operam como sistemas abertos em contínua troca de energia e informação com o meio ambiente, governados por princípios de totalidade, equifinalidade e autorregulação.',
    imageSrc: '/images/ludwig_bertalanffy.jpg',
    imageAlt: 'Ludwig von Bertalanffy em 1926',
    caption: 'Ludwig von Bertalanffy (1901–1972) em Viena (1926), criador da Teoria Geral dos Sistemas.',
    source: 'Arquivo Histórico / Wikimedia Commons',
  },
  {
    title: 'Cibernética de Primeira e Segunda Ordem',
    thinker: 'Norbert Wiener, Arturo Rosenblueth e Heinz von Foerster',
    text: 'A ciência dos padrões de controle, comunicação e retroalimentação (feedback positivo e negativo) em máquinas e organismos vivos. Na primeira ordem, o observador estuda o sistema "de fora"; na segunda ordem (cibernética dos sistemas observantes), o terapeuta reconhece que é parte inseparável do sistema que observa.',
    imageSrc: '/images/norbert_wiener.png',
    imageAlt: 'Norbert Wiener, matemático e fundador da Cibernética',
    caption: 'Norbert Wiener (1894–1964), matemático do MIT e formulador da Cibernética.',
    source: 'MIT News Office / Wikimedia Commons (Domínio Público)',
  },
  {
    title: 'Estudos de Comunicação Humana (Escola de Palo Alto)',
    thinker: 'Don Jackson, Paul Watzlawick e Janet Beavin',
    text: 'No Mental Research Institute (MRI), a comunicação foi desmembrada em seus axiomas fundamentais: "é impossível não comunicar", toda mensagem contém um nível de conteúdo e um nível de relação, e os circuitos interpessoais funcionam em causalidade circular, não linear.',
  },
  {
    title: 'Tradição Intergeracional',
    thinker: 'Murray Bowen e Ivan Boszormenyi-Nagy',
    text: 'Compreensão de que o sofrimento do paciente não nasce apenas da família nuclear atual, mas de lealdades invisíveis, triangulações e graus de diferenciação do self transmitidos ao longo de três ou mais gerações.',
  },
];

export const SISTEMICA_TIMELINE: TimelineMilestone[] = [
  {
    id: '1946-1953',
    year: '1946–53',
    title: 'Conferências Macy sobre Cibernética',
    subtitle: 'O diálogo interdisciplinar que gerou o pensamento sistêmico',
    shortSummary: 'Reuniões históricas em Nova York integrando matemáticos, biólogos, antropólogos e psiquiatras.',
    detailedText:
      'Financiadas pela Josiah Macy Jr. Foundation, reuniram Norbert Wiener, John von Neumann, Warren McCulloch, Gregory Bateson e Margaret Mead. O grupo debateu os conceitos de circuitos de retroalimentação (feedback loops), teleologia circular e homeostase, fornecendo o arcabouço conceitual que mais tarde transformaria a psicoterapia.',
  },
  {
    id: '1956',
    year: '1956',
    title: 'A Hipótese do Duplo Vínculo',
    subtitle: 'Bateson, Jackson, Haley e Weakland em Palo Alto',
    shortSummary: 'Publicação de "Toward a Theory of Schizophrenia", marco fundante da comunicação sistêmica.',
    detailedText:
      'O artigo revolucionou a psiquiatria ao demonstrar que sintomas graves rotulados como patologia intrapsíquica podiam ser compreendidos como respostas adaptativas a padrões paradoxais e incongruentes de comunicação familiar (o duplo vínculo), nos quais a pessoa fica presa entre mensagens contraditórias e proibida de comentar o paradoxo.',
    imageSrc: '/images/bateson_1972_ecology.jpg',
    imageAlt: 'Capa histórica de Steps to an Ecology of Mind de Gregory Bateson',
    imageCaption: 'Steps to an Ecology of Mind (1972), obra em que Bateson compila os ensaios fundadores da epistemologia sistêmica.',
    source: 'Ballantine Books / Open Library',
    quote: {
      text: 'A informação é uma diferença que faz diferença.',
      author: 'Gregory Bateson',
    },
  },
  {
    id: '1959',
    year: '1959',
    title: 'Fundação do MRI',
    subtitle: 'Mental Research Institute em Palo Alto',
    shortSummary: 'Don Jackson, Virginia Satir e Jules Riskin inauguram o polo que sistematizou a terapia familiar breve.',
    detailedText:
      'O MRI tornou-se o epicentro de treinamento e pesquisa da psicoterapia interacional. Logo recebeu Paul Watzlawick e Jay Haley. O foco das pesquisas era a mudança clínica através da intervenção nos padrões redundantes de interação familiar que mantinham o sintoma.',
    imageSrc: '/images/pragmatics_communication_1967.jpg',
    imageAlt: 'Capa histórica de Pragmatics of Human Communication (1967)',
    imageCaption: 'Pragmatics of Human Communication (Watzlawick, Beavin e Jackson, 1967), a bíblia da comunicação sistêmica.',
    source: 'W. W. Norton / Open Library Archives',
  },
  {
    id: '1974',
    year: '1974',
    title: 'Families and Family Therapy',
    subtitle: 'A consolidação da Terapia Familiar Estrutural de Salvador Minuchin',
    shortSummary: 'Publicação clássica detalhando mapas estruturais, subsistemas, fronteiras e encenações na sessão.',
    detailedText:
      'Minuchin sistematizou a observação espacial da família: onde os membros se sentam, quem fala por quem, quais são as alianças secretas e se as fronteiras entre pais e filhos são enrijecidas (desengajamento) ou frouxas demais (emaranhamento). Suas intervenções ativas incluíam desafiar a estrutura disfuncional e apoiar o subsistema parental.',
    imageSrc: '/images/minuchin_1974_families.jpg',
    imageAlt: 'Capa histórica de Families and Family Therapy de Salvador Minuchin',
    imageCaption: 'Families and Family Therapy (Harvard University Press, 1974), clássico maior da tradição estrutural.',
    source: 'Harvard University Press / Open Library',
    quote: {
      text: 'Uma família não é uma coleção de indivíduos, mas um organismo relacional cuja estrutura determina como cada um sente, pensa e age.',
      author: 'Salvador Minuchin',
    },
  },
  {
    id: 'sistemica-hoje',
    year: 'Desenvolvimentos',
    title: 'Escola de Milão & Abordagens Pós-Modernas',
    subtitle: 'Da prescrição paradoxal às narrativas colaborativas',
    shortSummary: 'A expansão europeia com Mara Selvini Palazzoli e a emergência da terapia narrativa e dialógica.',
    detailedText:
      'Nas décadas de 1970 e 1980, a Escola de Milão introduziu o questionamento circular e a hipótese sistêmica. Nos anos 1990 em diante, sob a influência do construcionismo social e da cibernética de segunda ordem, surgiram as terapias narrativas (Michael White e David Epston) e colaborativas (Harlene Anderson), tratando as famílias como autoras de histórias plurais.',
  },
];

export const SISTEMICA_CONCEPTS: CoreConcept[] = [
  {
    id: 'sistema-totalidade',
    term: 'O Sistema Familiar',
    translation: 'Wholeness & Non-Summativity',
    essence: 'O todo é qualitativamente diferente da soma das partes',
    elaboration:
      'A família é uma totalidade dinâmica governada por regras explícitas e implícitas. Quando um membro muda seu comportamento (o chamado "paciente identificado"), todo o sistema é forçado a se reorganizar para encontrar um novo equilíbrio.',
  },
  {
    id: 'causalidade-circular',
    term: 'Causalidade Circular',
    translation: 'Circular Feedback',
    essence: 'Superação da lógica linear de causa e efeito',
    elaboration:
      'Em vez de perguntar "quem começou a briga?", a perspectiva sistêmica analisa circuitos de retroalimentação contínuos: o marido se retrai porque a esposa critica, e a esposa critica porque o marido se retrai. Cada ação é simultaneamente causa e efeito.',
  },
  {
    id: 'homeostase-morfogenese',
    term: 'Homeostase e Mudança',
    translation: 'Stability vs. Morphogenesis',
    essence: 'A tensão permanente entre preservar e transformar',
    elaboration:
      'Homeostase é a tendência do sistema familiar de manter sua estabilidade habitual, muitas vezes usando o sintoma de um membro como amortecedor. Morfogênese é a capacidade vital de modificar sua própria estrutura para amadurecer diante das crises do ciclo de vida.',
  },
  {
    id: 'fronteiras-subsistemas',
    term: 'Fronteiras e Subsistemas',
    translation: 'Structural Boundaries',
    essence: 'A arquitetura invisível dos papéis familiares',
    elaboration:
      'Conceito central de Minuchin: a clareza das fronteiras entre o subsistema conjugal (os cônjuges), o parental (os pais) e o fraternal (os filhos). Fronteiras muito rígidas geram isolamento afetivo (desengajamento); fronteiras excessivamente porosas geram invasão e perda de autonomia (emaranhamento).',
  },
  {
    id: 'triangulacao-intergeracional',
    term: 'Triangulação & Diferenciação',
    translation: 'Bowenian Differentiation',
    essence: 'A capacidade de ser si mesmo sem romper o vínculo',
    elaboration:
      'Formulado por Murray Bowen: diante da tensão intolerável entre duas pessoas (por exemplo, os pais), um terceiro elemento (geralmente um filho) é puxado para aliviar o conflito através da triangulação. A saúde relacional requer diferenciar o self mantendo a conexão afetiva.',
  },
];

export const SISTEMICA_REFERENCES: ReferenceItem[] = [
  {
    id: 'sis-ref1',
    citation:
      'BATESON, Gregory. Steps to an Ecology of Mind: Collected Essays in Anthropology, Psychiatry, Evolution, and Epistemology. New York: Ballantine Books, 1972.',
    note: 'Coletânea seminal que reúne os artigos do Projeto Bateson sobre comunicação, esquizofrenia e cibernética.',
  },
  {
    id: 'sis-ref2',
    citation:
      'MINUCHIN, Salvador. Families and Family Therapy. Cambridge: Harvard University Press, 1974.',
    note: 'Apresentação fundamental da Terapia Familiar Estrutural, com transcrições clínicas e diagramas conceituais.',
  },
  {
    id: 'sis-ref3',
    citation:
      'WATZLAWICK, Paul; BEAVIN, Janet H.; JACKSON, Don D. Pragmatics of Human Communication: A Study of Interactional Patterns, Pathologies, and Paradoxes. New York: W. W. Norton, 1967.',
    note: 'Tratado clássico dos axiomas da comunicação humana formulados no Mental Research Institute (MRI).',
  },
  {
    id: 'sis-ref4',
    citation:
      'SATIR, Virginia. Conjoint Family Therapy. Palo Alto: Science and Behavior Books, 1967.',
    note: 'Manual de terapia familiar conjunta com foco nos padrões de comunicação e na elevação da auto-estima.',
  },
  {
    id: 'sis-ref5',
    citation:
      'BOWEN, Murray. Family Therapy in Clinical Practice. New York: Jason Aronson, 1978.',
    note: 'Consolidação da teoria dos sistemas familiares e do processo de transmissão multigeracional.',
  },
  {
    id: 'sis-ref6',
    citation:
      'BERTALANFFY, Ludwig von. General System Theory: Foundations, Development, Applications. New York: George Braziller, 1968.',
    note: 'Texto de fundamentação da Teoria Geral dos Sistemas que inspirou as ciências sociais e a psicologia.',
  },
];

/* =========================================================================
   04 — PSICOTERAPIA BREVE FOCAL
   ========================================================================= */

export const FOCAL_FOUNDERS: HistoricalFigure[] = [
  {
    name: 'Franz Alexander',
    dates: '1891–1964',
    role: 'Psiquiatra, Psicanalista e Diretor do Instituto de Chicago',
    contribution:
      'Discípulo de Sigmund Freud em Berlim e primeiro diretor do prestigiado Instituto de Psicanálise de Chicago (1932–1956). Ao lado de Thomas French, publicou em 1946 a obra revolucionária "Psychoanalytic Therapy", onde questionou o apego dogmático a análises intermináveis de divã e introduziu o conceito clássico de "Experiência Emocional Corretiva" (re-experienciar o conflito sob condições relacionais seguras e diferentes do passado).',
    imageSrc: '/images/franz_alexander_plaque.jpg',
    imageAlt: 'Gedenktafel de Franz Alexander em Berlim',
    caption: 'Placa memorial de Franz Alexander (1891–1964) em Berlim, celebrando o pioneiro da psicanálise flexível e da medicina psicossomática.',
    source: 'Arquivo Histórico de Berlim / Wikimedia Commons',
  },
  {
    name: 'Michael Balint',
    dates: '1896–1970',
    role: 'Médico Psicanalista da Clínica Tavistock de Londres',
    contribution:
      'De origem húngara e discípulo de Sándor Ferenczi, Balint atuou na renomada Tavistock Clinic em Londres. Além de criar os "Grupos Balint" para a formação humanizada de médicos gerais, sistematizou a psicoterapia focal breve nos anos 1950 e 1960. Demonstrou que a delimitação intencional de um único foco psicodinâmico central permitia tratamentos eficazes de 15 a 30 sessões.',
    imageSrc: '/images/michael_balint.jpg',
    imageAlt: 'Retrato memorial de Michael Balint',
    caption: 'Dr. Michael Balint (1896–1970), psicanalista húngaro-britânico e pioneiro da psicoterapia focal na Tavistock Clinic.',
    source: 'Monte Verità Historical Archive / Wikimedia Commons',
  },
  {
    name: 'David Malan',
    dates: '1922–2020',
    role: 'Psiquiatra e Pesquisador Chefe da Tavistock Clinic',
    contribution:
      'Principal responsável por conferir rigor científico e empírico à psicoterapia dinâmica breve. Autor de "A Study of Brief Psychotherapy" (1963) e "Individual Psychotherapy and the Science of Psychodynamics" (1979). Criou os célebres "Dois Triângulos de Malan": o Triângulo do Conflito (Defesa, Ansiedade, Sentimento Verdadeiro) e o Triângulo das Pessoas (Outro Atual, Terapeuta na Transferência, Figuras do Passado/Pais).',
    imageSrc: '/images/malan_1979_brief.jpg',
    imageAlt: 'Capa de Individual Psychotherapy and the Science of Psychodynamics',
    caption: 'Obra monumental de David Malan (1979), que consolidou os dois triângulos psicodinâmicos fundamentais.',
    source: 'Butterworths / Open Library Archives',
  },
  {
    name: 'Peter Sifneos',
    dates: '1920–2008',
    role: 'Professor de Psiquiatria em Harvard e MGH',
    contribution:
      'Diretor do ambulatório psiquiátrico do Massachusetts General Hospital e professor da Harvard Medical School. Sistematizou a "Short-Term Anxiety-Provoking Psychotherapy" (STAPP - Psicoterapia Breve Provocadora de Ansiedade). Estabeleceu critérios rigorosos de seleção diagnóstica e desenvolveu o foco circunscrito em perdas, lutos não resolvidos e conflitos nucleares edípicos.',
    imageSrc: '/images/sifneos_1972_crisis.jpg',
    imageAlt: 'Capa histórica de Short-Term Psychotherapy and Emotional Crisis de Peter Sifneos',
    caption: 'Short-Term Psychotherapy and Emotional Crisis (Harvard University Press, 1972), obra de Peter Sifneos.',
    source: 'Harvard University Press / Open Library',
  },
  {
    name: 'Habib Davanloo',
    dates: '1927–presente',
    role: 'Professor Emérito de Psiquiatria da Universidade McGill',
    contribution:
      'Psiquiatra em Montreal que, a partir dos anos 1960 e 1970, desenvolveu a "Intensive Short-Term Dynamic Psychotherapy" (ISTDP). Utilizando gravações sistemáticas em vídeo de sessões clínicas, Davanloo estruturou uma técnica de confronto ativo e compassivo das resistências e mecanismos de defesa inconscientes para permitir o desbloqueio rápido de sentimentos reprimidos.',
    imageSrc: '/images/davanloo_1980_stdp.jpg',
    imageAlt: 'Capa de Short-term Dynamic Psychotherapy de Habib Davanloo',
    caption: 'Short-term Dynamic Psychotherapy (1980), coletânea seminal dos simpósios internacionais organizados por Davanloo.',
    source: 'Spectrum Publications / Open Library',
  },
];

export const FOCAL_INFLUENCES = [
  {
    title: 'A Flexibilização da Técnica Freudiana',
    thinker: 'Sigmund Freud e Sándor Ferenczi',
    text: 'Nos primórdios da psicanálise, os tratamentos duravam poucos meses (como o caso Katharina em poucas horas ou Bruno Walter em algumas semanas). Sándor Ferenczi defendeu a "técnica ativa" na década de 1920, pavimentando o caminho para a atitude engajada do terapeuta contemporâneo.',
    imageSrc: '/images/sigmund_freud.jpg',
    imageAlt: 'Sigmund Freud',
    caption: 'Sigmund Freud (1856–1939), cujos primeiros atendimentos eram notadamente breves e intensivos.',
    source: 'Max Halberstadt / Wikimedia Commons',
  },
  {
    title: 'A Experiência Emocional Corretiva de Chicago',
    thinker: 'Franz Alexander e Thomas French (1946)',
    text: 'No Instituto de Chicago, Alexander argumentou que o fator curativo essencial não era a reconstrução exaustiva de memórias infantis ao longo de anos, mas a vivência no presente de uma relação terapêutica empática que repare ativamente os danos relacionais do passado.',
    imageSrc: '/images/alexander_1946_psychoanalytic.jpg',
    imageAlt: 'Capa de Psychoanalytic Therapy de Franz Alexander',
    caption: 'Psychoanalytic Therapy (Ronald Press, 1946), o livro que inaugurou formalmente a psicoterapia breve.',
    source: 'Ronald Press / Open Library Archives',
  },
  {
    title: 'A Tradição da Tavistock Clinic (Londres)',
    thinker: 'Michael Balint e David Malan',
    text: 'A Tavistock Clinic de Londres tornou-se o mais importante laboratório de pesquisa e aplicação da psicoterapia focal. Com foco na demanda da saúde pública britânica (NHS), Balint e Malan investigaram sistematicamente como o estabelecimento rigoroso de um foco evitava dispersões e preservava os ganhos a longo prazo.',
    imageSrc: '/images/tavistock_institute.jpg',
    imageAlt: 'Fachada histórica da Tavistock Clinic / Institute em Londres',
    caption: 'Instalações históricas da Tavistock Clinic em Londres, berço dos estudos clínicos de Balint e Malan.',
    source: 'Arquivo Institucional de Londres / Wikimedia Commons',
  },
];

export const FOCAL_TIMELINE: TimelineMilestone[] = [
  {
    id: '1946',
    year: '1946',
    title: 'A Revolução de Chicago',
    subtitle: 'Alexander e French publicam "Psychoanalytic Therapy"',
    shortSummary: 'Publicação que quebrou o dogma do tratamento interminável e formalizou a flexibilidade terapêutica.',
    detailedText:
      'Franz Alexander e Thomas French declararam no Instituto de Psicanálise de Chicago que a eficácia da psicoterapia não é proporcional à sua duração em anos nem à frequência semanal no divã. Defenderam que o terapeuta deve adaptar a técnica às necessidades do paciente, delimitando alvos específicos e proporcionando a Experiência Emocional Corretiva.',
    imageSrc: '/images/alexander_1946_psychoanalytic.jpg',
    imageAlt: 'Capa do livro Psychoanalytic Therapy de 1946',
    imageCaption: 'Psychoanalytic Therapy (Alexander & French, 1946), obra inaugural da tradição breve focal.',
    source: 'Ronald Press / Open Library',
    quote: {
      text: 'A experiência emocional corretiva expõe o paciente, sob circunstâncias mais favoráveis, às situações emocionais que ele não pôde suportar no passado.',
      author: 'Franz Alexander & Thomas French, 1946',
    },
  },
  {
    id: '1963',
    year: '1963',
    title: 'Pesquisas Empíricas na Tavistock',
    subtitle: 'David Malan publica "A Study of Brief Psychotherapy"',
    shortSummary: 'Primeiro estudo rigoroso com acompanhamento de longo prazo comprovando a durabilidade da psicoterapia breve focal.',
    detailedText:
      'David Malan acompanhou pacientes tratados focalmente na Tavistock Clinic por até seis anos após o término da terapia. Os dados demonstraram inequivocamente que melhorias profundas na estrutura da personalidade e na resolução de conflitos centrais eram plenamente possíveis em processos de 20 a 30 sessões com foco delimitado.',
    imageSrc: '/images/malan_1979_brief.jpg',
    imageAlt: 'Capa de Individual Psychotherapy de David Malan',
    imageCaption: 'Individual Psychotherapy and the Science of Psychodynamics (1979), obra que sistematizou os ensinamentos de Malan.',
    source: 'Butterworths / Open Library',
  },
  {
    id: '1972',
    year: '1972',
    title: 'Critérios em Harvard: A STAPP',
    subtitle: 'Peter Sifneos e a psicoterapia provocadora de ansiedade',
    shortSummary: 'Publicação de "Short-Term Psychotherapy and Emotional Crisis" e a seleção diagnóstica baseada em força egoica.',
    detailedText:
      'Em Harvard, Peter Sifneos delimitou critérios cirúrgicos para a psicoterapia breve: motivação para mudar, capacidade de reconhecer que as dificuldades são de natureza psicológica, e habilidade de estabelecer uma aliança de trabalho colaborativa focada em um conflito nuclear (frequentemente conflitos de perda, separação ou autonomia).',
    imageSrc: '/images/sifneos_1972_crisis.jpg',
    imageAlt: 'Capa histórica de Short-Term Psychotherapy de Peter Sifneos',
    imageCaption: 'Short-Term Psychotherapy and Emotional Crisis (Harvard, 1972), clássico metodológico de Peter Sifneos.',
    source: 'Harvard University Press / Open Library',
  },
  {
    id: '1978',
    year: '1978',
    title: 'A ISTDP de Davanloo',
    subtitle: 'Sistematização com registro audiovisual de sessões',
    shortSummary: 'Habib Davanloo organiza os simpósios internacionais de Psicoterapia Dinâmica Breve Intensiva.',
    detailedText:
      'Na Universidade McGill, Davanloo desenvolveu um método intensivo gravado em vídeo que identificava as micro-manifestações corporais de ansiedade (estriada vs. somatovisceral) e desafiava as defesas neuróticas logo no início da sessão. Isso permitiu o acesso rápido e seguro aos sentimentos genuínos bloqueados de luto, culpa e raiva.',
    imageSrc: '/images/davanloo_1980_stdp.jpg',
    imageAlt: 'Capa de Short-term Dynamic Psychotherapy de Habib Davanloo',
    imageCaption: 'Short-term Dynamic Psychotherapy (1980), reunião das técnicas apresentadas nos congressos mundiais de ISTDP.',
    source: 'Spectrum / Open Library Records',
  },
  {
    id: 'america-latina',
    year: 'América Latina',
    title: 'Pioneirismo Latino-Americano',
    subtitle: 'Hector Fiorini e Eduardo Braier na Argentina e Brasil',
    shortSummary: 'Publicação de "Teoria e Técnica de Psicoterapias" (1976) e a consolidação da clínica focal em serviços públicos.',
    detailedText:
      'Na América Latina, psicanalistas como Hector Fiorini (Argentina) formularam modelos teóricos integradores que adaptaram a psicoterapia breve às demandas da saúde pública e dos ambulatórios hospitalares. Fiorini conceituou o foco terapêutico como um "feixe de relações significativas", orientando gerações de psicólogos no Brasil e no Cone Sul.',
  },
];

export const FOCAL_CONCEPTS: CoreConcept[] = [
  {
    id: 'delimitacao-foco',
    term: 'Delimitação do Foco',
    translation: 'Focal Hypothesis',
    essence: 'A escolha deliberada do conflito central a ser trabalhado',
    elaboration:
      'A psicoterapia breve focal não pretende esgotar toda a biografia ou todas as neuroses do sujeito. Terapeuta e paciente elegem um foco circumscrito — por exemplo, a incapacidade recorrente de tolerar o término de vínculos, ou a inibição profissional diante de figuras de autoridade —, mantendo o trabalho clínico rigorosamente concentrado nessa problemática.',
  },
  {
    id: 'experiencia-corretiva',
    term: 'Experiência Emocional Corretiva',
    translation: 'Corrective Emotional Experience',
    essence: 'Viver uma resposta relacional segura e diferente do passado',
    elaboration:
      'Conceito formulado por Franz Alexander: o insight intelectual não é suficiente para curar. A transformação ocorre quando o paciente experimenta, na relação com o terapeuta, uma acolhida e uma resposta emocional madura diametralmente oposta à rejeição, crítica ou indiferença que viveu em suas figuras parentais originais.',
  },
  {
    id: 'triangulo-conflito',
    term: 'Triângulo do Conflito (Malan)',
    translation: 'Defense - Anxiety - Hidden Feeling',
    essence: 'O mecanismo psíquico de proteção contra o afeto',
    elaboration:
      'Malan estruturou a dinâmica do sofrimento em três vértices: no fundo existe um Sentimento Oculto genuíno (afeto reprimido); a aproximação desse sentimento gera Ansiedade ou angústia; para evitar a dor, o ego ativa uma Defesa psicológica (racionalização, afastamento, somatização). O terapeuta ajuda a reconhecer a defesa para desativar a ansiedade e libertar o afeto.',
  },
  {
    id: 'triangulo-pessoas',
    term: 'Triângulo das Pessoas (Malan)',
    translation: 'Other - Therapist - Past',
    essence: 'A confluência temporal dos vínculos relacionais',
    elaboration:
      'Malan demonstrou que o padrão relacional se manifesta simultaneamente em três planos: com as pessoas do Outro Atual (cônjuge, chefe, amigos), com o Terapeuta (na relação transferencial imediata) e com as Figuras do Passado (pais e cuidadores da infância). A interpretação focal liga esses três pontos.',
  },
  {
    id: 'atitude-ativa',
    term: 'Atitude Ativa do Terapeuta',
    translation: 'Active Stance & Bounded Time',
    essence: 'O terapeuta como guia participativo que preserva o enquadre',
    elaboration:
      'Diferente do analista tradicional silencioso e neutro, o terapeuta breve focal é ativamente participativo: intervém para evitar que a sessão se disperse para fora do foco combinado, nomeia resistências rapidamente e administra o contrato de tempo (sessões pré-acordadas, de 12 a 30 encontros).',
  },
];

export const FOCAL_REFERENCES: ReferenceItem[] = [
  {
    id: 'foc-ref1',
    citation:
      'ALEXANDER, Franz; FRENCH, Thomas M. Psychoanalytic Therapy: Principles and Application. New York: Ronald Press, 1946.',
    note: 'O texto pioneiro que quebrou a rigidez do enquadre analítico e propôs a experiência emocional corretiva.',
  },
  {
    id: 'foc-ref2',
    citation:
      'MALAN, David H. A Study of Brief Psychotherapy. London: Tavistock Publications, 1963.',
    note: 'Primeiro estudo empírico com seguimento clínico prolongado sobre os efeitos duradouros da psicoterapia focal.',
  },
  {
    id: 'foc-ref3',
    citation:
      'MALAN, David H. Individual Psychotherapy and the Science of Psychodynamics. London: Butterworths, 1979.',
    note: 'Tratado de referência que sistematizou graficamente os dois triângulos psicodinâmicos fundamentais.',
  },
  {
    id: 'foc-ref4',
    citation:
      'BALINT, Michael; ORNSTEIN, Paul H.; BALINT, Enid. Focal Psychotherapy: An Example of Applied Psychoanalysis. London: Tavistock, 1972.',
    note: 'Metodologia de delimitação de foco desenvolvida na Tavistock Clinic aplicada à clínica e formação profissional.',
  },
  {
    id: 'foc-ref5',
    citation:
      'SIFNEOS, Peter E. Short-Term Psychotherapy and Emotional Crisis. Cambridge: Harvard University Press, 1972.',
    note: 'Formalização da STAPP em Harvard com critérios diagnósticos e foco em crises emocionais circunscritas.',
  },
  {
    id: 'foc-ref6',
    citation:
      'DAVANLOO, Habib (Ed.). Basic Principles and Techniques in Short-Term Dynamic Psychotherapy. New York: Spectrum, 1978.',
    note: 'Coletânea dos simpósios de McGill sobre o confronto compassivo das defesas e desbloqueio do inconsciente.',
  },
  {
    id: 'foc-ref7',
    citation:
      'FIORINI, Hector J. Teoria e Técnica de Psicoterapias. Rio de Janeiro: Francisco Alves, 1976 / 2004.',
    note: 'Clássico da psicoterapia breve na América Latina conceituando a formulação de foco e o enquadre flexível.',
  },
  {
    id: 'foc-ref8',
    citation:
      'BRAIER, Eduardo A. Psicoterapia Breve de Orientação Psicanalítica. São Paulo: Martins Fontes, 1984.',
    note: 'Guia clínico canônico adotado nos cursos de Psicologia do Brasil para o diagnóstico e condução de processos focais.',
  },
];
