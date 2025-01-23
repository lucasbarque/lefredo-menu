import { Dispatch, SetStateAction } from 'react';

import { DishDetails, DishExtras } from '@/app/dish/[dishId]/types';

export interface AdditionalsListProps {
  currentPriceValue: number;
  dishExtras: DishExtras[];
  changeDish: Dispatch<SetStateAction<DishDetails>>;
}
