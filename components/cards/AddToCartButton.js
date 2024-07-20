import Image from "next/image";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const AddToCartButton = () => {
  return (
    <button className="flex items-center justify-center w-32 gap-2 bg-white text-gray-700 border border-gray-300 rounded px-3 py-1 hover:bg-gray-100 transition">
      <AiOutlineShoppingCart />
      <span className="text-sm">Add to cart</span>
    </button>
  );
};

export default AddToCartButton;
