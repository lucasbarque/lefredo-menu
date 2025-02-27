import { useEffect, useRef } from 'react';

import { useSearchParams } from 'next/navigation';

import { useSectionsListProps } from './sections-list.types';

export default function useSectionsList({ sections }: useSectionsListProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const searchParams = useSearchParams();
  const section = searchParams.get('section');
  const currentSection = section || sections[0].slug;

  useEffect(() => {
    if (!currentSection && !buttonRefs.current.has(currentSection)) return;

    const button = buttonRefs.current.get(currentSection);
    if (button && containerRef.current) {
      const containerScrollLeft = containerRef.current.scrollLeft;
      const containerOffsetLeft =
        containerRef.current.getBoundingClientRect().left;
      const buttonOffsetLeft = button.getBoundingClientRect().left;

      const targetScrollLeft =
        containerScrollLeft + (buttonOffsetLeft - containerOffsetLeft) - 24;

      containerRef.current.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      });
    }
  }, [currentSection]);

  return {
    containerRef,
    buttonRefs,
    currentSection,
  };
}
