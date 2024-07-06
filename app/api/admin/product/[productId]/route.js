import { NextResponse } from "next/server";

import Product from "@/model/product";

import dbConnect from "@/config/db";

export async function PUT(request, { params }) {
  try {
    const { productId } = params;

    if (!productId) return NextResponse.json("Id not found", { status: 404 });

    const body = await request.json();

    await dbConnect();

    const updatedProduct = await Product.findByIdAndUpdate(productId, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return NextResponse.json("Product not found", { status: 404 });
    }

    return NextResponse.json(updatedProduct, { status: 200 });
  } catch (error) {
    console.error("Error updating product:", error);

    return NextResponse.json(`Error updating product: ${error.message}`, {
      status: 500,
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { productId } = params;

    if (!productId) return NextResponse.json("Id not found", { status: 404 });

    await dbConnect();

    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return NextResponse.json("Product not found", { status: 404 });
    }

    return NextResponse.json("Product deleted successfully", { status: 200 });
  } catch (error) {
    console.error("Error deleting product:", error);

    return NextResponse.json(`Error deleting product: ${error.message}`, {
      status: 500,
    });
  }
}
