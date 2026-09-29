import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Clock, Users, Sparkles, Compass, CheckCircle2, AlertCircle } from 'lucide-react';
import {
  FOCAL_FOUNDERS,
  FOCAL_INFLUENCES,
  FOCAL_TIMELINE,
  FOCAL_CONCEPTS,
  FOCAL_REFERENCES,
} from '../data/approaches';
import { HistoricalImage } from './HistoricalImage';
import { InteractiveTimeline } from './InteractiveTimeline';

interface FocalViewProps {
  onBackToHome: () => void;
}

export const FocalView: React.FC<FocalViewProps> = ({ onBackToHome }) => {
  const [activeConceptId, setActiveConceptId] = useState<string>('delimitacao-foco');

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
        <span className="uppercase tracking-widest text-[11px]">Capítulo 04</span>
      </div>

      {/* 1. ABERTURA */}
      <header className="pt-6 pb-8 sm:pt-10 sm:pb-12 text-left border-b border-[#E5DDD0]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9A3412] mb-3 font-sans font-semibold">
          <span>04 / Tradição Psicodinâmica Focal</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] text-[#1C1917] font-medium tracking-tight text-balance">
          Psicoterapia Breve Focal
        </h1>

        <p className="mt-4 text-lg sm:text-2xl leading-relaxed text-[#44403C] font-serif italic text-balance">
          Tempo delimitado, foco definido e uma história de reformulação da psicoterapia
        </p>

        {/* Essential Clarification Banner: Distinção epistemológica */}
        <div className="mt-6 p-4 bg-[#F5EFE6] border-l-2 border-[#9A3412] text-left">
          <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#9A3412] font-sans font-semibold mb-1">
            <AlertCircle className="w-4 h-4" />
            <span>Distinção Histórica Essencial</span>
          </div>
          <p className="text-xs sm:text-[13px] leading-relaxed text-[#292524]">
            A <strong>Psicoterapia Breve Focal</strong> abordada neste capítulo é a linhagem histórica de base psicodinâmica (desenvolvida a partir de Franz Alexander, Michael Balint, David Malan e Peter Sifneos). <em>Não deve ser confundida</em> com a Terapia Breve Focada em Soluções (SFBT de Steve de Shazer e Insoo Kim Berg), nem com técnicas superficiais de urgência. Trata-se de uma tradição densa que combinou a teoria do conflito psíquico com a delimitação técnica de tempo e foco.
          </p>
        </div>

        {/* Protagonist Historical Photograph: Tavistock Clinic */}
        <div className="mt-8">
          <HistoricalImage
            src="/images/tavistock_institute.jpg"
            alt="Fachada histórica da Tavistock Clinic em Londres"
            caption="Instalações históricas da Tavistock Clinic / Institute em Londres. Foi nesta instituição pública britânica que Michael Balint e David Malan conduziram seus seminários e pesquisas empíricas pioneiras sobre a psicoterapia breve focal."
            source="Arquivo Histórico de Londres / Wikimedia Commons"
            aspectRatio="landscape"
            priority
          />
        </div>

        {/* Narrative Drop-Cap Lead */}
        <div className="mt-6 text-sm sm:text-base leading-relaxed text-[#292524] space-y-4">
          <p className="drop-cap">
            Ao longo de quase todo o século XX, vigorou na cultura médica e psicanalítica o dogma de que uma psicoterapia profunda e transformadora exigia anos a fio de sessões quase diárias no divã. A Psicoterapia Breve Focal nasceu como uma ousada ruptura com essa inércia institucional. Pioneiros em Chicago, Londres, Boston e Montreal demonstraram que a eficácia clínica não depende da duração cronológica interminável, mas da precisão com que terapeuta e paciente circunscrevem um núcleo conflitual específico e concentram nele toda a energia curativa da relação humana.
          </p>
          <p className="font-serif italic text-[#57534E] pl-4 border-l-2 border-[#9A3412]/50 text-sm sm:text-[15px]">
            “Delimitar um foco não é renunciar à profundidade da mente humana; é escolher deliberadamente o ponto de alavanca onde a experiência emocional pode reparar a dor e destravar o desenvolvimento vital.”
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
          Como surgiu a tradição breve focal
        </h2>

        <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-[#292524]">
          <p>
            Curiosamente, as raízes históricas dos tratamentos breves remontam ao próprio <strong>Sigmund Freud</strong> no final do século XIX e início do século XX. Seus atendimentos inaugurais — como o caso de Katharina (conduzido durante uma caminhada nos Alpes austríacos) ou a intervenção com o maestro Bruno Walter (que sofria de uma paralisia psicogênica no braço e foi tratado em apenas seis sessões) — eram intervenções breves, ativas e profundamente focalizadas.
          </p>

          <p>
            Contudo, conforme a psicanálise se institucionalizou nas décadas de 1920 a 1940, o enquadre tornou-se cada vez mais ritualizado, lento e inacessível para a maioria da população trabalhadora. O ponto de virada formal ocorreu em <strong>1946</strong>, quando <strong>Franz Alexander</strong> e <strong>Thomas French</strong> publicaram o livro <em>Psychoanalytic Therapy: Principles and Application</em> no Instituto de Psicanálise de Chicago.
          </p>

          <p>
            Alexander e French demonstraram que o prolongamento indefinido da análise muitas vezes gerava dependência regressiva infantil em vez de autonomia. Introduziram o conceito clássico de <strong>Experiência Emocional Corretiva</strong>: o fator decisivo da cura é a experiência relacional viva no presente — na qual o paciente re-vivencia um conflito traumático, mas encontra no terapeuta uma resposta compreensiva e diferente das reações desastrosas de seus pais no passado.
          </p>

          <p>
            Nas décadas de 1950 a 1970, o movimento expandiu-se com modelos distintos e complementares: na Tavistock Clinic de Londres com <strong>Michael Balint</strong> e <strong>David Malan</strong>; na Harvard Medical School com <strong>Peter Sifneos</strong>; na Universidade McGill com <strong>Habib Davanloo</strong>; e na América Latina com <strong>Hector Fiorini</strong>.
          </p>
        </div>

        {/* Influences Cards */}
        <div className="mt-8">
          <h3 className="text-xs uppercase tracking-widest text-[#78350F] font-sans font-semibold mb-4">
            Matrizes Históricas e Institucionais:
          </h3>

          <div className="space-y-6">
            {FOCAL_INFLUENCES.map((inf, idx) => (
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

      {/* 3. PESSOAS E DESENVOLVIMENTOS */}
      <section className="py-10 border-b border-[#E5DDD0]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-2 font-sans">
          <Users className="w-3.5 h-3.5 text-[#9A3412]" />
          <span>Pioneiros &amp; Modelos Focais</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917]">
          Pessoas que construíram a psicoterapia focal
        </h2>

        {/* Historiographical Clarification */}
        <div className="my-5 p-4 bg-[#F5EFE6] border-l-2 border-[#9A3412]">
          <p className="font-serif text-xs sm:text-sm text-[#1C1917] leading-relaxed">
            <strong className="font-semibold text-[#9A3412]">Modelos Distintos:</strong> Não existe uma fórmula única de psicoterapia breve focal. Os autores desenvolveram estilos clínicos com intensidades variadas: Alexander enfatizou a experiência relacional corretiva; Malan formalizou a interpretação dinâmica sistemática dos dois triângulos; Sifneos criou um modelo voltado à ansiedade e conflitos edípicos (STAPP); e Davanloo desenvolveu um método intensivo de confronto rápido das defesas (ISTDP).
          </p>
        </div>

        {/* Individual Founder Blocks */}
        <div className="space-y-8 mt-6">
          {FOCAL_FOUNDERS.map((founder) => (
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

          {/* Latin America: Hector Fiorini Block */}
          <div className="p-5 sm:p-6 bg-[#FAF7F2] border border-[#E5DDD0] shadow-xs">
            <div className="flex items-baseline justify-between border-b border-[#E5DDD0] pb-2 mb-3">
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1C1917]">
                Hector Fiorini (1931–presente)
              </h3>
              <span className="font-serif text-xs sm:text-sm text-[#78350F] font-semibold">
                Universidade de Buenos Aires
              </span>
            </div>

            <p className="text-xs uppercase tracking-wider text-[#9A3412] font-sans font-medium mb-3">
              Pioneiro Latino-Americano da Psicoterapia Focal
            </p>

            <p className="text-xs sm:text-[13px] leading-relaxed text-[#292524]">
              Autor do clássico <em>Teoria e Técnica de Psicoterapias</em> (1976), Fiorini formulou uma das mais influentes sistematizações metodológicas para a saúde pública da América Latina. Definiu o <strong>foco terapêutico</strong> como um ponto de confluência onde se articulam a queixa explícita do paciente, o conflito dinâmico subjacente e as situações desencadeantes da realidade atual, propondo uma clínica aberta e interdisciplinar.
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
          Linha do tempo e publicações históricas
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#57534E] font-serif italic">
          Toque em cada marco para abrir as capas das edições históricas e registros documentais.
        </p>

        <InteractiveTimeline milestones={FOCAL_TIMELINE} />
      </section>

      {/* 5. O QUE CARACTERIZA A TRADIÇÃO FOCAL */}
      <section className="py-10 border-b border-[#E5DDD0]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-2 font-sans">
          <Sparkles className="w-3.5 h-3.5 text-[#9A3412]" />
          <span>Metodologia &amp; Parâmetros Clínicos</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917] mb-2">
          O que caracteriza a tradição focal
        </h2>
        <p className="text-xs sm:text-sm text-[#57534E] font-serif italic mb-6">
          Fundamentos técnicos que diferenciam a psicoterapia breve focal de outros modelos clínicos.
        </p>

        {/* Concept Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
          {FOCAL_CONCEPTS.map((c) => {
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
        {FOCAL_CONCEPTS.filter((c) => c.id === activeConceptId).map((c) => (
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

        {/* The Two Triangles of Malan Visual Card */}
        <div className="mt-8 p-5 bg-[#F5EFE6] border border-[#E5DDD0] text-center">
          <p className="text-xs uppercase tracking-widest font-sans text-[#78716C] mb-2">
            Dispositivo Heurístico Canônico
          </p>
          <h4 className="font-serif text-lg font-medium text-[#1C1917] mb-2">
            Os Dois Triângulos de David Malan
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left pt-2 text-xs sm:text-[13px] text-[#44403C]">
            <div className="p-3 bg-[#FAF7F2] border border-[#E5DDD0]">
              <strong className="block font-serif text-sm text-[#9A3412] mb-1">
                1. Triângulo do Conflito (D-A-F)
              </strong>
              <span>
                <strong>Defesa:</strong> O bloqueio protetor superficial.<br />
                <strong>Ansiedade:</strong> A dor ou angústia mobilizada.<br />
                <strong>Sentimento Oculto:</strong> O afeto nuclear autêntico.
              </span>
            </div>
            <div className="p-3 bg-[#FAF7F2] border border-[#E5DDD0]">
              <strong className="block font-serif text-sm text-[#9A3412] mb-1">
                2. Triângulo das Pessoas (O-T-P)
              </strong>
              <span>
                <strong>Outro Atual (O):</strong> Relações atuais conflituosas.<br />
                <strong>Terapeuta (T):</strong> Sentimentos vividos na sessão.<br />
                <strong>Passado (P):</strong> Figuras parentais de origem.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOJE */}
      <section className="py-10 border-b border-[#E5DDD0]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-2 font-sans">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#9A3412]" />
          <span>A Contemporaneidade</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917] mb-4">
          A psicoterapia breve focal na clínica atual
        </h2>

        <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-[#292524]">
          <p>
            Na atualidade, a psicoterapia breve focal não é uma técnica obsoleta nem um mero recurso emergencial para quem não pode pagar por uma análise longa. Trata-se de uma modalidade autônoma de psicoterapia, respaldada por volumosa pesquisa empírica internacional.
          </p>

          <p>
            Pesquisadores contemporâneos como <strong>Falk Leichsenring</strong> (Alemanha), <strong>Jonathan Shedler</strong> (EUA) e <strong>Allan Abbass</strong> (Canadá) conduziram dezenas de meta-análises e ensaios clínicos randomizados comparando modelos dinâmicos breves a tratamentos farmacológicos e outras psicoterapias. Os dados demonstram que as psicoterapias focais não apenas alcançam taxas de remissão robustas em depressão, transtornos somatoformes e ansiedade, mas também promovem ganhos que continuam a se expandir nos anos seguintes ao término da terapia.
          </p>

          <p>
            No Brasil e na América Latina, a psicoterapia breve focal constitui uma das ferramentas mais vitais dos psicólogos em hospitais gerais, Centros de Atenção Psicossocial (CAPS), serviços-escola universitários e clínicas da família do SUS, demonstrando que a escuta atenta, deliberada e circunscrita é um direito ético e democrático de saúde mental.
          </p>
        </div>
      </section>

      {/* 7. REFERÊNCIAS */}
      <section className="py-10 border-b border-[#E5DDD0]" aria-labelledby="referencias-focal">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-2 font-sans">
          <BookOpen className="w-3.5 h-3.5 text-[#9A3412]" />
          <span>Fontes Acadêmicas &amp; Documentais</span>
        </div>

        <h2 id="referencias-focal" className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917] mb-6">
          Referências
        </h2>

        <div className="space-y-4">
          {FOCAL_REFERENCES.map((ref) => (
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
