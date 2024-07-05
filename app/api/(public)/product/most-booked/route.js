import { NextResponse } from "next/server";

import Product from "@/model/product";

import dbConnect from "@/config/db";

export async function GET() {
  try {
    await dbConnect();

    const products = await Product.aggregate([
      { $sort: { orderCount: -1 } },
      { $limit: 10 },
      { $project: { orderCount: 0 } },
    ]);

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching most booked products:", error);

    return NextResponse.json(
      `Error fetching most booked products: ${error.message}`,
      {
        status: 500,
      }
    );
  }
}
