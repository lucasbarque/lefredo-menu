'use client';

import { useRouter } from 'next/navigation';

import { ArrowLeft } from 'react-feather';

export function ButtonBack({ ...rest }) {
  const router = useRouter();

  return (
    <button {...rest} onClick={() => router.back()}>
      <ArrowLeft size={18} strokeWidth={3} color="#fff" />
    </button>
  );
}
