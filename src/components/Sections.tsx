import { Suspense } from 'react';

import { notFound } from 'next/navigation';

import { DishesList } from './DishesList';
import { LoadingDishes } from './LoadingDishes';
import { SectionsList } from './SectionsList';
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

  if (!sections || sections.length === 0) {
    notFound();
  }

  const currentSection = sectionId ? sectionId : sections[0].id;

  return (
    <>
      {sections.length > 0 && (
        <SectionsList currentSection={currentSection} sections={sections} />
      )}
      <Suspense fallback={<LoadingDishes />}>
        <DishesList sectionId={!sectionId ? sections[0].id : sectionId} />
      </Suspense>
    </>
  );
}
