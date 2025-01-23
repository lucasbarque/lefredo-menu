import { ButtonHTMLAttributes } from 'react';

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  title: string;
  isActive?: boolean;
}

export interface useChipProps {
  id: string;
}
