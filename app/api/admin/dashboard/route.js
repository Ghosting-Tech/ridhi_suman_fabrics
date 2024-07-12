import { NextResponse } from "next/server";

import User from "@/model/user";
import Order from "@/model/order";
import Product from "@/model/product";
import Category from "@/model/category";
import SetOfProduct from "@/model/setOfProduct";

import dbConnect from "@/config/db";
import { checkAuthorization } from "@/config/checkAuthorization";

export async function GET(request) {
  try {
    const isAdmin = await checkAuthorization(request);

    if (isAdmin === "Unauthorized" || !isAdmin) {
      return NextResponse.json("Unauthorized Request", { status: 401 });
    }

    await dbConnect();

    const [
      categoriesCount,
      subCategoriesCount,
      usersCount,
      productsCount,
      setOfProductsCount,
      deliveredOrdersCount,
      ongoingOrdersCount,
      canceledOrdersCount,
    ] = await Promise.all([
      Category.countDocuments(),
      Category.countDocuments({ sub_categories: { $exists: true, $ne: [] } }),

      User.countDocuments(),

      Product.countDocuments(),
      SetOfProduct.countDocuments(),

      Order.countDocuments({ status: "Delivered" }),
      Order.countDocuments({
        status: { $in: ["Confirmed", "Packed", "Shipped"] },
      }),
      Order.countDocuments({ status: "Canceled" }),
    ]);

    return NextResponse.json(
      {
        categoriesCount,
        subCategoriesCount,

        usersCount,

        productsCount,
        setOfProductsCount,

        deliveredOrdersCount,
        ongoingOrdersCount,
        canceledOrdersCount,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
