import { notFound } from 'next/navigation';

import clsx from 'clsx';

import { AdditionalsList } from '@/components/AdditionalsList';
import { ButtonBack } from '@/components/ButtonBack';
import { ChipDetails } from '@/components/ChipDetails';
import { Line } from '@/components/Line';
import { PriceDetails } from '@/components/PriceDetails';
import { Slider } from '@/components/Slider';
import { SpecsDetails } from '@/components/SpecsDetails';
import { Tag } from '@/components/Tag';

import { DishDetails } from './types';
import { DishProvider } from '@/contexts/DishContext';
import { fetchWrapper } from '@/utils/fetchWrapper';

interface Params {
  params: {
    dishId: string;
  };
}

export default async function Page({ params }: Params) {
  const data = await fetchWrapper<DishDetails | null>(
    `/api/dish/${params.dishId}`,
  );

  if (!data) {
    notFound();
  }

  const images = data.medias.map((image) => {
    return {
      title: image.id,
      url: image.filename,
    };
  });

  const hasHighlighted = data.dishSpecs.find(
    (spec) => spec.DishSpecs.key === 'highlighted',
  );

  return (
    <DishProvider>
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
            {data.portion && (
              <div className="flex items-center justify-center">
                <Tag title={data.portion} />
              </div>
            )}

            <h2 className="px-8 font-secondary font-bold text-center text-2xl text-title-default pb-2">
              {data.title}
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
              {data.description}
            </p>

            {data.dishSpecs && (
              <SpecsDetails specs={data.dishSpecs} prepTime={data.prepTime} />
            )}

            {/* Flavors */}
            <div>
              <h2 className="font-secondary text-title-default font-medium">
                Sabores
              </h2>
              <div className="flex gap-2 flex-wrap">
                <ChipDetails title="Frango" isActive />
                <ChipDetails title="Palmito" />
                <ChipDetails title="Frango com Palmito" />
              </div>
            </div>

            {/* Additionals */}
            {data.dishExtras.length > 0 && (
              <div>
                <h2 className="font-secondary text-title-default font-medium pb-1">
                  Adicionais
                </h2>
                <AdditionalsList
                  currentPriceValue={data.price || 0}
                  dishExtras={data.dishExtras}
                />
              </div>
            )}

            {/* Observations */}
            {data.section.description && (
              <div>
                <h2 className="font-secondary text-title-default font-medium">
                  Observações
                </h2>
                <p className="text-sm text-text-default">
                  {data.section.description}
                </p>
              </div>
            )}
          </div>
          <PriceDetails currentPriceValue={data.price} />
        </div>
      </div>
    </DishProvider>
  );
}
