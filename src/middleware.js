import { NextRequest, NextResponse } from "next/server";

export default function middleware(req) {
  // Parse cookies from the request
  const cookies = req.cookies.get('session');

  // Convert the cookies object to a JSON string for logging
//   const cookiesJSON = JSON.parse(cookies);
  console.log(req.url);

  // Check if the user is logged in
  if (!cookies.name === 'session' && req.url.includes('/home')) {
    // If the user is not logged in and the requested URL is '/home',
    // redirect to the lgoin
    return NextResponse.redirect('http://localhost:3000/');
  }

  // If the user is logged in, or if the requested URL is not '/home',
  // allow the request to proceed
  return NextResponse.next();
}
