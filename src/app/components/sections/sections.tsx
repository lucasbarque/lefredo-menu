import { Suspense } from 'react';

import { notFound } from 'next/navigation';

import { DishesList } from '../../../components/DishesList';
import { SectionsList } from '../../../components/SectionsList';
import { LoadingDishes } from '../../../components/data-display/loading-dishes/loading-dishes';
import { SectionComponentProps, SectionProps } from './sections.types';
import { fetchWrapper } from '@/utils/fetchWrapper';

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
