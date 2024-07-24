import React, { Suspense } from "react";

import PaginationBtn from "@/components/ui/PaginationBtn";
import SectionHeading from "@/components/ui/SectionHeading";

import ProductList from "@/components/layout/products/ProductList";

import ProductListSkeleton from "@/components/ui/skeletons/product/ProductListSkeleton";

async function getProducts(page = 1, size = 12) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/product?page=${page}&size=${size}`,

    {
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async ({ searchParams: { page, size } }) => {
  const data = await getProducts(page, size);
  // console.log(data);

  return (
    <main className="my-10">
      <SectionHeading label="All Products" className="text-pink-400" />

      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList products={data.data} />
      </Suspense>

      <PaginationBtn totalPages={data.meta.totalPages} />
    </main>
  );
};

export default page;
