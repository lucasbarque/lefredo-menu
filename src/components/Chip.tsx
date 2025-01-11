import { ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isSelected?: boolean;
}

export function Chip({ title, isSelected = false, ...rest }: ChipProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'h-[2.063rem] whitespace-nowrap rounded-full border px-4 text-medium-xs transition-colors',
        {
          'bg-brand-primary text-chip-title-active ': isSelected,
          'bg-chip-background text-chip-title ': !isSelected,
        },
      )}
    >
      {title}
    </button>
  );
}
