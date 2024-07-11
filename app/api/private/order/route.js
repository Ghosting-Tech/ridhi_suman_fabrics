import { NextResponse } from "next/server";

import Order from "@/model/order";

import dbConnect from "@/config/db";
import { checkAuthorization } from "@/config/checkAuthorization";

export async function POST(request) {
  try {
    const isAdmin = await checkAuthorization(request);

    if (isAdmin === "Unauthorized") {
      return NextResponse.json("Unauthorized Request", { status: 401 });
    }

    await dbConnect();

    const data = await request.json();

    const order = await Order.create(data);

    return NextResponse.json(order, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
