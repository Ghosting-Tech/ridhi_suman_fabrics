"use client";
import React, { useState } from "react";
import Heading from "@/components/ui/heading/Heading";
import { FaRegAddressCard } from "react-icons/fa6";
import DefaultBtn from "@/components/ui/buttons/DefaultBtn";
import AddressCreate from "@/components/modals/Address/AddressCreate";
import { LuPlusCircle } from "react-icons/lu";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@material-tailwind/react";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";

const AddressSection = () => {
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const btns = [
    <DefaultBtn
      key={1}
      icon={<LuPlusCircle />}
      title={"Add Address"}
      clickHandler={() => {
        setOpenCreateDialog(true);
      }}
    />,
  ];
  return (
    <div className="mx-auto  p-4 rounded-lg shadow-lg border max-w-2xl w-full flex flex-col gap-5">
      <Heading
        icon={
          <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full inline-block">
            <FaRegAddressCard size={20} color="white" />
          </div>
        }
        title={"Address Details"}
        buttons={btns}
      />
      <AddressCreate open={openCreateDialog} setOpen={setOpenCreateDialog} />
      <Card className="shadow-lg border flex flex-col gap-3 p-3">
        <div className="flex justify-between">
          <span className="px-1 text-black">Address 1.</span>
          <div className="flex gap-2">
            <FiEdit size={20} />
            <MdOutlineDelete color="red" size={20} />
          </div>
        </div>
        <CardBody className="p-0 grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex justify-between text-gray-600 px-1">
            <span>Flat/HouseNo.</span>
            <span>10</span>
          </div>
          <div className="flex justify-between px-1">
            <span>Street</span>
            <span>Boring Road</span>
          </div>
          <div className="flex justify-between px-1">
            <span>Landmark</span>
            <span>near Gandhi Maidan</span>
          </div>
          <div className="flex justify-between px-1">
            <span>City</span>
            <span>Patna</span>
          </div>
          <div className="flex justify-between px-1">
            <span>State</span>
            <span>Bihar</span>
          </div>
          <div className="flex justify-between px-1">
            <span>Pincode</span>
            <span>844102</span>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddressSection;
