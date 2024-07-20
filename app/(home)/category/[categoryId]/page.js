"use client";
import categoryData from "@/utils/categoryData";

import CategoryPageHeader from "@/components/layout/home/categories/CategoryPageHeader";
import SetProductBundle from "@/components/layout/home/categories/SetProductBundle";
import SingleProductBundle from "@/components/layout/home/categories/SingleProductBundle";

// async function getCategoryProduct() {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/category`
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

const CategoryPage = () => {
  // const data = await getCategoryProduct();

  return (
    <>
      <CategoryPageHeader data={categoryData} />
      <SetProductBundle />
      <SingleProductBundle />
    </>
  );
};

export default CategoryPage;
