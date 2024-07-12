import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

import dbConnect from "@/config/db";

import User from "@/model/user";

const secret = process.env.NEXT_PUBLIC_NEXTAUTH_SECRET;

export async function GET(request, { params }) {
  try {
    const token = await getToken({ req: request, secret });

    const { id } = params;

    if (!id) return NextResponse.json("Invalid user id", { status: 400 });

    if (token._id !== id) {
      return NextResponse.json("Unauthorized Request", { status: 401 });
    }

    await dbConnect();

    const user = await User.findById(id)
      .select("-password -otp -updatedAt")
      .exec();

    if (!user) {
      return NextResponse.json("User not found", { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const token = await getToken({ req: request, secret });

    const { id } = params;

    if (!id) {
      return NextResponse.json("Invalid user id", { status: 400 });
    }

    if (token._id !== id) {
      return NextResponse.json("Unauthorized Request", { status: 401 });
    }

    await dbConnect();

    const data = await request.json();

    if (!data) {
      return NextResponse.json("Invalid data", { status: 400 });
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
      return NextResponse.json("User not found", { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    console.error(err);

    return NextResponse.json(err.message, { status: 500 });
  }
}
