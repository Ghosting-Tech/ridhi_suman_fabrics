import { NextResponse } from "next/server";

import dbConnect from "@/config/db";
import uploadFile from "@/config/uploadFile";

import User from "@/model/user";

export const POST = async (req, res) => {
  const formData = await req.formData();

  const file = formData.get("image");

  const name = formData.get("name");

  const email = formData.get("email");
  const password = formData.get("password");

  const phoneNumber = formData.get("phoneNumber");

  if (!name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  if (!password) {
    return NextResponse.json(
      { error: "Password is required" },
      { status: 400 }
    );
  }

  if (!phoneNumber) {
    return NextResponse.json(
      { error: "Phone Number is required" },
      { status: 400 }
    );
  }

  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  try {
    const fullPath = await uploadFile(file, "users", name);

    await dbConnect();

    const user = await User.create({
      name,
      email,
      password,
      phoneNumber,
      image: fullPath,
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.log("Error occurred ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};
