import { NextResponse } from "next/server";

import Product from "@/model/product";

import dbConnect from "@/config/db";
import { checkAuthorization } from "@/config/checkAuthorization";

export async function GET(request) {
  try {
    let isAdmin = await checkAuthorization(request);

    if (isAdmin === "Unauthorized") {
      isAdmin = false;
    }

    const searchParams = request.nextUrl.searchParams;

    const page = searchParams.get("page") || 1;
    const pageSize = searchParams.get("size") || 10;

    const skip = (page - 1) * pageSize;

    await dbConnect();

    let products, totalProducts;

    if (isAdmin) {
      products = await Product.find()
        .select("-description -orders")
        .skip(parseInt(skip))
        .limit(parseInt(pageSize));

      totalProducts = await Product.countDocuments();
    } else {
      products = await Product.find({ visibility: true })
        .select("-description -visibility -orders -updatedAt -createdAt")
        .skip(parseInt(skip))
        .limit(parseInt(pageSize));

      totalProducts = await Product.countDocuments({ visibility: true });
    }

    return NextResponse.json(
      {
        data: products,
        meta: {
          page: page,
          pageSize: pageSize,
          totalPages: Math.ceil(totalProducts / pageSize),
          totalResults: totalProducts,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching products:", error);

    return NextResponse.json(`Error fetching products: ${error.message}`, {
      status: 500,
    });
  }
}
