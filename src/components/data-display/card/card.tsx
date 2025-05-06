import Image from 'next/image';
import Link from 'next/link';

import { Tag } from '@/components/data-display/tag';

import { Spec } from '../spec/spec';
import { CardProps } from './card.types';

export function Card({
  id,
  title,
  price,
  portion,
  dishMedias,
  dishSpecs,
}: CardProps) {
  return (
    <Link
      href={`/dish/${id}`}
      className='shadow-card relative flex h-[7.25rem] items-center overflow-hidden rounded-[0.875rem] p-2'
    >
      <div className='flex items-center gap-3'>
        {dishMedias.length > 0 && (
          <Image
            src={process.env.NEXT_PUBLIC_BUCKET_URL + dishMedias[0].url}
            alt={dishMedias[0].title}
            width={100}
            height={100}
            quality={60}
            className='h-[6.25rem] w-[6.25rem] shrink-0 rounded-[0.875rem] object-cover'
          />
        )}
        <div className='flex flex-col justify-center'>
          {portion && <Tag title={portion} />}

          <div className='text-title-default line-clamp-2 pt-1 pr-12 font-bold'>
            {title}
          </div>
          <div className='text-title-default pt-1 text-sm font-medium'>
            R${' '}
            {new Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              minimumFractionDigits: 2,
            }).format(price / 100)}
          </div>
        </div>
      </div>

      {dishSpecs.length > 0 && (
        <div className='text-text-default absolute top-3 right-3 flex h-[100px] flex-col flex-wrap-reverse gap-2'>
          {dishSpecs.some((spec) => spec.DishSpecs.key === 'highlighted') ? (
            <>
              <div className='bg-brand-primary -mr-3 flex items-center justify-center rounded-tl-md rounded-bl-md py-1 pr-2 pl-3 text-xs text-white'>
                Mais pedido
              </div>

              <div className='absolute top-8 -right-1 flex h-[80px] flex-col flex-wrap-reverse gap-2'>
                {dishSpecs.map((spec) => (
                  <Spec key={spec.DishSpecs.id} keySpec={spec.DishSpecs.key} />
                ))}
              </div>
            </>
          ) : (
            dishSpecs.map((spec) => (
              <Spec key={spec.DishSpecs.id} keySpec={spec.DishSpecs.key} />
            ))
          )}
        </div>
      )}
    </Link>
  );
}
