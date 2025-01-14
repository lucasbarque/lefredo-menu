import Image from 'next/image';

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
            <Image
              key={spec.DishSpecs.id}
              src="/icon-snowflake.svg"
              width={16}
              height={16}
              alt={spec.DishSpecs.title}
              className="mr-1"
            />
          );
        }

        if (spec.DishSpecs.key === 'hot') {
          return (
            <Image
              key={spec.DishSpecs.id}
              src="/icon-flame.svg"
              width={17}
              height={17}
              className="mr-1"
              alt={spec.DishSpecs.title}
            />
          );
        }
        if (spec.DishSpecs.key === 'vegan') {
          return (
            <Image
              key={spec.DishSpecs.id}
              src="/icon-leaf.svg"
              width={15}
              height={15}
              className="mr-1"
              alt={spec.DishSpecs.title}
            />
          );
        }
      })}
    </div>
  );
}
