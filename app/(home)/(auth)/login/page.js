"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { HiOutlinePhone, HiOutlineLockClosed } from "react-icons/hi"; // Assuming you have react-icons installed

const Login = () => {
  return (
    <>
      <div
        className="p-4 mb-0 min-h-screen overflow-hidden"
        style={{ backgroundImage: "url('/category/Background.png')" }}
      >
        <Link href={"/"}>
          <img
            src="/ridhi-logo.png"
            alt="Header Image"
            className="sm:w-40 sm:absolute sm:mb-10 mb-1 w-28"
          />
        </Link>
        <div className="flex justify-center items-start  ">
          <div className="bg-white bg-opacity-90 shadow-md rounded-lg py-6 sm:px-6 px-1 w-full max-w-xl">
            <div className="text-center mb-6">
              <h4 className="text-3xl mb-2 lg:text-4xl font-bold text-center text-[#0052D4] font-aclonica">
                Login to your account
              </h4>
              <p className="text-gray-500">Verify your identity here!</p>
            </div>
            <form>
              <div className="flex flex-col items-center gap-4 mb-4">
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
              <div className="flex justify-between items-center mb-4">
                <div>
                  <input type="checkbox" id="rememberMe" className="mr-2" />
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
                Don't have an account?{" "}
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
