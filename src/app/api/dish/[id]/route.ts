import { NextRequest, NextResponse } from 'next/server';

import axios from '@/lib/axios';

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    if (!params.id) {
      return new NextResponse('Invalid params.', { status: 400 });
    }

    const dish = await axios.get(`dishes/${params.id}`);

    return NextResponse.json(dish.data);
  } catch (error) {
    console.error('[DISH_GET]', error);
    return NextResponse.json(null);
  }
}
