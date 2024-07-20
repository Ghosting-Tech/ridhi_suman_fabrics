import React from "react";
import Heading from "@/components/ui/heading/Heading";
import { FaAddressBook, FaRegAddressCard, FaUser } from "react-icons/fa6";

const AddressSection = () => {
  return (
    <div className="mx-auto sm:px-6 p-4 rounded-lg shadow-md max-w-2xl w-full">
      <Heading
        icon={
          <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full inline-block">
            <FaRegAddressCard size={20} color="white" />
          </div>
        }
        title={"Address Details"}
      />
      <form className="mt-4 flex flex-col gap-4">
        <div>
          <Input label="Username" />
        </div>
        <div>
          <label className="text-gray-700">Street</label>
          <input
            type="text"
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="text-gray-700">Landmark</label>
          <input
            type="text"
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="text-gray-700">City</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-1/2">
            <label className="text-gray-700">State</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div>
          <label className="text-gray-700">Pincode</label>
          <input
            type="text"
            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </form>
    </div>
  );
};

export default AddressSection;
