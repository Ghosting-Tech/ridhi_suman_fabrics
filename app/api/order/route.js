import dbConnect from "@/config/db";
import Order from "@/model/order";
import { NextResponse } from "next/server";

//Get all orders
export async function GET() {
  try {
    await dbConnect();
    const orders = await Order.find();
    if (!orders) {
      return NextResponse.json(
        { error: "Orders not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(orders, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

// Create new order
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
