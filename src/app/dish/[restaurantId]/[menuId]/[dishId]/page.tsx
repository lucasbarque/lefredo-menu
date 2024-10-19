import { headers } from 'next/headers';
import Link from 'next/link';

import { ButtonBack } from '@/components/ButtonBack';
import { Slider } from '@/components/Slider';

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

interface Params {
  params: {
    restaurantId: string;
    menuId: string;
    dishId: string;
  };
}

export default async function Page({ params }: Params) {
  const headersList = headers();
  const hostname = headersList.get('x-current-path');

  const dataAPI = await fetch(`${hostname}/api/dish/${params.dishId}`);
  const data = (await dataAPI.json()) as DishDetails | null;

  const images = data?.medias.map((image) => {
    return {
      title: image.id,
      url: image.filename,
    };
  });

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
          {data?.title}
        </h2>
        <div className="mt-6 h-[1px] w-full bg-gray-300" />
        <p className="mt-6 text-regular-1xs text-gray-400">
          {data?.description}
        </p>
        <div className="mt-3 text-heading-md text-black">
          <span className="text-yellow-500">R$</span>{' '}
          {data?.price &&
            new Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              minimumFractionDigits: 2,
            }).format(data?.price / 100)}
        </div>
      </div>
    </div>
  );
}
