import { NextResponse } from "next/server";

import Product from "@/model/product";

import dbConnect from "@/config/db";
import { checkAuthorization } from "@/config/checkAuthorization";

export async function GET(request, { params }) {
  try {
    let isAdmin = await checkAuthorization(request);

    if (isAdmin === "Unauthorized") {
      isAdmin = false;
    }

    const searchParams = request.nextUrl.searchParams;

    const page = searchParams.get("page") || 1;
    const pageSize = searchParams.get("size") || 10;

    const { id, sub, price } = params;

    if (!id) return NextResponse.json("Category Id not found", { status: 404 });

    if (!sub)
      return NextResponse.json("SubCategory Id not found", { status: 404 });

    const skip = (page - 1) * pageSize;

    const sortOrder = price === "asc" ? 1 : -1;

    await dbConnect();

    let products = [];

    if (isAdmin) {
      products = await Product.find({
        category: id,
        subCategory: sub,
      })
        .select("-sizes -orders")
        .sort({ price: sortOrder })
        .skip(skip)
        .limit(pageSize)
        .exec();
    } else {
      products = await Product.find({
        category: id,
        subCategory: sub,
        visibility: true,
      })
        .select("-sizes -orders")
        .sort({ price: sortOrder })
        .skip(skip)
        .limit(parseInt(pageSize))
        .exec();
    }

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);

    return NextResponse.json(`Error fetching products: ${error.message}`, {
      status: 500,
    });
  }
}
