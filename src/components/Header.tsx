import React from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { ApproachId } from '../types';

interface HeaderProps {
  currentView: 'home' | ApproachId;
  onNavigateHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigateHome }) => {
  const isHome = currentView === 'home';

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E5DDD0] transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark / brand */}
        <div className="flex items-center gap-3">
          {!isHome && (
            <button
              type="button"
              onClick={onNavigateHome}
              className="min-h-[44px] min-w-[44px] -ml-2 flex items-center justify-center text-[#1C1917] hover:text-[#9A3412] transition-colors cursor-pointer"
              aria-label="Voltar para a página inicial de abordagens"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onNavigateHome}
            className="text-left font-serif text-base sm:text-lg font-medium text-[#1C1917] hover:text-[#9A3412] transition-colors cursor-pointer flex items-center gap-2"
          >
            <span>Abordagens Psicológicas</span>
          </button>
        </div>

        {/* Zone 2 & 3: Clean metadata status / utility */}
        <div className="flex items-center gap-2 text-xs font-sans text-[#78716C]">
          <span className="hidden sm:inline">Exposição Universitária</span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span className="flex items-center gap-1.5 font-medium text-[#1C1917]">
            <BookOpen className="w-3.5 h-3.5 text-[#9A3412]" />
            <span>Catálogo Histórico</span>
          </span>
        </div>
      </div>
    </header>
  );
};
