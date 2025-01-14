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
}

export async function Sections({ menuId }: SectionComponentProps) {
  if (!menuId) {
    notFound();
  }

  const sections = await fetchWrapper<SectionProps[]>(
    `api/sections?menuId=${menuId}`,
  );
  if (sections.length === 0) {
    notFound();
  }

  return (
    <>
      {sections.length > 0 && (
        <div className="z-10 flex gap-2 overflow-x-auto px-6 pt-3 pb-3">
          {sections.map((section) => (
            <Chip key={section.id} title={section.title} />
          ))}
        </div>
      )}

      <Suspense fallback={<LoadingDishes />}>
        <DishesList sectionId={sections[0].id} />
      </Suspense>
    </>
  );
}
