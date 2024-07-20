"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import SmProductCard from "@/components/cards/SmProductCard";
import Link from "next/link";
import { products } from "@/utils/productData";
import Heading from "@/components/ui/heading/Heading";
import { FaCheck } from "react-icons/fa6";

const CheckoutPage = () => {
  const [quantity1, setQuantity1] = useState(2);
  const handleQuantityChange = (delta) => {
    setQuantity1((prevQuantity) => Math.max(1, prevQuantity + delta));
  };

  return (
    <div className="p-4 flex flex-col mt-2 lg:flex-row gap-6">
      <div className="w-full lg:w-3/5 bg-white rounded-lg shadow-md p-4">
        <Heading
          icon={
            <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full inline-block">
              <FaCheck size={18} color="white" />
            </div>
          }
          title={"Shipping Information | Payment Details"}
        />
        <form className="mt-4 mb-2 w-full flex flex-col gap-5">
          <Typography variant="h4" color="blue-gray">
            Fill Your Shipping Address
          </Typography>
          <div className="flex flex-wrap gap-5">
            <div className="flex size">
              <Input label="Fullname" variant="outlined" />
            </div>
            <div className="flex size">
              <Input label="Phone Number" variant="outlined" />
            </div>
            <div className="flex size">
              <Input label="Email" variant="outlined" />
            </div>
            <div className="flex size">
              <Input label="City" variant="outlined" />
            </div>
            <div className="flex size">
              <Input label="State" variant="outlined" />
            </div>
            <div className="flex size">
              <Input label="Pincode" variant="outlined" />
            </div>
            <Textarea label="Address" />
          </div>
          {/* payment method  */}
          <div className="flex flex-col gap-5">
            <div>
              <Typography variant="h4" color="blue-gray">
                Payment Method
              </Typography>
              <Typography color="gray" className="mt-2 font-normal">
                Select a payment option to place your order.
              </Typography>
            </div>
            {/* online  */}
            <div className="border p-4 rounded-md  flex flex-col">
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
          </div>
        </form>
      </div>
      {/* current order  */}

      <div className="w-full lg:w-2/5 bg-gray-100 rounded-lg shadow-md p-4">
        <Typography variant="h4" color="blue-gray">
          Current Order
        </Typography>
        <Typography color="gray" className="my-1 font-normal">
          The sum of all total payments for goods there
        </Typography>
        <div className="max-h-[510px] overflow-y-auto">
          {products.map((product, index) => (
            <SmProductCard
              key={index}
              product={product}
              check="checkout"
              size="small"
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
  );
};

export default CheckoutPage;
