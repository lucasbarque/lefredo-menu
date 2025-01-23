import { Suspense } from 'react';

import clsx from 'clsx';

import { Card } from '@/components/data-display/card';
import { Header } from '@/components/data-display/header';
import { LoadingDishes } from '@/components/data-display/loading-dishes';
import { LoadingSections } from '@/components/data-display/loading-sections';

import { SectionsList } from './_components/sections-list';
import { SearchParams } from './page.types';
import { usePage } from './use-page';

export default async function Home({ searchParams }: SearchParams) {
  const { sections, currentSection, dishes } = await usePage({ searchParams });

  return (
    <div
      className={clsx(
        'z-0 flex h-screen w-screen flex-col overflow-hidden bg-white',
      )}
    >
      <Header />

      <Suspense fallback={<LoadingSections />}>
        {sections.length > 0 && (
          <SectionsList currentSection={currentSection} sections={sections} />
        )}
        <Suspense fallback={<LoadingDishes />}>
          <div className="flex-1 overflow-y-auto px-6 pb-36 ">
            <div className="pb-6">
              <div className="flex flex-col gap-3">
                {dishes.map((dish) => (
                  <Card
                    id={dish.id}
                    key={dish.id}
                    medias={dish.media}
                    title={dish.title}
                    price={dish.price}
                    portion={dish.portion}
                    specs={dish.dishSpecs}
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
