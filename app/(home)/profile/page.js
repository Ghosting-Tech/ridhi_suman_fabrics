import React from "react";
import ProfileSection from "@/components/layout/profile/ProfileSection";
import Footer from "@/components/layout/home/Footer";
import Heading from "@/components/ui/heading/Heading";
import { FaUser } from "react-icons/fa";
import AddressSection from "@/components/layout/profile/AddressSection";

const page = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow m-5 flex flex-col gap-5">
        <Heading
          icon={
            <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full inline-block">
              <FaUser size={20} color="white" />
            </div>
          }
          title={"PROFILE"}
        />
        <div className="flex gap-5 sm:mt-5">
          <ProfileSection />
          <AddressSection />
        </div>
      </div>
    </main>
  );
};

export default page;
