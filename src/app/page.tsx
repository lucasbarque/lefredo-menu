import { headers } from 'next/headers';

import clsx from 'clsx';

import { DishList } from '@/components/DishList';
import { Filter, SectionProps } from '@/components/Filter';
import { Header } from '@/components/Header';

interface DataProps {
  restaurant: {
    id: string;
    name: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    Menu: [
      {
        id: string;
        title: string;
        restaurantId: string;
        createdAt: string;
        updatedAt: string;
      },
    ];
  };
  sections: SectionProps[] | [];
}

interface SearchParams {
  searchParams: {
    menuId?: string;
    restaurantId?: string;
  };
}

export default async function Home({ searchParams }: SearchParams) {
  const headersList = headers();
  const hostname = headersList.get('x-current-path');
  const dataAPI = await fetch(
    `${hostname}/api/menu?menuId=${searchParams.menuId}&restaurantId=${searchParams.restaurantId}`,
  );
  const data = (await dataAPI.json()) as DataProps | null;

  return (
    <>
      {data && (
        <div
          className={clsx(
            'z-0 flex h-screen w-screen flex-col overflow-hidden bg-gray-200',
            {
              'items-center justify-center': !data,
            },
          )}
        >
          <Header title={data && data.restaurant.Menu[0].title} />
          <Filter sections={data.sections} />
          <DishList sections={data.sections} />
        </div>
      )}

      {!data && (
        <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gray-200">
          <h2 className="text-center text-heading-xg">
            Nenhum menu encontrado!
          </h2>
        </div>
      )}
    </>
  );
}
