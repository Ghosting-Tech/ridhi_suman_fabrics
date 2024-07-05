import React from "react";
import ProfileSection from "@/components/layout/profile/ProfileSection";
import ProfileWishlist from "@/components/layout/profile/ProfileWishlist";
import CardTitle from "@/components/cardTitle/CardTitle.";
import cardTitle from "@/components/utils/data/cardTitle";

const page = () => {
  return (
    <div className="mx-4 flex flex-col gap-5">
      <CardTitle data={cardTitle.profile} />
      <div className="flex flex-col lg:flex-row gap-10 justify-between">
        <ProfileSection />
        <ProfileWishlist />
      </div>
    </div>
  );
};

export default page;
