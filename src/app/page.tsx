import { Suspense } from 'react';

import clsx from 'clsx';

import { Header } from '@/components/Header';
import { LoadingSections } from '@/components/LoadingSections';
import { Sections } from '@/components/Sections';

interface SearchParams {
  searchParams: {
    menuId?: string;
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
        <Sections menuId={searchParams.menuId} />
      </Suspense>
    </div>
  );
}
