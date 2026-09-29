import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Clock, Users, Sparkles, Compass, CheckCircle2 } from 'lucide-react';
import {
  TCC_FOUNDERS,
  TCC_INFLUENCES,
  TCC_TIMELINE,
  TCC_CONCEPTS,
  TCC_REFERENCES,
} from '../data/approaches';
import { HistoricalImage } from './HistoricalImage';
import { InteractiveTimeline } from './InteractiveTimeline';

interface TccViewProps {
  onBackToHome: () => void;
}

export const TccView: React.FC<TccViewProps> = ({ onBackToHome }) => {
  const [activeConceptId, setActiveConceptId] = useState<string>('triade-cognitiva');

  return (
    <article className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-4 pb-20">
      {/* Top Breadcrumb & Return Action */}
      <div className="flex items-center justify-between pb-4 border-b border-[#E5DDD0] text-xs font-sans text-[#78716C]">
        <button
          type="button"
          onClick={onBackToHome}
          className="flex items-center gap-1.5 text-[#78350F] hover:text-[#9A3412] font-medium transition-colors cursor-pointer py-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Voltar às abordagens</span>
        </button>
        <span className="uppercase tracking-widest text-[11px]">Capítulo 02</span>
      </div>

      {/* 1. ABERTURA */}
      <header className="pt-6 pb-8 sm:pt-10 sm:pb-12 text-left border-b border-[#E5DDD0]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9A3412] mb-3 font-sans font-semibold">
          <span>02 / História &amp; Evolução Empírica</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] text-[#1C1917] font-medium tracking-tight text-balance">
          Terapia Cognitivo-Comportamental
        </h1>

        <p className="mt-4 text-lg sm:text-2xl leading-relaxed text-[#44403C] font-serif italic text-balance">
          Do comportamento aos pensamentos: a construção de uma nova forma de fazer psicoterapia
        </p>

        {/* Protagonist Historical Photograph */}
        <div className="mt-8">
          <HistoricalImage
            src="/images/aaron_beck.jpg"
            alt="Fotografia histórica de Aaron T. Beck jovem na Brown University"
            caption="Aaron T. Beck (1921–2021) em sua formação universitária na Brown University (1942). Formado em psiquiatria e psicanálise pela Universidade da Pensilvânia, Beck transformou a investigação clínica da depressão ao demonstrar o papel das distorções do pensamento."
            source="Liber Brunensis 1942 / Wikimedia Commons (Domínio Público)"
            aspectRatio="portrait"
            priority
          />
        </div>

        {/* Narrative Drop-Cap Lead */}
        <div className="mt-6 text-sm sm:text-base leading-relaxed text-[#292524] space-y-4">
          <p className="drop-cap">
            A Terapia Cognitivo-Comportamental (TCC) não nasceu como uma escola pronta, nem foi criada no isolamento por um único pensador. Trata-se do desfecho histórico de uma profunda revolução metodológica que atravessou a segunda metade do século XX. O movimento iniciou com a contestação empírica da psicanálise clássica, passou pela consolidação científica das terapias comportamentais nos anos 1950, pela emergência da Terapia Racional de Albert Ellis e da Terapia Cognitiva de Aaron Beck nos anos 1960, culminando na integração progressiva que transformou a psicoterapia em uma prática colaborativa e orientada a evidências.
          </p>
          <p className="font-serif italic text-[#57534E] pl-4 border-l-2 border-[#9A3412]/50 text-sm sm:text-[15px]">
            “Ao investigar como a pessoa processa a informação e como interpreta seus eventos vitais, abrimos a possibilidade de reestruturar o sofrimento emocional e construir novos caminhos comportamentais.”
          </p>
        </div>
      </header>

      {/* 2. COMO SURGIU */}
      <section className="py-10 border-b border-[#E5DDD0]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-2 font-sans">
          <Compass className="w-3.5 h-3.5 text-[#9A3412]" />
          <span>Gênese Epistemológica</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917] mb-4">
          Como surgiu a abordagem
        </h2>

        <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-[#292524]">
          <p>
            Em meados do século XX, a psicologia clínica internacional encontrava-se dividida entre a tradição psicanalítica (voltada a interpretações do inconsciente) e o behaviorismo (centrado no laboratório). A partir da década de 1950, pesquisadores como <strong>Joseph Wolpe</strong> (na África do Sul), <strong>Hans Eysenck</strong> (na Inglaterra) e os seguidores de <strong>B. F. Skinner</strong> (nos Estados Unidos) desenvolveram a chamada <em>primeira onda</em> da terapia: as <strong>terapias comportamentais</strong>. Demonstraram que medos, fobias e ansiedades podiam ser modificados diretamente por meio de princípios de aprendizagem, descondicionamento e exposição gradual.
          </p>

          <p>
            Paralelamente, em Nova York, o psicólogo clínico <strong>Albert Ellis</strong> rompia formalmente com a psicanálise em 1955. Ellis observou que pacientes que compreendiam perfeitamente seus traumas infantis continuavam paralisados porque repetiam cotidianamente para si mesmos crenças irracionais, exigências dogmáticas e catastrofizações. Formulou assim a <strong>Terapia Racional</strong> (mais tarde REBT), antecipando a centralidade dos processos cognitivos na regulação do afeto.
          </p>

          <p>
            No início dos anos 1960, na Universidade da Pensilvânia, o psiquiatra <strong>Aaron T. Beck</strong> conduziu investigações clínicas com o objetivo original de comprovar cientificamente os postulados psicanalíticos sobre a depressão. Para sua surpresa, os resultados contrariaram a hipótese freudiana de "hostilidade retroflexa": os pacientes apresentavam pensamentos automáticos constantes de desvalia e culpa, organizados por esquemas conceituais negativos sobre si, o mundo e o futuro.
          </p>

          <p>
            Nas décadas de 1970 e 1980, os terapeutas comportamentais reconheceram que a cognição mediava as respostas humanas, enquanto os terapeutas cognitivos incorporaram o rigor dos experimentos práticos e da exposição in vivo. Dessa <strong>aproximação progressiva entre métodos cognitivos e comportamentais</strong> consolidou-se o campo multifacetado hoje reconhecido como TCC.
          </p>
        </div>

        {/* Matrizes de Influência */}
        <div className="mt-8">
          <h3 className="text-xs uppercase tracking-widest text-[#78350F] font-sans font-semibold mb-4">
            Matrizes Teóricas e Científicas:
          </h3>

          <div className="space-y-6">
            {TCC_INFLUENCES.map((inf, idx) => (
              <div
                key={inf.title}
                className="p-4 sm:p-5 bg-[#FAF7F2] border border-[#E5DDD0] shadow-xs"
              >
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="font-serif text-xs font-semibold text-[#9A3412]">
                    0{idx + 1}
                  </span>
                  <span className="text-[11px] font-sans uppercase tracking-wider text-[#78716C]">
                    Raiz Histórica
                  </span>
                </div>

                <h4 className="font-serif text-lg sm:text-xl font-medium text-[#1C1917]">
                  {inf.title}
                </h4>
                <p className="text-xs text-[#78350F] font-sans font-medium mb-3">
                  Pioneiros: {inf.thinker}
                </p>

                <p className="text-xs sm:text-[13px] leading-relaxed text-[#44403C] mb-4">
                  {inf.text}
                </p>

                {inf.imageSrc && (
                  <div className="max-w-[220px] mx-auto sm:mx-0">
                    <HistoricalImage
                      src={inf.imageSrc}
                      alt={inf.imageAlt}
                      caption={inf.caption}
                      source={inf.source}
                      aspectRatio="portrait"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PESSOAS E HISTÓRIA */}
      <section className="py-10 border-b border-[#E5DDD0]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-2 font-sans">
          <Users className="w-3.5 h-3.5 text-[#9A3412]" />
          <span>Pioneiros &amp; Pesquisadores</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917]">
          Pessoas que construíram essa história
        </h2>

        {/* Historiographical Clarification */}
        <div className="my-5 p-4 bg-[#F5EFE6] border-l-2 border-[#9A3412]">
          <p className="font-serif text-xs sm:text-sm text-[#1C1917] leading-relaxed">
            <strong className="font-semibold text-[#9A3412]">Precisão Histórica:</strong> Aaron T. Beck não inventou sozinho a TCC. A abordagem é fruto de uma confluência plural: o rigor da análise experimental de Skinner e Wolpe, a postura filosófica e confrontativa da REBT de Albert Ellis, as pesquisas psiquiátricas de Beck sobre esquemas mentais, e as contribuições metodológicas de pesquisadores como Donald Meichenbaum e David Clark.
          </p>
        </div>

        {/* Individual Founder Blocks */}
        <div className="space-y-8 mt-6">
          {TCC_FOUNDERS.map((founder) => (
            <div
              key={founder.name}
              className="p-5 sm:p-6 bg-[#FAF7F2] border border-[#E5DDD0] shadow-xs"
            >
              <div className="sm:flex sm:gap-6 sm:items-start">
                <div className="sm:w-44 shrink-0 mb-4 sm:mb-0">
                  <HistoricalImage
                    src={founder.imageSrc}
                    alt={founder.imageAlt}
                    caption={founder.caption}
                    source={founder.source}
                    aspectRatio="portrait"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-baseline justify-between border-b border-[#E5DDD0] pb-2 mb-3">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1C1917]">
                      {founder.name}
                    </h3>
                    <span className="font-serif text-xs sm:text-sm text-[#78350F] font-semibold">
                      {founder.dates}
                    </span>
                  </div>

                  <p className="text-xs uppercase tracking-wider text-[#9A3412] font-sans font-medium mb-3">
                    {founder.role}
                  </p>

                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#292524]">
                    {founder.contribution}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Joseph Wolpe & Foundations Note */}
          <div className="p-5 sm:p-6 bg-[#FAF7F2] border border-[#E5DDD0] shadow-xs">
            <div className="flex items-baseline justify-between border-b border-[#E5DDD0] pb-2 mb-3">
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1C1917]">
                Joseph Wolpe (1915–1997)
              </h3>
              <span className="font-serif text-xs sm:text-sm text-[#78350F] font-semibold">
                Temple University / África do Sul
              </span>
            </div>

            <p className="text-xs uppercase tracking-wider text-[#9A3412] font-sans font-medium mb-3">
              Pioneiro da Terapia Comportamental Sistemática
            </p>

            <p className="text-xs sm:text-[13px] leading-relaxed text-[#292524]">
              Wolpe estabeleceu em 1958 o tratamento empírico da ansiedade com o livro <em>Psychotherapy by Reciprocal Inhibition</em>. Ao demonstrar que respostas emocionais incompatíveis (como relaxamento muscular profundo) podiam inibir o medo condicionado, formulou a <strong>Dessensibilização Sistemática</strong> com hierarquias de exposição, técnica que permanece como base das intervenções comportamentais da TCC contemporânea.
            </p>
          </div>
        </div>
      </section>

      {/* 4. LINHA DO TEMPO INTERATIVA */}
      <section className="py-10 border-b border-[#E5DDD0]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-2 font-sans">
          <Clock className="w-3.5 h-3.5 text-[#9A3412]" />
          <span>Cronologia Documental</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917]">
          Linha do tempo histórica
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#57534E] font-serif italic">
          Toque em qualquer época para examinar as publicações canônicas, ensaios clínicos e capas históricas.
        </p>

        <InteractiveTimeline milestones={TCC_TIMELINE} />
      </section>

      {/* 5. LEGADO CONCEITUAL */}
      <section className="py-10 border-b border-[#E5DDD0]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-2 font-sans">
          <Sparkles className="w-3.5 h-3.5 text-[#9A3412]" />
          <span>Legado Conceitual</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917] mb-2">
          O que essa história deixou
        </h2>
        <p className="text-xs sm:text-sm text-[#57534E] font-serif italic mb-6">
          Princípios que redefiniram a clínica psicológica contemporânea e a relação terapêutica.
        </p>

        {/* Concept Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
          {TCC_CONCEPTS.map((c) => {
            const isSelected = c.id === activeConceptId;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveConceptId(c.id)}
                className={`p-3 text-left border transition-all cursor-pointer min-h-[48px] flex flex-col justify-center ${
                  isSelected
                    ? 'bg-[#1C1917] text-[#FAF7F2] border-[#1C1917] shadow-xs'
                    : 'bg-[#FAF7F2] text-[#1C1917] border-[#E5DDD0] hover:bg-[#F3ECE1]'
                }`}
              >
                <span className="font-serif text-sm font-medium leading-tight">
                  {c.term}
                </span>
                <span className={`text-[10px] uppercase tracking-wider font-sans mt-0.5 ${
                  isSelected ? 'text-[#FAF7F2]/70' : 'text-[#78716C]'
                }`}>
                  {c.translation}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Concept Display */}
        {TCC_CONCEPTS.filter((c) => c.id === activeConceptId).map((c) => (
          <div
            key={c.id}
            className="p-6 bg-[#FAF7F2] border border-[#E5DDD0] shadow-xs text-left"
          >
            <div className="flex items-baseline justify-between border-b border-[#E5DDD0] pb-2 mb-3">
              <h3 className="font-serif text-2xl font-medium text-[#1C1917]">
                {c.term}
              </h3>
              <span className="text-xs uppercase tracking-widest text-[#9A3412] font-sans font-medium">
                {c.translation}
              </span>
            </div>

            <p className="font-serif italic text-sm sm:text-base text-[#78350F] mb-3">
              “{c.essence}”
            </p>

            <p className="text-sm leading-relaxed text-[#292524]">
              {c.elaboration}
            </p>
          </div>
        ))}

        {/* Minimalist Graphic: O Modelo Cognitivo Interativo */}
        <div className="mt-8 p-5 bg-[#F5EFE6] border border-[#E5DDD0] text-center">
          <p className="text-xs uppercase tracking-widest font-sans text-[#78716C] mb-2">
            Estrutura Operacional Básica
          </p>
          <h4 className="font-serif text-lg font-medium text-[#1C1917] mb-2">
            A Relação Recíproca: Situação → Cognição → Emoção &amp; Comportamento
          </h4>
          <p className="text-xs sm:text-[13px] text-[#44403C] leading-relaxed max-w-lg mx-auto">
            Um evento externo não gera diretamente uma resposta emocional. É o <strong>significado</strong> atribuído à situação (processado pelos esquemas e pensamentos automáticos) que dispara as reações fisiológicas, as emoções e os padrões de ação. Ao intervir nos pensamentos e realizar experimentos comportamentais reais, modifica-se todo o circuito vivencial.
          </p>
        </div>
      </section>

      {/* 6. TCC HOJE */}
      <section className="py-10 border-b border-[#E5DDD0]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-2 font-sans">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#9A3412]" />
          <span>A Contemporaneidade</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917] mb-4">
          TCC hoje: pluralidade e sofisticação empírica
        </h2>

        <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-[#292524]">
          <p>
            O campo contemporâneo das terapias cognitivas e comportamentais não pode ser compreendido como um bloco monolítico ou redutível a um punhado de técnicas de registro em papel. Ao longo dos últimos 30 anos, a abordagem diversificou-se em linhagens com ênfases epistemológicas distintas.
          </p>

          <p>
            Enquanto o <strong>modelo tradicional de Beck</strong> segue como padrão de ouro em eficácia para depressão e ansiedade em diretrizes globais (como o NICE britânico e a APA americana), surgiram desenvolvimentos voltados a quadros crônicos: a <strong>Terapia do Esquema</strong> (Jeffrey Young), que aprofundou o trabalho com modos infantis e necessidades emocionais não atendidas; a <strong>Terapia Comportamental Dialética (DBT)</strong> de Marsha Linehan, referência para regulação emocional e transtorno de personalidade borderline; e a <strong>Terapia de Aceitação e Compromisso (ACT)</strong> de Steven Hayes, que privilegia a flexibilidade psicológica e os valores vitais sobre a tentativa de controlar pensamentos.
          </p>

          <p>
            Essa pluralidade demonstra a vitalidade de um campo que mantém em comum o compromisso inegociável com a investigação científica, a avaliação empírica continuada e o respeito à autonomia ativa do paciente.
          </p>
        </div>
      </section>

      {/* 7. REFERÊNCIAS */}
      <section className="py-10 border-b border-[#E5DDD0]" aria-labelledby="referencias-tcc">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-2 font-sans">
          <BookOpen className="w-3.5 h-3.5 text-[#9A3412]" />
          <span>Fontes Acadêmicas &amp; Documentais</span>
        </div>

        <h2 id="referencias-tcc" className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917] mb-6">
          Referências
        </h2>

        <div className="space-y-4">
          {TCC_REFERENCES.map((ref) => (
            <div
              key={ref.id}
              className="p-4 bg-[#FAF7F2] border border-[#E5DDD0] text-left text-xs sm:text-[13px]"
            >
              <p className="font-sans font-medium text-[#1C1917] leading-relaxed">
                {ref.citation}
              </p>
              {ref.note && (
                <p className="text-[#78716C] font-serif italic mt-1.5 leading-snug">
                  {ref.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 8. BOTÃO FINAL DE RETORNO OBRIGATÓRIO */}
      <nav className="pt-10 pb-6 text-center" aria-label="Navegação de retorno">
        <button
          type="button"
          onClick={onBackToHome}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#1C1917] text-[#FAF7F2] hover:bg-[#9A3412] active:scale-[0.98] transition-all font-serif text-base sm:text-lg font-medium shadow-md cursor-pointer border border-[#1C1917]"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>← Voltar às abordagens</span>
        </button>

        <p className="mt-3 text-xs text-[#78716C] font-sans">
          Retorna à página principal da exposição com os quatro capítulos
        </p>
      </nav>
    </article>
  );
};
