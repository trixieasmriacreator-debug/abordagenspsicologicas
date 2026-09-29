import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { APPROACHES } from '../data/approaches';
import { ApproachId } from '../types';

interface HomeViewProps {
  onSelectApproach: (id: ApproachId) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSelectApproach }) => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-6 pb-16">
      {/* Editorial Header Block */}
      <section className="pt-4 pb-8 sm:pt-8 sm:pb-12 text-left border-b border-[#E5DDD0]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-4 font-sans">
          <span>Psicologia &amp; Teoria Clínica</span>
          <span aria-hidden="true">·</span>
          <span>Catálogo Digital</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.25rem] leading-[1.12] text-[#1C1917] font-medium tracking-tight text-balance">
          Abordagens Psicológicas
        </h1>

        <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed text-[#44403C] font-serif italic text-balance">
          Quatro perspectivas, diferentes formas de compreender a experiência humana.
        </p>

        <div className="mt-6 pt-5 border-t border-[#E5DDD0]/70 flex items-center justify-between">
          <p className="text-xs sm:text-sm font-sans tracking-wide text-[#78350F] flex items-center gap-1.5 font-medium">
            <Compass className="w-4 h-4 text-[#9A3412]" />
            <span>Toque em uma abordagem para explorar</span>
          </p>
          <span className="text-[11px] font-sans uppercase tracking-widest text-[#78716C]">
            4 Capítulos
          </span>
        </div>
      </section>

      {/* The Four Large Clickable Approaches */}
      <section className="mt-6 space-y-4" aria-label="Lista de Abordagens Psicológicas">
        {APPROACHES.map((appr) => {
          const isFeatured = appr.id === 'gestalt';

          return (
            <button
              key={appr.id}
              type="button"
              onClick={() => onSelectApproach(appr.id)}
              className={`w-full text-left p-5 sm:p-6 transition-all duration-200 border cursor-pointer group active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A3412] ${
                isFeatured
                  ? 'bg-[#F5EFE6] border-[#D6C7B2] shadow-sm hover:border-[#9A3412]/50'
                  : 'bg-[#FAF7F2] border-[#E5DDD0] hover:bg-[#F7F2E9] hover:border-[#D6C7B2]'
              }`}
            >
              <div className="flex items-baseline justify-between mb-2">
                <span className="font-serif text-xs sm:text-sm tracking-widest text-[#9A3412] font-semibold">
                  {appr.number}
                </span>
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#78716C]">
                  {appr.period}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#1C1917] group-hover:text-[#9A3412] transition-colors">
                    {appr.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#57534E] font-serif italic mt-1 leading-snug">
                    {appr.subtitle}
                  </p>
                </div>
                <div className="shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center text-[#78716C] group-hover:text-[#9A3412] transition-colors">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-[#44403C] line-clamp-2">
                {appr.description}
              </p>

              <div className="mt-3.5 pt-3 border-t border-[#E5DDD0]/60 flex items-center justify-between text-[11px] text-[#78716C] font-sans">
                <span className="truncate max-w-[200px] sm:max-w-none">
                  Figuras-chave: {appr.keyFigures.join(', ')}
                </span>
                <span className="text-[#9A3412] font-medium tracking-wide group-hover:translate-x-0.5 transition-transform">
                  Explorar Capítulo →
                </span>
              </div>
            </button>
          );
        })}
      </section>

      {/* Exhibition Colophon / Academic Note */}
      <footer className="mt-12 pt-8 border-t border-[#E5DDD0] text-center text-xs text-[#78716C] space-y-3">
        <p className="font-serif italic text-sm text-[#44403C]">
          Trabalho Acadêmico Universitário • Curso de Psicologia
        </p>

        <div className="pt-2 pb-1 max-w-md mx-auto">
          <p className="text-[11px] uppercase tracking-widest text-[#78350F] font-sans font-medium mb-1.5">
            Acadêmicas:
          </p>
          <p className="text-xs sm:text-[13px] leading-relaxed text-[#292524] font-sans">
            <span className="inline-block">Ana Carolina Hansen</span>
            <span className="mx-1.5 text-[#A8A29E]" aria-hidden="true">·</span>
            <span className="inline-block">Aurora Rosa</span>
            <span className="mx-1.5 text-[#A8A29E]" aria-hidden="true">·</span>
            <span className="inline-block">Carolina Beppler</span>
            <span className="mx-1.5 text-[#A8A29E]" aria-hidden="true">·</span>
            <span className="inline-block">Gabriele Parizotto</span>
            <span className="mx-1.5 text-[#A8A29E]" aria-hidden="true">·</span>
            <span className="inline-block">Franciane Brum</span>
          </p>
        </div>

        <p className="text-[10px] tracking-widest uppercase text-[#A8A29E] pt-1">
          Edição Acadêmica • 2026
        </p>
      </footer>
    </div>
  );
};
