"use client";
import Link from "next/link";
import { useState } from "react";
import SecondaryInput from "../../fields/SecondaryInput";

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
    <div className="lg:w-3/4 w-11/12 max-w-md">
      <div className="flex flex-col justify-center items-center w-full space-y-10">
        <h1 className="text-4xl font-bold text-pink-500">Welcome back!</h1>

        <form
          className="mt-8 w-full"
          action=""
          method="POST"
          onSubmit={submitHandler}
        >
          <div className="space-y-8">
            <SecondaryInput
              type="text"
              label="Phone Number"
              field="phone"
              value={formData.phone}
              min={10}
              max={10}
              onChange={handleInputChange}
            />

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

          <button
            type="submit"
            className="mt-8 py-4 transition-all duration-500 uppercase rounded-full bg-gradient-to-r from-red-400 to-pink-400 hover:scale-105 active:scale-100 text-white font-semibold w-full cursor-pointer"
          >
            Sign in
          </button>
        </form>
      </div>

      <div className="flex gap-1 items-center mt-4 text-sm justify-center">
        <div>Don&apos;t have and account yet?</div>

        <button
          className=" text-blue-600 hover:underline focus:outline-none font-medium underline hover:scale-105 transition-transform"
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
