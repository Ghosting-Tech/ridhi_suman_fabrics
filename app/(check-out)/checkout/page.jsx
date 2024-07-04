"use client";

import React, { useState } from "react";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/footer";
import { MdOutlineEmail } from "react-icons/md";
import { FaCheckCircle, FaRegUser } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { LiaCitySolid } from "react-icons/lia";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { TbMapPinCode, TbTruckDelivery } from "react-icons/tb";
import { PiPencilSimpleLineThin } from "react-icons/pi";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";

const ProductPage = () => {
  const [quantity1, setQuantity1] = useState(2);
  const [quantity2, setQuantity2] = useState(1);

  const handleQuantityChange1 = (delta) => {
    setQuantity1((prevQuantity) => Math.max(1, prevQuantity + delta));
  };

  const handleQuantityChange2 = (delta) => {
    setQuantity2((prevQuantity) => Math.max(1, prevQuantity + delta));
  };

  const price1 = 415.1;
  const price2 = 415.1;
  const subtotal = price1 * quantity1 + price2 * quantity2;
  const deliveryFee = 120;
  const total = subtotal + deliveryFee;

  return (
    <>
      <Nav />
      <div className="container mx-auto p-4 flex flex-col mt-2 lg:flex-row gap-4">
        <div className="w-full lg:w-3/5 bg-white  rounded-lg shadow-md p-6">
          <div className="flex items-center sm:px-4">
            <FaCheckCircle className="text-green-500 mr-2" size={20} />
            <div className="flex items-center">
              <span className="text-gray-800 text-xl">Shipping Information</span>
              <span className="mx-2">|</span>
              <span className="text-gray-800 text-xl">Payment Details</span>
            </div>
          </div>
          <hr className="mt-2 mb-5 border-0 h-1 bg-gradient-to-r from-green-400 to-green-200" />

          <Typography variant="h4" color="blue-gray">
            Fill Your Shipping Address
          </Typography>
          <Typography color="gray" className="mt-1  flex gap-2 items-center font-normal">
            <PiPencilSimpleLineThin size={24}/>
            For a better experience, check your item and choose your shipping
            before ordering.
          </Typography>
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
            <Typography variant="h4" color="blue-gray">
              Payment Method
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Select a payment option to place your order.
            </Typography>
            <div className="border p-4 rounded-md mt-3 mb-3 flex flex-col">
              <div className="w-full flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <img src="PhonePe.png" width={100} alt="" />
                </div>
                <input type="radio" name="payment" />
              </div>
              <Typography
                variant="small"
                color="gray"
                className="mt-1 font-normal"
              >
                Supports UPI and bank transfers.
              </Typography>
            </div>
            <div className="border p-4 rounded-md flex flex-col">
              <div className="w-full flex justify-between items-center mb-2">
                <div className="flex items-center gap-1">
                  <img src="money.png" alt="" width={40} />
                  <span>COD | POD</span>
                </div>
                <input type="radio" name="payment" />
              </div>
              <Typography
                variant="small"
                color="gray"
                className="mt-1 font-normal"
              >
                Cash on delivery | Pay on delivery.
              </Typography>
            </div>
          </form>
        </div>

        <div className="w-full lg:w-2/5 bg-gray-100 rounded-lg shadow-md p-6">
          <Typography variant="h4" color="blue-gray">
            Current Order
          </Typography>
          {/* Product 1 */}
          <div className="border p-4 mt-5 rounded-md mb-4 flex items-center">
            <img
              src="/category/other-site/image1.jpg"
              alt="Product 1"
              className="w-20 h-20 object-cover rounded-md mr-4"
            />
            <div className="flex-1">
              <Typography variant="h6" color="blue-gray" className="font-bold">
                Neve Strix Pro L123 (2021) - TP399K 1TB
              </Typography>
              <Typography color="gray" className="mt-1">
                ₹{price1.toFixed(2)}
              </Typography>
              <div className="flex items-center mt-2">
                <button
                  className="border p-1 rounded"
                  onClick={() => handleQuantityChange1(-1)}
                >
                  -
                </button>
                <span className="mx-2">{quantity1}</span>
                <button
                  className="border p-1 rounded"
                  onClick={() => handleQuantityChange1(1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          {/* Product 2 */}
          <div className="border p-4 rounded-md mb-4 flex items-center">
            <img
              src="/category/other-site/image2.jpg"
              alt="Product 2"
              className="w-20 h-20 object-cover rounded-md mr-4"
            />
            <div className="flex-1">
              <Typography variant="h6" color="blue-gray" className="font-bold">
                Neve Strix Pro L123 (2021) - TP399K 1TB
              </Typography>
              <Typography color="gray" className="mt-1">
                ₹{price2.toFixed(2)}
              </Typography>
              <div className="flex items-center mt-2">
                <button
                  className="border p-1 rounded"
                  onClick={() => handleQuantityChange2(-1)}
                >
                  -
                </button>
                <span className="mx-2">{quantity2}</span>
                <button
                  className="border p-1 rounded"
                  onClick={() => handleQuantityChange2(1)}
                >
                  +
                </button>
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
           <Link href={"/booking-detail-page"}>
           <Button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white w-full text-lg mt-4 p-2 rounded-lg">
              Pay ₹{total.toFixed(2)}
            </Button>
           </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
