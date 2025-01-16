interface SectionData {
  description: string;
}

export interface DishExtras {
  id: string;
  title: string;
  price: number;
}

export interface DishSpecs {
  DishSpecs: {
    id: string;
    title: string;
    key: 'cold' | 'hot' | 'vegan' | 'highlighted';
  };
}

export interface DishDetails {
  id: string;
  title: string;
  description: string;
  price: number;
  medias: [
    {
      id: string;
      filename: string;
    },
  ];
  section: SectionData;
  portion: string | null;
  prepTime: number | null;
  dishSpecs: DishSpecs[] | [];
  dishExtras: DishExtras[] | [];
}
