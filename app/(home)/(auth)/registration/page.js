"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  HiOutlineUpload,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineLockClosed,
} from "react-icons/hi"; // Assuming you have react-icons installed

const Register = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const image = URL.createObjectURL(event.target.files[0]);
      setSelectedImage(image);
    }
  };

  return (
    <>
      <div
        className="p-4"
        style={{ backgroundImage: "url('/category/Background.png')" }}
      >
        <Link href={"/"}>
          <img
            src="/ridhi-logo.png"
            alt="Header Image"
            className="sm:w-40 sm:absolute sm:mb-10 mb-1 w-28"
          />
        </Link>
        <div className="flex justify-center items-start min-h-screen">
          <div className="bg-white bg-opacity-90 shadow-md rounded-lg p-6 w-full max-w-xl">
            <div className="text-center mb-6">
              <h4 className="text-3xl mb-2 lg:text-4xl font-bold text-center text-[#0052D4] font-aclonica">
                Register Now
              </h4>
              <p className="text-gray-500">Create your account today!</p>
            </div>
            <form>
              <div className="flex flex-col items-center mb-4">
                <label
                  htmlFor="profile"
                  className="cursor-pointer flex items-center space-x-4 border rounded-md p-4 w-full"
                >
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      className="rounded-full w-12 h-12 object-cover"
                      alt="avatar"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
                      <svg
                        className="w-6 h-6 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  )}
                  <div className="flex-grow pl-2">
                    <p className="text-gray-500">Add Profile Image</p>
                    <p className="text-sm text-gray-400">PNG or JPG</p>
                  </div>
                  <div className="ml-auto">
                    <HiOutlineUpload className="w-6 h-6 text-gray-500" />
                  </div>
                </label>
                <input
                  type="file"
                  id="profile"
                  name="profile"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              <div className="flex flex-col items-center gap-4 mb-4 w-full">
                <div className="flex border p-3 rounded-md w-full">
                  <HiOutlineUser size={21} color="gray" className="mr-2" />
                  <div className="flex flex-col w-full">
                    <label className="text-gray-700">Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full pt-2 rounded bg-transparent focus:outline-none focus:border-gray-900"
                      required
                    />
                  </div>
                </div>
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
                <div className="flex border p-3 rounded-md w-full">
                  <HiOutlineMail size={21} color="gray" className="mr-2" />
                  <div className="flex flex-col w-full">
                    <label className="text-gray-700">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full pt-2 rounded bg-transparent focus:outline-none focus:border-gray-900"
                      required
                    />
                  </div>
                </div>
                <div className="flex border p-3 rounded-md w-full">
                  <HiOutlineLockClosed
                    size={21}
                    color="gray"
                    className="mr-2"
                  />
                  <div className="flex flex-col w-full">
                    <label className="text-gray-700">Password</label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full pt-2 rounded bg-transparent focus:outline-none focus:border-gray-900"
                      required
                    />
                  </div>
                </div>
              </div>
              <button
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-md p-2 w-full"
                type="submit"
              >
                Register
              </button>
            </form>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Already Registered?{" "}
                <Link className="text-red-500" href={"/login"}>
                  Login
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
