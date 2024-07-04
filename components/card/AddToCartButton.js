import React from "react";

const AddToCartButton = () => {
  return (
    <button className="flex items-center w-40 gap-2 bg-white text-gray-700 border border-gray-300 rounded px-3 py-1 hover:bg-gray-100 transition">
      <img src="/icon-2/Cart.svg" alt="Cart" />
      Add to cart
    </button>
  );
};

export default AddToCartButton;
