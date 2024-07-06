import { NextResponse } from "next/server";

import dbConnect from "@/config/db";

import Order from "@/model/order";

export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json({ error: "Invalid order id" }, { status: 400 });
    }

    await dbConnect();

    const order = await Order.findById(id);

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(order, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    await dbConnect();

    const { id } = params;
    const data = await request.json();

    if (!id) {
      return NextResponse.json({ error: "Invalid order id" }, { status: 400 });
    }

    const order = await Order.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(order, { status: 200 });
  } catch (err) {
    console.error(err);

    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
