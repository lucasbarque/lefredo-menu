import { Card } from './Card';
import { fetchWrapper } from '@/utils/fetchWrapper';

interface DishesListProps {
  sectionId: string;
}

interface BaseDish {
  id: string;
  title: string;
}

interface DishProps {
  id: string;
  title: string;
  description: string | null;
  price: number;
  portion: string | null;
  prepTime: string | null;
  baseDish: BaseDish | null;
  dishSpecs: [];
  media: [];
}

export async function DishesList({ sectionId }: DishesListProps) {
  const dishes = await fetchWrapper<DishProps[]>(
    `api/dish?sectionId=${sectionId}`,
  );
  return (
    <div className="flex-1 overflow-y-auto px-6 pb-36 ">
      <div className="pb-6">
        <div className="flex flex-col gap-3">
          {dishes.map((dish) => (
            <Card
              id={dish.id}
              key={dish.id}
              medias={dish.media}
              title={dish.title}
              price={dish.price}
              portion={dish.portion}
              specs={dish.dishSpecs}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
