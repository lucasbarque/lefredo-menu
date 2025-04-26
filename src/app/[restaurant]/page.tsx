import { Suspense } from 'react';

import { getDishesBySlugAPI } from '@/actions/dishes.action';
import { getRestaurantBySlugAPI } from '@/actions/restaurants.action';
import { getSectionsAPI } from '@/actions/sections.action';
import clsx from 'clsx';
import { notFound } from 'next/navigation';

import { Card } from '@/components/data-display/card';
import { Header } from '@/components/data-display/header';
import { LoadingDishes } from '@/components/data-display/loading-dishes/loading-dishes';
import { LoadingSections } from '@/components/data-display/loading-sections';

import { SectionsList } from '../_components/sections-list';
import { PageHomeParams } from './page.types';

export default async function Home({ params, searchParams }: PageHomeParams) {
  const { restaurant } = await params;
  const { section } = await searchParams;

  if (!restaurant) notFound();

  const { data: restaurantData } = await getRestaurantBySlugAPI(restaurant);

  const sections = await getSectionsAPI({
    menuId: restaurantData.Menu[0].id,
  });

  if (sections.status !== 200 || sections.data.length === 0) notFound();

  const currentSection = section || sections.data[0].slug;

  const { data: dishes } = await getDishesBySlugAPI(currentSection);

  return (
    <div
      className={clsx(
        'z-0 flex h-screen w-screen flex-col overflow-hidden bg-white'
      )}
    >
      <Header
        logo={restaurantData.logo}
        welcomeMessage={restaurantData.welcomeMessage}
      />

      <Suspense fallback={<LoadingSections />}>
        <SectionsList
          currentSection={currentSection}
          sections={sections.data}
        />
        <Suspense fallback={<LoadingDishes />}>
          <div className='flex-1 overflow-y-auto px-6 pb-36'>
            <div className='pb-6'>
              <div className='flex flex-col gap-3'>
                {dishes.map((dish) => (
                  <Card
                    id={dish.id}
                    key={dish.id}
                    dishMedias={dish.dishMedias}
                    title={dish.title}
                    price={dish.price}
                    portion={dish.portion}
                    dishSpecs={dish.dishSpecs}
                  />
                ))}
              </div>
            </div>
          </div>
        </Suspense>
      </Suspense>
    </div>
  );
}
