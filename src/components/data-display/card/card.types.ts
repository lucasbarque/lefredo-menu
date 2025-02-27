import { GetDishesDTO } from '@/http/api';

export type CardProps = Omit<GetDishesDTO, 'prepTime'>;
