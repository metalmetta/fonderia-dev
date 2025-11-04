import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  // Only run auth middleware for auth-related routes
  // This prevents unnecessary Supabase client creation during build/static page generation
  const authRoutes = ['/auth/', '/dashboard/', '/profile/', '/api/'];
  const isAuthRoute = authRoutes.some(route => request.nextUrl.pathname.startsWith(route));

  if (isAuthRoute) {
    return await updateSession(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

