import React from "react";
import ProductDetails from "./ProductDetails";

const ProductCard = ({ product }) => {
  const renderImages = (images) => {
    const imageWidthClass =
      {
        1: "w-full",
        2: "w-1/2",
        3: "w-1/3",
        4: "w-1/4",
      }[images.length] || "w-full";

    return (
      <div className="flex items-center w-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product Image ${index + 1}`}
            className={`object-cover mb-2 h-[32rem] ${imageWidthClass}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white shadow-md rounded-lg w-full">
      {renderImages(product.images)}
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductCard;
