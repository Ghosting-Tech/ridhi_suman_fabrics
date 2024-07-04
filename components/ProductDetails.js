import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div className="p-4 flex flex-col items-start w-full">
      <div className="flex items-center justify-between w-full mt-2">
        <span className="text-white bg-purple-500 text-xs font-semibold px-2 py-1 rounded">
          {product.category}
        </span>
        <span className="text-red-500 bg-pink-100 text-xs font-semibold px-2 py-1 rounded">
          {product.discount}
        </span>
      </div>
      <h3 className="text-lg font-bold mt-2">{product.title}</h3>
      <div className="flex items-center justify-between w-full mt-2">
        <span className="text-gray-500 line-through">
          {product.originalPrice}
        </span>
        <span className="text-red-500 font-bold">
          {product.discountedPrice}
        </span>
      </div>
      <div className="w-full flex justify-between items-center mt-2">
        <div className="w-full flex justify-between items-center bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-red-500 to-orange-500 h-2.5 rounded-full"
            style={{ width: "50%" }}
          ></div>
          <span className="ml-2 text-gray-500 text-sm">{product.sales}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
