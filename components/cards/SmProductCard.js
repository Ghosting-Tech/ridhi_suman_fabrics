import Image from "next/image";
import React from "react";

const SmProductCard = ({ product }) => {
  return (
    <div className=" bg-gray-50 shadow-md border rounded-lg overflow-hidden">
      <div className="flex items-center p-3 gap-4">
        <Image
          src={product.image}
          width={100}
          height={110}
          className="rounded-lg mr-4"
        />
        <div className="flex flex-col gap-3">
          <h3 className="text-md font-semibold">{product.title}</h3>
          <p className="text-sm text-[#11998E] font-bold">
            {product.discountedPrice}
          </p>
          <p className="text-sm text-gray-500">Quantity: 2</p>
        </div>
      </div>
    </div>
  );
};

export default SmProductCard;
