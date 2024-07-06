import React from "react";
import ProductDetails from "./ProductDetails";
import Image from "next/image";

const ProductImageCard = ({ product }) => {
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
        <div key={index} className={`relative ${imageWidthClass} h-[32rem] mb-2`}>
          <Image
            src={image}
            alt={`Product Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
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

export default ProductImageCard;
