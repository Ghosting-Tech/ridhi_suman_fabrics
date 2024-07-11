"use server";

import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export { default } from "next-auth/middleware";

const secret = process.env.NEXT_PUBLIC_NEXTAUTH_SECRET;

export async function middleware(request) {
  // const token = await getToken({ req: request, secret });
  // const url = request.nextUrl;

  // const allowedPaths = ["/", "/products", "/sets", "/categories"];
  // const isAllowedPath = allowedPaths.some((path) =>
  //   url.pathname.startsWith(path)
  // );

  // // Redirect to login if no token and trying to access restricted paths
  // if (!token && !isAllowedPath) {
  //   return NextResponse.redirect(new URL("/onBoard", request.url));
  // }

  // // Redirect to login if no token and trying to access admin or user paths
  // if (
  //   !token &&
  //   (url.pathname.startsWith("/admin") || url.pathname.startsWith("/user"))
  // ) {
  //   return NextResponse.redirect(new URL("/onBoard", request.url));
  // }

  // // Redirect authenticated users away from login page
  // if (token && url.pathname.startsWith("/onBoard")) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  // // Redirect users with role "user" away from admin pages
  // if (token && token.role === "user" && url.pathname.startsWith("/admin")) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  // // Redirect users with role "admin" away from user-specific pages
  // if (token && token.role === "admin" && url.pathname.startsWith("/user")) {
  //   return NextResponse.redirect(new URL("/admin", request.url));
  // }

  // return NextResponse.next();

  try {
    const token = await getToken({ req: request, secret });
    const url = request.nextUrl;

    // Create a response object to modify headers
    const res = NextResponse.next();

    // Add CORS headers
    res.headers.append("Access-Control-Allow-Credentials", "true");
    res.headers.append("Access-Control-Allow-Origin", "https://example.com"); // Replace with your actual origin
    res.headers.append(
      "Access-Control-Allow-Methods",
      "GET,DELETE,PATCH,POST,PUT,OPTIONS"
    );
    res.headers.append(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );

    // Handle preflight request
    if (request.method === "OPTIONS") {
      return res;
    }

    console.log(token); // Debugging: remove or comment out in production

    // const allowedPaths = ["/", "/products", "/sets", "/categories"];
    // const isAllowedPath = allowedPaths.some((path) =>
    //   url.pathname.startsWith(path)
    // );

    // // Redirect to login if no token and trying to access restricted paths
    // if (!token && !isAllowedPath) {
    //   return NextResponse.redirect(new URL("/onBoard", request.url));
    // }

    // // Redirect to login if no token and trying to access admin or user paths
    // if (
    //   !token &&
    //   (url.pathname.startsWith("/admin") || url.pathname.startsWith("/user"))
    // ) {
    //   return NextResponse.redirect(new URL("/onBoard", request.url));
    // }

    // // Redirect authenticated users away from login page
    // if (token && url.pathname.startsWith("/onBoard")) {
    //   return NextResponse.redirect(new URL("/", request.url));
    // }

    // // Redirect users with role "user" away from admin pages
    // if (token && token.role === "user" && url.pathname.startsWith("/admin")) {
    //   return NextResponse.redirect(new URL("/", request.url));
    // }

    // // Redirect users with role "admin" away from user-specific pages
    // if (token && token.role === "admin" && url.pathname.startsWith("/user")) {
    //   return NextResponse.redirect(new URL("/admin", request.url));
    // }

    return res;
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.redirect(new URL("/error", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/products/:path*",
    "/sets/:path*",
    "/categories/:path*",
    "/onBoard",
    "/admin/:path*",
    "/user/:path*",
  ],
};
