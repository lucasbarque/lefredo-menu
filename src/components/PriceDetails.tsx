'use client';

import { useContext, useEffect } from 'react';

import { Line } from './Line';
import { DishContext } from '@/contexts/DishContext';

interface PriceDetailsProps {
  currentPriceValue: number;
}

export function PriceDetails({ currentPriceValue }: PriceDetailsProps) {
  const { price, changePrice } = useContext(DishContext);

  useEffect(() => {
    changePrice(currentPriceValue);
  }, []);

  return (
    <div className="px-6 text-center pb-4">
      <Line />
      <p className="text-sm pt-4 font-bold title-default">Valor</p>
      <span className="font-extrabold">
        R$
        {' ' +
          new Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            minimumFractionDigits: 2,
          }).format(price / 100)}
      </span>
    </div>
  );
}
