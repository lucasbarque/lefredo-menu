'use client';

import { use } from 'react';

import clsx from 'clsx';

import { Line } from '@/components/data-display/line';
import { Loading } from '@/components/data-display/loading';
import { Slider } from '@/components/data-display/slider';
import { Tag } from '@/components/data-display/tag';

import { AdditionalsList } from './_components/additionals-list';
import { ButtonBack } from './_components/button-back/button-back';
import { FlavorsDetails } from './_components/flavors-details/flavors-details';
import { SpecsDetails } from './_components/specs-details/specs-details';
import { DishIdParams } from './dish-id.types';
import { useDishId } from './use-dish-id';

export default function Page({ params }: DishIdParams) {
  const { dishId } = use(params);
  const {
    images,
    hasHighlighted,
    isLoading,
    dish,
    setDish,
    currentFlavorId,
    setCurrentFlavorId,
    price,
    setPrice,
  } = useDishId(dishId);

  return (
    <div className='relative z-0 pb-6'>
      <ButtonBack className='absolute top-7 left-5 z-40' />

      {images?.length > 0 && <Slider images={images} />}

      {hasHighlighted && (
        <div className='bg-brand-primary text-chip-title-active absolute top-8 right-0 z-40 mx-auto flex h-8 w-fit items-center justify-center rounded-tl-md rounded-bl-md px-4 text-lg'>
          {hasHighlighted.DishSpecs.title}
        </div>
      )}

      <div
        className={clsx(
          'z-[999] flex flex-col rounded-t-2xl bg-white shadow-[0px_-13px_45px_-36px_#0d0d0d]',
          {
            '-mt-4': images?.length > 0,
          }
        )}
      >
        <div
          className={clsx('px-6 pt-2', {
            'mt-3': images && images.length == 0,
          })}
        >
          <div className='flex items-center justify-between pb-2'>
            <Loading
              isLoading={isLoading}
              fallback={
                <div className='mx-auto mt-1 h-[1.375rem] w-40 animate-pulse rounded-xl bg-slate-200' />
              }
            >
              <h2
                className={clsx(
                  'font-secondary text-title-default text-2xl font-bold',
                  {
                    'pl-11': images && images.length === 0,
                  }
                )}
              >
                {dish?.title}
              </h2>
            </Loading>

            {dish?.price && (
              <div className='flex shrink-0 flex-col items-end justify-end gap-1'>
                <Loading
                  isLoading={isLoading}
                  fallback={
                    <div className='h-[1.375rem] w-24 animate-pulse rounded-xl bg-slate-200' />
                  }
                >
                  {dish.portion && (
                    <div>
                      <Tag title={dish.portion} />
                    </div>
                  )}
                </Loading>

                <span className='font-extrabold'>
                  R$
                  {' ' +
                    new Intl.NumberFormat('pt-BR', {
                      currency: 'BRL',
                      minimumFractionDigits: 2,
                    }).format(price / 100)}
                </span>
              </div>
            )}
          </div>

          {images?.length === 0 && hasHighlighted && (
            <div className='bg-brand-primary text-chip-title-active mx-auto flex h-8 w-fit items-center justify-center rounded-md px-4 text-lg'>
              {hasHighlighted.DishSpecs.title}
            </div>
          )}

          {images?.length > 0 && <Line />}
        </div>
        <div className='flex flex-col gap-4 overflow-y-auto px-6 pt-4 pb-4'>
          {/* Description */}
          <Loading
            isLoading={isLoading}
            fallback={
              <div>
                <div className='mt-4 h-4 w-full animate-pulse rounded-xl bg-slate-200' />
                <div className='mt-1 h-4 w-full animate-pulse rounded-xl bg-slate-200' />
                <div className='mt-1 h-4 w-full animate-pulse rounded-xl bg-slate-200' />
              </div>
            }
          >
            {dish?.description && (
              <p
                className='text-text-default'
                dangerouslySetInnerHTML={{ __html: dish.description }}
              />
            )}
          </Loading>
          {/* Specs */}
          <Loading
            isLoading={isLoading}
            fallback={
              <div className='h-[2.125rem] w-full animate-pulse rounded-full bg-slate-200' />
            }
          >
            {dish?.dishSpecs?.length > 0 && (
              <SpecsDetails specs={dish.dishSpecs} prepTime={dish.prepTime} />
            )}
          </Loading>
          {/* Flavors */}
          <Loading
            isLoading={isLoading}
            fallback={
              <div>
                <div className='mt-4 h-4 w-16 animate-pulse rounded-xl bg-slate-200' />
                <div className='mt-2 flex gap-2'>
                  <div className='h-8 w-24 animate-pulse rounded-full bg-slate-200' />
                  <div className='h-8 w-36 animate-pulse rounded-full bg-slate-200' />
                  <div className='h-8 w-44 animate-pulse rounded-full bg-slate-200' />
                </div>
              </div>
            }
          >
            {dish?.dishFlavors?.length > 0 && (
              <FlavorsDetails
                dishFlavors={dish.dishFlavors}
                changeDish={setDish}
                currentFlavorId={currentFlavorId}
                setCurrentFlavorId={setCurrentFlavorId}
              />
            )}
          </Loading>
          {/* Additionals */}
          <Loading isLoading={isLoading} fallback={<></>}>
            {dish?.dishExtras?.length > 0 && (
              <div>
                <h2 className='font-secondary text-title-default pb-1 font-medium'>
                  Adicionais
                </h2>
                <AdditionalsList
                  dishPrice={dish.price}
                  setPrice={setPrice}
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
                <div className='mt-4 h-4 w-32 animate-pulse rounded-xl bg-slate-200' />
                <div className='mt-2 h-3 w-9/12 animate-pulse rounded-xl bg-slate-200' />
                <div className='mt-2 h-3 w-11/12 animate-pulse rounded-xl bg-slate-200' />
                <div className='mt-2 h-3 w-10/12 animate-pulse rounded-xl bg-slate-200' />
                <div className='mt-2 h-3 w-9/12 animate-pulse rounded-xl bg-slate-200' />
              </div>
            }
          >
            {dish?.section?.description && (
              <div>
                <h2 className='font-secondary text-title-default font-medium'>
                  Observações
                </h2>
                <p className='text-text-default text-sm'>
                  {dish.section.description}
                </p>
              </div>
            )}
          </Loading>
        </div>
      </div>
    </div>
  );
}
