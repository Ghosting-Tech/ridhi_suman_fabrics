import { NextResponse } from "next/server";

import dbConnect from "@/config/db";

import Category from "@/model/category";
import removeFile from "@/config/removeFile";
import uploadFile from "@/config/uploadFile";


export async function PUT(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json({ error: "Invalid category id" }, { status: 400 });
    }

    await dbConnect();

    const data = await request.formData();
    const name = data.get("name");
    const file = data.get("image");
    const subCategories = JSON.parse(data.get("subCategories"));

    if (!name || !subCategories) {
      return NextResponse.json({ error: "Invalid data." }, { status: 400 });
    }

    // If the image is not a file, use the existing image
    if (!(file instanceof File)) {
      const category = await Category.findById(id);

      if (!category) {
        return NextResponse.json({ error: "Category not found" }, { status: 404 });
      }

      const updatedCategory = await Category.findByIdAndUpdate(
        id,
        { name, image: category.image, subCategories },
        { new: true, runValidators: true }
      );

      return NextResponse.json(updatedCategory, { status: 200 });
    }

    // Upload new image and update category with new image URL
    const image = await uploadFile(file, "category");

    const category = await Category.findByIdAndUpdate(
      id,
      { name, image, subCategories },
      { new: true, runValidators: true }
    );

    if (!category) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 });
    }

    return NextResponse.json(category, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { error: "Category ID is required" },
        { status: 400 }
      );
    }

    await dbConnect();

    const category = await Category.findById(id);
    if (!category) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    }
    removeFile(category.image.substr(1, category.image.length));
    await Category.findByIdAndDelete(id);

    return NextResponse.json("Category deleted successfully", { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
