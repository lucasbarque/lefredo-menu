import { type NextRequest, NextResponse } from 'next/server';

import axios from '@/lib/axios';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const sectionId = searchParams.get('sectionId');

  try {
    if (!sectionId) {
      return new NextResponse('Invalid params.', { status: 400 });
    }

    const sections = await axios.get('dishes', {
      params: { sectionId },
    });

    return NextResponse.json(sections.data);
  } catch (error) {
    console.error('[DISH_GET]', error);
    return NextResponse.json(null);
  }
}
