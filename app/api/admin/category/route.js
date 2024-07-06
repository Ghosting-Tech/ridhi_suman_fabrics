import { NextResponse } from "next/server";

import dbConnect from "@/config/db";

import Category from "@/model/category";

export async function POST(request) {
  try {
    await dbConnect();

    const data = await request.json();

    const category = await Category.create(data);

    return NextResponse.json(category, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
