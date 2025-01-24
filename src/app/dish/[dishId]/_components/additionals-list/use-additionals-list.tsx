import { useEffect, useState } from 'react';

import { UseAdditionalsListProps } from './additionals-list.types';

export function useAdditionalsList({
  dishPrice,
  setPrice,
  dishExtras,
}: UseAdditionalsListProps) {
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  useEffect(() => {
    const selectedPrices = selectedExtras.map(
      (extraId) => dishExtras.find((extra) => extra.id === extraId)?.price || 0,
    );
    const totalExtrasPrice = selectedPrices.reduce(
      (acc, extraPrice) => acc + extraPrice,
      0,
    );
    setPrice(dishPrice + totalExtrasPrice);
  }, [selectedExtras, dishExtras, dishPrice, setPrice]);

  function handleCheckboxChange(id: string, price: number, checked: boolean) {
    if (id === 'none') {
      if (checked) {
        setSelectedExtras(['none']);
      } else {
        setSelectedExtras([]);
      }
    } else {
      setSelectedExtras((prev) => {
        const updatedExtras = checked
          ? [...prev.filter((item) => item !== 'none'), id]
          : prev.filter((item) => item !== id);

        return updatedExtras;
      });
    }
  }
  return {
    handleCheckboxChange,
    selectedExtras,
  };
}
