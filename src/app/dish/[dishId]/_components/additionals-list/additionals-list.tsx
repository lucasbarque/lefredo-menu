'use client';

import { Checkbox } from '../checkbox';
import { AdditionalsListProps } from './additionals-list.types';
import { useAdditionalsList } from './use-additionals-list';

export function AdditionalsList({
  dishPrice,
  dishExtras,
  setPrice,
}: AdditionalsListProps) {
  const { handleCheckboxChange, selectedExtras } = useAdditionalsList({
    dishPrice,
    setPrice,
    dishExtras,
  });

  return (
    <form className='flex flex-col gap-1'>
      {dishExtras.map((extra) => (
        <Checkbox
          key={extra.id}
          value={extra.price}
          label={`${extra.title} - R$ ${new Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            minimumFractionDigits: 2,
          }).format(extra.price / 100)}`}
          id={extra.id}
          checked={selectedExtras.includes(extra.id)}
          onChange={(e) =>
            handleCheckboxChange(extra.id, extra.price, e.target.checked)
          }
        />
      ))}
      <Checkbox
        value={0}
        label={`Nenhum`}
        id='none'
        checked={selectedExtras.includes('none')}
        onChange={(e) => handleCheckboxChange('none', 0, e.target.checked)}
      />
    </form>
  );
}
