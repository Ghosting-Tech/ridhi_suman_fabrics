import Image from "next/image";
import React from "react";

const SmProductCard = ({ product, qty, size, color }) => {
  const amt = product.price - (product.price * product.discount) / 100;
  return (
    <div className=" bg-white border shadow-md rounded-lg overflow-hidden mb-2 relative">
      <div className="absolute right-3 top-3">
        <h1 className="text-green-400">
          {product.category}/
          <span className="text-red-400">{product.subCategory.name}</span>
        </h1>
      </div>
      <div className="flex items-center p-3 gap-2">
        <Image
          src={product.images[0].url}
          width={100}
          height={80}
          className="rounded-lg mr-4"
          alt={product.title}
        />
        <div className="flex gap-8">
          <div className="flex flex-col gap-3">
            <h3 className="text-md font-semibold">{product.title}</h3>
            <p className="text-sm text-[#11998E] font-bold">
              &#x20B9;{amt}
              {"   "}
              <span className="line-through text-gray-400">
                {" "}
                &#x20B9;{product.price}
              </span>
            </p>

            <p className="text-sm text-gray-500">Quantity: {qty}</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-500">Size: {size}</p>
            <p className="text-sm text-gray-500">Color: {color} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmProductCard;
