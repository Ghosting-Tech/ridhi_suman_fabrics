"use client";
import React, { useState } from "react";
import Heading from "@/components/ui/heading/Heading";
import { FaRegAddressCard } from "react-icons/fa6";
import DefaultBtn from "@/components/ui/buttons/DefaultBtn";
import AddressCreate from "@/components/modals/Address/AddressCreate";
import { LuPlusCircle } from "react-icons/lu";
import EditAddress from "@/components/modals/Address/EditAddress";
import DeleteAddress from "@/components/modals/Address/DeleteAddress";
import AddressCard from "./AddressCard";

const AddressSection = () => {
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [formData, setFormData] = useState({
    flat: 10,
    street: "Boring Road",
    landmark: "near Gandhi Maidan",
    city: "Patna",
    state: "Bihar",
    pincode: 844101,
  });
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
      <EditAddress
        open={openEditDialog}
        setOpen={setOpenEditDialog}
        data={formData}
        setData={setFormData}
      />
      <DeleteAddress open={openDeleteDialog} setOpen={setOpenDeleteDialog} />
      {/* {formData.map((data, index) => ( */}
      <AddressCard
        // key={index}
        setOpenEditDialog={setOpenEditDialog}
        setOpenDeleteDialog={setOpenDeleteDialog}
        formData={formData}
      />
      {/* ))} */}
    </div>
  );
};

export default AddressSection;
