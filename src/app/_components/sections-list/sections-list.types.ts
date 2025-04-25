import { SectionDTO } from '@/http/api';

export interface SectionsListProps {
  sections: SectionDTO[];
  restaurant: string;
  currentSection: string;
}

export interface useSectionsListProps {
  currentSection: string;
}
