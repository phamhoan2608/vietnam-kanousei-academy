import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_COOKIE } from "@/lib/auth";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(AUTH_COOKIE)?.value;

  let isAuth = false;
  if (token) {
    try {
      const decoded = JSON.parse(atob(token));
      isAuth = !!decoded?.username;
    } catch {
      isAuth = false;
    }
  }

  if (pathname.startsWith("/admin/dashboard") && !isAuth) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (pathname === "/admin" && isAuth) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/dashboard/:path*"],
};
