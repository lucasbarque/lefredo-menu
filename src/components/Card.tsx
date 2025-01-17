import Image from 'next/image';
import Link from 'next/link';

import { Specs } from './Specs';
import { Tag } from './Tag';

interface CardImage {
  title: string;
  url: string;
  filename: string;
}

interface DishSpecs {
  DishSpecs: {
    id: string;
    title: string;
    key: 'cold' | 'hot' | 'vegan' | 'highlighted';
  };
}

export interface CardProps {
  id: string;
  title: string;
  price: number;
  portion: string | null;
  medias: CardImage[];
  specs: DishSpecs[];
}

export function Card({ id, title, price, portion, medias, specs }: CardProps) {
  return (
    <Link
      href={`/dish/${id}`}
      className="rounded-[0.875rem] p-2 shadow-card overflow-hidden h-[7.25rem] flex items-center relative"
    >
      <div className="flex gap-3 items-center">
        {medias.length > 0 && (
          <Image
            src={medias[0].filename}
            alt={medias[0].title}
            width={100}
            height={100}
            className="h-[6.25rem] w-[6.25rem] shrink-0 rounded-[0.875rem] object-cover"
          />
        )}
        <div className="flex flex-col justify-center">
          {portion && <Tag title={portion} />}

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
      <Specs specs={specs} />
    </Link>
  );
}
