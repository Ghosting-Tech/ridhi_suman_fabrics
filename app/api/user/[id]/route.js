import { NextResponse } from "next/server";

import dbConnect from "@/config/db";

import User from "@/model/user";

//Get Single users by ID
export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (!id)
      return NextResponse.json({ error: "Invalid user id" }, { status: 400 });

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

    if (!id) {
      return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
    }

    const data = await request.json();

    if (!data) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    if (
      data.password ||
      data.email ||
      data.phone ||
      data.role ||
      data.otp ||
      data.verified
    ) {
      return NextResponse.json(
        {
          error: "You can't update password, email, phone, role, otp, verified",
        },
        { status: 400 }
      );
    }

    const user = await User.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
