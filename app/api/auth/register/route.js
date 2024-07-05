import dbConnect from "@/config/db";
import User from "@/model/user";
import { NextResponse } from "next/server";


export async function POST(request) {
  try {
    await dbConnect();

    const data = await request.json();
    const user = await User.create(data);

    return NextResponse.json(user, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
