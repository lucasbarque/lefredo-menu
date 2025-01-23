import { type NextRequest, NextResponse } from 'next/server';

import axios from '@/lib/axios';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const menuId = searchParams.get('menuId');

  try {
    if (!menuId) {
      return new NextResponse('Invalid params.', { status: 400 });
    }

    const sections = await axios.get('sections', {
      params: { menuId },
    });

    return NextResponse.json(sections.data);
  } catch (error) {
    console.error('[MENU_GET]', error);
    return NextResponse.json(null);
  }
}
