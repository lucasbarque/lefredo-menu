import { ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isActive?: boolean;
}

export function ChipDetails({ title, isActive = false, ...rest }: ChipProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'h-[2.063rem] whitespace-nowrap rounded-2xl border px-4 text-sm font-medium transition-colors',
        {
          'bg-brand-primary text-chip-title-active ': isActive,
          'bg-chip-background text-chip-title ': !isActive,
        },
      )}
    >
      {title}
    </button>
  );
}
