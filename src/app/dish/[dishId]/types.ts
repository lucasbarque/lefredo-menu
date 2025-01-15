interface SectionData {
  description: string;
}

interface DishExtras {
  id: string;
  title: string;
  price: number;
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
  dishSpecs: [];
  dishExtras: DishExtras[] | [];
}
