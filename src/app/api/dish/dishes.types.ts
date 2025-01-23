export type DishProps = {
  id: string;
  title: string;
  description: string | null;
  price: number;
  portion: string | null;
  prepTime: string | null;
  dishSpecs: [];
  media: [];
};
