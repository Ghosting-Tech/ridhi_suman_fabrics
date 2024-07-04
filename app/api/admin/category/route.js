import dbConnect from "@/config/db";
import Category from "@/model/category";
import { NextResponse } from "next/server";

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
