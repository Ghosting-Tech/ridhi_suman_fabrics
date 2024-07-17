import { NextResponse } from "next/server";

import dbConnect from "@/config/db";

import Category from "@/model/category";
import uploadFile from "@/config/uploadFile";

import { checkAuthorization } from "@/config/checkAuthorization";

export async function POST(request) {
  try {
    const isAdmin = await checkAuthorization(request);

    if (isAdmin === "Unauthorized" || !isAdmin) {
      return NextResponse.json("Unauthorized Request", { status: 401 });
    }

    await dbConnect();

    const data = await request.formData();

    const name = data.get("name");
    const file = data.get("image");

    const subCategories = JSON.parse(data.get("subCategories"));

    if (!name) {
      return NextResponse.json("Invalid data.", { status: 400 });
    }

    if (!file) {
      return NextResponse.json("Invalid image.", { status: 400 });
    }

    const categoryExists = await Category.findOne({ name });

    if (categoryExists) {
      return NextResponse.json("Category already exists.", { status: 400 });
    }

    const image = await uploadFile(file, "category");

    const category = await Category.create({ name, image, subCategories });

    return NextResponse.json(category, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
