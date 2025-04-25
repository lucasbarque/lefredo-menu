'use server';

import { GetSectionsParams, getSections } from '@/http/api';

const REVALIDATE_TIME = 60 * 10; // 10 minutes

export async function getSectionsAPI({ menuId }: GetSectionsParams) {
  const response = await getSections(
    { menuId },
    {
      next: {
        revalidate: REVALIDATE_TIME,
      },
    }
  );

  return response;
}
