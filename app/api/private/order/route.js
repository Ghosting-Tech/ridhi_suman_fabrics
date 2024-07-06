import { NextResponse } from "next/server";

import dbConnect from "@/config/db";

import Order from "@/model/order";

export async function POST(request) {
  try {
    await dbConnect();

    const data = await request.json();

    const order = await Order.create(data);

    return NextResponse.json(order, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
