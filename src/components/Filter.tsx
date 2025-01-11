'use client';

import { useEffect, useState } from 'react';

import { Chip } from './Chip';
import { DishProps } from './Dish';

export interface SectionProps {
  id: string;
  title: string;
  Dish: DishProps[];
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
    <div className="z-10 flex gap-2 overflow-x-auto px-6 pt-4 pb-4">
      {sections.length > 0 &&
        sections.map(
          (section) =>
            section.Dish.length > 0 && (
              <Chip
                key={section.id}
                title={section.title}
                isSelected={sectionIdSelected === section.id}
                onClick={() => handleClickFilter(section.id)}
              />
            ),
        )}
    </div>
  );
}
