import { checkAuthorization } from "@/config/checkAuthorization";
import dbConnect from "@/config/db";
import removeFile from "@/config/removeFile";
import uploadFile from "@/config/uploadFile";
import User from "@/model/user";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const isAdmin = await checkAuthorization(request);

    if (isAdmin === "Unauthorized" || !isAdmin) {
      return NextResponse.json("Unauthorized request", { status: 401 });
    }
    await dbConnect();

    const users = await User.find();

    const subAdmins = users.filter((user) => user.createdBy === "admin");

    return NextResponse.json(subAdmins, { status: 200 });
  } catch (err) {
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}

export async function POST(request) {
  try {
    const isAdmin = await checkAuthorization(request);

    if (isAdmin === "Unauthorized" || !isAdmin) {
      return NextResponse.json("Unauthorized request", { status: 401 });
    }

    const data = await request.formData();
    const name = data.get("name");
    const phoneNumber = data.get("phoneNumber");
    const file = data.get("image");
    const password = data.get("password");

    console.log(phoneNumber, password, name, file);

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

    const phoneNumberExists = await User.findOne({ phoneNumber: phoneNumber });

    if (phoneNumberExists)
      return NextResponse.json("Phone number already exists", { status: 400 });

    const subAdmin = await User.create({
      name,
      email: `${name
        .replace(/ /g, "-")
        .toLowerCase()}.${phoneNumber}@admin.com`,
      phoneNumber,
      image,
      password,
      createdBy: "admin",
      isVerified: true,
      role: "admin",
    });

    console.log(subAdmin);

    return NextResponse.json(subAdmin, { status: 200 });
  } catch (err) {
    return NextResponse.json(err.message, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const isAdmin = await checkAuthorization(request);

    if (isAdmin === "Unauthorized" || !isAdmin) {
      return NextResponse.json("Unauthorized request", { status: 401 });
    }
    const data = await request.json();

    console.log(data);

    if (!data) {
      return NextResponse.json("Invalid request!", { status: 400 });
    }
    await dbConnect();
    const user = await User.findByIdAndUpdate(data._id, data);
    if (!user) {
      return NextResponse.json("User not found", { status: 404 });
    }
    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    return NextResponse.json(err.message, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const isAdmin = await checkAuthorization(request);

    if (isAdmin === "Unauthorized" || !isAdmin) {
      return NextResponse.json({ message: "Unauthorized request" }, { status: 401 });
    }

    const data = await request.json();

    if (!data || !data._id || !data.image) {
      return NextResponse.json({ message: "Invalid request!" }, { status: 400 });
    }

    removeFile(data.image.substr(1, data.image.length));

    await dbConnect();
    const user = await User.findByIdAndDelete(data._id);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
