import {
  IconClockHour4,
  IconFlame,
  IconLeaf,
  IconSnowflake,
} from '@tabler/icons-react';

interface DishSpecs {
  DishSpecs: {
    id: string;
    title: string;
    key: 'cold' | 'hot' | 'vegan';
  };
}

interface SpecProps {
  specs: DishSpecs[];
  prepTime: number | null;
}

export function SpecsDetails({ specs, prepTime }: SpecProps) {
  return (
    <div className="bg-tag-details-background w-full flex items-center gap-4 justify-center rounded-2xl">
      {prepTime && (
        <div className="flex gap-1 items-center h-[2.125rem]">
          <IconClockHour4 className="text-text-default" size={16} />
          <span className="text-sm font-medium text-title-default">
            {prepTime} Minuto{prepTime > 1 && 's'}
          </span>
        </div>
      )}
      {specs.map((spec) => {
        if (spec.DishSpecs.key === 'cold') {
          return (
            <div
              className="flex gap-1 items-center h-[2.125rem]"
              key={spec.DishSpecs.id}
            >
              <IconSnowflake
                className="text-text-default"
                key={spec.DishSpecs.id}
                size={16}
              />
              <span className="text-sm font-medium text-title-default">
                {spec.DishSpecs.title}
              </span>
            </div>
          );
        }

        if (spec.DishSpecs.key === 'hot') {
          return (
            <div
              key={spec.DishSpecs.id}
              className="flex gap-1 items-center h-[2.125rem]"
            >
              <IconFlame
                className="text-text-default"
                key={spec.DishSpecs.id}
                size={17}
              />
              <span className="text-sm font-medium text-title-default">
                {spec.DishSpecs.title}
              </span>
            </div>
          );
        }
        if (spec.DishSpecs.key === 'vegan') {
          return (
            <div
              key={spec.DishSpecs.id}
              className="flex gap-1 items-center h-[2.125rem]"
            >
              <IconLeaf
                className="mr-1 text-text-default"
                key={spec.DishSpecs.id}
                size={17}
              />
              <span className="text-sm font-medium text-title-default">
                {spec.DishSpecs.title}
              </span>
            </div>
          );
        }
      })}
    </div>
  );
}
