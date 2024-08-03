import React from "react";

import CategoryItem from "./CategoryItem";

async function fetchData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/category`, {
    cache: "no-store",
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    return []
  }
  return res.json();
}
const HeaderCategory = async () => {
  const categories = await fetchData();

  return (
    <div className="lg:flex flex-wrap lg:gap-6 md:gap-4 gap-3 text-gray-600 px-6 py-2 hidden border-b border-gray-100">
      <span className="text-black capitalize">Categories :</span>

      {categories.map((category) => (
        <CategoryItem key={category._id} category={category} />
      ))}
    </div>
  );
};

export default HeaderCategory;
