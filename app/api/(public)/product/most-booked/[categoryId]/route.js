import { NextResponse } from "next/server";

import Product from "@/model/product";

import dbConnect from "@/config/db";

import mongoose from "mongoose";

export async function GET(req, { params }) {
  try {
    const { categoryId } = params;

    if (!categoryId) {
      return NextResponse.json("Category ID is required", { status: 400 });
    }

    await dbConnect();

    const objectId = new mongoose.Types.ObjectId(categoryId);

    const mostBookedByCategories = await Product.aggregate([
      { $match: { visibility: true, category: objectId } },
      {
        $addFields: {
          ordersCount: { $size: "$orders" },
        },
      },

      { $sort: { ordersCount: -1 } },

      {
        $project: {
          title: 1,
          category: 1,
          images: 1,
          discount: 1,
          description: 1,
          visibility: 1,
          price: 1,
          fabric: 1,
          brand: 1,
          ordersCount: 1,
          _id: 1,
        },
      },

      { $limit: 10 },
    ]);

    return NextResponse.json(mostBookedByCategories, { status: 200 });
  } catch (error) {
    console.error("Error fetching most booked products by category:", error);

    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}
