import { ButtonHTMLAttributes } from 'react';

interface ButtonTagProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isSelected?: boolean;
}

export function ButtonTag({
  title,
  isSelected = false,
  ...rest
}: ButtonTagProps) {
  return (
    <button
      {...rest}
      className={`h-[2.3125rem] whitespace-nowrap rounded-full border border-yellow-500 bg-white px-6 text-medium-xs text-yellow-500 shadow-sm transition-colors
      ${isSelected && '!bg-yellow-500 !text-white '}
      `}
    >
      {title}
    </button>
  );
}
