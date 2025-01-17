'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { ChipDetails } from './ChipDetails';
import { DishDetails, DishFlavors } from '@/app/dish/[dishId]/types';

interface FlavorsDetailsProps {
  dishFlavors: DishFlavors[];
  changeDish: Dispatch<SetStateAction<DishDetails>>;
}

export function FlavorsDetails({
  dishFlavors,
  changeDish,
}: FlavorsDetailsProps) {
  const [currentFlavorId, setCurrentFlavorId] = useState(dishFlavors[0].id);

  useEffect(() => {
    const flavor = dishFlavors.find((flavor) => flavor.id === currentFlavorId);

    changeDish((state) => ({
      ...state,
      title: flavor?.title || state.title,
      description: flavor?.description || state.description,
    }));

    console.log({ currentFlavorId, flavor });
  }, [currentFlavorId, changeDish, dishFlavors]);

  return (
    <div>
      <h2
        data-aos="zoom-in"
        data-aos-delay="150"
        className="font-secondary text-title-default font-medium"
      >
        Sabores
      </h2>
      <div className="flex gap-2 flex-wrap">
        {dishFlavors.map((flavor) => (
          <div key={flavor.id} data-aos="zoom-out" data-aos-delay="200">
            <ChipDetails
              title={flavor.label}
              isActive={currentFlavorId === flavor.id}
              onClick={() => setCurrentFlavorId(flavor.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
