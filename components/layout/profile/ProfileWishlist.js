import React from "react";
import SmProductCard from "@/components/card/SmProductCard";
import CardTitle from "@/components/cardTitle/CardTitle.";
import cardTitle from "@/components/utils/data/cardTitle";

const ProfileWishlist = () => {
  return (
    <div className="w-full lg:w-1/2">
      <CardTitle data={cardTitle.wishlist} />
      <div className="h-40 mt-5">
        <SmProductCard />
        <SmProductCard />
        <SmProductCard />
      </div>
    </div>
  );
};

export default ProfileWishlist;
