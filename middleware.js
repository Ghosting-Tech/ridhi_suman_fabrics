"use server";

import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export { default } from "next-auth/middleware";

const secret = process.env.NEXT_PUBLIC_NEXTAUTH_SECRET;

export async function middleware(request) {
  const token = await getToken({ req: request, secret });
  const url = request.nextUrl;

  // console.log(token);

  const allowedPaths = ["/", "/products", "/sets", "/categories"];
  const isAllowedPath = allowedPaths.some((path) =>
    url.pathname.startsWith(path)
  );

  // Redirect to login if no token and trying to access restricted paths
  if (!token && !isAllowedPath) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Redirect to login if no token and trying to access admin or user paths
  if (
    !token &&
    (url.pathname.startsWith("/admin") || url.pathname.startsWith("/user"))
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Redirect authenticated users away from login page
  if (token && url.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirect users with role "user" away from admin pages
  if (token && token.role === "user" && url.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirect users with role "admin" away from user-specific pages
  if (token && token.role === "admin" && url.pathname.startsWith("/user")) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/products/:path*",
    "/sets/:path*",
    "/categories/:path*",
    "/login",
    "/admin/:path*",
    "/user/:path*",
  ],
};
