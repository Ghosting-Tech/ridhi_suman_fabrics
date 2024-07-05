import dbConnect from "@/config/db";
import User from "@/model/user";
import { NextResponse } from "next/server";

//Get Single users by ID
export async function GET(request, { params }) {
  try {
    const { id } = params;
    await dbConnect();
    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

// Update Single user by ID
export async function PUT(request, { params }) {
    try {
      await dbConnect();
  
      const { id } = params;
      const data = await request.json();
  
      if (!id) {
        return NextResponse.json(
          { error: "Invalid user id" },
          { status: 400 }
        );
      }
      const user = await User.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
      });
  
      if (!user) {
        return NextResponse.json(
          { error: "User not found" },
          { status: 404 }
        );
      }
  
      return NextResponse.json(user, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
  }