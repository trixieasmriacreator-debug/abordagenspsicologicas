import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Clock, Users, Sparkles, Compass, CheckCircle2 } from 'lucide-react';
import {
  SISTEMICA_FOUNDERS,
  SISTEMICA_INFLUENCES,
  SISTEMICA_TIMELINE,
  SISTEMICA_CONCEPTS,
  SISTEMICA_REFERENCES,
} from '../data/approaches';
import { HistoricalImage } from './HistoricalImage';
import { InteractiveTimeline } from './InteractiveTimeline';

interface SistemicaViewProps {
  onBackToHome: () => void;
}

export const SistemicaView: React.FC<SistemicaViewProps> = ({ onBackToHome }) => {
  const [activeConceptId, setActiveConceptId] = useState<string>('sistema-totalidade');

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
        <span className="uppercase tracking-widest text-[11px]">Capítulo 03</span>
      </div>

      {/* 1. ABERTURA */}
      <header className="pt-6 pb-8 sm:pt-10 sm:pb-12 text-left border-b border-[#E5DDD0]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9A3412] mb-3 font-sans font-semibold">
          <span>03 / História &amp; Epistemologia Relacional</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] text-[#1C1917] font-medium tracking-tight text-balance">
          Terapia Familiar Sistêmica
        </h1>

        <p className="mt-4 text-lg sm:text-2xl leading-relaxed text-[#44403C] font-serif italic text-balance">
          Quando o foco deixa de ser apenas o indivíduo e passa a incluir as relações
        </p>

        {/* Protagonist Historical Photograph: Minuchin and Haley collaborating */}
        <div className="mt-8">
          <HistoricalImage
            src="/images/minuchin_haley.jpg"
            alt="Salvador Minuchin, Braulio Montalvo e Jay Haley na Filadélfia"
            caption="Braulio Montalvo, Salvador Minuchin (ao centro) e Jay Haley reunidos na Philadelphia Child Guidance Clinic. A colaboração entre clínicos de diferentes trajetórias catalisou a revolução sistêmica nos anos 1960 e 1970."
            source="Arquivo Histórico de Terapia Familiar / Wikimedia Commons"
            aspectRatio="landscape"
            priority
          />
        </div>

        {/* Narrative Drop-Cap Lead */}
        <div className="mt-6 text-sm sm:text-base leading-relaxed text-[#292524] space-y-4">
          <p className="drop-cap">
            Até meados do século XX, quase todas as tradições psicoterapêuticas compartilhavam uma mesma premissa silenciosa: o sofrimento psíquico residia exclusivamente dentro da mente do indivíduo isolado. A Terapia Familiar Sistêmica operou um salto copernicano na clínica psicológica. Ao reunir contribuições da biologia de sistemas, da cibernética e da antropologia da comunicação, os terapeutas familiares perceberam que o comportamento sintomático não é uma falha solitária, mas a expressão de padrões recursivos, lealdades e circuitos de retroalimentação da rede de relações em que a pessoa vive.
          </p>
          <p className="font-serif italic text-[#57534E] pl-4 border-l-2 border-[#9A3412]/50 text-sm sm:text-[15px]">
            “Para compreender a parte, é preciso olhar a dança do todo. Quando a estrutura relacional se transforma, cada indivíduo encontra novos graus de liberdade para existir.”
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
          Como surgiu a perspectiva sistêmica
        </h2>

        <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-[#292524]">
          <p>
            O movimento da terapia familiar desenvolveu-se principalmente a partir do <strong>pós-Segunda Guerra Mundial</strong>, alimentado por inquietações práticas em múltiplos centros clínicos que trabalhavam com veteranos, crianças em sofrimento e famílias de pacientes hospitalizados com esquizofrenia. Clínicos começaram a notar um fenômeno desconcertante: quando o paciente institucionalizado apresentava melhoras expressivas e retornava para casa, ou ele sofria uma recaída rápida ou outro membro da família começava a manifestar sintomas graves.
          </p>

          <p>
            Essa constatação empírica exigiu novas categorias de pensamento, que vieram de fora da psicologia tradicional:
          </p>

          <ul className="space-y-3 pl-2 text-xs sm:text-[13px] text-[#44403C]">
            <li className="flex items-start gap-2">
              <span className="font-serif text-[#9A3412] font-bold">―</span>
              <span><strong>A Teoria Geral dos Sistemas (Ludwig von Bertalanffy):</strong> Ensinou que a família é um sistema aberto governado pelo princípio da não-somatividade (o todo é maior e diferente da soma de seus membros) e pela busca contínua de homeostase.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-serif text-[#9A3412] font-bold">―</span>
              <span><strong>A Cibernética (Norbert Wiener e Gregory Bateson):</strong> Introduziu os conceitos de circuitos de retroalimentação (feedback), informação e autorregulação, substituindo a velha causalidade linear de causa-efeito por uma <em>causalidade circular</em>.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-serif text-[#9A3412] font-bold">―</span>
              <span><strong>Os Estudos de Comunicação Humana (MRI de Palo Alto):</strong> Investigaram as regras pragmáticas das interações, demonstrando que toda comunicação possui um aspecto de conteúdo (o que é dito) e um de relação (como deve ser entendido).</span>
            </li>
          </ul>

          <p className="pt-2">
            É fundamental sublinhar que essas influências <strong>não formaram uma escola única ou monolítica</strong>. Ao contrário, deram origem a tradições ricas e com estilos clínicos próprios: a escola estrutural, a escola estratégica, o modelo experiencial-humanista e a abordagem intergeracional.
          </p>
        </div>

        {/* Influences Cards */}
        <div className="mt-8">
          <h3 className="text-xs uppercase tracking-widest text-[#78350F] font-sans font-semibold mb-4">
            As Grandes Matrizes do Pensamento Sistêmico:
          </h3>

          <div className="space-y-6">
            {SISTEMICA_INFLUENCES.map((inf, idx) => (
              <div
                key={inf.title}
                className="p-4 sm:p-5 bg-[#FAF7F2] border border-[#E5DDD0] shadow-xs"
              >
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="font-serif text-xs font-semibold text-[#9A3412]">
                    0{idx + 1}
                  </span>
                  <span className="text-[11px] font-sans uppercase tracking-wider text-[#78716C]">
                    Matriz Teórica
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

      {/* 3. PESSOAS E MOVIMENTOS */}
      <section className="py-10 border-b border-[#E5DDD0]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-2 font-sans">
          <Users className="w-3.5 h-3.5 text-[#9A3412]" />
          <span>Pioneiros &amp; Diferentes Tradições</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917]">
          Pessoas e movimentos sistêmicos
        </h2>

        {/* Historiographical Clarification */}
        <div className="my-5 p-4 bg-[#F5EFE6] border-l-2 border-[#9A3412]">
          <p className="font-serif text-xs sm:text-sm text-[#1C1917] leading-relaxed">
            <strong className="font-semibold text-[#9A3412]">Pluralidade Fundante:</strong> A Terapia Familiar Sistêmica não possui um criador singular. Cada pioneiro desenvolveu um método específico com base em sua formação e contexto de trabalho: Minuchin formulou a análise das fronteiras familiares; Satir priorizou a afetividade e a congruência na comunicação; Bowen investigou a transmissão multigeracional; e Bateson e Haley desvendaram as armadilhas comunicacionais e as estratégias de poder.
          </p>
        </div>

        {/* Individual Founder Blocks */}
        <div className="space-y-8 mt-6">
          {SISTEMICA_FOUNDERS.map((founder) => (
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

          {/* Murray Bowen Block */}
          <div className="p-5 sm:p-6 bg-[#FAF7F2] border border-[#E5DDD0] shadow-xs">
            <div className="flex items-baseline justify-between border-b border-[#E5DDD0] pb-2 mb-3">
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1C1917]">
                Murray Bowen (1913–1990)
              </h3>
              <span className="font-serif text-xs sm:text-sm text-[#78350F] font-semibold">
                Georgetown University
              </span>
            </div>

            <p className="text-xs uppercase tracking-wider text-[#9A3412] font-sans font-medium mb-3">
              Criador da Teoria Intergeracional de Sistemas Familiares
            </p>

            <p className="text-xs sm:text-[13px] leading-relaxed text-[#292524]">
              Bowen desenvolveu sua teoria trabalhando no National Institute of Mental Health (NIMH) e em Georgetown. Estabeleceu o conceito de <strong>diferenciação do self</strong> (a capacidade do indivíduo de equilibrar o funcionamento intelectual e o emocional, permanecendo em contato íntimo com a família sem se dissolver na ansiedade coletiva). Introduziu o <strong>genograma</strong> familiar de três gerações e o conceito de triangulação patológica.
            </p>
          </div>
        </div>
      </section>

      {/* 4. LINHA DO TEMPO INTERATIVA */}
      <section className="py-10 border-b border-[#E5DDD0]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-2 font-sans">
          <Clock className="w-3.5 h-3.5 text-[#9A3412]" />
          <span>Cronologia de Tradições Paralelas</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917]">
          Linha do tempo e ramificações históricas
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#57534E] font-serif italic">
          Toque em cada período para examinar as publicações seminais, fotos históricas e o cruzamento entre as escolas.
        </p>

        <InteractiveTimeline milestones={SISTEMICA_TIMELINE} />
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
          Conceitos operacionais que continuam a orientar a escuta de famílias, casais e organizações.
        </p>

        {/* Concept Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
          {SISTEMICA_CONCEPTS.map((c) => {
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
        {SISTEMICA_CONCEPTS.filter((c) => c.id === activeConceptId).map((c) => (
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

        {/* Diagram Note: Tipos de Fronteiras de Minuchin */}
        <div className="mt-8 p-5 bg-[#F5EFE6] border border-[#E5DDD0] text-center">
          <p className="text-xs uppercase tracking-widest font-sans text-[#78716C] mb-2">
            Mapeamento Estrutural
          </p>
          <h4 className="font-serif text-lg font-medium text-[#1C1917] mb-2">
            Fronteiras Claras, Difusas e Rígidas
          </h4>
          <p className="text-xs sm:text-[13px] text-[#44403C] leading-relaxed max-w-lg mx-auto">
            Em famílias funcionais, as <strong>fronteiras claras</strong> garantem proximidade emocional e autonomia individual. Quando as fronteiras são <strong>difusas</strong>, instala-se o emaranhamento (os sentimentos de um contaminam todos os outros). Quando são <strong>rígidas</strong>, vigora o desengajamento (distanciamento e frieza protetiva).
          </p>
        </div>
      </section>

      {/* 6. HOJE */}
      <section className="py-10 border-b border-[#E5DDD0]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-2 font-sans">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#9A3412]" />
          <span>A Contemporaneidade</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917] mb-4">
          A abordagem sistêmica hoje: diálogo e diversidade
        </h2>

        <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-[#292524]">
          <p>
            No século XXI, o pensamento sistêmico transcendeu os limites do consultório tradicional para se tornar uma linguagem indispensável na compreensão da complexidade social. Longe de impor um modelo idealizado e normativo de "família tradicional", as abordagens sistêmicas contemporâneas acolhem a rica diversidade das configurações familiares: famílias monoparentais, reconstituídas, homoafetivas, adotivas e redes comunitárias de apoio.
          </p>

          <p>
            Com a incorporação da <strong>cibernética de segunda ordem</strong> e do construcionismo social, o terapeuta contemporâneo não atua como um perito neutro que "conserta" a família, mas como um facilitador de diálogos reflexivos. Práticas como as <strong>terapias narrativas</strong> (desconstrução de histórias opressivas e externalização do problema) e as <strong>terapias colaborativas</strong> são amplamente empregadas em varas de família, mediação de conflitos, programas de proteção a crianças e adolescentes e equipes multidisciplinares do SUS e da assistência social.
          </p>
        </div>
      </section>

      {/* 7. REFERÊNCIAS */}
      <section className="py-10 border-b border-[#E5DDD0]" aria-labelledby="referencias-sistemica">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-2 font-sans">
          <BookOpen className="w-3.5 h-3.5 text-[#9A3412]" />
          <span>Fontes Acadêmicas &amp; Documentais</span>
        </div>

        <h2 id="referencias-sistemica" className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917] mb-6">
          Referências
        </h2>

        <div className="space-y-4">
          {SISTEMICA_REFERENCES.map((ref) => (
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
