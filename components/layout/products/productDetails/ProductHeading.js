import { HeartIcon } from "@heroicons/react/24/outline";
import { CiDiscount1 } from "react-icons/ci";

import React, { useState } from "react";
import AddToWishlist from "./button/AddToWishlist";

const ProductHeading = ({
  category,
  subCategory,
  title,
  price,
  discount,
  backgroundColor,
  description,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const wordCount = description.split(" ").length;

  const shortDescription = description.split(" ").slice(0, 10).join(" ");

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <div
          className="w-fit text-black inline text-xs font-400 px-2 py-[6px] leading-3 rounded capitalize"
          style={{ background: `${backgroundColor}` }}
        >
          {category} / {subCategory.name}
        </div>

        <AddToWishlist />
      </div>

      <div className="font-600 text-4xl capitalize w-fit leading-8 md:leading-12 font-semibold text-pink-500">
        {title}
      </div>

      <div className="flex justify-between">
        <div className="flex items-end gap-2">
          <p className="leading-none font-600  text-lg md:text-2xl text-teal-500 font-semibold">
            ₹<span>{(price - (discount / 100) * price).toFixed(2)}</span>
          </p>

          <p className="line-through leading-none text-2xl md:text-lg text-gray-500">
            ₹ <span>{price}</span>
          </p>
        </div>

        <div className="flex gap-1 items-center text-nowrap">
          <CiDiscount1 className="text-red-500 w-5 h-5" />

          <p className="text-red-500">
            <span className="">{discount}%</span>{" "}
            <span className="text-xs">OFF</span>
          </p>
        </div>
      </div>

      <div className="font-400 text-sm md:text-md text-gray-500">
        {isExpanded || wordCount <= 10 ? description : shortDescription}

        {wordCount > 10 && (
          <button onClick={toggleExpanded} className="ml-2 text-light-blue-500">
            {isExpanded ? "Show less" : "...more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductHeading;
