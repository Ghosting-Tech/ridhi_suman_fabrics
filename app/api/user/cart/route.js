import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

import User from "@/model/user";
import Product from "@/model/product";

import dbConnect from "@/config/db";

import mongoose from "mongoose";

const secret = process.env.NEXT_PUBLIC_NEXTAUTH_SECRET;

export async function PUT(req) {
  try {
    const token = await getToken({ req, secret });

    if (!token) {
      return NextResponse.json("Unauthorized Request", { status: 401 });
    }

    const { productId, quantity = 1 } = await req.json();

    if (!productId || !quantity) {
      return NextResponse.json("Invalid product data", { status: 400 });
    }

    const objectId = new mongoose.Types.ObjectId(token._id);

    await dbConnect();

    const productExists = await Product.findById(productId);

    if (!productExists) {
      return NextResponse.json("Product not found", { status: 404 });
    }

    const user = await User.findByIdAndUpdate(objectId);

    if (!user) {
      return NextResponse.json("User not found", { status: 404 });
    }

    user.cart = user.cart.filter((item) =>
      mongoose.Types.ObjectId.isValid(item.product)
    );

    const productIndex = user.cart.findIndex(
      (item) => item.product.toString() === productId
    );

    if (productIndex > -1) {
      user.cart[productIndex].quantity += quantity;
    } else {
      user.cart.push({ product: productId, quantity });
    }

    await user.save();

    await user.populate("cart.product");

    const cart = user.cart.map((item) => {
      return {
        _id: item.product._id,
        title: item.product.title,
        images: item.product.images[0],
        price: item.product.price,
        discount: item.product.discount,
        category: item.product.category,
        subCategory: item.product.subCategory,
        quantity: item.quantity,
      };
    });

    return NextResponse.json(cart, { status: 200 });
  } catch (error) {
    console.error("Error updating cart:", error);

    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}
