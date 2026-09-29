import React, { useState } from 'react';
import { TimelineMilestone } from '../types';
import { HistoricalImage } from './HistoricalImage';
import { ChevronDown, Calendar, Quote } from 'lucide-react';

interface InteractiveTimelineProps {
  milestones: TimelineMilestone[];
}

export const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({ milestones }) => {
  const [activeId, setActiveId] = useState<string>(milestones[1]?.id || milestones[0]?.id);

  return (
    <div className="my-8">
      {/* Mobile Touch Selector Tabs */}
      <div
        className="flex items-center gap-1.5 p-1 bg-[#F3ECE1] border border-[#E5DDD0] overflow-x-auto no-scrollbar scroll-smooth"
        role="tablist"
        aria-label="Marcos cronológicos da Gestalt-terapia"
      >
        {milestones.map((m) => {
          const isActive = m.id === activeId;
          return (
            <button
              key={m.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(m.id)}
              className={`flex-1 min-w-[76px] py-2.5 px-3 text-center transition-all duration-200 cursor-pointer min-h-[44px] flex flex-col items-center justify-center ${
                isActive
                  ? 'bg-[#FAF7F2] text-[#1C1917] shadow-xs font-semibold border-b-2 border-[#9A3412]'
                  : 'text-[#57534E] hover:text-[#1C1917] hover:bg-[#FAF7F2]/50'
              }`}
            >
              <span className="font-serif text-sm sm:text-base leading-none">
                {m.year}
              </span>
              <span className="text-[10px] uppercase tracking-wider font-sans text-[#78716C] mt-0.5 truncate max-w-[80px]">
                {m.id === 'depois' ? 'Expansão' : m.title.split(' ')[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Milestone Card */}
      {milestones
        .filter((m) => m.id === activeId)
        .map((m) => (
          <article
            key={m.id}
            className="mt-4 p-5 sm:p-7 bg-[#FAF7F2] border border-[#E5DDD0] shadow-xs transition-opacity duration-300"
          >
            <div className="flex items-baseline justify-between border-b border-[#E5DDD0] pb-3 mb-4">
              <span className="font-serif text-2xl sm:text-3xl font-medium text-[#9A3412]">
                {m.year}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#78716C] font-sans flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Marco Histórico</span>
              </span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1C1917] leading-tight">
              {m.title}
            </h3>

            <p className="text-sm sm:text-base text-[#57534E] font-serif italic mt-1 mb-4">
              {m.subtitle}
            </p>

            <p className="text-xs sm:text-sm uppercase tracking-wider text-[#78350F] font-sans font-medium mb-3">
              {m.shortSummary}
            </p>

            <p className="text-sm sm:text-[15px] leading-relaxed text-[#292524] mb-4">
              {m.detailedText}
            </p>

            {/* Historical Image / Document for this milestone if available */}
            {m.imageSrc && m.imageCaption && (
              <div className="my-5 max-w-sm mx-auto">
                <HistoricalImage
                  src={m.imageSrc}
                  alt={m.imageAlt || m.title}
                  caption={m.imageCaption}
                  source={m.source}
                />
              </div>
            )}

            {/* Archival Quote */}
            {m.quote && (
              <div className="mt-4 p-4 bg-[#F5EFE6] border-l-2 border-[#9A3412] text-left">
                <Quote className="w-4 h-4 text-[#9A3412] mb-1.5 opacity-80" />
                <p className="font-serif italic text-xs sm:text-sm text-[#1C1917] leading-relaxed">
                  “{m.quote.text}”
                </p>
                <p className="text-[11px] font-sans uppercase tracking-widest text-[#78716C] mt-2">
                  — {m.quote.author}
                </p>
              </div>
            )}
          </article>
        ))}

      {/* Quick Interactive Timeline Accordion for Alternative Touch Browsing */}
      <div className="mt-4 pt-4 border-t border-[#E5DDD0]/70">
        <p className="text-xs font-sans text-[#78716C] mb-2 uppercase tracking-wider">
          Toque para alternar diretamente:
        </p>
        <div className="space-y-1.5">
          {milestones.map((m) => {
            const isCurrent = m.id === activeId;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setActiveId(m.id)}
                className={`w-full text-left px-3.5 py-2.5 border text-xs flex items-center justify-between transition-colors min-h-[44px] cursor-pointer ${
                  isCurrent
                    ? 'border-[#9A3412] bg-[#F5EFE6] text-[#1C1917] font-medium'
                    : 'border-[#E5DDD0] bg-transparent text-[#57534E] hover:bg-[#F3ECE1]/60'
                }`}
              >
                <span className="font-serif text-sm font-medium mr-2 text-[#9A3412]">
                  {m.year}
                </span>
                <span className="truncate flex-1 font-sans">{m.title}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#78716C] transition-transform ${
                    isCurrent ? 'rotate-180 text-[#9A3412]' : ''
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
