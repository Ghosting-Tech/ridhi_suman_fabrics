import { NextResponse } from "next/server";

import Product from "@/model/product";

import dbConnect from "@/config/db";

export async function GET() {
  try {
    await dbConnect();

    const products = await Product.find({
      $and: [
        {
          sizes: {
            $elemMatch: {
              "colours.quantity": 0,
            },
          },
        },
      ],
    });

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching out of stock products:", error);

    return NextResponse.json(
      `Error fetching out of stock products: ${error.message}`,
      {
        status: 500,
      }
    );
  }
}
