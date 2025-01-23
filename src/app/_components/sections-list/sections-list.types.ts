import { SectionProps } from '@/app/api/sections/sections.types';

export interface SectionsListProps {
  sections: SectionProps[];
  currentSection: string;
}

export interface useSectionsListProps {
  currentSection: string;
}
