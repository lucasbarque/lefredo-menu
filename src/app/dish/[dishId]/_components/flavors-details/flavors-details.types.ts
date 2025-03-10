import { Dispatch, SetStateAction } from 'react';

import { DishDTO, DishFlavorsDTO } from '@/http/api';

export interface FlavorsDetailsProps {
  dishFlavors: DishFlavorsDTO[];
  changeDish: Dispatch<SetStateAction<DishDTO>>;
  currentFlavorId: string;
  setCurrentFlavorId: Dispatch<SetStateAction<string>>;
}

export interface useFlavorsDetailsProps {
  dishFlavors: DishFlavorsDTO[];
  currentFlavorId: string;
  changeDish: Dispatch<SetStateAction<DishDTO>>;
}
