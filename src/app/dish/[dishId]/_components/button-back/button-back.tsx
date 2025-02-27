'use client';

import { cn } from '@/lib/utils';
import { IconArrowLeft } from '@tabler/icons-react';

import { ButtonBackProps } from './button-back.types';
import useButtonBack from './use-button-back';

export function ButtonBack({ ...rest }: ButtonBackProps) {
  const { router } = useButtonBack();

  return (
    <button
      {...rest}
      className={cn(
        'bg-brand-primary flex h-9 w-9 items-center justify-center rounded-lg',
        rest.className
      )}
      onClick={() => router.back()}
    >
      <IconArrowLeft size={18} strokeWidth={3} color='#fff' />
    </button>
  );
}
