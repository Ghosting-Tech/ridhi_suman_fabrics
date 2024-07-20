import React from "react";
import SmProductCard from "@/components/cards/SmProductCard";
import { products } from "@/utils/productData";

const ProfileWishlist = () => {
  return (
    <div className=" block md:flex justify-between items-center flex-wrap px-5">
      {products.map((product, index) => (
        <SmProductCard
          key={index}
          product={product}
          check="userProfile"
          onIncrement={() => handleQuantityChange(index, 1)}
          onDecrement={() => handleQuantityChange(index, -1)}
        />
      ))}
    </div>
  );
};

export default ProfileWishlist;
