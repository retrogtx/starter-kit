import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { betterFetch } from "@better-fetch/fetch"
// Assuming the session structure includes at least an indicator of presence
// Adjust this type based on the actual session structure if needed
type Session = { user?: unknown; [key: string]: unknown } | null

export async function middleware(request: NextRequest) {
  // Fetch session using betterFetch as shown in docs
  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: request.nextUrl.origin,
      headers: {
        cookie: request.headers.get("cookie") || "",
      },
      cache: "no-store", // Ensure session is checked fresh
    }
  )

  console.log("Middleware session:", session)

  const isDashboard = request.nextUrl.pathname.startsWith('/dashboard')


  // If no session and trying to access dashboard, redirect to signin
  if (!session && isDashboard) {
    console.log("Redirecting to signin (no session)")
    return NextResponse.redirect(new URL('/signin', request.url))
  }

  // If session exists and trying to access signin or root, redirect to dashboard
  if (session && request.nextUrl.pathname === '/signin') {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  if (session && request.nextUrl.pathname === '/') {
    console.log("Redirecting to dashboard (session exists, at signin/root)")
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/signin", "/"],
}
