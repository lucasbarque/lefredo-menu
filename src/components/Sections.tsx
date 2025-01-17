import { Suspense } from 'react';

import { notFound } from 'next/navigation';

import { Chip } from './Chip';
import { DishesList } from './DishesList';
import { LoadingDishes } from './LoadingDishes';
import { fetchWrapper } from '@/utils/fetchWrapper';

export interface SectionProps {
  id: string;
  title: string;
}

interface SectionComponentProps {
  menuId: string | undefined;
  sectionId: string | undefined;
}

export async function Sections({ menuId, sectionId }: SectionComponentProps) {
  if (!menuId) {
    notFound();
  }

  const sections = await fetchWrapper<SectionProps[]>(
    `api/sections?menuId=${menuId}`,
  );

  if (!sections) {
    notFound();
  }

  const currentSection = sectionId ? sectionId : sections[0].id;

  return (
    <>
      {sections.length > 0 && (
        <div className="z-10 flex gap-2 overflow-x-auto px-6 pt-3 pb-3">
          {sections.map((section) => (
            <Chip
              key={section.id}
              id={section.id}
              title={section.title}
              isActive={currentSection === section.id}
            />
          ))}
        </div>
      )}
      <Suspense fallback={<LoadingDishes />}>
        <DishesList sectionId={!sectionId ? sections[0].id : sectionId} />
      </Suspense>
    </>
  );
}
