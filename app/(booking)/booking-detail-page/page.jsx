"use client";

import React, { useState } from "react";
import Nav from "@/components/header/Nav";
import Footer from "@/components/footer/Footer";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { IoMdListBox } from "react-icons/io";

import { TbMapPinCode, TbTruckDelivery } from "react-icons/tb";
import { MdOutlineEmail, MdOutlineRealEstateAgent } from "react-icons/md";
import { LiaCitySolid } from "react-icons/lia";
import { HiOutlinePhone } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineLocalShipping } from "react-icons/md";
import { AiFillQuestionCircle } from "react-icons/ai";

import { HiOutlineShoppingBag } from "react-icons/hi2";
import Link from "next/link";
import Link from "next/link";

const ProductPage = () => {
  const [quantity1, setQuantity1] = useState(2);
  const [quantity2, setQuantity2] = useState(1);

  const subtotal = 5240.37;
  const deliveryFee = 120;
  const total = subtotal + deliveryFee;

  return (
    <>
      <Nav />
      <div className="container pt-4 px-5">
        <div className="flex items-center sm:px-4">
          <IoMdListBox className="text-blue-500 mr-2" size={30} />
          <div className="flex items-center">
            <span className="text-gray-800 text-xl">BOOKING DETAILS</span>
          </div>
        </div>
        <hr className="mt-2 mb-5 border-0 h-1 bg-gradient-to-r from-blue-500 to-blue-200" />
      </div>
      <div className="container mx-auto p-4 pt-0 flex flex-col lg:flex-row gap-4">
        {/* Order Summary */}
        <div className="w-full lg:w-1/2 bg-white  border-2 border-gray-300 rounded-lg shadow-md p-6">
          <Typography
            variant="h4"
            color="blue-gray"
            className="flex items-center gap-3"
          >
            <HiOutlineShoppingBag size={30} />
            ORDER SUMMARY
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            The sum of all total payments for goods there
          </Typography>
          <div className="border-t mt-4 pt-4">
            <div className="border p-4 rounded-md mb-4 flex items-center">
              <img
                src="/category/other-site/image2.jpg"
                alt="Product 1"
                className="w-20 h-20 object-cover rounded-md mr-4"
              />
              <div className="flex-1">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="font-bold"
                >
                  Neve Strix Pro L123 (2021) - TP399K 1TB
                </Typography>
                <Typography color="gray" className="mt-1">
                  ₹415.10
                </Typography>
                <Typography color="gray" className="mt-1">
                  Quantity: {quantity1}
                </Typography>
              </div>
            </div>
            <div className="border p-4 rounded-md mb-4 flex items-center">
              <img
                src="/category/other-site/image1.jpg"
                alt="Product 2"
                className="w-20 h-20 object-cover rounded-md mr-4"
              />
              <div className="flex-1">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="font-bold"
                >
                  Neve Strix Pro L123 (2021) - TP399K 1TB
                </Typography>
                <Typography color="gray" className="mt-1">
                  ₹415.10
                </Typography>
                <Typography color="gray" className="mt-1">
                  Quantity: {quantity2}
                </Typography>
              </div>
            </div>
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery Service</span>
              <span>₹{deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <Button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white w-full mt-4 p-2 rounded-lg">
              Pay ₹{total.toFixed(2)}
            </Button>
          </div>
        </div>

        {/* Shipping Information */}
        <div className="w-full lg:w-1/2 bg-white  border-2 border-gray-300 rounded-lg shadow-md p-6">
          <Typography
            variant="h4"
            color="blue-gray"
            className="flex items-center gap-3"
          >
            <MdOutlineLocalShipping color="red" size={30} />
            SHIPPING INFORMATION
          </Typography>
          <hr className="mt-2 mb-5 border-0 h-1 bg-gradient-to-r from-red-400 to-red-200" />
          <form className="mt-8 mb-2 w-full">
            <div className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex border p-3 rounded-md">
                <FaRegUser size={24} className="mr-2" />
                <div className="flex flex-col w-full">
                  <label className="text-gray-700">Fullname</label>
                  <input
                    type="text"
                    placeholder="Enter your fullname"
                    className="w-full   pt-2 rounded focus:outline-none focus:border-gray-900"
                  />
                </div>
              </div>
              <div className="flex border p-3 rounded-md">
                <HiOutlinePhone size={24} className="mr-2" />
                <div className="flex flex-col w-full">
                  <label className="text-gray-700">Phone Number</label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="w-full   pt-2 rounded focus:outline-none focus:border-gray-900"
                  />
                </div>
              </div>
              <div className="flex border p-3 rounded-md">
                <MdOutlineEmail size={24} className="mr-2" />
                <div className="flex flex-col w-full">
                  <label className="text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full   pt-2 rounded focus:outline-none focus:border-gray-900"
                  />
                </div>
              </div>
              <div className="flex border p-3 rounded-md">
                <LiaCitySolid size={24} className="mr-2" />
                <div className="flex flex-col w-full">
                  <label className="text-gray-700">City</label>
                  <input
                    type="text"
                    placeholder="Enter your city"
                    className="w-full   pt-2 rounded focus:outline-none focus:border-gray-900"
                  />
                </div>
              </div>
              <div className="flex border p-3 rounded-md">
                <MdOutlineRealEstateAgent size={24} className="mr-2" />
                <div className="flex flex-col w-full">
                  <label className="text-gray-700">State</label>
                  <input
                    type="text"
                    placeholder="Enter your state"
                    className="w-full   pt-2 rounded focus:outline-none focus:border-gray-900"
                  />
                </div>
              </div>
              <div className="flex border p-3 rounded-md">
                <TbMapPinCode size={24} className="mr-2" />

                <div className="flex flex-col w-full">
                  <label className="text-gray-700">Pincode</label>
                  <input
                    type="text"
                    placeholder="Enter your pincode"
                    className="w-full   pt-2 rounded focus:outline-none focus:border-gray-900"
                  />
                </div>
              </div>
              <div className="flex border p-3 rounded-md  md:col-span-2">
                <TbTruckDelivery size={24} className="mr-2" />
                <div className="flex flex-col w-full">
                  <label className="text-gray-700">Delivery Address</label>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    className="w-full   pt-2 rounded focus:outline-none focus:border-gray-900"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Help Section */}
      <div className="container mx-auto p-4 ">
        <div className="bg-white rounded-lg border-2 border-gray-300 shadow-md p-6">
          <Typography
            variant="h4"
            color="blue-gray"
            className="flex items-center gap-3"
          >
            <AiFillQuestionCircle size={30} className="text-blue-500" />
            Help
          </Typography>
          <hr className="mt-2 mb-5 border-0 h-1 bg-gradient-to-r from-blue-400 to-blue-200" />
          <Typography color="gray" className="mt-1 font-normal">
            Read the{" "}
            <Link href="#" className="text-blue-500">
              CANCELLATION POLICY
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-blue-500">
              REFUND POLICY
            </Link>{" "}
            before canceling the order.
          </Typography>
          <Button className="bg-red-500 text-white w-full mt-4 p-2 rounded-lg">
            Cancel order
          </Button>
          <Typography color="gray" className="mt-4 font-normal">
            Contact us for any enquiry, we are available to serve you 24/7.
          </Typography>
          <div className="flex mt-4 space-x-4">
            <Button className="bg-green-500 text-white p-2 rounded-lg">
              Call us
            </Button>
            <Button className="bg-green-500 text-white p-2 rounded-lg">
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductPage;
