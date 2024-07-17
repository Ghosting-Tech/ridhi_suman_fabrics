import React from "react";
import ProfileSection from "@/components/layout/profile/ProfileSection";
import ProfileWishlist from "@/components/layout/profile/ProfileWishlist";
import CardTitle from "@/components/cardTitle/CardTitle.";
import cardTitle from "@/components/utils/data/cardTitle";
import Nav from "@/components/layout/home/NavHeader/Nav";
import Footer from "@/components/layout/home/Footer";

const page = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow mx-4 my-5 flex flex-col gap-5">
          <CardTitle data={cardTitle.profile} />
          <div className="flex flex-col lg:flex-row gap-10 justify-between">
            <ProfileSection />
            <ProfileWishlist />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
