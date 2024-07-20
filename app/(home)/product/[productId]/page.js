import React, { Suspense } from "react";

import { ProductSkeleton } from "@/components/ui/SkeletonComponent";
import ProductCarousel from "@/components/layout/products/ProductCarousel";
import ProductList from "@/components/layout/products/ProductList";
import ProductItem from "@/components/layout/products/ProductItem";

async function getProduct() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async () => {
  const data = await getProduct();

  return (
    <Suspense
      fallback={
        <div className="grid gap-4 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-20 px-4">
          {[...Array(4)].map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      }
    >
      <ProductList>
        {data.data.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </ProductList>
    </Suspense>
  );
};

export default page;
