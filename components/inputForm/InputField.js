"use client"
import React from "react";
import { HiOutlinePhone } from "react-icons/hi";

const InputField = () => {
  return (
    <div>
      <div className="flex border p-3 rounded-md w-full">
        <HiOutlinePhone size={21} color="gray" className="mr-2" />
        <div className="flex flex-col w-full">
          <label className="text-gray-700">Phone Number</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            className="w-full pt-2 rounded bg-transparent focus:outline-none focus:border-gray-900"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default InputField;
