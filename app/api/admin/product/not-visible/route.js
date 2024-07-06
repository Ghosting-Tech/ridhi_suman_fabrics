import { NextResponse } from "next/server";

import Product from "@/model/product";

import dbConnect from "@/config/db";

export async function GET() {
  try {
    await dbConnect();

    const products = await Product.find({ visibility: false });

    if (products.length === 0) {
      return NextResponse.json("No products found", { status: 404 });
    }

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products not-visible products:", error);

    return NextResponse.json(
      `Error fetching products not-visible products: ${error.message}`,
      {
        status: 500,
      }
    );
  }
}
