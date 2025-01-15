import { IconFlame, IconLeaf, IconSnowflake } from '@tabler/icons-react';

interface DishSpecs {
  DishSpecs: {
    id: string;
    title: string;
    key: 'cold' | 'hot' | 'vegan' | 'highlighted';
  };
}

interface SpecProps {
  specs: DishSpecs[];
}

export function Specs({ specs }: SpecProps) {
  return (
    <div className="absolute right-0 top-3 flex flex-col items-end gap-2">
      {specs.map((spec) => {
        if (spec.DishSpecs.key === 'highlighted') {
          return (
            <div
              key={spec.DishSpecs.id}
              className="font-medium text-[0.625rem] bg-brand-primary px-2 text-flag-text h-[1.375rem] rounded-tl-md rounded-bl-md flex items-center justify-center"
            >
              {spec.DishSpecs.title}
            </div>
          );
        }

        if (spec.DishSpecs.key === 'cold') {
          return (
            <IconSnowflake
              className="mr-1 text-text-default"
              key={spec.DishSpecs.id}
              size={16}
            />
          );
        }

        if (spec.DishSpecs.key === 'hot') {
          return (
            <IconFlame
              className="mr-1 text-text-default"
              key={spec.DishSpecs.id}
              size={17}
            />
          );
        }
        if (spec.DishSpecs.key === 'vegan') {
          return (
            <IconLeaf
              className="mr-1 text-text-default"
              key={spec.DishSpecs.id}
              size={17}
            />
          );
        }
      })}
    </div>
  );
}
