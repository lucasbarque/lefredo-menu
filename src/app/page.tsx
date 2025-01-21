import { Suspense } from 'react';

import clsx from 'clsx';

import { Header } from '@/components/data-display/header';
import { LoadingSections } from '@/components/data-display/loading-sections/loading-sections';

import { Sections } from '@/app/components/sections';

interface SearchParams {
  searchParams: {
    menuId?: string;
    sectionId?: string;
  };
}

export default async function Home({ searchParams }: SearchParams) {
  return (
    <div
      className={clsx(
        'z-0 flex h-screen w-screen flex-col overflow-hidden bg-white',
      )}
    >
      <Header />

      <Suspense fallback={<LoadingSections />}>
        <Sections
          menuId={searchParams.menuId}
          sectionId={searchParams.sectionId}
        />
      </Suspense>
    </div>
  );
}
