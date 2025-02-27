import { DishSpecs } from '../../../../api/dish/[id]/dish.types';

export interface SpecProps {
  specs: DishSpecs[];
  prepTime: string | null;
}
