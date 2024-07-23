import { NextResponse } from "next/server";
import Product from "@/model/product";
import dbConnect from "@/config/db";
import { checkAuthorization } from "@/config/checkAuthorization";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { storage } from "@/firebase";
export async function PUT(request, { params }) {
  let imageObjects = [];
  try {
    const isAdmin = await checkAuthorization(request);

    const { productId } = params;

    if (isAdmin === "Unauthorized" || !isAdmin) {
      return NextResponse.json("Unauthorized Request", { status: 401 });
    }

    const formData = await request.formData();
    const title = formData.get("title");
    const price = formData.get("price");
    const discount = formData.get("discount");
    const visibility = formData.get("visibility");
    const description = formData.get("description");
    const category = formData.get("category");
    const subCategory = JSON.parse(formData.get("subCategory"));
    const fabric = formData.get("fabric");
    const brand = formData.get("brand");
    const sizes = JSON.parse(formData.get("sizes"));
    const files = formData.getAll("images");

    if (
      !title ||
      !price ||
      !discount ||
      !description ||
      !category ||
      !subCategory ||
      !visibility ||
      !fabric ||
      !brand
    ) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }
    if (sizes.length < 1) {
      return NextResponse.json(
        { error: "Add a minimum of 1 size!" },
        { status: 400 }
      );
    }
    if (files.length < 4) {
      return NextResponse.json(
        { error: "Add a minimum of 4 images!" },
        { status: 400 }
      );
    }

    await dbConnect();

    for (const file of files) {
      if (file instanceof File) {
        const imageRef = ref(
          storage,
          `products/${title}/${file.size + file.name}`
        );
        await uploadBytes(imageRef, file);
        const imageUrl = await getDownloadURL(imageRef);
        imageObjects.push({ url: imageUrl, ref: imageRef.fullPath });
      } else {
        imageObjects.push(JSON.parse(file));
      }
    }

    const productData = {
      title,
      price,
      discount,
      visibility,
      description,
      category,
      subCategory,
      fabric,
      brand,
      sizes,
      images: imageObjects,
    };

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      productData,
      { new: true }
    );

    return NextResponse.json(updatedProduct, { status: 201 });
  } catch (error) {
    console.error("Error saving product:", error);

    if (imageObjects.length > 0) {
      await Promise.all(
        imageObjects.map(async (img) => {
          if (img && img.ref) {
            await deleteObject(ref(storage, img.ref));
          }
        })
      );
    }

    return NextResponse.json(`Error saving product: ${error.message}`, {
      status: 500,
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    const isAdmin = await checkAuthorization(request);

    if (!isAdmin) {
      return NextResponse.json("Unauthorized Request", { status: 401 });
    }

    const { productId } = params;
    if (!productId) {
      return NextResponse.json("Id not found", { status: 404 });
    }

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
