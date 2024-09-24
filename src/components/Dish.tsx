'use client';

import Image from 'next/image';

// import { useRouter } from 'next/router';

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

export function Dish({ title, description, price, medias }: DishProps) {
  // export function Dish({ id, title, description, price, images }: DishProps) {
  // const queryParams = new URLSearchParams(useLocation().search);
  // const menuId = queryParams.get('menuId');

  // const menuId = '1';

  // const navigate = useNavigate();
  // const router = useRouter()

  function handleOpenDishDetails() {
    // router.push(`/dish/${menuId}/${id}`);
  }

  return (
    <div className="rounded-3xl bg-white p-5" onClick={handleOpenDishDetails}>
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
    </div>
  );
}
