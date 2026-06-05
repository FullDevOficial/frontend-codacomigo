import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const SIGN_IN_ROUTE = '/sign-in';
const DEFAULT_PAGE_REDIRECT = '/';

const PUBLIC_ROUTES = [{ path: '/sign-in', whenAuthenticated: 'redirect' }] as const;

function isIgnoredRoute(pathname: string) {
  '';
  return pathname.startsWith('/_next') || pathname.startsWith('/api/auth') || pathname.includes('.');
}

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (isIgnoredRoute(pathname)) {
    return NextResponse.next();
  }

  const token = await getToken({ req });
  const isAuthenticated = !!token;

  const publicRoute = PUBLIC_ROUTES.find((route) => route.path === pathname);

  if (!isAuthenticated && !publicRoute) {
    return NextResponse.redirect(new URL(SIGN_IN_ROUTE, req.url));
  }

  if (isAuthenticated && publicRoute?.whenAuthenticated === 'redirect') {
    return NextResponse.redirect(new URL(DEFAULT_PAGE_REDIRECT, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
