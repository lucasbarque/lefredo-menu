'use client';

import { ReactNode, createContext, useState } from 'react';

interface DishContextProps {
  price: number;
  changePrice: (newPrice: number) => void;
}

const DishContext = createContext<DishContextProps>({} as DishContextProps);

const DishProvider = ({ children }: { children: ReactNode }) => {
  const [price, setPrice] = useState(0);

  function changePrice(newPrice: number) {
    setPrice(newPrice);
  }

  return (
    <DishContext.Provider
      value={{
        price,
        changePrice,
      }}
    >
      {children}
    </DishContext.Provider>
  );
};

export { DishContext, DishProvider };
