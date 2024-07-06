"use client";
import Link from "next/link";
import { useState } from "react";
import SecondaryInput from "../fields/SecondaryInput";
import LeftOverlayContent from "./LeftOverlayContent";

const SigninForm = ({ isAnimated, setIsAnimated }) => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const submitHandler = () => {
    console.log(formData);
  };

  return (
    <div className="selection:bg-indigo-500 selection:text-white lg:w-2/4 w-11/12">
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-4xl font-bold text-indigo-600">Welcome back!</h1>

        <form
          className="mt-8 w-full"
          action=""
          method="POST"
          onSubmit={submitHandler}
        >
          <SecondaryInput
            type="text"
            label="Phone Number"
            field="phone"
            value={formData.phone}
            min={10}
            max={10}
            onChange={handleInputChange}
          />
          <div className="mt-10">
            <SecondaryInput
              type="password"
              label="Password"
              field="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <Link
            href={"/forget"}
            className="mt-4 block text-sm text-right font-medium text-blue-600 hover:underline focus:outline-none"
          >
            Forgot your password?
          </Link>
          <input
            type="submit"
            value="Sign in"
            className="mt-4 px-8 py-4 uppercase rounded-full bg-gradient-to-r from-red-500 to-orange-600 hover:bg-orange-500 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-80 cursor-pointer"
          />
        </form>
      </div>
      <div className="flex gap-1 items-center mt-4 text-sm justify-center font-medium">
        <div>Don't have and account yet?</div>
        <button
          className=" text-blue-600 hover:underline focus:outline-none"
          onClick={(e) => {
            setIsAnimated(!isAnimated);
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SigninForm;
