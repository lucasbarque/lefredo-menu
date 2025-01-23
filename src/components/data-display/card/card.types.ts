import { DishSpecs } from '@/app/api/dish/[id]/dish.types';

type CardImage = {
  title: string;
  url: string;
  filename: string;
};

export interface CardProps {
  id: string;
  title: string;
  price: number;
  portion: string | null;
  medias: CardImage[];
  specs: DishSpecs[];
}
