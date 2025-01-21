import React, { ButtonHTMLAttributes, forwardRef } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import clsx from 'clsx';

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  title: string;
  isActive?: boolean;
}

export const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  ({ id, title, isActive = false, ...rest }, ref) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    function handleClick() {
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      current.set('sectionId', id);
      const search = current.toString();
      const query = search ? search : '';
      router.push(`${pathname}?${query}`);
    }

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
