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
    <>
      <Nav />
      <CategoryPageHeader data={categoryData} />
      <SetProductBundle />
      <SingleProductBundle />
      <Footer />
    </>
  );
};

export default CategoryPage;
