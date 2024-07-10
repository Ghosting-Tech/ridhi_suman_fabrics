import dbConnect from "@/config/db";
import User from "@/model/user";
import { NextResponse } from "next/server";

//Get all users
export async function GET() {
  try {
    await dbConnect();

    const user = await User.find();

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    await dbConnect();

    const result = await User.deleteMany({});

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: "No users found to delete" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "All users deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: err.message || "Server Error" },
      { status: 500 }
    );
  }
}
