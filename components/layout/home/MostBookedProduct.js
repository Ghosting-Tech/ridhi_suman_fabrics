import { Suspense } from "react";

import ProductCarousel from "../products/ProductCarousel";
import ProductListSkeleton from "@/components/ui/skeletons/product/ProductListSkeleton";

async function getMostBookedProduct() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/product/most-booked`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const MostBookedProduct = async () => {
  const data = await getMostBookedProduct();

  return (
    <>
      <Suspense fallback={<ProductListSkeleton />}>
        {data && <ProductCarousel products={data} />}
      </Suspense>
    </>
  );
};

export default MostBookedProduct;
