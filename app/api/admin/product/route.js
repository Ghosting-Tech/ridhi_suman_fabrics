import { NextResponse } from "next/server";
import Product from "@/model/product";
import dbConnect from "@/config/db";
import { checkAuthorization } from "@/config/checkAuthorization";
import uploadFile from "@/config/uploadFile";

export async function POST(request) {
  try {
    const isAdmin = await checkAuthorization(request);

    if (isAdmin === "Unauthorized" || !isAdmin) {
      return NextResponse.json("Unauthorized Request", { status: 401 });
    }

    const data = await request.formData();
    const name = data.get("name");
    const price = data.get("price");
    const discount = data.get("discount");
    const visible = data.get("visible") === "true";
    const category = data.get("category");
    const subCategory = data.get("subCategory");
    const description = data.get("description");
    const fabric = data.get("fabric");
    const brand = data.get("brand");
    const images = data.getAll("images");
    const sizes = JSON.parse(data.get("sizes"));

    if (images.length <= 3) {
      return NextResponse.json(
        { error: "Add minimum 4 images!" },
        { status: 400 }
      );
    }

    if (sizes.length < 1) {
      return NextResponse.json(
        { error: "Add minimum 1 size!" },
        { status: 400 }
      );
    }

    const uploadedImages = await Promise.all(
      images.map(async (img) => {
        return await uploadFile(img, "product-images");
      })
    );

    await dbConnect();

    const newProduct = new Product({
      title: name,
      price,
      discount,
      visibility: visible,
      category,
      subCategory,
      description,
      fabric,
      brand,
      images: uploadedImages,
      sizes,
    });

    const savedProduct = await newProduct.save();

    return NextResponse.json(savedProduct, { status: 201 });
  } catch (error) {
    console.error("Error saving product:", error);

    return NextResponse.json(`Error saving product: ${error.message}`, {
      status: 500,
    });
  }
}
