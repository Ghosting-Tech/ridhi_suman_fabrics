"use client";
import { useState } from "react";
import SecondaryInput from "../fields/SecondaryInput";
import { HiOutlineUpload } from "react-icons/hi";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { FaCheckCircle } from "react-icons/fa";

const SignupForm = ({ isAnimated, setIsAnimated }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    profileImage: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const image = URL.createObjectURL(event.target.files[0]);
      setFormData({
        ...formData,
        profileImage: event.target.files[0],
        selectedImage: image,
      });
    }
  };

  return (
    <div className="selection:bg-indigo-500 selection:text-white lg:w-8/12 w-11/12">
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-4xl font-bold text-pink-500">Create account</h1>

        <form className="mt-8 w-full" action="" method="POST">
        <div className="flex flex-col items-center">
            <label
              htmlFor="profile"
              className="cursor-pointer flex items-center space-x-4 border rounded-md p-4 w-full"
            >
              {formData.selectedImage ? (
                <div className="relative w-12 h-12">
                  <Image
                    src={formData.selectedImage}
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
          <div className="mt-6">
            <SecondaryInput
              type="text"
              label="Name"
              field="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-10">
            <SecondaryInput
              type="email"
              label="Email address"
              field="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-10">
            <SecondaryInput
              type="password"
              label="Password"
              field="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="mt-10 flex items-center gap-2">
            <div className="w-full">
              <SecondaryInput
                type="text"
                label="Phone Number"
                field="phone"
                min={10}
                max={10}
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full">
              <SecondaryInput
                type="text"
                label="OTP"
                field="phone"
                min={10}
                max={10}
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <button className="px-4 py-2 rounded-lg whitespace-nowrap bg-gradient-to-r from-teal-500 to-emerald-500 hover:scale-95 transition-all text-white cursor-pointer active:scale-100 font-semibold flex items-center gap-1">
              Verify <FaCheckCircle />
            </button>
          </div>
          <input
            type="submit"
            value="Sign up"
            className="mt-10 py-4 transition-all duration-500 uppercase rounded-full bg-gradient-to-r from-red-400 to-pink-400 hover:scale-105 active:scale-100 text-white font-semibold w-full cursor-pointer"
          />
        </form>
      </div>
      <div className="flex gap-1 items-center mt-4 text-sm justify-center font-medium">
        <div>Have an account already?</div>
        <button
          className=" text-blue-600 hover:underline focus:outline-none"
          onClick={(e) => {
            setIsAnimated(!isAnimated);
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
