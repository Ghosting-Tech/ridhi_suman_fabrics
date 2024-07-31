import { Suspense } from "react";

import ImageSlider from "@/components/layout/products/productDetails/ImageSlider";
import ProductInfo from "@/components/layout/products/productDetails/ProductInfo";

const fetchProductData = async (productId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/product/${productId}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function ProductData({ params: { productId } }) {
  const productData = await fetchProductData(productId);

  return (
    <Suspense>
      <div className="flex gap-6 flex-col md:flex-row justify-center">
        <ImageSlider data={productData?.images} />
        <ProductInfo product={productData} />
      </div>
    </Suspense>
  );
}
