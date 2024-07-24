import { NextResponse } from "next/server";

import Product from "@/model/product";

import dbConnect from "@/config/db";
import { checkAuthorization } from "@/config/checkAuthorization";

export async function GET(request) {
  await dbConnect();

  try {
    const isAdmin = await checkAuthorization(request);

    if (!isAdmin) {
      return NextResponse.json(
        { error: "Unauthorized Request" },
        { status: 401 }
      );
    }

    const url = new URL(request.url);

    const searchQuery = url.searchParams.get("query") || "";
    const page = parseInt(url.searchParams.get("page"), 10) || 1;
    const limit = parseInt(url.searchParams.get("size"), 10) || 12;

    const skip = (page - 1) * limit;

    const sanitizedQuery = searchQuery.replace(/[\W_]+/g, "");

    let products, totalProducts;

    if (isAdmin) {
      products = await Product.find({
        $text: { $search: sanitizedQuery },
      })
        .select("-orders -updatedAt -createdAt -sizes")
        .skip(parseInt(skip))
        .limit(parseInt(limit));

      totalProducts = await Product.countDocuments({
        $text: { $search: sanitizedQuery },
      });
    } else {
      products = await Product.find({
        $text: { $search: sanitizedQuery },
        visibility: true,
      })
        .select("-orders -updatedAt -createdAt -sizes -visibility")
        .skip(parseInt(skip))
        .limit(parseInt(limit));
      totalProducts = await Product.countDocuments({
        $text: { $search: sanitizedQuery },
        visibility: true,
      });
    }
    return NextResponse.json({
      data: products,
      meta: {
        page: page,
        pageSize: limit,
        totalPages: Math.ceil(totalProducts / limit),
        totalResults: totalProducts,
      },
    });
  } catch (error) {
    console.error("Search API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
