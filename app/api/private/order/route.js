import { NextResponse } from "next/server";

import Order from "@/model/order";
import Product from "@/model/product";
import User from "@/model/user";

import dbConnect from "@/config/db";
import { checkAuthorization } from "@/config/checkAuthorization";

export async function POST(request) {
  try {
    // const isAdmin = await checkAuthorization(request);

    // if (isAdmin === "Unauthorized") {
    //   return NextResponse.json("Unauthorized Request", { status: 401 });
    // }

    await dbConnect();

    let data = await request.json();

    // if (data.paymentMethod === "cod" || data.paymentMethod === "pod") {
    //   data.isPaid = false;
    // }

    const userExist = await User.findById(data.user);
    if (!userExist) {
      return NextResponse.json("user not exist", { status: 400 });
    }

    const order = await Order.create(data);
    await User.findByIdAndUpdate(order.user, {
      $set: { cart: [] }, // Clear the cart
      $push: { orders: order._id }, // Add the order ID to the orders array
    });

    const updatePromises = order.cartItems.map(async (item) => {
      try {
        // Fetch the product by ID and select only necessary fields
        const product = await Product.findById(item.productId)
          .select("sizes orders")
          .exec();
        if (!product) {
          console.error(`Product with ID ${item.productId} not found.`);
          return null; // Return null for missing product
        }

        let isUpdated = false;

        // Update sizes and colours
        product.sizes = product.sizes.map((size) => {
          if (size.size.toLowerCase() === item.size.toLowerCase()) {
            size.colours = size.colours.map((colour) => {
              if (
                colour.colour.name.toLowerCase() ===
                item.colour.name.toLowerCase()
              ) {
                colour.quantity =
                  parseInt(colour.quantity, 10) - parseInt(item.quantity, 10);
                isUpdated = true;
              }
              return colour;
            });
          }
          return size;
        });

        if (isUpdated) {
          // Save the updated product
          await product.save();

          // Push order ID to product orders
          await Product.findByIdAndUpdate(
            item.productId,
            { $push: { orders: order._id } },
            { new: true, runValidators: true }
          ).exec();
        }

        return product;
      } catch (error) {
        console.error("Error processing cart item:", error);
        return null; // Return null on error
      }
    });

    // Await all update promises
    await Promise.all(updatePromises);

    return NextResponse.json(order, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
