import Image from "next/image";
import React from "react";
import AddToCartButton from "./AddToCartButton";
import IncrementDecrementButton from "../button/IncrementDecrementButton";

const SmProductCard = ({ product, check, size }) => {
  return (
    <div
      className={`bg-white border-2 rounded-lg my-2 overflow-hidden ${size === "small" ? "w-full" : "md:w-[calc(50%-12px)]"}`}
    >
      <div className="flex items-center p-2 gap-4">
        <Image
          src="/icon/ProductImage.png"
          width={90}
          height={50}
          className="rounded-lg mr-4"
          alt="Product"
        />
        <div className="flex flex-col gap-2">
          <h3 className="text-md font-semibold">{product.title}</h3>
          <p className="text-sm text-[#11998E]">{product.discountedPrice}</p>
          {check != "userProfile" && (
            <p className="text-sm text-gray-500">Quantity: 2</p>
          )}

          {check === "userProfile" && <AddToCartButton />}

          {check === "checkout" && <IncrementDecrementButton />}
        </div>
      </div>
    </div>
  );
};

export default SmProductCard;
