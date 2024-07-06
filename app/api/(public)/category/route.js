import { NextResponse } from "next/server";

import dbConnect from "@/config/db";

import Category from "@/model/category";

export async function GET() {
  try {
    await dbConnect();

    const categories = await Category.find();

    if (!categories) {
      return NextResponse.json(
        { error: "Categories not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(categories, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
