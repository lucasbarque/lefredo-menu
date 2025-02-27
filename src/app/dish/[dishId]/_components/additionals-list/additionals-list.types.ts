import { Dispatch, SetStateAction } from 'react';

import { DishExtras } from '../../../../api/dish/[id]/dish.types';

export interface AdditionalsListProps {
  dishPrice: number;
  dishExtras: DishExtras[];
  setPrice: Dispatch<SetStateAction<number>>;
}

export type UseAdditionalsListProps = AdditionalsListProps;
