"use client";
import CreateProduct from "@/components/modals/admin/products/CreateProduct";
import DefaultBtn from "@/components/ui/buttons/DefaultBtn";
import Heading from "@/components/ui/heading/Heading";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";
import { FaTshirt } from "react-icons/fa";
import { RiApps2AddFill } from "react-icons/ri";

const Page = () => {
  return (
    <>
      <div className="px-10 my-4">
        <Heading
          icon={
            <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full inline-block">
              <FaTshirt size={20} color="white" />
            </div>
          }
          title={"Manage Categories"}
          buttons={[
            <Button className="rounded" variant="gradient" color="pink">
              <Link href={"/admin/products/create-product"}>
                Create Product
              </Link>
            </Button>,
          ]}
        />
      </div>
    </>
  );
};

export default Page;
