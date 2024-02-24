import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req, res) {
  const sessionCookie = req.cookies.get('session');
//   const sessionCookie = true
  // console.log((req.url.includes('/')), req.url)

  if (!sessionCookie && (req.url.includes('/home'))) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  
  return NextResponse.next();
}