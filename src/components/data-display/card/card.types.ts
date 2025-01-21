type CardImage = {
  title: string;
  url: string;
  filename: string;
};

type DishSpecs = {
  DishSpecs: {
    id: string;
    title: string;
    key: 'cold' | 'hot' | 'vegan' | 'highlighted';
  };
};

export interface CardProps {
  id: string;
  title: string;
  price: number;
  portion: string | null;
  medias: CardImage[];
  specs: DishSpecs[];
}
