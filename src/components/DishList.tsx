import { Card, CardProps } from './Card';

interface SectionProps {
  id: string;
  title: string;
  Dish: CardProps[];
}

interface MenuListProps {
  sections: SectionProps[];
}

export function DishList({ sections }: MenuListProps) {
  return (
    <div className="flex-1 overflow-y-auto px-6 pb-36 ">
      {sections.map((section) => {
        if (section.Dish.length > 0) {
          return (
            <div key={section.id} className="pb-6">
              <div className="flex flex-col gap-3">
                {section.Dish.map((dish) => (
                  <Card
                    id={dish.id}
                    key={dish.id}
                    medias={dish.medias}
                    title={dish.title}
                    price={dish.price}
                  />
                ))}
              </div>
            </div>
          );
        }
      })}
      {/* <div className="mt-6 flex justify-center">
        <Button title="Voltar ao topo" />
      </div> */}
    </div>
  );
}
