import { Suspense } from "react";

import CategoriesList from "../categories/CategoriesList";

import SectionHeading from "@/components/ui/SectionHeading";
import CategoryListSkeleton from "@/components/ui/skeletons/category/CategoryListSkeleton";
import Link from "next/link";

async function getCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/category`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const CategoriesYouMayLike = async () => {
  const data = await getCategories();

  return (
    <div className="relative p-4 sm:p-8 bg-gray-50 space-y-12 text-center">
      <SectionHeading
        label="Categories You May Like"
        className="text-blue-500"
      />

      <Suspense fallback={<CategoryListSkeleton />}>
        <CategoriesList categoryData={data} />
      </Suspense>

      <div className="mt-12 pb-6">
        <Link
          href="/category"
          className="rounded-full border border-black capitalize px-8 py-3 hover:shadow-lg hover:bg-black hover:text-white transition-all duration-300 ease-in-out mx-auto"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default CategoriesYouMayLike;
