"use client";
import Heading from "@/components/ui/heading/Heading";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMdCall, IoMdHelpCircleOutline } from "react-icons/io";

const Help = () => {
  return (
    <div className="rounded-lg flex flex-col gap-3 border-2 border-gray-500 w-full p-5">
      <Heading
        icon={
          <div className="inline-block pr-1">
            <IoMdHelpCircleOutline size={25} color="red" />
          </div>
        }
        title={"HELP"}
      />
      <div className="flex flex-col gap-3">
        <p>
          Read the{" "}
          <Link href="#" className="text-blue-500 underline">
            Cancelation Policy
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-blue-500  underline">
            Refund Policy
          </Link>{" "}
          before the canceling the order
        </p>
        <Button
          variant="outlined"
          className="text-red-500 border-red-500 text-sm w-fit"
        >
          Cancel Order
        </Button>
        <div className="h-[1px] bg-gray-300"></div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-gray-500">
          Contact us for any enquiry, we are available to serve you 24/7
        </p>
        <div className="flex gap-5">
          <Button
            variant="outlined"
            className="text-[#11998E] border-[#11998E] text-sm w-fit flex gap-1"
          >
            <IoMdCall size={20} />
            Call us
          </Button>
          <Button className="text-white bg-[#11998E] border-[#11998E] text-sm w-fit flex gap-2">
            <FaWhatsapp size={22} className="text-light-green-900" />
            Chat on whatsapp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Help;
