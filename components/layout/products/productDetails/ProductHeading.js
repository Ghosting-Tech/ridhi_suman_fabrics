import React from "react";
import { CiDiscount1 } from "react-icons/ci";

const ProductHeading = ({
  category,
  subCategory,
  title,
  price,
  discount,
  backgroundColor,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div
        className="w-fit text-black inline text-xs font-400 px-2 py-[6px] leading-3 rounded capitalize"
        style={{ background: `${backgroundColor}` }}
      >
        {category} / {subCategory.name}
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

      <div className="font-400 text-[14px] md:text-md leading-5 md:leading-6 text-[#828282]">
        We provide a{" "}
        <span className="font-600 text-black">one-year warranty</span> in case
        there are any issues with our products.
      </div>
    </div>
  );
};

export default ProductHeading;
