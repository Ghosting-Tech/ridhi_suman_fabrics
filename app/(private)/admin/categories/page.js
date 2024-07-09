"use client";
import { useState } from "react";
import { FaTshirt } from "react-icons/fa";
import { RiApps2AddFill } from "react-icons/ri";
import CategoryCard from "@/components/admin-category/CategoryCard";
import Footer from "@/components/footer/Footer";
import Nav from "@/components/header/Nav";
import DefaultBtn from "@/components/ui/buttons/DefaultBtn";
import Heading from "@/components/ui/heading/Heading";

import CreateCategory from "@/components/modals/admin/CreateCategory";

const Page = () => {
  const [openCreateDialog, setOpenCreateDialog] = useState(false);

  const btns = [
    <DefaultBtn
      key="create-category-btn"
      icon={<RiApps2AddFill />}
      title={"Create category"}
      clickHandler={() => {
        setOpenCreateDialog(true);
      }}
    />,
  ];

  return (
    <div className="min-h-screen">
      {/* Create category dialog */}
      <CreateCategory open={openCreateDialog} setOpen={setOpenCreateDialog} />

      <Nav />
      <div className="my-4">
        <div class="w-11/12 mx-auto mb-4">
          <Heading
            icon={
              <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full inline-block">
                <FaTshirt size={20} color="white" />
              </div>
            }
            title={"Manage Categories"}
            buttons={btns}
          />
        </div>
        <div className="flex justify-center gap-12">
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
