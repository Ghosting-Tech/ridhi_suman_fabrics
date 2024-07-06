import { NextResponse } from "next/server";

import Product from "@/model/product";

import dbConnect from "@/config/db";

export async function GET() {
  try {
    await dbConnect();

    const product = await Product.find();

    if (!product) {
      return NextResponse.json("Product not found", { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Error fetching product:", error);

    return NextResponse.json(`Error fetching product: ${error.message}`, {
      status: 500,
    });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    await dbConnect();

    const newProduct = new Product(body);
    const savedProduct = await newProduct.save();

    return NextResponse.json(savedProduct, { status: 201 });
  } catch (error) {
    console.error("Error saving product:", error);

    return NextResponse.json(`Error saving product: ${error.message}`, {
      status: 500,
    });
  }
}
