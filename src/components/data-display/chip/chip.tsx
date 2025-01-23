import { forwardRef } from 'react';

import clsx from 'clsx';

import { ChipProps } from './chip.types';
import { useChip } from './use-chip';

export const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  ({ id, title, isActive = false, ...rest }, ref) => {
    const { handleClick } = useChip({ id });

    return (
      <button
        ref={ref}
        onClick={handleClick}
        className={clsx(
          'h-[2.063rem] whitespace-nowrap rounded-2xl border px-4 text-sm font-medium transition-colors',
          {
            'bg-brand-primary text-chip-title-active': isActive,
            'bg-chip-background text-chip-title': !isActive,
          },
        )}
        {...rest}
      >
        {title}
      </button>
    );
  },
);

Chip.displayName = 'Chip';
