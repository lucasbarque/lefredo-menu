import Image from 'next/image';
import Link from 'next/link';

import { Tag } from '@/components/data-display/tag';

import { Specs } from '../specs/specs';
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

          <div className='text-title-default line-clamp-2 pt-1 font-bold'>
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
      <Specs specs={dishSpecs} />
    </Link>
  );
}
