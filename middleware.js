import { NextResponse } from 'next/server';

export function middleware(request) {
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/home', '/about', '/tech-stack', '/experience', '/certificates', '/contact'],
};
