import { ProductCard } from "@/components/layout/admin/products/ProductCard";
import PaginationBtn from "@/components/ui/PaginationBtn";
import CategoryListSkeleton from "@/components/ui/skeletons/category/CategoryListSkeleton";
import React, { Suspense } from "react";
async function getSearchResults(searchParams) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/search?query=${searchParams.query}&page=${searchParams.page || 1}`,
    {
      cache: "no-store",
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const page = async ({ params, searchParams }) => {
  const data = await getSearchResults(searchParams);
  return (
    <Suspense fallback={<CategoryListSkeleton />}>
      <main className="relative p-4 sm:p-8 bg-gray-50">
        <h2 className="text-2xl lg:text-4xl font-bold text-center text-pink-500 font-aclonica leading-tight mb-4 sm:mb-8">
          Search Results for {searchParams.query}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-4 gap-4">
          {data.data?.map((result) => {
            return (
              <div key={result._id}>
                <ProductCard product={result} />
              </div>
            );
          })}
        </div>
        <PaginationBtn totalPages={data.meta.totalPages} />
      </main>
    </Suspense>
  );
};

export default page;
