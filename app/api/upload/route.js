import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export const POST = async (req) => {
  const formData = await req.formData();
  const file = formData.get("image");

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  //   const filename = Date.now() + "-" + file.name;
  const filePath = path.join(process.cwd(), "public", "uploads", file.name);

  try {
    await fs.writeFile(filePath, buffer);
    return NextResponse.json(
      {
        message: "Image uploaded successfully",
        fileName: file.name,
      },
      {
        headers: {
          "Content-Type": "image/*", // Set generic image content type
        },
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error uploading image" },
      { status: 500 }
    );
  }
};
