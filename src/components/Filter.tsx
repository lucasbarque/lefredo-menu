'use client';

import { useEffect, useState } from 'react';

import { CardProps } from './Card';
import { Chip } from './Chip';

export interface SectionProps {
  id: string;
  title: string;
  Dish: CardProps[];
}

interface FilterProps {
  sections: SectionProps[];
}

export function Filter({ sections = [] }: FilterProps) {
  const [sectionIdSelected, setSectionIdSelected] = useState('');

  function handleClickFilter(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setSectionIdSelected(sectionId);
  }

  useEffect(() => {
    setSectionIdSelected(sections[0].id);
  }, []);

  return (
    <div className="z-10 flex gap-2 overflow-x-auto px-6 pt-3 pb-3">
      {sections.length > 0 &&
        sections.map(
          (section) =>
            section.Dish.length > 0 && (
              <Chip
                key={section.id}
                title={section.title}
                isActive={sectionIdSelected === section.id}
                onClick={() => handleClickFilter(section.id)}
              />
            ),
        )}
    </div>
  );
}
