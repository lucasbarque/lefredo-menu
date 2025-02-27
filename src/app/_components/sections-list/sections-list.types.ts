import { GetSectionsDTO } from '@/http/api';

export interface SectionsListProps {
  sections: GetSectionsDTO[];
  restaurant: string;
  currentSection: string;
}

export interface useSectionsListProps {
  currentSection: string;
}
