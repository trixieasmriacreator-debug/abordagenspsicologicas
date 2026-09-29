import React from 'react';
import { ArrowLeft, Clock, FileText, Sparkles } from 'lucide-react';
import { ApproachMeta } from '../types';

interface ApproachPlaceholderViewProps {
  approach: ApproachMeta;
  onBackToHome: () => void;
}

export const ApproachPlaceholderView: React.FC<ApproachPlaceholderViewProps> = ({
  approach,
  onBackToHome,
}) => {
  return (
    <article className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-4 pb-20">
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between pb-4 border-b border-[#E5DDD0] text-xs font-sans text-[#78716C]">
        <button
          type="button"
          onClick={onBackToHome}
          className="flex items-center gap-1.5 text-[#78350F] hover:text-[#9A3412] font-medium transition-colors cursor-pointer py-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Voltar às abordagens</span>
        </button>
        <span className="uppercase tracking-widest text-[11px]">
          Capítulo {approach.number}
        </span>
      </div>

      {/* Opening Header */}
      <header className="pt-6 pb-8 sm:pt-10 sm:pb-12 text-left border-b border-[#E5DDD0]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78350F] mb-3 font-sans font-semibold">
          <span>{approach.number} / Estrutura em Preparação Curatorial</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl leading-[1.12] text-[#1C1917] font-medium tracking-tight text-balance">
          {approach.title}
        </h1>

        <p className="mt-4 text-lg sm:text-xl leading-relaxed text-[#44403C] font-serif italic text-balance">
          {approach.subtitle}
        </p>

        <p className="mt-4 text-xs sm:text-sm text-[#78716C] font-sans">
          Período histórico central: <span className="text-[#1C1917] font-medium">{approach.period}</span>
        </p>
      </header>

      {/* Curatorial Notice & Prepared Sections Grid */}
      <section className="py-8 space-y-6">
        <div className="p-5 bg-[#F5EFE6] border border-[#D6C7B2] text-left">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#9A3412] font-sans font-semibold mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Nota de Curadoria Universitária</span>
          </div>
          <p className="text-xs sm:text-[13px] leading-relaxed text-[#292524]">
            A estrutura expositiva para <strong>{approach.title}</strong> está formalmente delineada conforme os requisitos do plano de estudos universitário. O levantamento de documentos primários, fotografias históricas autenticadas e compilação das fontes bibliográficas originais seguirá o mesmo rigor editorial do capítulo 01 (Gestalt-terapia).
          </p>
        </div>

        {/* Prepared Layout Structure */}
        <div className="space-y-4">
          <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#1C1917]">
            Estrutura planejada do capítulo
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <div className="p-4 bg-[#FAF7F2] border border-[#E5DDD0]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#9A3412] uppercase tracking-wider mb-1">
                <FileText className="w-3.5 h-3.5" />
                <span>1. Gênese Histórica</span>
              </div>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Contextualização do surgimento, ruptura epistemológica e principais matrizes filosóficas e científicas.
              </p>
            </div>

            <div className="p-4 bg-[#FAF7F2] border border-[#E5DDD0]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#9A3412] uppercase tracking-wider mb-1">
                <FileText className="w-3.5 h-3.5" />
                <span>2. Pioneiros e Autores</span>
              </div>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Fotografias de época e dados biográficos dos autores centrais:{' '}
                <span className="text-[#1C1917] font-medium">{approach.keyFigures.join(', ')}</span>.
              </p>
            </div>

            <div className="p-4 bg-[#FAF7F2] border border-[#E5DDD0]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#9A3412] uppercase tracking-wider mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>3. Cronologia Documental</span>
              </div>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Linha do tempo interativa com publicações originais, congressos fundadores e artigos canônicos.
              </p>
            </div>

            <div className="p-4 bg-[#FAF7F2] border border-[#E5DDD0]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#9A3412] uppercase tracking-wider mb-1">
                <FileText className="w-3.5 h-3.5" />
                <span>4. Legado &amp; Atualidade</span>
              </div>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Conceitos fundamentais da abordagem e seu desenvolvimento clínico na contemporaneidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mandatory Return Button */}
      <nav className="pt-8 pb-4 text-center border-t border-[#E5DDD0]" aria-label="Navegação de retorno">
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
