export type DishMedias = {
  id: string;
  filename: string;
  referenceId: string;
};
export type SectionData = {
  description: string;
};

export type DishSpecs = {
  DishSpecs: {
    id: string;
    title: string;
    key: 'cold' | 'hot' | 'vegan' | 'highlighted';
  };
};

export type DishExtras = {
  id: string;
  title: string;
  price: number;
};

export type DishFlavors = {
  id: string;
  title: string;
  label: string;
  description: string | null;
};

export interface DishDetails {
  id: string;
  title: string;
  description: string;
  price: number;
  medias: DishMedias[] | [];
  section: SectionData;
  portion: string | null;
  prepTime: number | null;
  dishSpecs: DishSpecs[] | [];
  dishExtras: DishExtras[] | [];
  dishFlavors: DishFlavors[] | [];
}
