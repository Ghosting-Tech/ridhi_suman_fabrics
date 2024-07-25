import React from "react";
import CategoryItem from "./CategoryItem";

async function fetchData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/category`,
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
const HeaderCategory = async () => {
  const categories = await fetchData();

  return (
    <div className="flex flex-wrap lg:gap-6 md:gap-4 gap-3 text-gray-600 px-6 py-2 border-b">
      <span className="text-black">Categories :</span>

      {categories.map((category, index) => (
        <CategoryItem key={category._id} category={category} />
      ))}
    </div>
  );
};

export default HeaderCategory;
