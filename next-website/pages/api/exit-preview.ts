import { draftMode } from 'next/headers';

import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export function GET(request: NextRequest) {
    const slug = request.nextUrl.searchParams.get('slug');
    draftMode().disable();
    redirect(slug ?? '/');
}
