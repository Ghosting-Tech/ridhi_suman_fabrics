import { NextResponse } from "next/server";
import User from "@/model/user";
import Product from "@/model/product"; // adjust the path as needed
import SetOfProduct from "@/model/setOfProduct"; // adjust the path as needed
import Order from "@/model/order"; // adjust the path as needed
import dbConnect from "@/config/db";
import Category from "@/model/category";

export async function GET() {
  try {
    await dbConnect();

    // Get counts in parallel
    const [
      categoryCount,
      subCategoryCount,
      userCount,
      productCount,
      setOfProductCount,
      deliveredOrderCount,
      ongoingOrderCount,
      canceledOrderCount,
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
        categoryCount,
        subCategoryCount,
        userCount,
        productCount,
        setOfProductCount,
        deliveredOrdersCount: deliveredOrderCount,
        ongoingOrdersCount: ongoingOrderCount,
        canceledOrdersCount: canceledOrderCount,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
