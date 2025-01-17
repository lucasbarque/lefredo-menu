'use client';

import { useEffect, useState } from 'react';

import { notFound } from 'next/navigation';

import clsx from 'clsx';

import { AdditionalsList } from '@/components/AdditionalsList';
import { ButtonBack } from '@/components/ButtonBack';
import { FlavorsDetails } from '@/components/FlavorsDetails';
import { Line } from '@/components/Line';
import { Loading } from '@/components/Loading';
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
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<{ title: string; url: string }[]>([]);
  const [hasHighlighted, setHasHighlighted] = useState<DishSpecs>();

  useEffect(() => {
    (async () => {
      const dataAPI = await fetchWrapper<DishDetails | null>(
        `/api/dish/${params.dishId}`,
      );
      if (!dataAPI) {
        notFound();
      }
      let images: { title: string; url: string }[] = [];

      if (dataAPI.medias.length > 0) {
        images = dataAPI.medias.map((image) => {
          return {
            title: image.id,
            url: image.filename,
          };
        });
      }
      setImages(images);

      const hasHighlighted = dataAPI?.dishSpecs.find(
        (spec) => spec.DishSpecs.key === 'highlighted',
      );
      setHasHighlighted(hasHighlighted);
      setDish(dataAPI);
      setIsLoading(false);
    })();
  }, []);

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
          <div className="flex items-center justify-center">
            <Loading
              isLoading={isLoading}
              fallback={
                <div className="bg-slate-200 w-24 animate-pulse h-[1.375rem] rounded-xl" />
              }
            >
              {dish.portion && (
                <div data-aos="fade-down" data-aos-delay="150">
                  <Tag title={dish.portion} />
                </div>
              )}
            </Loading>
          </div>

          <Loading
            isLoading={isLoading}
            fallback={
              <div className="mx-auto mt-1 bg-slate-200 w-40 animate-pulse h-[1.375rem] rounded-xl" />
            }
          >
            <h2
              data-aos="zoom-in"
              data-aos-delay="200"
              className="px-8 font-secondary font-bold text-center text-2xl text-title-default pb-2"
            >
              {dish?.title}
            </h2>
          </Loading>

          {images?.length === 0 && hasHighlighted && (
            <div
              data-aos="zoom-out"
              data-aos-delay="200"
              className="bg-brand-primary text-chip-title-active text-lg w-fit h-8 flex items-center justify-center px-4 rounded-md mx-auto"
            >
              {hasHighlighted.DishSpecs.title}
            </div>
          )}

          {images?.length > 0 && <Line />}
        </div>
        <div className=" flex-1 flex gap-4 flex-col overflow-y-auto px-6 pt-4 pb-4">
          {/* Description */}
          <Loading
            isLoading={isLoading}
            fallback={
              <div>
                <div className="mt-4 h-4 bg-slate-200 w-full rounded-xl animate-pulse" />
                <div className="mt-1 h-4 bg-slate-200 w-full rounded-xl animate-pulse" />
                <div className="mt-1 h-4 bg-slate-200 w-full rounded-xl animate-pulse" />
              </div>
            }
          >
            {dish?.description && (
              <p
                data-aos="zoom-out"
                data-aos-delay="200"
                className="text-text-default"
              >
                {dish.description}
              </p>
            )}
          </Loading>

          {/* Specs */}
          <Loading
            isLoading={isLoading}
            fallback={
              <div className="h-[2.125rem] bg-slate-200 w-full rounded-full animate-pulse" />
            }
          >
            {dish.dishSpecs && (
              <SpecsDetails specs={dish.dishSpecs} prepTime={dish.prepTime} />
            )}
          </Loading>

          {/* Flavors */}
          <Loading
            isLoading={isLoading}
            fallback={
              <div>
                <div className="h-4 mt-4 bg-slate-200 w-16 rounded-xl animate-pulse" />
                <div className="flex gap-2 mt-2">
                  <div className="h-8 bg-slate-200 w-24 rounded-full animate-pulse" />
                  <div className="h-8 bg-slate-200 w-36 rounded-full animate-pulse" />
                  <div className="h-8 bg-slate-200 w-44 rounded-full animate-pulse" />
                </div>
              </div>
            }
          >
            {dish?.dishFlavors?.length > 0 && (
              <FlavorsDetails
                dishFlavors={dish.dishFlavors}
                changeDish={setDish}
              />
            )}
          </Loading>

          {/* Additionals */}
          <Loading isLoading={isLoading} fallback={<></>}>
            {dish?.dishExtras?.length > 0 && (
              <div>
                <h2
                  data-aos="zoom-out"
                  data-aos-delay="200"
                  className="font-secondary text-title-default font-medium pb-1"
                >
                  Adicionais
                </h2>
                <AdditionalsList
                  currentPriceValue={dish.price || 0}
                  changeDish={setDish}
                  dishExtras={dish.dishExtras}
                />
              </div>
            )}
          </Loading>

          {/* Observations */}
          <Loading
            isLoading={isLoading}
            fallback={
              <div>
                <div className="h-4 mt-4 bg-slate-200 w-32 rounded-xl animate-pulse" />
                <div className="mt-2 h-3 bg-slate-200 w-9/12 rounded-xl animate-pulse" />
                <div className="mt-2 h-3 bg-slate-200 w-11/12 rounded-xl animate-pulse" />
                <div className="mt-2 h-3 bg-slate-200 w-10/12 rounded-xl animate-pulse" />
                <div className="mt-2 h-3 bg-slate-200 w-9/12 rounded-xl animate-pulse" />
              </div>
            }
          >
            {dish?.section?.description && (
              <div>
                <h2
                  data-aos="fade-up"
                  data-aos-delay="150"
                  className="font-secondary text-title-default font-medium"
                >
                  Observações
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-sm text-text-default"
                >
                  {dish.section.description}
                </p>
              </div>
            )}
          </Loading>
        </div>

        <Loading
          isLoading={isLoading}
          fallback={
            <div className="pb-4">
              <div className="h-4 mt-4 mx-auto bg-slate-200 w-16 rounded-xl animate-pulse" />
              <div className="mt-2 h-3 mx-auto bg-slate-200 w-24 rounded-xl animate-pulse" />
            </div>
          }
        >
          {dish?.section?.description && (
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
          )}
        </Loading>
      </div>
    </div>
  );
}
