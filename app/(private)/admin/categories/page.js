"use client";
import { useEffect, useState } from "react";
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

  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/admin/category/");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDeleteCategory = async (categoryId) => {
    try {
      const confirmation = confirm(
        "Are you sure you want to delete this category!"
      );
      if (!confirmation) {
        return;
      }
      const res = await fetch(`/api/admin/category/${categoryId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setCategories(categories.filter((c) => c._id !== categoryId));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Create category dialog */}
      <CreateCategory
        open={openCreateDialog}
        setOpen={setOpenCreateDialog}
        setCategories={setCategories}
      />

      <Nav />
      <div className="my-4">
        <div className="w-11/12 mx-auto mb-4">
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
        <div className="grid grid-cols-2 w-11/12 mx-auto gap-8 place-items-center">
          {categories.map((category) => (
            <CategoryCard
              key={category._id}
              category={category}
              handleDeleteCategory={handleDeleteCategory}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
