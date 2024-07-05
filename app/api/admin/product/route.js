import { NextResponse } from "next/server";

import Product from "@/model/product";

import dbConnect from "@/config/db";

export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();
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
