import { IconClockHour4 } from '@tabler/icons-react';

import { Spec } from './spec';
import { SpecProps } from './specs-details.types';

export function SpecsDetails({ specs, prepTime }: SpecProps) {
  return (
    <div className='bg-tag-details-background flex w-full flex-wrap items-center justify-center gap-x-4 rounded-2xl'>
      {prepTime && (
        <div className='flex h-[2.125rem] items-center gap-1'>
          <IconClockHour4 className='text-text-default' size={16} />
          <span className='text-title-default text-sm font-medium'>
            {prepTime}
          </span>
        </div>
      )}
      {specs.map((spec) => (
        <Spec
          key={spec.DishSpecs.id}
          keySpec={spec.DishSpecs.key}
          title={spec.DishSpecs.title}
        />
      ))}
    </div>
  );
}
