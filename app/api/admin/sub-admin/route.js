import { checkAuthorization } from "@/config/checkAuthorization";
import dbConnect from "@/config/db";
import User from "@/model/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const isAdmin = await checkAuthorization(req);

    if (isAdmin === "Unauthorized" || !isAdmin) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    const data = await req.json();

    if (!data) {
      return NextResponse.json("Invalid request payload", { status: 400 });
    }

    // // Database operations go here...
    await dbConnect();

    const subAdmin = await User.create(data);

    return NextResponse.json(subAdmin, { status: 200 });
  } catch (err) {
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}
