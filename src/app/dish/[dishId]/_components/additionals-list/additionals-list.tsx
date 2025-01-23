'use client';

import { AdditionalsListProps } from './additionals-list.types';
import * as RadioGroup from '@radix-ui/react-radio-group';

export function AdditionalsList({
  currentPriceValue,
  dishExtras,
  changeDish,
}: AdditionalsListProps) {
  function handleChange(value: string) {
    changeDish((state) => ({
      ...state,
      price: Number(value) + currentPriceValue,
    }));
  }

  return (
    <form>
      <RadioGroup.Root
        className="flex flex-col gap-2"
        defaultValue="0"
        aria-label="View density"
        onValueChange={(value) => handleChange(value)}
      >
        {dishExtras.map((extra) => (
          <div className="flex items-center" key={extra.id}>
            <RadioGroup.Item
              className="size-[0.813rem] data-[state=checked]:border-brand-primary cursor-default rounded-full bg-white border border-text-default outline-none hover:bg-violet3 focus:border-brand-primary"
              value={String(extra.price)}
              id={String(extra.id)}
            >
              <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[7px] after:rounded-full after:bg-brand-primary" />
            </RadioGroup.Item>
            <label
              className="pl-1 text-sm font-medium leading-none text-text-default"
              htmlFor={String(extra.id)}
            >
              {extra.title} - R$
              {' ' +
                new Intl.NumberFormat('pt-BR', {
                  currency: 'BRL',
                  minimumFractionDigits: 2,
                }).format(extra.price / 100)}
            </label>
          </div>
        ))}

        <div className="flex items-center">
          <RadioGroup.Item
            className="size-[0.813rem] cursor-default rounded-full data-[state=checked]:border-brand-primary  bg-white border border-text-default outline-none hover:bg-violet3 focus:border-brand-primary"
            value="0"
            id="r3"
          >
            <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[7px] after:rounded-full after:bg-brand-primary" />
          </RadioGroup.Item>
          <label
            className="pl-1 text-sm font-medium leading-none text-text-default"
            htmlFor="r3"
          >
            Nenhum
          </label>
        </div>
      </RadioGroup.Root>
    </form>
  );
}
