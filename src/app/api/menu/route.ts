import { type NextRequest, NextResponse } from 'next/server';

import axios from '@/lib/axios';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const menuId = searchParams.get('menuId');
  const restaurantId = searchParams.get('restaurantId');

  try {
    if (!menuId || !restaurantId) {
      return new NextResponse('Invalid params.', { status: 400 });
    }

    const sections = await axios.get('restaurants', {
      params: { menuId: menuId, restaurantId },
    });

    return NextResponse.json(sections.data);
  } catch (error) {
    console.error('[MENU_GET]', error);
    return NextResponse.json(null);
  }
}
