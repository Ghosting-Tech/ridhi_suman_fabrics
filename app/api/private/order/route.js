import { NextResponse } from "next/server";

import Order from "@/model/order";
import Product from "@/model/product";
import User from "@/model/user";

import dbConnect from "@/config/db";
import { checkAuthorization } from "@/config/checkAuthorization";

export async function POST(request) {
  try {
    const isAdmin = await checkAuthorization(request);

    if (isAdmin === "Unauthorized") {
      return NextResponse.json("Unauthorized Request", { status: 401 });
    }

    await dbConnect();

    let data = await request.json();

    if (data.paymentMethod === "cod" || data.paymentMethod === "pod") {
      data.isPaid = false;
    }
    const userExist = await User.findById(data.user);
    if (!userExist) {
      return NextResponse.json("user not exist", { status: 400 });
    }

    const order = await Order.create(data);
    await User.findByIdAndUpdate(order.user, { $push: { orders: order._id } });

    const updatePromises = order.cartItems.map((item) =>
      Product.findByIdAndUpdate(
        item.productId,
        { $push: { orders: order._id } },
        { new: true, runValidators: true }
      )
    );

    await Promise.all(updatePromises);

    return NextResponse.json(order, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
