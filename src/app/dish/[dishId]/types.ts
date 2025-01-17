interface SectionData {
  description: string;
}

export interface DishExtras {
  id: string;
  title: string;
  price: number;
}

export interface DishFlavors {
  id: string;
  title: string;
  label: string;
  description: string | null;
}

export interface DishSpecs {
  DishSpecs: {
    id: string;
    title: string;
    key: 'cold' | 'hot' | 'vegan' | 'highlighted';
  };
}

export interface DishMedias {
  id: string;
  filename: string;
  referenceId: string;
}

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
