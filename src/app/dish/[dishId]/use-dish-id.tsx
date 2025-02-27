import { useEffect, useState } from 'react';

import { getDishDetailsById } from '@/actions/dishes.action';
import {
  DishMediasDTO,
  DishSpecKey,
  DishSpecsDTO,
  GetDishDTO,
} from '@/http/api';
import { notFound } from 'next/navigation';

export function useDishId(id: string) {
  const [dish, setDish] = useState<GetDishDTO>({} as GetDishDTO);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<DishMediasDTO[]>([]);
  const [price, setPrice] = useState(0);
  const [hasHighlighted, setHasHighlighted] = useState<DishSpecsDTO>();
  const [currentFlavorId, setCurrentFlavorId] = useState('');

  useEffect(() => {
    (async () => {
      const { data: dataAPI } = await getDishDetailsById(id);
      if (!dataAPI) {
        notFound();
      }

      if (dataAPI.dishMedias.length > 0 && dataAPI.dishFlavors.length === 0) {
        setImages(
          dataAPI.dishMedias.map((image) => {
            return {
              id: image.id,
              title: image.id,
              url: image.url,
            };
          })
        );
      }

      const hasHighlighted = dataAPI?.dishSpecs.find(
        (spec) => spec.DishSpecs.key === DishSpecKey.highlited
      );
      setHasHighlighted(hasHighlighted);
      setDish(dataAPI);
      setPrice(dataAPI.price);
      setIsLoading(false);
      if (dataAPI.dishFlavors.length > 0) {
        setCurrentFlavorId(dataAPI.dishFlavors[0].id);
      }
    })();
  }, []);

  useEffect(() => {
    if (!currentFlavorId) return;

    const currentFlavor = dish.dishFlavors.find(
      (flavor) => flavor.id === currentFlavorId
    );

    const mediasFlavors =
      currentFlavor?.dishFlavorsMedias.map((currentFlavor) => {
        return {
          id: currentFlavor.id,
          title: currentFlavor.id,
          url: currentFlavor.url,
        };
      }) || [];
    setImages(mediasFlavors);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFlavorId]);

  return {
    images,
    hasHighlighted,
    isLoading,
    dish,
    setDish,
    currentFlavorId,
    setCurrentFlavorId,
    price,
    setPrice,
  };
}
