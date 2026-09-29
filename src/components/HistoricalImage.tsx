import React, { useState } from 'react';
import { Maximize2, X, Archive } from 'lucide-react';

interface HistoricalImageProps {
  src: string;
  alt: string;
  caption: string;
  source?: string;
  className?: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square' | 'auto';
  priority?: boolean;
}

export const HistoricalImage: React.FC<HistoricalImageProps> = ({
  src,
  alt,
  caption,
  source,
  className = '',
  aspectRatio = 'auto',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const aspectClass =
    aspectRatio === 'portrait'
      ? 'aspect-[3/4]'
      : aspectRatio === 'landscape'
      ? 'aspect-[4/3]'
      : aspectRatio === 'square'
      ? 'aspect-square'
      : '';

  return (
    <figure className={`my-6 group ${className}`}>
      <div className="relative overflow-hidden bg-[#F3ECE1] border border-[#E5DDD0] shadow-[0_2px_8px_rgba(28,25,23,0.04)]">
        {hasError ? (
          <div className="flex flex-col items-center justify-center p-8 text-center text-[#78716C] min-h-[220px]">
            <Archive className="w-8 h-8 mb-2 stroke-1 text-[#9A3412]" />
            <p className="text-xs uppercase tracking-wider font-medium text-[#1C1917]">
              Documento Histórico
            </p>
            <p className="text-xs mt-1 text-[#78716C] max-w-xs">{caption}</p>
          </div>
        ) : (
          <div className="relative">
            <img
              src={src}
              alt={alt}
              referrerPolicy="no-referrer"
              loading="lazy"
              onError={() => setHasError(true)}
              onClick={() => setIsOpen(true)}
              className={`w-full object-cover cursor-zoom-in transition-transform duration-500 group-hover:scale-[1.01] ${aspectClass}`}
            />
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Ampliar fotografia histórica"
              className="absolute bottom-2 right-2 p-2 bg-[#FAF7F2]/90 backdrop-blur-xs text-[#1C1917] border border-[#E5DDD0] opacity-80 hover:opacity-100 transition-opacity min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <figcaption className="mt-2.5 px-0.5 text-left">
        <p className="text-xs sm:text-[13px] leading-relaxed text-[#44403C] font-serif italic">
          {caption}
        </p>
        {source && (
          <p className="text-[11px] uppercase tracking-wider text-[#78716C] mt-1 font-sans">
            Fonte: <span className="text-[#1C1917]">{source}</span>
          </p>
        )}
      </figcaption>

      {/* Lightbox Modal for mobile student inspection */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#1C1917]/95 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-6"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex justify-between items-center text-[#FAF7F2] pb-3 border-b border-[#FAF7F2]/20">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-[#FAF7F2]/70 font-sans">
                Arquivo Histórico
              </span>
              <span className="text-[#FAF7F2]/40" aria-hidden="true">·</span>
              <span className="text-xs text-[#FAF7F2]/90 font-serif truncate max-w-[200px] sm:max-w-md">
                {alt}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center text-[#FAF7F2] hover:text-white transition-colors cursor-pointer"
              aria-label="Fechar ampliação"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center my-4 overflow-hidden">
            <img
              src={src}
              alt={alt}
              className="max-h-[75vh] max-w-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div className="pt-3 border-t border-[#FAF7F2]/20 text-[#FAF7F2]/90 max-w-2xl mx-auto text-center" onClick={(e) => e.stopPropagation()}>
            <p className="text-xs sm:text-sm font-serif italic">{caption}</p>
            {source && (
              <p className="text-[11px] tracking-wider uppercase text-[#FAF7F2]/60 mt-1 font-sans">
                {source}
              </p>
            )}
          </div>
        </div>
      )}
    </figure>
  );
};
