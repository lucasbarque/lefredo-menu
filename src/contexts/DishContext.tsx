'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

interface DishContextProps {
  dish: {
    title: string;
    price: number;
  };
  changePrice: (newPrice: number) => void;
  changeTitle: (newTitle: string) => void;
  currentFlavorId: string | null;
  setCurrentFlavorId: Dispatch<SetStateAction<string | null>>;
}

const DishContext = createContext<DishContextProps>({} as DishContextProps);

const DishProvider = ({ children }: { children: ReactNode }) => {
  const [dish, setDish] = useState({
    title: '',
    price: 0,
  });
  const [currentFlavorId, setCurrentFlavorId] = useState<string | null>(null);

  function changePrice(newPrice: number) {
    setDish((oldState) => ({ ...oldState, price: newPrice }));
  }

  function changeTitle(newTitle: string) {
    setDish((oldState) => ({ ...oldState, title: newTitle }));
  }

  return (
    <DishContext.Provider
      value={{
        dish,
        changePrice,
        changeTitle,
        currentFlavorId,
        setCurrentFlavorId,
      }}
    >
      {children}
    </DishContext.Provider>
  );
};

export { DishContext, DishProvider };
