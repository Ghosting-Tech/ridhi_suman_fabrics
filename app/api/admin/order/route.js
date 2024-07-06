import { NextResponse } from "next/server";

import dbConnect from "@/config/db";

import Order from "@/model/order";

export async function GET() {
  try {
    await dbConnect();

    const orders = await Order.find();

    if (!orders) {
      return NextResponse.json({ error: "Orders not found" }, { status: 404 });
    }

    return NextResponse.json(orders, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
