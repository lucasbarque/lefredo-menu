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
      <h2 className="font-secondary text-title-default font-medium">Sabores</h2>
      <div className="flex gap-2 flex-wrap">
        {dishFlavors.map((flavor) => (
          <div key={flavor.id}>
            <button
              onClick={() => setCurrentFlavorId(flavor.id)}
              className={clsx(
                'h-[2.063rem] whitespace-nowrap rounded-2xl border px-4 text-sm font-medium transition-colors',
                {
                  'bg-brand-primary text-chip-title-active ':
                    currentFlavorId === flavor.id,
                  'bg-chip-background text-chip-title ':
                    currentFlavorId !== flavor.id,
                },
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
