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
    const limit = parseInt(url.searchParams.get("limit"), 10) || 10;

    console.log({ searchQuery, page, limit });

    const skip = (page - 1) * limit;

    const sanitizedQuery = searchQuery.replace(/[\W_]+/g, "");

    let products;

    if (isAdmin) {
      products = await Product.find({
        $text: { $search: sanitizedQuery },
      })
        .select("-orders -updatedAt -createdAt -sizes")
        .skip(parseInt(skip))
        .limit(parseInt(limit));
    } else {
      products = await Product.find({
        $text: { $search: sanitizedQuery },
        visibility: true,
      })
        .select("-orders -updatedAt -createdAt -sizes -visibility")
        .skip(parseInt(skip))
        .limit(parseInt(limit));
    }

    return NextResponse.json(products);
  } catch (error) {
    console.error("Search API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
