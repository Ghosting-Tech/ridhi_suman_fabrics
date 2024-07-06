"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlinePhone, HiOutlineLockClosed } from "react-icons/hi";
import InputField from "@/components/inputForm/InputField";
import Image from "next/image";

const Login = () => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
    rememberMe: false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }
  };
  return (
    <>
      <div
        className="p-4 mb-0 min-h-screen overflow-hidden"
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
        <div className="flex justify-center items-start  ">
          <div className="bg-white bg-opacity-90 shadow-md rounded-lg py-6 sm:px-6 px-1 w-full max-w-xl">
            <div className="text-center mb-6">
              <h4 className="text-3xl mb-2 lg:text-4xl font-bold text-center text-[#0052D4] font-aclonica">
                Login to your account
              </h4>
              <p className="text-gray-500">Verify your identity here!</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-center gap-4 mb-4">
                <InputField
                  icon={HiOutlinePhone}
                  label="Phone Number"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
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
              <div className="flex justify-between items-center mb-4">
                <div>
                  <input
                    type="checkbox"
                    name="rememberMe"
                    value={formData.rememberMe}
                    onChange={handleChange}
                    id="rememberMe"
                    className="mr-2"
                  />
                  <label htmlFor="rememberMe" className="text-gray-500">
                    Remember Me
                  </label>
                </div>
                <Link href="/forget" className="text-blue-500">
                  Forgot your password?
                </Link>
              </div>
              <button
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-md p-2 w-full"
                type="submit"
              >
                Login
              </button>
            </form>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Don&apos;t have an account?{" "}
                <Link className="text-red-500" href="/registration">
                  Register Now
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
