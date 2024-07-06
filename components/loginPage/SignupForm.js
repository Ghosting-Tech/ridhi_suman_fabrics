"use client"
import { useState } from "react";
import SecondaryInput from "../fields/SecondaryInput";
import {
  HiOutlineUpload,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineLockClosed,
} from "react-icons/hi";
import Image from "next/image";

const SignupForm = () => {
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
    <div className="selection:bg-indigo-500 selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-8">
              <h1 className="text-5xl font-bold text-indigo-600">
                Create account
              </h1>

              <form className="mt-12" action="" method="POST">
                <SecondaryInput
                  type="text"
                  label="Name"
                  field="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <div className="mt-10">
                  <SecondaryInput
                    type="number"
                    label="Phone Number"
                    field="phone"
                    min={10}
                    max={10}
                    value={formData.phone}
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
                <div className="flex flex-col items-center mt-10">
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
                <input
                  type="submit"
                  value="Sign up"
                  className="mt-10 px-8 py-4 uppercase rounded-full bg-gradient-to-r from-red-500 to-orange-500 hover:bg-gradient-to-r from-red-400 to-orange-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-80 cursor-pointer"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
