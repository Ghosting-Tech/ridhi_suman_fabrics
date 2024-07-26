import React from "react";
import { Card, CardBody } from "@material-tailwind/react";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";

const AddressCard = ({
  setOpenEditDialog,
  setOpenDeleteDialog,
  formData,
  key,
}) => {
  return (
    <Card className="shadow-lg border flex flex-col gap-3 p-3">
      <div className="flex justify-between">
        <span className="px-1 text-black">Address {key + 1}.</span>
        <div className="flex gap-2">
          <FiEdit
            size={20}
            onClick={() => setOpenEditDialog(true)}
            className="cursor-pointer"
          />
          <MdOutlineDelete
            color="red"
            size={20}
            onClick={() => setOpenDeleteDialog(true)}
            className="cursor-pointer"
          />
        </div>
      </div>
      <CardBody className="p-0 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex justify-between text-gray-600 px-1">
          <span>Flat/HouseNo.</span>
          <span>{formData.flat}</span>
        </div>
        <div className="flex justify-between px-1">
          <span>Street</span>
          <span>{formData.street}</span>
        </div>
        <div className="flex justify-between px-1">
          <span>Landmark</span>
          <span>{formData.landmark}</span>
        </div>
        <div className="flex justify-between px-1">
          <span>City</span>
          <span>{formData.city}</span>
        </div>
        <div className="flex justify-between px-1">
          <span>State</span>
          <span>{formData.state}</span>
        </div>
        <div className="flex justify-between px-1">
          <span>Pincode</span>
          <span>{formData.pincode}</span>
        </div>
      </CardBody>
    </Card>
  );
};

export default AddressCard;
