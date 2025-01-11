'use client';

import { Suspense } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface CardImage {
  title: string;
  url: string;
  filename: string;
}

export interface CardProps {
  id: string;
  title: string;
  price: number;

  medias: CardImage[];
}

export function Card({ id, title, price, medias }: CardProps) {
  const searchParams = useSearchParams();
  const menuId = searchParams.get('menuId');
  const restaurantId = searchParams.get('restaurantId');

  return (
    <Suspense>
      <Link
        href={`/dish/${restaurantId}/${menuId}/${id}`}
        className="rounded-[0.875rem] p-2 shadow-card overflow-hidden h-[7.25rem] flex items-center relative"
      >
        <div className="flex gap-3 items-center">
          {medias.length > 0 && (
            <Image
              src={medias[0].filename}
              alt={medias[0].title}
              width={100}
              height={100}
              className="h-[6.25rem] w-[6.25rem] rounded-[0.875rem] object-cover"
            />
          )}
          <div className="flex flex-col justify-center">
            <div className="text-brand-primary text-[0.625rem] bg-tag-background h-[1.375rem] flex items-center justify-center w-fit px-[0.625rem] rounded-xl">
              01 unidade
            </div>
            <div className="text-heading-xs text-black pt-1 font-secondary font-bold line-clamp-2">
              {title}
            </div>
            <div className="pt-1 text-sm font-medium">
              R${' '}
              {new Intl.NumberFormat('pt-BR', {
                currency: 'BRL',
                minimumFractionDigits: 2,
              }).format(price / 100)}
            </div>
          </div>
        </div>
        <div className="absolute top-3 right-0 font-medium text-[0.625rem] bg-brand-primary px-2 text-flag-text h-[1.375rem] rounded-tl-md rounded-bl-md flex items-center justify-center">
          Mais pedido
        </div>

        <Image
          src="/cold.svg"
          width={17}
          height={19}
          alt=""
          className="absolute top-10 right-2"
        />

        <Image
          src="/icon-fire.svg"
          width={15}
          height={15}
          alt=""
          className="absolute top-16 right-2"
        />

        <Image
          src="/icon-leaf.svg"
          width={15}
          height={15}
          alt=""
          className="absolute top-[5.375rem] right-2"
        />
      </Link>
    </Suspense>
  );
}
