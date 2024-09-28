'use client';

import { useEffect, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import axios from 'axios';
import clsx from 'clsx';

import { DishList } from '@/components/DishList';
import { Filter, SectionProps } from '@/components/Filter';
import { Header } from '@/components/Header';
import { MenuSkeleton } from '@/components/MenuSkeleton';

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

export default function Home() {
  const [data, setData] = useState<DataProps | null>(null);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const menuId = searchParams.get('menuId');
  const restaurantId = searchParams.get('restaurantId');

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/menu', {
        params: { menuId, restaurantId },
      });
      const sectionsAPI: DataProps = data;
      if (sectionsAPI) {
        setData(sectionsAPI);
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!loading && data && (
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

      {loading && <MenuSkeleton />}

      {!data && !loading && (
        <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gray-200">
          <h2 className="text-center text-heading-xg">
            Nenhum menu encontrado!
          </h2>
        </div>
      )}
    </>
  );
}
