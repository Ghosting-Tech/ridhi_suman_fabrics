import React, { Suspense } from "react";

import PaginationBtn from "@/components/ui/PaginationBtn";
import { ProductCard } from "@/components/layout/admin/products/ProductCard";
import ProductListSkeleton from "@/components/ui/skeletons/product/ProductListSkeleton";

async function getSearchResults(searchParams) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/search?query=${
      searchParams.query
    }&page=${searchParams.page || 1}`,
    {
      cache: "no-store",
      method: "GET",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async ({ searchParams }) => {
  const data = await getSearchResults(searchParams);

  return (
    <main className="relative p-4 sm:p-8 bg-gray-50">
      <h2 className="text-2xl lg:text-4xl font-bold text-center text-[#0052D4] font-aclonica leading-tight mb-4 sm:mb-8">
        Search Results for {searchParams.query}
      </h2>

      <Suspense fallback={<ProductListSkeleton />}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-4 gap-4">
          {data.data?.map((result) => {
            return (
              <div key={result._id}>
                <ProductCard product={result} />
              </div>
            );
          })}
        </div>
      </Suspense>

      <PaginationBtn totalPages={data.meta.totalPages} />
    </main>
  );
};

export default page;
