import { notFound } from 'next/navigation';

import { SearchParams } from './page.types';
import { DishProps } from '@/app/api/dish/dishes.types';
import { SectionProps } from '@/app/api/sections/sections.types';
import { fetchWrapper } from '@/utils/fetchWrapper';

export async function usePage({ searchParams }: SearchParams) {
  if (!searchParams.menuId) notFound();

  const sections = await fetchWrapper<SectionProps[]>(
    `api/sections?menuId=${searchParams.menuId}`,
  );

  if (!sections || sections.length === 0) notFound();

  const currentSection = searchParams?.sectionId || sections[0].id;

  const dishes = await fetchWrapper<DishProps[]>(
    `api/dish?sectionId=${searchParams.sectionId}`,
  );

  return {
    sections,
    currentSection,
    dishes,
  };
}
