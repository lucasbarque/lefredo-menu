'use client';

import { Chip } from '@/components/data-display/chip';

import { SectionsListProps } from './sections-list.types';
import useSectionsList from './use-sections-list';

export function SectionsList({ sections, currentSection }: SectionsListProps) {
  const { containerRef, buttonRefs } = useSectionsList({ currentSection });

  return (
    <div
      ref={containerRef}
      className='z-10 flex gap-2 overflow-x-auto px-6 pt-3 pb-3'
    >
      {sections.map((section) => (
        <Chip
          key={section.slug}
          section={section.slug}
          title={section.title}
          isActive={currentSection === section.slug}
          ref={(element) => {
            if (element) {
              buttonRefs.current.set(section.slug, element);
            }
          }}
        />
      ))}
    </div>
  );
}
