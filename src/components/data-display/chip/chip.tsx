import { forwardRef } from 'react';

import clsx from 'clsx';
import Link from 'next/link';

import { ChipProps } from './chip.types';

export const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  ({ section, restaurant, title, isActive = false, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'h-[2.063rem] rounded-2xl px-4 text-sm font-medium whitespace-nowrap transition-colors',
          {
            'bg-brand-primary text-chip-title-active': isActive,
            'bg-chip-background text-chip-title': !isActive,
          }
        )}
        {...rest}
      >
        <Link href={`?restaurant=${restaurant}&section=${section}`}>
          {title}
        </Link>
      </button>
    );
  }
);

Chip.displayName = 'Chip';
