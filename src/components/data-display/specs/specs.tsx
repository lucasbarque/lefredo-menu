import { DishSpecKey } from '@/http/api';
import { IconFlame, IconLeaf, IconSnowflake } from '@tabler/icons-react';

import { SpecProps } from './specs.types';

export function Specs({ specs }: SpecProps) {
  return (
    <div className='absolute top-3 right-0 flex flex-col items-end gap-2'>
      {specs.map((spec) => {
        if (spec.DishSpecs.key === DishSpecKey.highlited) {
          return (
            <div
              key={spec.DishSpecs.id}
              className='bg-brand-primary text-flag-text flex h-[1.375rem] items-center justify-center rounded-tl-md rounded-bl-md px-2 text-[0.625rem] font-medium'
            >
              {spec.DishSpecs.title}
            </div>
          );
        }

        if (spec.DishSpecs.key === DishSpecKey.cold) {
          return (
            <IconSnowflake
              className='text-text-default mr-1'
              key={spec.DishSpecs.id}
              size={16}
            />
          );
        }

        if (spec.DishSpecs.key === DishSpecKey.hot) {
          return (
            <IconFlame
              className='text-text-default mr-1'
              key={spec.DishSpecs.id}
              size={17}
            />
          );
        }
        if (spec.DishSpecs.key === DishSpecKey.vegan) {
          return (
            <IconLeaf
              className='text-text-default mr-1'
              key={spec.DishSpecs.id}
              size={17}
            />
          );
        }
      })}
    </div>
  );
}
