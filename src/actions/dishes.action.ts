'use server';

import { getDishById, getDishesBySlug } from '@/http/api';

const REVALIDATE_TIME = 60 * 10; // 10 minutes

export async function getDishesBySlugAPI(slug: string, menuId: string) {
  const response = await getDishesBySlug(slug, menuId, {
    next: {
      revalidate: REVALIDATE_TIME,
    },
  });

  return response;
}

export async function getDishByIdAPI(id: string) {
  const response = await getDishById(id, {
    next: {
      revalidate: REVALIDATE_TIME,
    },
  });

  return response;
}
