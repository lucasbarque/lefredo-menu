import {
  IconClockHour4,
  IconFlame,
  IconLeaf,
  IconSnowflake,
} from '@tabler/icons-react';

import { SpecProps } from './specs-details.types';

export function SpecsDetails({ specs, prepTime }: SpecProps) {
  return (
    <div className='bg-tag-details-background flex w-full items-center justify-center gap-4 rounded-2xl'>
      {prepTime && (
        <div className='flex h-[2.125rem] items-center gap-1'>
          <IconClockHour4 className='text-text-default' size={16} />
          <span className='text-title-default text-sm font-medium'>
            {prepTime}
          </span>
        </div>
      )}
      {specs.map((spec) => {
        if (spec.DishSpecs.key === 'cold') {
          return (
            <div
              className='flex h-[2.125rem] items-center gap-1'
              key={spec.DishSpecs.id}
            >
              <IconSnowflake
                className='text-text-default'
                key={spec.DishSpecs.id}
                size={16}
              />
              <span className='text-title-default text-sm font-medium'>
                {spec.DishSpecs.title}
              </span>
            </div>
          );
        }

        if (spec.DishSpecs.key === 'hot') {
          return (
            <div
              key={spec.DishSpecs.id}
              className='flex h-[2.125rem] items-center gap-1'
            >
              <IconFlame
                className='text-text-default'
                key={spec.DishSpecs.id}
                size={17}
              />
              <span className='text-title-default text-sm font-medium'>
                {spec.DishSpecs.title}
              </span>
            </div>
          );
        }
        if (spec.DishSpecs.key === 'vegan') {
          return (
            <div
              key={spec.DishSpecs.id}
              className='flex h-[2.125rem] items-center gap-1'
            >
              <IconLeaf
                className='text-text-default mr-1'
                key={spec.DishSpecs.id}
                size={17}
              />
              <span className='text-title-default text-sm font-medium'>
                {spec.DishSpecs.title}
              </span>
            </div>
          );
        }
      })}
    </div>
  );
}
