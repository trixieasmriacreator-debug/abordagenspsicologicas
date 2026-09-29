import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Clock, Users, Sparkles, Compass, CheckCircle2 } from 'lucide-react';
import {
  GESTALT_FOUNDERS,
  GESTALT_INFLUENCES,
  GESTALT_TIMELINE,
  GESTALT_CONCEPTS,
  GESTALT_REFERENCES,
} from '../data/approaches';
import { HistoricalImage } from './HistoricalImage';
import { InteractiveTimeline } from './InteractiveTimeline';

interface GestaltViewProps {
  onBackToHome: () => void;
}

export const GestaltView: React.FC<GestaltViewProps> = ({ onBackToHome }) => {
  const [activeConceptId, setActiveConceptId] = useState<string>('aqui-e-agora');

  return (
    <article className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-4 pb-20">
      {/* Top Breadcrumb & Quick Action */}
      <div className="flex items-center justify-between pb-4 border-b border-[#E5DDD0] text-xs font-sans text-[#78716C]">
        <button
          type="button"
          onClick={onBackToHome}
          className="flex items-center gap-1.5 text-[#78350F] hover:text-[#9A3412] font-medium transition-colors cursor-pointer py-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Voltar às abordagens</span>
        </button>
        <span className="uppercase tracking-widest text-[11px]">Capítulo 01</span>
      </div>

      {/* 1. ABERTURA */}
      <header className="pt-6 pb-8 sm:pt-10 sm:pb-12 text-left border-b border-[#E5DDD0]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9A3412] mb-3 font-sans font-semibold">
          <span>01 / História &amp; Fundamentos</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] text-[#1C1917] font-medium tracking-tight text-balance">
          Gestalt-terapia
        </h1>

        <p className="mt-4 text-lg sm:text-2xl leading-relaxed text-[#44403C] font-serif italic text-balance">
          Uma história construída no encontro
        </p>

        {/* Protagonist Historical Photograph */}
        <div className="mt-8">
          <HistoricalImage
            src="/images/fritz_perls.jpg"
            alt="Fotografia histórica protagonista de Fritz Perls em Berlim"
            caption="Dr. Friedrich Salomon Perls (1893–1970) em Berlim (c. 1923). Formado em neuropsiquiatria e psicanálise, Perls foi uma das forças catalisadoras do movimento gestáltico ao lado de Laura Perls e Paul Goodman."
            source="Arquivo Histórico / Wikimedia Commons (Domínio Público)"
            aspectRatio="portrait"
            priority
          />
        </div>

        {/* Narrative Drop-Cap Lead */}
        <div className="mt-6 text-sm sm:text-base leading-relaxed text-[#292524] space-y-4">
          <p className="drop-cap">
            A Gestalt-terapia nasceu de uma insatisfação profunda com os modelos deterministas que reduziam a experiência humana a conflitos passados ou a reações mecânicas a estímulos ambientais. No período do pós-guerra, entre a Europa devastada, a África do Sul e a efervescência cultural de Nova York, um grupo interdisciplinar de psicanalistas dissidentes, filósofos e psicólogos concebeu uma abordagem que colocou o contato, a presença e o corpo no centro da cura psicológica.
          </p>
          <p className="font-serif italic text-[#57534E] pl-4 border-l-2 border-[#9A3412]/50 text-sm sm:text-[15px]">
            “Não interpretamos o paciente a partir de hipóteses teóricas abstratas; olhamos para como o organismo se organiza aqui e agora para fazer ou evitar o contato com a realidade.”
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
            A gestação da Gestalt-terapia ocorreu nas décadas de <strong>1940 e 1950</strong>. Fritz e Laura Perls, ambos judeus alemães formados na tradição médica e psicanalítica de Berlim e Frankfurt, foram forçados ao exílio em 1933 pela ascensão do regime nazista. Estabeleceram-se inicialmente na África do Sul, onde fundaram o Instituto Sul-Africano de Psicanálise, e mudaram-se definitivamente para os Estados Unidos em 1946.
          </p>

          <p>
            Nesse percurso, formularam uma <strong>revisão crítica da psicanálise freudiana ortodoxa</strong>. Enquanto Freud privilegiava a reconstrução arqueológica do passado infantil por meio da associação livre e da interpretação no divã, os fundadores da Gestalt propuseram a investigação fenomenológica do presente: não o <em>porquê</em> intelectual distante, mas o <em>como</em> o sujeito bloqueia sua respiração, sua fala e sua percepção neste momento. A teoria das pulsões sexuais cedeu espaço para o instinto biológico da fome e a capacidade de mastigar, digerir e assimilar a realidade de maneira ativa.
          </p>
        </div>

        {/* 5 Matrizes de Influência */}
        <div className="mt-8">
          <h3 className="text-xs uppercase tracking-widest text-[#78350F] font-sans font-semibold mb-4">
            As Cinco Raízes Teóricas Fundamentais:
          </h3>

          <div className="space-y-6">
            {GESTALT_INFLUENCES.map((inf, idx) => (
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
                  Interlocução: {inf.thinker}
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

            {/* Existencialismo e Fenomenologia Note */}
            <div className="p-4 sm:p-5 bg-[#FAF7F2] border border-[#E5DDD0] shadow-xs">
              <div className="flex items-baseline justify-between mb-1.5">
                <span className="font-serif text-xs font-semibold text-[#9A3412]">05</span>
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#78716C]">
                  Matriz Filosófica
                </span>
              </div>
              <h4 className="font-serif text-lg sm:text-xl font-medium text-[#1C1917]">
                Fenomenologia e Existencialismo Dialógico
              </h4>
              <p className="text-xs text-[#78350F] font-sans font-medium mb-2">
                Interlocução: Edmund Husserl, Maurice Merleau-Ponty e Martin Buber
              </p>
              <p className="text-xs sm:text-[13px] leading-relaxed text-[#44403C]">
                Da fenomenologia herdou o método de suspender juízos prévios para acolher a experiência direta como ela se manifesta aos sentidos. Do existencialismo incorporou o conceito da relação dialógica <em>Eu-Tu</em> (Martin Buber), em que o terapeuta não é uma tela em branco neutra, mas uma pessoa autêntica que participa de um encontro humano genuíno e co-responsável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUEM CONSTRUIU ESSA HISTÓRIA */}
      <section className="py-10 border-b border-[#E5DDD0]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-2 font-sans">
          <Users className="w-3.5 h-3.5 text-[#9A3412]" />
          <span>Co-Criação &amp; Autoria Coletiva</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917]">
          Quem construiu essa história
        </h2>

        {/* Critical Historiographical Clarification */}
        <div className="my-5 p-4 bg-[#F5EFE6] border-l-2 border-[#9A3412]">
          <p className="font-serif text-xs sm:text-sm text-[#1C1917] leading-relaxed">
            <strong className="font-semibold text-[#9A3412]">Precisão Histórica:</strong> A Gestalt-terapia <em>não foi obra solitária de Fritz Perls</em>. Trata-se de uma criação colaborativa e multifacetada, resultado direto da fusão entre a clínica intuitiva de Fritz, a formação acadêmica em Psicologia da Gestalt e expressão corporal de Laura Perls, a densidade teórica e política de Paul Goodman, e as experiências empíricas conduzidas por Ralph Hefferline na Universidade de Columbia.
          </p>
        </div>

        {/* Individual Founder Blocks */}
        <div className="space-y-8 mt-6">
          {GESTALT_FOUNDERS.map((founder) => (
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

          {/* Ralph Hefferline and the New York Core Group Block */}
          <div className="p-5 sm:p-6 bg-[#FAF7F2] border border-[#E5DDD0] shadow-xs">
            <div className="flex items-baseline justify-between border-b border-[#E5DDD0] pb-2 mb-3">
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1C1917]">
                Ralph Hefferline (1910–1993)
              </h3>
              <span className="font-serif text-xs sm:text-sm text-[#78350F] font-semibold">
                Universidade de Columbia
              </span>
            </div>

            <p className="text-xs uppercase tracking-wider text-[#9A3412] font-sans font-medium mb-3">
              Professor de Psicologia e Pesquisador Universitário
            </p>

            <p className="text-xs sm:text-[13px] leading-relaxed text-[#292524] mb-3">
              Hefferline foi coautor do livro fundador de 1951 e o responsável pela elaboração prática do <strong>Volume I: Exercícios de Auto-conhecimento e Awareness</strong>. Como docente do Departamento de Psicologia da Universidade de Columbia em Nova York, ministrou seminários experimentais onde centenas de estudantes de graduação testavam no próprio cotidiano os exercícios perceptivos e relatavam os resultados phenomenológicos que integraram o manuscrito original.
            </p>

            <div className="pt-3 border-t border-[#E5DDD0]/70 text-xs text-[#57534E] font-serif italic">
              O núcleo inicial também contou com o chamado <em>Grupo dos Sete</em> no Upper West Side: Isadore From (responsável pela transmissão clínica nos anos 60 e 70), Paul Weisz, Sylvester Eastman, Elliot Shapiro e Leo Furst.
            </div>
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
          Toque em qualquer ano para abrir os documentos, capas e registros de cada marco.
        </p>

        <InteractiveTimeline milestones={GESTALT_TIMELINE} />
      </section>

      {/* 5. O QUE ESSA HISTÓRIA DEIXOU */}
      <section className="py-10 border-b border-[#E5DDD0]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-2 font-sans">
          <Sparkles className="w-3.5 h-3.5 text-[#9A3412]" />
          <span>Legado Conceitual</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917] mb-2">
          O que essa história deixou
        </h2>
        <p className="text-xs sm:text-sm text-[#57534E] font-serif italic mb-6">
          Cinco pilares essenciais para a compreensão da clínica gestáltica contemporânea.
        </p>

        {/* Concept Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
          {GESTALT_CONCEPTS.map((c) => {
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
        {GESTALT_CONCEPTS.filter((c) => c.id === activeConceptId).map((c) => (
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

        {/* Minimalist Perceptual Diagram: Figura-Fundo */}
        <div className="mt-8 p-5 bg-[#F5EFE6] border border-[#E5DDD0] text-center">
          <p className="text-xs uppercase tracking-widest font-sans text-[#78716C] mb-2">
            Princípio Perceptivo Transposto à Clínica
          </p>
          <h4 className="font-serif text-lg font-medium text-[#1C1917] mb-2">
            A Dinâmica de Figura e Fundo
          </h4>
          <p className="text-xs sm:text-[13px] text-[#44403C] leading-relaxed max-w-lg mx-auto">
            Assim como a percepção visual organiza espontaneamente uma forma nítida (figura) destacando-se de um plano difuso (fundo), no organismo saudável a necessidade mais urgente ganha primeiro plano (uma sede física, uma saudade, uma raiva). Quando satisfeita através do contato pleno, a figura recua ao fundo, abrindo espaço para a próxima necessidade emergir. Quando o ciclo é interrompido, resta a <em>situação inacabada</em>.
          </p>
        </div>
      </section>

      {/* 6. GESTALT HOJE */}
      <section className="py-10 border-b border-[#E5DDD0]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-2 font-sans">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#9A3412]" />
          <span>A Contemporaneidade</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917] mb-4">
          Gestalt hoje: além dos estereótipos
        </h2>

        <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-[#292524]">
          <p>
            Ao longo das décadas de 1960 e 1970, a popularização midiática dos workshops de Fritz Perls no Instituto Esalen (Califórnia) propagou uma imagem frequentemente distorcida da Gestalt-terapia: a de uma abordagem agressiva, baseada em catarse dramática, técnicas teatrais isoladas (como a famosa "cadeira vazia") e aforismos simplistas de desapego.
          </p>

          <p>
            No entanto, a <strong>Gestalt-terapia contemporânea</strong> continuou seu desenvolvimento teórico e clínico com enorme rigor. A abordagem não se reduz ao trabalho inicial e performático de Fritz Perls. Através do trabalho continuado de Laura Perls no Instituto de Nova York, de Erving e Miriam Polster em Cleveland, e de autores contemporâneos como Gary Yontef, Lynne Jacobs, Jean-Marie Robine e Margherita Spagnuolo Lobb, consolidou-se a <strong>Gestalt Relacional</strong>.
          </p>

          <p>
            Hoje, a Gestalt é reconhecida internacionalmente como uma psicoterapia dialógica sutil, rigorosamente alinhada à teoria de campo, focada na ética do cuidado mútuo, na coconstrução do vínculo terapêutico, na vulnerabilidade compartilhada e no respeito às singularidades socioculturais do sujeito.
          </p>
        </div>
      </section>

      {/* 7. REFERÊNCIAS BIBLIOGRÁFICAS */}
      <section className="py-10 border-b border-[#E5DDD0]" aria-labelledby="referencias-titulo">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-2 font-sans">
          <BookOpen className="w-3.5 h-3.5 text-[#9A3412]" />
          <span>Fontes Acadêmicas &amp; Documentais</span>
        </div>

        <h2 id="referencias-titulo" className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917] mb-6">
          Referências
        </h2>

        <div className="space-y-4">
          {GESTALT_REFERENCES.map((ref) => (
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
