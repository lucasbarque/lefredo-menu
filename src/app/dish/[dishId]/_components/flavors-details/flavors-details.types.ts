import { Dispatch, SetStateAction } from 'react';

import { DishDetails, DishFlavors } from '../../../../api/dish/[id]/dish.types';

export interface FlavorsDetailsProps {
  dishFlavors: DishFlavors[];
  changeDish: Dispatch<SetStateAction<DishDetails>>;
  currentFlavorId: string;
  setCurrentFlavorId: Dispatch<SetStateAction<string>>;
}

export interface useFlavorsDetailsProps {
  dishFlavors: DishFlavors[];
  currentFlavorId: string;
  changeDish: Dispatch<SetStateAction<DishDetails>>;
}
