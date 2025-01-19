'use client';

import { Dispatch, SetStateAction, useEffect } from 'react';

import { ChipDetails } from './ChipDetails';
import { DishDetails, DishFlavors } from '@/app/dish/[dishId]/types';

interface FlavorsDetailsProps {
  dishFlavors: DishFlavors[];
  changeDish: Dispatch<SetStateAction<DishDetails>>;
  currentFlavorId: string;
  setCurrentFlavorId: Dispatch<SetStateAction<string>>;
}

export function FlavorsDetails({
  dishFlavors,
  changeDish,
  currentFlavorId,
  setCurrentFlavorId,
}: FlavorsDetailsProps) {
  useEffect(() => {
    const flavor = dishFlavors.find((flavor) => flavor.id === currentFlavorId);
    changeDish((state) => ({
      ...state,
      title: flavor?.title || state.title,
      description: flavor?.description || state.description,
    }));
  }, [currentFlavorId, changeDish, dishFlavors]);

  return (
    <div>
      <h2 className="font-secondary text-title-default font-medium">Sabores</h2>
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
