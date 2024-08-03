import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

import User from "@/model/user";
import dbConnect from "@/config/db";

const secret = process.env.NEXTAUTH_SECRET;

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    const token = await getToken({ req, secret });
    if (!token) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }
    const searchParams = req.nextUrl.searchParams;

    const page = searchParams.get("page") || 1;
    const pageSize = searchParams.get("size") || 12;
    const skip = (page - 1) * pageSize;
    await dbConnect();

    const orders = await User.findById(token._id).populate({
      path: "orders",
      options: {
        skip: parseInt(skip), // Skip the number of orders
        limit: parseInt(pageSize), // Limit the number of orders
      },
      populate: {
        path: "cartItems.productId",
        model: "Product",
      },
    });

    const user = await User.findById(token._id);
    const ordersCount = user.orders ? user.orders.length : 0;

    if (!user) {
      return NextResponse.json("User not found", { status: 404 });
    }

    return NextResponse.json(
      {
        data: orders.orders,
        meta: {
          page: page,
          pageSize: pageSize,
          totalPages: Math.ceil(ordersCount / pageSize),
          totalResults: ordersCount,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching orders:", error);

    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}
