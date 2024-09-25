'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import axios from 'axios';

import { ButtonBack } from '@/components/ButtonBack';
import { Image, Slider } from '@/components/Slider';

interface DishDetails {
  id: string;
  title: string;
  description: string;
  price: number;
  medias: [
    {
      id: string;
      filename: string;
    },
  ];
}

export default function DishDetails({
  params,
}: {
  params: { restaurantId: string; menuId: string; dishId: string };
}) {
  const [dish, setDish] = useState<DishDetails | null>(null);
  const [images, setImages] = useState<Image[] | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/dish/${params.dishId}`);
      const dishAPI: DishDetails = data;
      if (dishAPI) {
        setDish(dishAPI);

        const imagesData = dishAPI.medias.map((image) => {
          return {
            title: image.id,
            url: image.filename,
          };
        });
        setImages(imagesData);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log({ dish, images });

  return (
    <div className="relative z-0">
      <Link
        href={`/?menuId=${params.menuId}&restaurantId=${params.restaurantId}`}
      >
        <ButtonBack className="absolute left-5 top-8 z-40 flex  h-9 w-9 items-center justify-center rounded-xl bg-yellow-500" />
      </Link>
      {images && images.length > 0 && <Slider images={images} />}
      <div className="relative z-10 h-full rounded-tl-2xl rounded-tr-2xl bg-white py-8 px-9">
        <h2 className="px-6 text-center text-heading-md text-black">
          {dish?.title}
        </h2>
        <div className="mt-6 h-[1px] w-full bg-gray-300" />
        <p className="mt-6 text-regular-1xs text-gray-400">
          {dish?.description}
        </p>
        <div className="mt-3 text-heading-md text-black">
          <span className="text-yellow-500">R$</span>{' '}
          {dish?.price &&
            new Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              minimumFractionDigits: 2,
            }).format(dish?.price / 100)}
        </div>
      </div>
    </div>
  );
}
