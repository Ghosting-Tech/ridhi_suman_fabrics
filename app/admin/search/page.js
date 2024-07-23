import SearchResultList from "@/components/layout/admin/search/SearchResultList";
import CategoryListSkeleton from "@/components/ui/skeletons/category/CategoryListSkeleton";
import React, { Suspense } from "react";
async function getSearchResults(searchParams) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/search?query=${searchParams.query}`
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
        <h2 className="text-2xl lg:text-4xl font-bold text-center text-[#0052D4] font-aclonica leading-tight mb-4 sm:mb-8">
          Search Results {searchParams.query}
        </h2>

        <SearchResultList data={data} />
      </main>
    </Suspense>
  );
};

export default page;
