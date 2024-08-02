import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

import User from "@/model/user";
import Product from "@/model/product";

import dbConnect from "@/config/db";

import mongoose from "mongoose";

const secret = process.env.NEXT_PUBLIC_NEXTAUTH_SECRET;

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    const token = await getToken({ req, secret });

    if (!token) {
      return NextResponse.json({
        data: "Unauthorized Access",
        meta: { page: 1, size: 12, totalPages: 0, totalItems: 0 },
      }, { status: 200 });
    }

    const searchParams = new URL(req.url).searchParams;

    const populate = searchParams.get("populate") === "true";

    const page = parseInt(searchParams.get("page")) || 1;
    const size = parseInt(searchParams.get("size")) || 12;

    const skip = (page - 1) * size;

    let user;

    await dbConnect();

    if (populate === true) {
      user = await User.findById(token._id).populate({
        path: "wishlist",
        select: "category subCategory title images price discount sizes",
        populate: {
          path: "images",
          options: { limit: 1 },
        },
      });
    } else {
      user = await User.findById(token._id);
    }

    if (!user) {
      return NextResponse.json("User not found", { status: 404 });
    }

    const wishlist = user.wishlist.slice(skip, skip + size);

    const totalItems = user.wishlist.length;
    const totalPages = Math.ceil(totalItems / size);

    return NextResponse.json(
      {
        data: wishlist,
        meta: {
          page,
          size,
          totalPages,
          totalItems,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching wishlist:", error);

    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const token = await getToken({ req, secret });

    if (!token) {
      return NextResponse.json("Unauthorized Request", { status: 401 });
    }

    const { productId, action } = await req.json();

    if (!productId || !action) {
      return NextResponse.json("Invalid request data", { status: 400 });
    }

    if (action !== "add" && action !== "remove") {
      return NextResponse.json("Invalid action", { status: 400 });
    }

    await dbConnect();

    const productExists = await Product.findById(productId);

    if (!productExists) {
      return NextResponse.json("Product not found", { status: 404 });
    }

    const user = await User.findById(token._id);

    if (!user) {
      return NextResponse.json("User not found", { status: 404 });
    }

    const productObjectId = new mongoose.Types.ObjectId(productId);

    if (action === "add") {
      if (!user.wishlist.includes(productId)) {
        user.wishlist.push(productObjectId);
      }
    } else if (action === "remove") {
      user.wishlist = user.wishlist.filter((id) => id.toString() !== productId);
    }

    await user.save();

    return NextResponse.json(user.wishlist, { status: 200 });
  } catch (error) {
    console.error("Error updating wishlist:", error);

    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}
