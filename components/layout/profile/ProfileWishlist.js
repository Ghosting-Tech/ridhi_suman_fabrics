import React from "react";
import SmProductCard from "@/components/cards/SmProductCard";
import CardTitle from "@/components/cardTitle/CardTitle.";
import cardTitle from "@/components/utils/data/cardTitle";
import { products } from "@/utils/productData";

const ProfileWishlist = () => {
  return (
    <div className="w-full lg:w-1/2">
      <CardTitle data={cardTitle.wishlist} size="small"/>
      <div className=" mt-5">
        <div className="max-h-[465px] overflow-hidden overflow-y-auto">
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
      </div>
    </div>
  );
};

export default ProfileWishlist;
