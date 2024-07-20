import CategoriesList from "@/components/layout/categories/CategoriesList";
import { CategorySkeleton } from "@/components/ui/SkeletonComponent";
import { Suspense } from "react";

async function getCategories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/category`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const CategoryPage = async () => {
  const data = await getCategories();

  return (
    <Suspense
      fallback={
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
          {[...Array(4)].map((_, index) => (
            <CategorySkeleton key={index} />
          ))}
        </div>
      }
    >
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
