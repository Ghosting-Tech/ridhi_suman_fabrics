"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  HiOutlineUpload,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineLockClosed,
} from "react-icons/hi";
import InputField from "@/components/inputForm/InputField";
import Image from "next/image";

const Register = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    profileImage: null,
  });

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const image = URL.createObjectURL(event.target.files[0]);
      setSelectedImage(image);
      setFormData({
        ...formData,
        profileImage: event.target.files[0],
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send formData to the server
    console.log(formData);
    // You may want to create a FormData object to handle file uploads
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }
    // Now you can send `form` to your server using fetch or any other method
  };

  return (
    <>
      <div
        className="p-4"
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
        <div className="flex justify-center items-start min-h-screen">
          <div className="bg-white bg-opacity-90 shadow-md rounded-lg p-6 w-full max-w-xl">
            <div className="text-center mb-6">
              <h4 className="text-3xl mb-2 lg:text-4xl font-bold text-center text-[#0052D4] font-aclonica">
                Register Now
              </h4>
              <p className="text-gray-500">Create your account today!</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-center mb-4">
                <label
                  htmlFor="profile"
                  className="cursor-pointer flex items-center space-x-4 border rounded-md p-4 w-full"
                >
                  {selectedImage ? (
                    <div className="relative w-12 h-12">
                      <Image
                        src={selectedImage}
                        alt="avatar"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
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
                <InputField
                  icon={HiOutlineUser}
                  label="Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
                <InputField
                  icon={HiOutlinePhone}
                  label="Phone Number"
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
                <InputField
                  icon={HiOutlineMail}
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
                <InputField
                  icon={HiOutlineLockClosed}
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
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
