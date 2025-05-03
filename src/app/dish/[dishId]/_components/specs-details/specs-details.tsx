import { DishSpecKey } from '@/http/api';
import { IconClockHour4 } from '@tabler/icons-react';

import { Spec } from '@/components/data-display/spec';

import { SpecProps } from './specs-details.types';

export function SpecsDetails({ specs, prepTime }: SpecProps) {
  const specsFiltered = specs.filter(
    (spec) => spec.DishSpecs.key !== DishSpecKey.highlighted
  );

  return (
    <div className='bg-tag-details-background flex w-full flex-wrap items-center justify-center gap-x-4 rounded-2xl px-2'>
      {prepTime && (
        <div className='flex h-[2.125rem] items-center gap-1'>
          <IconClockHour4 className='text-text-default' size={16} />
          <span className='text-title-default text-sm font-medium'>
            {prepTime}
          </span>
        </div>
      )}
      {specsFiltered.map((spec) => (
        <div
          key={spec.dishSpecsId}
          className='flex h-[2.125rem] items-center gap-1'
        >
          <span className='text-text-default'>
            <Spec keySpec={spec.DishSpecs.key} />
          </span>
          <span className='text-title-default text-sm font-medium'>
            {spec.DishSpecs.title}
          </span>
        </div>
      ))}
    </div>
  );
}
