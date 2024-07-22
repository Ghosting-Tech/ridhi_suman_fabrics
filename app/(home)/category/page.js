import { Suspense } from "react";

import CategoriesList from "@/components/layout/categories/CategoriesList";
import CategoryListSkeleton from "@/components/ui/skeletons/category/CategoryListSkeleton";

async function getCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/category`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const CategoryPage = async () => {
  const data = await getCategories();

  return (
    <Suspense fallback={<CategoryListSkeleton />}>
      <main className="relative p-4 sm:p-8 bg-gray-50">
        <h2 className="text-2xl lg:text-4xl font-bold text-center text-[#0052D4] font-aclonica leading-tight mb-4 sm:mb-8">
          All Products Categories
        </h2>

        <CategoriesList categoryData={data} />
      </main>
    </Suspense>
  );
};

export default CategoryPage;
