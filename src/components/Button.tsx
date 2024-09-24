import { ButtonHTMLAttributes } from 'react';

import { ChevronUp } from 'react-feather';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isSelected?: boolean;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="white space-nowrap flex h-14 items-center justify-center gap-2 rounded-2xl border border-yellow-500 bg-white px-10 text-medium-xs text-yellow-500 shadow-sm"
    >
      <ChevronUp color="#F8B602" />
      {title}
    </button>
  );
}
