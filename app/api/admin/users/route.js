import { NextResponse } from "next/server";

import dbConnect from "@/config/db";

import User from "@/model/user";
import { checkAuthorization } from "@/config/checkAuthorization";

export async function GET(request) {
  try {
    // const isAdmin = await checkAuthorization(request);

    // if (isAdmin === "Unauthorized" || !isAdmin) {
    //   return NextResponse.json("Unauthorized Request", { status: 401 });
    // }

    const { searchParams } = new URL(request.url);

    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;

    const skip = (page - 1) * limit;

    await dbConnect();

    const users = await User.find()
      .skip(skip)
      .limit(limit)
      .select("-password -otp -updatedAt -shippingInfo -cart -wishlist")
      .exec();

    const totalUsers = await User.countDocuments();
    const totalPages = Math.ceil(totalUsers / limit);
    // console.log({
    //   data: users,
    //   pagination: {
    //     totalUsers,
    //     totalPages,
    //     currentPage: page,
    //     pageSize: limit,
    //   },
    // });
    return NextResponse.json(
      {
        data: users,
        meta: {
          totalUsers,
          totalPages,
          currentPage: page,
          pageSize: limit,
        },
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
