import { Dish, DishProps } from './Dish';

interface SectionProps {
  id: string;
  title: string;
  Dish: DishProps[];
}

interface MenuListProps {
  sections: SectionProps[];
}

export function DishList({ sections }: MenuListProps) {
  return (
    <div className="flex-1 overflow-y-auto px-8 pb-36 ">
      {sections.map((section) => {
        if (section.Dish.length > 0) {
          return (
            <div key={section.id} className="pb-6">
              <div
                className="pb-3 text-lg text-medium-sm text-black"
                id={section.id}
              >
                {section.title}
              </div>
              <div className="flex flex-col gap-5">
                {section.Dish.map((dish) => (
                  <Dish
                    id={dish.id}
                    key={dish.id}
                    medias={dish.medias}
                    title={dish.title}
                    description={dish.description}
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
