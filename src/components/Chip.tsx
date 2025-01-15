'use client';

import { ButtonHTMLAttributes } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import clsx from 'clsx';

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  title: string;
  isActive?: boolean;
}

export function Chip({ id, title, isActive = false, ...rest }: ChipProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleClick() {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
    current.set('sectionId', id);
    const search = current.toString();
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`);
  }

  return (
    <button
      onClick={handleClick}
      className={clsx(
        'h-[2.063rem] whitespace-nowrap rounded-2xl border px-4 text-sm font-medium transition-colors',
        {
          'bg-brand-primary text-chip-title-active ': isActive,
          'bg-chip-background text-chip-title ': !isActive,
        },
        { ...rest },
      )}
    >
      {title}
    </button>
  );
}
