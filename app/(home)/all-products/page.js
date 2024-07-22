import React, { Suspense } from "react";

import PaginationBtn from "@/components/ui/PaginationBtn";
import SectionHeading from "@/components/ui/SectionHeading";

import ProductList from "@/components/layout/products/ProductList";
import ProductItem from "@/components/layout/products/ProductItem";

import { ProductSkeleton } from "@/components/ui/SkeletonComponent";

async function getProducts(page = 1, size = 10) {
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

  return (
    <main className="my-10">
      <SectionHeading label="All Products" className="text-pink-400" />

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

      <PaginationBtn totalPages={data.meta.totalPages} />
    </main>
  );
};

export default page;
