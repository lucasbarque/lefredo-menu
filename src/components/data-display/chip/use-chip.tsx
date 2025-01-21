import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useChipProps } from './chip.types';

export const useChip = ({ id }: useChipProps) => {
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

  return {
    handleClick,
  };
};
