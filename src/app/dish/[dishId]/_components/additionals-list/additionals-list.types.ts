import { Dispatch, SetStateAction } from 'react';

import { DishDetails, DishExtras } from '@/app/api/dish/[id]/dish.types';

export interface AdditionalsListProps {
  currentPriceValue: number;
  dishExtras: DishExtras[];
  changeDish: Dispatch<SetStateAction<DishDetails>>;
}
