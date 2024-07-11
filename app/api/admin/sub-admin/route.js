import { checkAuthorization } from "@/config/checkAuthorization";
import dbConnect from "@/config/db";
import User from "@/model/user";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const isAdmin = await checkAuthorization(req);

    if (isAdmin === "Unauthorized" || !isAdmin) {
      return NextResponse.json("Unauthorized request", { status: 401 });
    }
    await dbConnect();

    const users = await User.find();

    const subAdmins = users.filter((user) => user.role === "admin");

    return NextResponse.json(subAdmins, { status: 200 });
  } catch (err) {
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}

export async function POST(req) {
  try {
    const isAdmin = await checkAuthorization(req);

    if (isAdmin === "Unauthorized" || !isAdmin) {
      return NextResponse.json("Unauthorized request", { status: 401 });
    }

    const data = await request.formData();
    const name = data.get("name");
    const phoneNumber = data.get("phoneNumber");
    const file = data.get("image");
    const password = data.get("password");

    if (!data) {
      return NextResponse.json("Invalid request!", { status: 400 });
    }

    if (!phoneNumber || !password || !name) {
      return NextResponse.json({ error: "Invalid data!" }, { status: 400 });
    }
    if (!file) {
      return NextResponse.json({ error: "Invalid image!" }, { status: 400 });
    }

    const image = await uploadFile(file, "admin");
    await dbConnect();

    // console.log({ phoneNumber, image, password });
    const subAdmin = await User.create({
      name,
      phoneNumber,
      image,
      password,
      role: "admin",
    });

    return NextResponse.json(subAdmin, { status: 200 });
  } catch (err) {
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}
