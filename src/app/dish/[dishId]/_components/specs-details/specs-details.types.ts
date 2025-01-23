import { DishSpecs } from '@/app/api/dish/[id]/dish.types';

export interface SpecProps {
  specs: DishSpecs[];
  prepTime: number | null;
}
