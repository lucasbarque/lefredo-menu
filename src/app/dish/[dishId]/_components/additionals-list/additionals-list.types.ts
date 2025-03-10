import { Dispatch, SetStateAction } from 'react';

import { DishExtraDTO } from '@/http/api';

export interface AdditionalsListProps {
  dishPrice: number;
  dishExtras: DishExtraDTO[];
  setPrice: Dispatch<SetStateAction<number>>;
}

export type UseAdditionalsListProps = AdditionalsListProps;
