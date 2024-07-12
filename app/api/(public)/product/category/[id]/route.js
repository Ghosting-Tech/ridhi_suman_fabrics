import { NextResponse } from "next/server";

import Product from "@/model/product";

import dbConnect from "@/config/db";

export async function GET(request, { params }) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const page = searchParams.get("page") || 1;
    const pageSize = searchParams.get("size") || 10;

    const { id } = params;

    if (!id) return NextResponse.json("Category Id not found", { status: 404 });

    const skip = (page - 1) * pageSize;

    await dbConnect();

    let products = [];

    if (isAdmin) {
      products = await Product.find({ category: id })
        .select("-sizes -description -visibility -orders -updatedAt -createdAt")
        .skip(parseInt(skip))
        .limit(parseInt(pageSize))
        .exec();
    } else {
      products = await Product.find({ category: id, visibility: true })
        .select("-sizes -description -visibility -orders -updatedAt -createdAt")
        .skip(parseInt(skip))
        .limit(parseInt(pageSize))
        .exec();
    }

    if (!products || products.length === 0) {
      return NextResponse.json("No products found for the specified category", {
        status: 404,
      });
    }

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);

    return NextResponse.json(`Error fetching products: ${error.message}`, {
      status: 500,
    });
  }
}
