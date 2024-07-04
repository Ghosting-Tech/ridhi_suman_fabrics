"use server";
import { NextResponse } from "next/server";

export async function middleware(request) {
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
};
