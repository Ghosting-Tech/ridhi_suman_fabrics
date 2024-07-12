import { NextResponse } from "next/server";

import Product from "@/model/product";

import dbConnect from "@/config/db";

export async function GET() {
  try {
    await dbConnect();

    // const mostBookedProducts = await Product.aggregate([
    //   { $match: { visibility: true } },

    //   {
    //     $addFields: {
    //       ordersCount: { $size: "$orders" },
    //     },
    //   },

    //   { $sort: { ordersCount: -1 } },

    //   {
    //     $project: {
    //       title: 1,
    //       category: 1,
    //       images: 1,
    //       discount: 1,
    //       price: 1,
    //       fabric: 1,
    //       brand: 1,
    //       ordersCount: 1,
    //       _id: 1,
    //     },
    //   },
    // ]);

    const mostBookedProducts = await Product.aggregate([
      { $match: { visibility: true } },

      {
        $addFields: {
          ordersCount: { $size: "$orders" },
        },
      },

      { $sort: { ordersCount: -1 } },

      // Lookup to populate the category
      {
        $lookup: {
          from: "categories",
          localField: "category",
          foreignField: "_id",
          as: "categoryDetails",
        },
      },

      // Add a conditional unwind to ensure the categoryDetails is not empty
      {
        $unwind: {
          path: "$categoryDetails",
          preserveNullAndEmptyArrays: true,
        },
      },

      // Lookup to populate the brand
      {
        $lookup: {
          from: "brands",
          localField: "brand",
          foreignField: "_id",
          as: "brandDetails",
        },
      },

      // Add a conditional unwind to ensure the brandDetails is not empty
      {
        $unwind: {
          path: "$brandDetails",
          preserveNullAndEmptyArrays: true,
        },
      },

      {
        $project: {
          title: 1,
          category: "$categoryDetails",
          images: 1,
          discount: 1,
          price: 1,
          fabric: 1,
          brand: "$brandDetails",
          ordersCount: 1,
          _id: 1,
        },
      },
    ]);

    return NextResponse.json(mostBookedProducts, { status: 200 });
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
