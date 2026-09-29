export type ApproachId = 'gestalt' | 'tcc' | 'sistemica' | 'psicoterapia-breve';

export interface ApproachMeta {
  id: ApproachId;
  number: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  period: string;
  keyFigures: string[];
  status: 'completo' | 'preparacao';
  description: string;
}

export interface HistoricalFigure {
  name: string;
  dates: string;
  role: string;
  contribution: string;
  imageSrc: string;
  imageAlt: string;
  caption: string;
  source: string;
}

export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  shortSummary: string;
  detailedText: string;
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
  source?: string;
  quote?: {
    text: string;
    author: string;
  };
}

export interface CoreConcept {
  id: string;
  term: string;
  translation?: string;
  essence: string;
  elaboration: string;
}

export interface ReferenceItem {
  id: string;
  citation: string;
  note?: string;
}
