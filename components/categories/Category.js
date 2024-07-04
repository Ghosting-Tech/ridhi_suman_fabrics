import React from "react";
import Link from "next/link";
import categoryData from "@/utils/categoryData"; // Adjust the import path as necessary

function Category() {
  return (
    <div className="relative p-4 sm:p-8 bg-gray-50">
      <h2 className="text-2xl lg:text-4xl font-bold text-center text-[#0052D4] font-[Aclonica] leading-tight mb-4 sm:mb-8">
        Categories you may like
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
        {categoryData.map((category, index) => (
          <Link key={index} href={category.href} className="flex flex-col items-center p-2">
            <img
              src={category.src}
              alt={category.alt}
              className="rounded-full w-full object-cover aspect-square"
            />
            <p className="text-lg mt-2 sm:mt-4 font-[Aclonica]">{category.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
