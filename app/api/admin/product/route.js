import { NextResponse } from "next/server";
import Product from "@/model/product";
import dbConnect from "@/config/db";
import { checkAuthorization } from "@/config/checkAuthorization";

export async function POST(request) {
  try {
    const isAdmin = await checkAuthorization(request);

    if (isAdmin === "Unauthorized" || !isAdmin) {
      return NextResponse.json("Unauthorized Request", { status: 401 });
    }

    const data = await request.json();

    if (data.images.length <= 3) {
      return NextResponse.json(
        { error: "Add minimum 4 images!" },
        { status: 400 }
      );
    }

    if (data.sizes.length < 1) {
      return NextResponse.json(
        { error: "Add minimum 1 size!" },
        { status: 400 }
      );
    }

    await dbConnect();

    const productExist = await Product.findOne({ title: data.title });

    if (productExist) {
      return NextResponse.json(
        { error: "Product title already exists" },
        { status: 400 }
      );
    }

    const product = await Product.create(data);

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Error saving product:", error);

    return NextResponse.json(`Error saving product: ${error.message}`, {
      status: 500,
    });
  }
}
