import { NextResponse } from "next/server";

import Order from "@/model/order";
import Product from "@/model/product";

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

    await Promise.all(
      order.cartItems.map(async (item) => {
        await Product.findByIdAndUpdate(
          item.productId,

          {
            $push: {
              orders: order._id,
            },
          },

          {
            new: true,
            runValidators: true,
          }
        );
      })
    );

    return NextResponse.json(order, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
