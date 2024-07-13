import Image from "next/image";
import React from "react";

const AddToCartButton = () => {
  return (
    <button className="flex items-center w-40 gap-2 bg-white text-gray-700 border border-gray-300 rounded px-3 py-1 hover:bg-gray-100 transition">
    <div className="w-5 h-5 relative">
      <Image
        src="/icon-2/Cart.svg"
        alt="Cart"
        layout="fill"
        objectFit="contain"
      />
    </div>
    Add to cart
  </button>
  );
};

export default AddToCartButton;
