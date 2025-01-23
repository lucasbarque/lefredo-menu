import { useEffect } from 'react';

import { useFlavorsDetailsProps } from './flavors-details.types';

export function useFlavorsDetails({
  dishFlavors,
  currentFlavorId,
  changeDish,
}: useFlavorsDetailsProps) {
  useEffect(() => {
    const flavor = dishFlavors.find((flavor) => flavor.id === currentFlavorId);
    changeDish((state) => ({
      ...state,
      title: flavor?.title || state.title,
      description: flavor?.description || state.description,
    }));
  }, [currentFlavorId, changeDish, dishFlavors]);

  return null;
}
