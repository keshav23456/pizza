import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  // Protected routes
  const isProtectedRoute = nextUrl.pathname.startsWith('/dashboard') || 
                          nextUrl.pathname.startsWith('/orders')

  // Redirect unauthenticated users from protected routes
  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL('/auth/signin', nextUrl))
  }

  // Redirect authenticated users from signin page to dashboard
  if (nextUrl.pathname === '/auth/signin' && isLoggedIn) {
    return NextResponse.redirect(new URL('/dashboard', nextUrl))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}