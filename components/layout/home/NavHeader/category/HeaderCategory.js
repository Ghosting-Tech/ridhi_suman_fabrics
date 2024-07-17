import React from "react";
import CategoryItem from "./CategoryItem";

const HeaderCategory = () => {
  const categories = [
    {
      label: "Sarees",
      href: "#",
    },
    {
      label: "Lehengas",
      href: "#",
    },
    {
      label: "Suits",
      href: "#",
    },
    {
      label: "Kurtis",
      href: "#",
    },
    {
      label: "Dupatta",
      href: "#",
    },
    {
      label: "Chunni",
      href: "#",
    },
    {
      label: "Accessories",
      href: "#",
    },
  ];

  return (
    <div className="flex flex-wrap lg:gap-6 md:gap-4 gap-3 text-gray-600 px-6 py-2 border-b">
      <span className="text-black">Categories :</span>

      {categories.map((category, index) => (
        <CategoryItem key={index} href={category.href} label={category.label} />
      ))}
    </div>
  );
};

export default HeaderCategory;
