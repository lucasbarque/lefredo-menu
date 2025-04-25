import { DishDTO } from '@/http/api';

export type CardProps = Omit<
  DishDTO,
  | 'prepTime'
  | 'description'
  | 'section'
  | 'dishExtras'
  | 'dishExtrasOrder'
  | 'dishFlavors'
>;
