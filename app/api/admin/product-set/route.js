import { NextResponse } from "next/server";

import SetOfProduct from "@/model/setOfProduct";

import dbConnect from "@/config/db";

export async function GET() {
  try {
    await dbConnect();

    const sets = await SetOfProduct.find();

    return NextResponse.json(sets, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);

    return NextResponse.json(`Error fetching products: ${error.message}`, {
      status: 500,
    });
  }
}

export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const newSet = new SetOfProduct(body);
    const savedSet = await newSet.save();

    return NextResponse.json(savedSet, { status: 201 });
  } catch (error) {
    console.error("Error saving product:", error);

    return NextResponse.json(`Error saving product: ${error.message}`, {
      status: 500,
    });
  }
}
