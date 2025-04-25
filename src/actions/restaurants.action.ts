'use server';

import { getRestaurantBySlug } from '@/http/api';

const REVALIDATE_TIME = 60 * 10; // 10 minutes

export async function getRestaurantBySlugAPI(id: string) {
  const response = await getRestaurantBySlug(id, {
    next: {
      revalidate: REVALIDATE_TIME,
    },
  });

  return response;
}
