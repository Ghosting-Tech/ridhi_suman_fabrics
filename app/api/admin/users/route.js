import { NextResponse } from "next/server";

import dbConnect from "@/config/db";

import User from "@/model/user";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;

    const skip = (page - 1) * limit;

    await dbConnect();

    const users = await User.find()
      .skip(skip)
      .limit(limit)
      .select(
        "-password -otp -updatedAt -createdAt -shippingInfo -cart -wishlist"
      )
      .exec();

    const totalUsers = await User.countDocuments();
    const totalPages = Math.ceil(totalUsers / limit);

    return NextResponse.json(
      {
        data: users,
        pagination: {
          totalUsers,
          totalPages,
          currentPage: page,
          pageSize: limit,
        },
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
