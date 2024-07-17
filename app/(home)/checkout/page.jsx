"use client";
import React, { useState } from "react";
import Image from "next/image";
import Nav from "@/components/layout/home/NavHeader/Nav";
import Footer from "@/components/layout/home/Footer";
import { MdOutlineEmail } from "react-icons/md";
import { FaCheckCircle, FaRegUser } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { LiaCitySolid } from "react-icons/lia";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { TbMapPinCode, TbTruckDelivery } from "react-icons/tb";
import { PiPencilSimpleLineThin } from "react-icons/pi";
// import InputField from "@/components/inputForm/InputField";
import cardTitle from "@/components/utils/data/cardTitle";
import { Button, Typography } from "@material-tailwind/react";
import CardTitle from "@/components/cardTitle/CardTitle.";
import SmProductCard from "@/components/cards/SmProductCard";
import Link from "next/link";
import { products } from "@/utils/productData";

const ProductPage = () => {
  const [quantity1, setQuantity1] = useState(2);
  const [quantity2, setQuantity2] = useState(1);
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    pincode: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQuantityChange = (delta) => {
    setQuantity1((prevQuantity) => Math.max(1, prevQuantity + delta));
  };

  return (
    <>
      <Nav />
      <div className="container mx-auto p-4 flex flex-col mt-2 lg:flex-row gap-4">
        <div className="w-full lg:w-3/5 bg-white rounded-lg shadow-md p-6">
          <CardTitle data={cardTitle.shipping} />
          <Typography variant="h4" color="blue-gray">
            Fill Your Shipping Address
          </Typography>
          <form className="mt-8 mb-2 w-full">
            <div className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* <InputField
                label="Fullname"
                placeholder="Enter your fullname"
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                icon={FaRegUser}
              />
              <InputField
                label="Phone Number"
                placeholder="Enter your phone number"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                icon={HiOutlinePhone}
              />
              <InputField
                label="Email"
                placeholder="Enter your email address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                icon={MdOutlineEmail}
              />
              <InputField
                label="City"
                placeholder="Enter your city"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                icon={LiaCitySolid}
              />
              <InputField
                label="State"
                placeholder="Enter your state"
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                icon={MdOutlineRealEstateAgent}
              />
              <InputField
                label="Pincode"
                placeholder="Enter your pincode"
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                icon={TbMapPinCode}
              />
              <InputField
                label="Delivery Address"
                placeholder="Enter your address"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                icon={TbTruckDelivery}
                className="md:col-span-2"
              /> */}
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
                  <div className="relative w-24 h-12">
                    <Image
                      src="/PhonePe.png"
                      alt="PhonePe"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
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
            {/* cash  */}
            <div className="border p-4 rounded-md flex flex-col">
              <div className="w-full flex justify-between items-center mb-2">
                <div className="flex items-center gap-1">
                  <div className="relative w-10 h-10">
                    <Image
                      src="/money.png"
                      alt="Money"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
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
          <Typography color="gray" className="mt-1 font-normal">
            The sum of all total payments for goods there
          </Typography>
          <div className="max-h-[510px] overflow-y-auto">
            {products.map((product, index) => (
              <SmProductCard
                key={index}
                product={product}
                check="checkout"
                onIncrement={() => handleQuantityChange(index, 1)}
                onDecrement={() => handleQuantityChange(index, -1)}
              />
            ))}
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹ 1245.30</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery Service</span>
              <span>₹ 120</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹ 1365.30</span>
            </div>
            <Link href={"/booking-detail-page"}>
              <Button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white w-full text-lg mt-4 p-2 rounded-lg">
                Pay ₹ 1365.30
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
