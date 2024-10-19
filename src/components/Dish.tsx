'use client';

import { Suspense } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface DishImage {
  title: string;
  url: string;
  filename: string;
}

export interface DishProps {
  id: string;
  title: string;
  description: string;
  price: number;

  medias: DishImage[];
}

export function Dish({ id, title, description, price, medias }: DishProps) {
  const searchParams = useSearchParams();
  const menuId = searchParams.get('menuId');
  const restaurantId = searchParams.get('restaurantId');

  return (
    <Suspense>
      <Link
        href={`/dish/${restaurantId}/${menuId}/${id}`}
        className="rounded-3xl bg-white p-5"
      >
        <div className="flex gap-4">
          {medias.length > 0 && (
            <Image
              src={medias[0].filename}
              alt={medias[0].title}
              width={96}
              height={96}
              className="h-24 w-24 rounded-2xl object-cover"
            />
          )}

          <div className="flex-1">
            <div className="text-heading-xs text-black">{title}</div>
            <p className="pt-1 text-regular-xs text-gray-400">{description}</p>
          </div>
        </div>
        <div className="pt-3 text-right text-heading-sm text-black">
          <span className="text-yellow-500">R$</span>{' '}
          {new Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            minimumFractionDigits: 2,
          }).format(price / 100)}
        </div>
      </Link>
    </Suspense>
  );
}
