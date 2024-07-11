import { NextResponse } from "next/server";

import dbConnect from "@/config/db";

import Order from "@/model/order";

export async function GET() {
  try {
    const isAdmin = await checkAuthorization(request);

    if (isAdmin === "Unauthorized" || !isAdmin) {
      return NextResponse.json("Unauthorized Request", { status: 401 });
    }

    const { searchParams } = new URL(request.url);

    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;

    const skip = (page - 1) * limit;

    await dbConnect();

    const orders = await Order.find().skip(skip).limit(limit).exec();

    const totalOrders = await Order.countDocuments();
    const totalPages = Math.ceil(totalOrders / limit);

    return NextResponse.json(
      {
        data: orders,
        pagination: {
          totalOrders,
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
