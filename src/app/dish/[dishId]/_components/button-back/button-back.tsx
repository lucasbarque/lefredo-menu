'use client';

import { ArrowLeft } from 'react-feather';

import { ButtonBackProps } from './button-back.types';
import useButtonBack from './use-button-back';
import { cn } from '@/utils/cn';

export function ButtonBack({ ...rest }: ButtonBackProps) {
  const { router } = useButtonBack();

  return (
    <button
      {...rest}
      className={cn(
        'flex h-9 w-9 items-center justify-center rounded-lg bg-brand-primary',
        rest.className,
      )}
      onClick={() => router.back()}
    >
      <ArrowLeft size={18} strokeWidth={3} color="#fff" />
    </button>
  );
}
