"use client";
// pages/ForgotPassword.js
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlinePhone } from "react-icons/hi";
import InputField from "@/components/inputForm/InputField";
import Image from "next/image";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({ phone_number: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div
        className="p-4 min-h-screen overflow-hidden"
        style={{ backgroundImage: "url('/category/Background.png')" }}
      >
        <Link href="/">
          <div className="relative sm:w-40 w-28">
            <Image
              src="/ridhi-logo.png"
              alt="Header Image"
              layout="responsive"
              width={160} // width and height in pixels
              height={40} // adjusted according to the actual dimensions
              className="sm:absolute sm:mb-10 mb-1"
            />
          </div>
        </Link>
        <div className="flex justify-center items-start">
          <div className="bg-white bg-opacity-90 shadow-md rounded-lg p-6 w-full max-w-xl">
            <div className="text-center mb-6">
              <h4 className="text-3xl mb-2 lg:text-4xl font-bold text-center text-[#0052D4] font-aclonica">
                Forgot Password
              </h4>
              <p className="text-gray-500">
                Enter your phone number to reset your password
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-center gap-4 mb-4 w-full">
                <InputField
                  icon={HiOutlinePhone}
                  type="text"
                  placeholder="Enter your phone number"
                  label="Phone Number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-md p-2 w-full"
                type="submit"
              >
                Reset Password
              </button>
            </form>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Remembered your password?{" "}
                <Link href="/login" className="text-red-500">
                  Login here
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
