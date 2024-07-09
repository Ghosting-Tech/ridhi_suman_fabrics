"use client";

import { signIn, useSession } from "next-auth/react";

import React from "react";

const LoginForm = () => {
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.append("phoneNumber", phoneNumber);
  //   formData.append("password", password);

  //   try {
  //     const response = await fetch("/api/auth/login", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     const data = await response.json();
  //     if (response.status === 201) {
  //       console.log("Login successful", data);
  //     } else {
  //       console.error("Login failed", data);
  //     }
  //   } catch (error) {
  //     console.error("Error occurred", error);
  //   }
  // };

  const { data } = useSession();

  console.log(data);

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const rawFormData = Object.fromEntries(formData.entries());

    const response = await signIn("credentials", {
      redirect: false,
      phoneNumber: rawFormData.phoneNumber,
      password: rawFormData.password,
    });

    console.log(response);
  }

  if (data) {
    return <div>Logged in as {data?.user?.phoneNumber}</div>;
  } else {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <form
          onSubmit={onSubmit}
          className="bg-white p-6 rounded shadow-md w-1/3"
        >
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Login
          </button>
        </form>
      </div>
    );
  }
};

export default LoginForm;
