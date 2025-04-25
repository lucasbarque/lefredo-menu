import { DishSpecsDTO } from '@/http/api';

export interface SpecProps {
  specs: DishSpecsDTO[];
  prepTime: string | null;
}
