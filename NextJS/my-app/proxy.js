import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function proxy(request) {  ///middleware

  // const cookieStore = await cookies()
  // const token = cookieStore.get('session'); //// token

  console.log(request.headers.authorization)

  // if(!token){

  //       return NextResponse.redirect(new URL('/login', request.url))
  // }


  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\.png$).*)',
    '/about/:path*',
    '/dashboard/:path*',
  ],
}
// /dashboard
// /settings
// /posts

/// aboutus
