import { NextResponse } from "next/server";

import Order from "@/model/order";

import dbConnect from "@/config/db";
import { checkAuthorization } from "@/config/checkAuthorization";

export async function GET(request, { params }) {
  try {
    const isAdmin = await checkAuthorization(request);

    if (isAdmin === "Unauthorized") {
      return NextResponse.json("Unauthorized Request", { status: 401 });
    }

    const { id } = params;

    if (!id) {
      return NextResponse.json("Invalid order id", { status: 400 });
    }

    await dbConnect();

    const order = await Order.findById(id)
      .populate("user")
      .populate("cartItems");

    if (!order) {
      return NextResponse.json("Order not found", { status: 404 });
    }

    return NextResponse.json(order, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const isAdmin = await checkAuthorization(request);

    if (isAdmin === "Unauthorized") {
      return NextResponse.json("Unauthorized Request", { status: 401 });
    }

    await dbConnect();

    const { id } = params;
    const data = await request.json();

    if (!id) {
      return NextResponse.json("Invalid order id", { status: 400 });
    }

    const updateFields = {};
    if (data.status) updateFields.status = data.status;
    if (typeof data.isPaid === "boolean") updateFields.isPaid = data.isPaid;

    const order = await Order.findByIdAndUpdate(id, updateFields, {
      new: true,
      runValidators: true,
    });

    if (!order) {
      return NextResponse.json("Order not found", { status: 404 });
    }

    return NextResponse.json(order, { status: 200 });
  } catch (err) {
    console.error(err);

    return NextResponse.json(err.message, { status: 500 });
  }
}
