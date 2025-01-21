'use client';

import { useEffect, useRef } from 'react';

import { Chip } from '@/components/data-display/chip';

import { SectionProps } from './Sections';

interface SectionsListProps {
  sections: SectionProps[];
  currentSection: string;
}

export function SectionsList({ sections, currentSection }: SectionsListProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

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

  return (
    <div
      ref={containerRef}
      className="z-10 flex overflow-x-auto px-6 pt-3 pb-3 gap-2"
    >
      {sections.map((section) => (
        <Chip
          key={section.id}
          id={section.id}
          title={section.title}
          isActive={currentSection === section.id}
          ref={(element) => {
            if (element) {
              buttonRefs.current.set(section.id, element);
            }
          }}
        />
      ))}
    </div>
  );
}
