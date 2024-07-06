"use client"
import Link from "next/link";
import { useState } from "react";
import SecondaryInput from "../fields/SecondaryInput";

const SigninForm = () => {
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
  const submitHandler = ()=>{
     console.log(formData)
  }

  return (
    <div className="selection:bg-indigo-500 selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-8">
              <h1 className="text-5xl font-bold text-indigo-600">
                Welcome back!
              </h1>

              <form className="mt-12" action="" method="POST" onSubmit={submitHandler}>
                <SecondaryInput
                  type="number"
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
                <input
                  type="submit"
                  value="Sign in"
                  className="mt-20 px-8 py-4 uppercase rounded-full bg-gradient-to-r from-red-500 to-orange-600 hover:bg-orange-500 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-80 cursor-pointer"
                />
              </form>
              <Link
                href={"/forget"}
                className="mt-4 block text-sm text-center font-medium text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
