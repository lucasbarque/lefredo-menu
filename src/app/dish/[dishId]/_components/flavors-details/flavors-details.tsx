'use client';

import clsx from 'clsx';

import { FlavorsDetailsProps } from './flavors-details.types';
import { useFlavorsDetails } from './use-flavors-details';

export function FlavorsDetails({
  dishFlavors,
  changeDish,
  currentFlavorId,
  setCurrentFlavorId,
}: FlavorsDetailsProps) {
  useFlavorsDetails({ currentFlavorId, dishFlavors, changeDish });

  return (
    <div>
      <h2 className='font-secondary text-title-default font-medium'>Sabores</h2>
      <div className='flex flex-wrap gap-2'>
        {dishFlavors.map((flavor) => (
          <div key={flavor.id}>
            <button
              onClick={() => setCurrentFlavorId(flavor.id)}
              className={clsx(
                'h-[2.063rem] rounded-2xl px-4 text-sm font-medium whitespace-nowrap transition-colors',
                {
                  'bg-brand-primary text-chip-title-active':
                    currentFlavorId === flavor.id,
                  'bg-chip-background text-chip-title':
                    currentFlavorId !== flavor.id,
                }
              )}
            >
              {flavor.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
