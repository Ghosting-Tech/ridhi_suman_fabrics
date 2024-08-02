import { Suspense } from "react";

import ImageSlider from "@/components/layout/products/productDetails/ImageSlider";
import ProductInfo from "@/components/layout/products/productDetails/ProductInfo";

const getProductById = async (productId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/product/${productId}`,
    {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Product Details");
  }

  return res.json();
};

export default async function ProductData({ params: { productId } }) {
  const productData = await getProductById(productId);

  return (
    <Suspense>
      <div className="flex gap-6 flex-col md:flex-row justify-center">
        <ImageSlider data={productData?.images} />
        <ProductInfo product={productData} />
      </div>
    </Suspense>
  );
}
