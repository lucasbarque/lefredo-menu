'use client';

import clsx from 'clsx';

import { Line } from '@/components/data-display/line';
import { Loading } from '@/components/data-display/loading';
import { Slider } from '@/components/data-display/slider';
import { Tag } from '@/components/data-display/tag';

import { DishIdParams } from './dish-id.types';
import { useDishId } from './use-dish-id';
import { AdditionalsList } from '@/app/dish/[dishId]/_components/additionals-list';
import { ButtonBack } from '@/app/dish/[dishId]/_components/button-back/button-back';
import { FlavorsDetails } from '@/app/dish/[dishId]/_components/flavors-details/flavors-details';
import { SpecsDetails } from '@/app/dish/[dishId]/_components/specs-details/specs-details';

export default function Page({ params }: DishIdParams) {
  const {
    images,
    hasHighlighted,
    isLoading,
    dish,
    setDish,
    currentFlavorId,
    setCurrentFlavorId,
  } = useDishId({ params });

  return (
    <div className="z-0 relative pb-6">
      <ButtonBack className="absolute left-5 top-7 z-40" />

      {images?.length > 0 && <Slider images={images} />}

      {hasHighlighted && (
        <div className="bg-brand-primary z-40 absolute top-8 right-0 text-chip-title-active text-lg w-fit h-8 flex items-center justify-center px-4 rounded-tl-md rounded-bl-md mx-auto">
          {hasHighlighted.DishSpecs.title}
        </div>
      )}

      <div
        className={clsx(
          'flex flex-col z-[999] rounded-t-2xl shadow-[0px_-13px_45px_-36px_#0d0d0d] bg-white',
          {
            '-mt-4': images?.length > 0,
          },
        )}
      >
        <div
          className={clsx('pt-2 px-6', {
            'mt-3': images && images.length == 0,
          })}
        >
          <div className="flex justify-between items-center pb-2">
            <Loading
              isLoading={isLoading}
              fallback={
                <div className="mx-auto mt-1 bg-slate-200 w-40 animate-pulse h-[1.375rem] rounded-xl" />
              }
            >
              <h2
                className={clsx(
                  'font-secondary font-bold text-2xl text-title-default',
                  {
                    'pl-11': images && images.length === 0,
                  },
                )}
              >
                {dish?.title}
              </h2>
            </Loading>

            {dish?.price && (
              <div className="flex flex-col gap-1 shrink-0 justify-end items-end">
                <Loading
                  isLoading={isLoading}
                  fallback={
                    <div className="bg-slate-200 w-24 animate-pulse h-[1.375rem] rounded-xl" />
                  }
                >
                  {dish.portion && (
                    <div>
                      <Tag title={dish.portion} />
                    </div>
                  )}
                </Loading>

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
          </div>

          {images?.length === 0 && hasHighlighted && (
            <div className="bg-brand-primary text-chip-title-active text-lg w-fit h-8 flex items-center justify-center px-4 rounded-md mx-auto">
              {hasHighlighted.DishSpecs.title}
            </div>
          )}

          {images?.length > 0 && <Line />}
        </div>
        <div className="flex gap-4 flex-col overflow-y-auto px-6 pb-4 pt-4">
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
              <p className="text-text-default">{dish.description}</p>
            )}
          </Loading>
          {/* Specs */}
          <Loading
            isLoading={isLoading}
            fallback={
              <div className="h-[2.125rem] bg-slate-200 w-full rounded-full animate-pulse" />
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
                currentFlavorId={currentFlavorId}
                setCurrentFlavorId={setCurrentFlavorId}
              />
            )}
          </Loading>
          {/* Additionals */}
          <Loading isLoading={isLoading} fallback={<></>}>
            {dish?.dishExtras?.length > 0 && (
              <div>
                <h2 className="font-secondary text-title-default font-medium pb-1">
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
                <h2 className="font-secondary text-title-default font-medium">
                  Observações
                </h2>
                <p className="text-sm text-text-default">
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
