import { NextResponse } from "next/server";

import dbConnect from "@/config/db";

import Category from "@/model/category";
import uploadFile from "@/config/uploadFile";

export async function GET() {
  try {
    await dbConnect();
    const categories = await Category.find();

    return NextResponse.json(categories, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await dbConnect();

    const data = await request.formData();
    const name = data.get("name");
    const file = data.get("image");
    const subCategories = JSON.parse(data.get("subCategories"));

    if (!name || !subCategories) {
      return NextResponse.json({ error: "Invalid data." }, { status: 400 });
    }
    if (!file) {
      return NextResponse.json({ error: "Invalid image." }, { status: 400 });
    }

    const image = await uploadFile(file, "category");

    // console.log({ name, image, subCategories });
    const category = await Category.create({ name, image, subCategories });

    return NextResponse.json(category, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
