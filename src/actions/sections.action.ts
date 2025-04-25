'use server';

import { GetAllSectionsParams, getAllSections } from '@/http/api';

const REVALIDATE_TIME = 60 * 10; // 10 minutes

export async function getSectionsAPI({ menuId }: GetAllSectionsParams) {
  const response = await getAllSections(
    { menuId },
    {
      next: {
        revalidate: REVALIDATE_TIME,
      },
    }
  );

  return response;
}
