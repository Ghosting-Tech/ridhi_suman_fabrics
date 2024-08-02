import Image from "next/image";
import React from "react";

const SmProductCard = ({ product, qty }) => {
  return (
    <div className=" bg-white border shadow-md rounded-lg overflow-hidden mb-2">
      <div className="flex items-center p-3 gap-2">
        <Image
          src={product.images[0].url}
          width={100}
          height={80}
          className="rounded-lg mr-4"
          alt={product.title}
        />
        <div className="flex flex-col gap-3">
          <h3 className="text-md font-semibold">{product.title}</h3>
          <p className="text-sm text-[#11998E] font-bold">
            &#x20B9;{product.price}
          </p>
          <p className="text-sm text-gray-500">Quantity: {qty}</p>
        </div>
      </div>
    </div>
  );
};

export default SmProductCard;
