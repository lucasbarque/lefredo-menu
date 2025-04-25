import { SectionDTO } from '@/http/api';

export interface SectionsListProps {
  sections: SectionDTO[];
  currentSection: string;
}

export interface useSectionsListProps {
  sections: SectionDTO[];
}
