import { useEffect, useState } from 'react';

import { getDishByIdAPI } from '@/actions/dishes.action';
import { DishDTO, DishMediasDTO, DishSpecKey, DishSpecsDTO } from '@/http/api';
import { notFound } from 'next/navigation';

export function useDishId(id: string) {
  const [dish, setDish] = useState<DishDTO>({} as DishDTO);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<DishMediasDTO[]>([]);
  const [price, setPrice] = useState(0);
  const [hasHighlighted, setHasHighlighted] = useState<DishSpecsDTO>();
  const [currentFlavorId, setCurrentFlavorId] = useState('');

  useEffect(() => {
    (async () => {
      const responseDishes = await getDishByIdAPI(id);
      if (responseDishes.status === 404) {
        return notFound();
      }
      if (
        responseDishes.data.dishMedias?.length > 0 &&
        responseDishes.data.dishFlavors === null
      ) {
        setImages(
          responseDishes.data.dishMedias.map((image) => {
            return {
              id: image.id,
              title: image.id,
              url: image.url,
            };
          })
        );
      }

      const hasHighlighted = responseDishes.data?.dishSpecs.find(
        (spec) => spec.DishSpecs.key === DishSpecKey.highlighted
      );
      setHasHighlighted(hasHighlighted);
      setDish(responseDishes.data);
      setPrice(responseDishes.data.price);
      setIsLoading(false);
      if (
        responseDishes.data.dishFlavors &&
        responseDishes.data.dishFlavors.length > 0
      ) {
        setCurrentFlavorId(responseDishes.data.dishFlavors[0].id);
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
