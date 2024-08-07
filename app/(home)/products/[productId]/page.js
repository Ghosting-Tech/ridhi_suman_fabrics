import { Suspense } from "react";
import { headers } from "next/headers";

import ImageSlider from "@/components/layout/products/productDetails/ImageSlider";
import ProductInfo from "@/components/layout/products/productDetails/ProductInfo";

const getProductById = async (productId) => {
  const headersList = headers();

  const activePath = headersList.get("x-url");

  try {
    const res = await fetch(`${activePath}/api/product/${productId}`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "omit",
    });

    if (!res.ok) {
      return {
        success: false,
        message: "Failed to fetch Product Details",
        status: res.status,
        data: null,
      };
    }

    const data = await res.json();

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: "An error occurred while fetching the product details",
      data: null,
    };
  }
};

export default async function ProductData({ params: { productId } }) {
  const productData = await getProductById(productId);

  return (
    <Suspense>
      <div className="flex gap-6 flex-col md:flex-row justify-center">
        <ImageSlider data={productData.data?.images} />
        <ProductInfo product={productData.data} />
      </div>
    </Suspense>
  );
}
