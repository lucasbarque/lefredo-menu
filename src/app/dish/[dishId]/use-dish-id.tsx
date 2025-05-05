import { useEffect, useRef, useState } from 'react';

import { getDishByIdAPI } from '@/actions/dishes.action';
import { DishDTO, DishMediasDTO, DishSpecKey, DishSpecsDTO } from '@/http/api';
import { notFound } from 'next/navigation';

export function useDishId(id: string) {
  const [dish, setDish] = useState<DishDTO>({} as DishDTO);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<DishMediasDTO[]>([]);
  const [price, setPrice] = useState(0);
  const [hasHighlighted, setHasHighlighted] = useState<DishSpecsDTO>();
  const [currentFlavorId, setCurrentFlavorId] = useState<string>('');
  const originalDescription = useRef<string | null>(null);

  useEffect(() => {
    (async () => {
      const response = await getDishByIdAPI(id);
      if (response.status === 404) {
        return notFound();
      }

      const data = response.data;
      originalDescription.current = data.description;

      const highlighted = data.dishSpecs.find(
        (spec) => spec.DishSpecs.key === DishSpecKey.highlighted
      );
      setHasHighlighted(highlighted);

      const initFlavorId = data.dishFlavors?.[0]?.id || '';
      setCurrentFlavorId(initFlavorId);

      const flavorWithMedia = data.dishFlavors?.find(
        (fl) => fl.dishFlavorsMedias?.length > 0
      );
      const initialImages = flavorWithMedia
        ? flavorWithMedia.dishFlavorsMedias.map((img) => ({
            id: img.id,
            title: img.id,
            url: img.url,
          }))
        : data.dishMedias?.map((img) => ({
            id: img.id,
            title: img.id,
            url: img.url,
          })) || [];
      setImages(initialImages);

      setPrice(data.price);

      const initialFlavorDesc = data.dishFlavors?.find(
        (fl) => fl.id === initFlavorId && fl.description
      )?.description;
      const initialDescription = initialFlavorDesc ?? data.description;

      setDish({ ...data, description: initialDescription });

      setIsLoading(false);
    })();
  }, [id]);

  useEffect(() => {
    if (!currentFlavorId) return;
    const flavor = dish.dishFlavors?.find((f) => f.id === currentFlavorId);

    if (!flavor) return;

    if (flavor?.dishFlavorsMedias?.length > 0) {
      setImages(
        flavor.dishFlavorsMedias.map((img) => ({
          id: img.id,
          title: img.id,
          url: img.url,
        }))
      );
    } else {
      setImages(
        dish.dishMedias?.map((img) => ({
          id: img.id,
          title: img.id,
          url: img.url,
        })) || []
      );
    }

    const newDesc = flavor?.description ?? originalDescription.current;
    setDish((prev) => ({ ...prev, description: newDesc }));
  }, [currentFlavorId, dish.dishFlavors, dish.dishMedias]);

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
