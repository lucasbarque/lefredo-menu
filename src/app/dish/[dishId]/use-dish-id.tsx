import { useEffect, useState } from 'react';

import { notFound } from 'next/navigation';

import { DishIdParams } from './dish-id.types';
import {
  DishDetails,
  DishMedias,
  DishSpecs,
} from '@/app/api/dish/[id]/dish.types';
import { fetchWrapper } from '@/utils/fetchWrapper';

export function useDishId({ params }: DishIdParams) {
  const [dish, setDish] = useState<DishDetails>({} as DishDetails);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<{ title: string; url: string }[]>([]);
  const [imagesFlavors, setImagesFlavors] = useState<DishMedias[]>([]);
  const [hasHighlighted, setHasHighlighted] = useState<DishSpecs>();
  const [currentFlavorId, setCurrentFlavorId] = useState('');

  useEffect(() => {
    (async () => {
      const dataAPI = await fetchWrapper<DishDetails | null>(
        `/api/dish/${params.dishId}`,
      );
      if (!dataAPI) {
        notFound();
      }

      if (dataAPI.medias.length > 0 && dataAPI.dishFlavors.length === 0) {
        setImages(
          dataAPI.medias.map((image) => {
            return {
              title: image.id,
              url: image.filename,
            };
          }),
        );
      } else if (dataAPI.medias.length > 0 && dataAPI.dishFlavors.length > 0) {
        setImagesFlavors(dataAPI.medias);
      }

      const hasHighlighted = dataAPI?.dishSpecs.find(
        (spec) => spec.DishSpecs.key === 'highlighted',
      );
      setHasHighlighted(hasHighlighted);
      setDish(dataAPI);
      setIsLoading(false);
      if (dataAPI.dishFlavors.length > 0) {
        setCurrentFlavorId(dataAPI.dishFlavors[0].id);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!currentFlavorId) return;

    const mediasFlavors = imagesFlavors?.filter(
      (flavor) => flavor.referenceId === currentFlavorId,
    );

    if (mediasFlavors.length === 0) return;

    const mediasFlavorsUpdated = mediasFlavors.map((image) => {
      return {
        title: image.id,
        url: image.filename,
      };
    });
    setImages(mediasFlavorsUpdated);
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
  };
}
