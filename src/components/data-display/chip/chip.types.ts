import { ButtonHTMLAttributes } from 'react';

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  section: string;
  title: string;
  isActive?: boolean;
}
