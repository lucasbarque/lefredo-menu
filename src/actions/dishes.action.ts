'use server';

import { getDishById, getDishesBySlug } from '@/http/api';

const REVALIDATE_TIME = 60 * 10; // 10 minutes

export async function getDishesBySectionSlug(slug: string) {
  const response = await getDishesBySlug(slug, {
    next: {
      revalidate: REVALIDATE_TIME,
    },
  });

  return response;
}

export async function getDishDetailsById(id: string) {
  const response = await getDishById(id, {
    next: {
      revalidate: REVALIDATE_TIME,
    },
  });

  return response;
}
