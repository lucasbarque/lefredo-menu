'use client';

import { useEffect, useState } from 'react';

import { notFound } from 'next/navigation';

import clsx from 'clsx';

// import { AdditionalsList } from '@/components/AdditionalsList';
import { ButtonBack } from '@/components/ButtonBack';
// import { FlavorsDetails } from '@/components/FlavorsDetails';
import { Line } from '@/components/Line';
// import { PriceDetails } from '@/components/PriceDetails';
import { Slider } from '@/components/Slider';
import { SpecsDetails } from '@/components/SpecsDetails';
import { Tag } from '@/components/Tag';

import { DishDetails, DishSpecs } from './types';
import { fetchWrapper } from '@/utils/fetchWrapper';

interface Params {
  params: {
    dishId: string;
  };
}

export default function Page({ params }: Params) {
  const [dish, setDish] = useState<DishDetails>({} as DishDetails);
  const [images, setImages] = useState<{ title: string; url: string }[]>([]);
  const [hasHighlighted, setHasHighlighted] = useState<DishSpecs>();
  // const [currentFlavorId, setCurrentFlavorId] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const dataAPI = await fetchWrapper<DishDetails | null>(
        `/api/dish/${params.dishId}`,
      );
      console.log({ dataAPI });
      if (!dataAPI) {
        notFound();
      }
      let images: { title: string; url: string }[] = [];
      if (dataAPI.medias.length > 0) {
        images = dish.medias.map((image) => {
          return {
            title: image.id,
            url: image.filename,
          };
        });
      }
      setImages(images);

      const hasHighlighted = dataAPI.dishSpecs.find(
        (spec) => spec.DishSpecs.key === 'highlighted',
      );
      setHasHighlighted(hasHighlighted);
      setDish(dataAPI);
    })();
  }, []);

  console.log(dish);

  return (
    <div className="z-0">
      <ButtonBack className="absolute left-5 top-8 z-40 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-primary" />

      {images?.length > 0 && <Slider images={images} />}
      <div
        className={clsx(
          'absolute flex flex-col left-0 right-0 bottom-0 z-10  rounded-t-2xl bg-white',
          {
            'h-[67vh]': images?.length > 0,
            'h-[100vh]': images?.length == 0,
          },
        )}
      >
        <div
          className={clsx('pt-2 px-6', {
            'mt-3': images && images.length == 0,
          })}
        >
          {dish.portion && (
            <div className="flex items-center justify-center">
              <Tag title={dish.portion} />
            </div>
          )}

          <h2 className="px-8 font-secondary font-bold text-center text-2xl text-title-default pb-2">
            {dish.title}
          </h2>

          {images?.length === 0 && hasHighlighted && (
            <div className="bg-brand-primary text-chip-title-active text-lg w-fit h-8 flex items-center justify-center px-4 rounded-md mx-auto">
              {hasHighlighted.DishSpecs.title}
            </div>
          )}

          {images?.length > 0 && <Line />}
        </div>
        <div className=" flex-1 flex gap-4 flex-col overflow-y-auto px-6 pt-4 pb-4">
          {/* Description */}
          <p className=" text-regular-1xs text-text-default">
            {dish.description}
          </p>

          {dish.dishSpecs && (
            <SpecsDetails specs={dish.dishSpecs} prepTime={dish.prepTime} />
          )}

          {/* Flavors */}
          {/* <FlavorsDetails dishFlavors={dish.dishFlavors} /> */}

          {/* Additionals */}
          {/* {dish.dishExtras.length > 0 && (
            <div>
              <h2 className="font-secondary text-title-default font-medium pb-1">
                Adicionais
              </h2>
              <AdditionalsList
                currentPriceValue={dish.price || 0}
                dishExtras={dish.dishExtras}
              />
            </div>
          )} */}

          {/* Observations */}
          {/* {dish.section.description && (
            <div>
              <h2 className="font-secondary text-title-default font-medium">
                Observações
              </h2>
              <p className="text-sm text-text-default">
                {dish.section.description}
              </p>
            </div>
          )} */}
        </div>
        <div className="px-6 text-center pb-4">
          <Line />
          <p className="text-sm pt-4 font-bold title-default">Valor</p>
          <span className="font-extrabold">
            R$
            {' ' +
              new Intl.NumberFormat('pt-BR', {
                currency: 'BRL',
                minimumFractionDigits: 2,
              }).format(dish.price / 100)}
          </span>
        </div>
      </div>
    </div>
  );
}
