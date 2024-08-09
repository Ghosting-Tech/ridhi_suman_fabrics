import Image from "next/image";
import React from "react";

const SmProductCard = ({ product, qty, size, color, colorHex }) => {
  const amt = product.price - (product.price * product.discount) / 100;
  return (
    <div className="bg-white border shadow-md rounded-lg overflow-hidden mb-2 relative w-full">
      <div className="flex items-start p-2 md:p-3 gap-0 md:gap-2">
        <Image
          src={product.images[0].url}
          width={100}
          height={80}
          className="rounded-lg mr-4"
          alt={product.title}
        />
        <div className="flex w-full pt-3 md:pt-0">
          <div className="flex flex-col gap-1 w-full ">
            <div className="border border-gray-500 w-fit text-xs px-2 py-1 rounded-md flex items-center gap-1">
              {product.category} /
              <span className="">{product.subCategory.name}</span>
            </div>
            <h3 className="text-md font-semibold">{product.title}</h3>

            <div className="flex gap-1 flex-col w-full">
              <div className="flex flex-col gap-1 justify-between">
                <p className="text-sm text-teal-500 font-bold">
                  &#x20B9;{amt}{" "}
                  <span className="line-through text-gray-400">
                    &#x20B9;{product.price}
                  </span>
                </p>
                <p className="text-sm text-gray-500">Quantity: {qty}</p>
              </div>
              <div className="flex flex-col gap-1 justify-between">
                <p className="text-sm text-gray-500">Size: {size}</p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  Color:
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: `${colorHex}` }}
                  ></div>
                  <div className="capitalize">{color}</div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmProductCard;
