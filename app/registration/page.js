import Footer from "@/components/footer/Footer";
import Nav from "@/components/header/Nav";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <Nav />
      <div
        className="container mx-auto   px-3 sm:py-20 py-10"
        style={{ backgroundImage: "url('/category/Background.png')" }}
      >
        <div className="flex justify-center items-center  ">
          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
            <div className="text-center mb-6">
              <h4 className="text-3xl font-bold mb-2">Register Now</h4>
              <p className="text-gray-500">Happy to join you!</p>
            </div>
            <form>
              <div className="flex justify-center mb-4">
                <label htmlFor="profile">
                  <img
                    src={"./category/download1.jpg"}
                    className="rounded-full w-24 h-24 object-cover"
                    alt="avatar"
                  />
                </label>
                <input
                  type="file"
                  id="profile"
                  name="profile"
                  className="hidden"
                />
              </div>
              <div className="flex flex-col items-center gap-4 mb-4">
                <input
                  className="border rounded-md p-2 w-full"
                  type="email"
                  placeholder="Email*"
                  required
                />
                <input
                  className="border rounded-md p-2 w-full"
                  type="text"
                  placeholder="Username*"
                  required
                />
                <input
                  className="border rounded-md p-2 w-full"
                  type="password"
                  placeholder="Password*"
                  required
                />
              </div>
              <button
                className="bg-blue-500 text-white rounded-md p-2 w-full"
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
      <Footer />
    </>
  );
}

export default page;
