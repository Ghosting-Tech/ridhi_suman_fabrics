import React from "react";
import ProfileWishlist from "@/components/layout/profile/ProfileWishlist";
import Nav from "@/components/layout/home/NavHeader/Nav";
import Heading from "@/components/ui/heading/Heading";
import Footer from "@/components/layout/home/Footer";
import { IoIosHeart } from "react-icons/io";

const WishlistPage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow mx-4 my-5 flex flex-col gap-5">
          <Heading
            icon={
              <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full inline-block">
                <IoIosHeart size={18} color="white" />
              </div>
            }
            title={"Manage Wishlist"}
          />

          <ProfileWishlist />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WishlistPage;
