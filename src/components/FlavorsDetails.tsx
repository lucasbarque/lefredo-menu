'use client';

import { useContext } from 'react';

import { ChipDetails } from './ChipDetails';
import { DishFlavors } from '@/app/dish/[dishId]/types';
import { DishContext } from '@/contexts/DishContext';

interface FlavorsDetailsProps {
  dishFlavors: DishFlavors[];
}

export function FlavorsDetails({ dishFlavors }: FlavorsDetailsProps) {
  const { currentFlavorId, setCurrentFlavorId } = useContext(DishContext);

  function handleChangeFlavor(flavorId: string) {
    console.log('teste');
    setCurrentFlavorId(flavorId);
  }

  return (
    <div>
      <h2 className="font-secondary text-title-default font-medium">Sabores</h2>
      <div className="flex gap-2 flex-wrap">
        {dishFlavors.map((flavor) => (
          <ChipDetails
            key={flavor.id}
            title={flavor.label}
            isActive={flavor.id === currentFlavorId}
            onClick={() => handleChangeFlavor(flavor.id)}
          />
        ))}
      </div>
    </div>
  );
}
