import { Suspense } from "react";
import CategoriesList from "../categories/CategoriesList";
import CategoryListSkeleton from "@/components/ui/skeletons/category/CategoryListSkeleton";
import SectionHeading from "@/components/ui/SectionHeading";

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
    <div className="relative p-4 sm:p-8 bg-gray-50 space-y-6">
      <SectionHeading
        label="Categories You May Like"
        className="text-blue-500"
      />

      <Suspense fallback={<CategoryListSkeleton />}>
        <CategoriesList categoryData={data} />
      </Suspense>
    </div>
  );
};

export default CategoriesYouMayLike;
