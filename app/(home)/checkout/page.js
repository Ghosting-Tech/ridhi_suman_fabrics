"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import Link from "next/link";
import Heading from "@/components/ui/heading/Heading";
import { FaAddressCard, FaCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";
import CheckoutProductCard from "@/components/layout/home/checkout/CheckoutProductCard";
import DefaultBtn from "@/components/ui/buttons/DefaultBtn";
import CheckOutFormModel from "@/components/layout/home/checkout/CheckOutFormModel";
import { MdAddToPhotos } from "react-icons/md";

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart);
  const [openAddressDialog, setOpenAddressDialog] = useState(false);
  return (
    <div className="p-4 flex flex-col gap-4">
      <CheckOutFormModel
        open={openAddressDialog}
        setOpen={setOpenAddressDialog}
      />
      <Heading
        icon={
          <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full inline-block">
            <FaCheck size={18} color="white" />
          </div>
        }
        title={"Shipping Information | Payment Details"}
      />

      <div className="flex gap-4">
        <div className="w-1/3 bg-gray-100 rounded-lg p-4">
          <Typography variant="h4" color="blue-gray">
            Current Order
          </Typography>
          <Typography color="gray" className="my-1 font-normal">
            The sum of all total payments for goods there
          </Typography>
          <div className="max-h-[510px] overflow-y-auto">
            {cart.items?.map((product, index) => (
              <CheckoutProductCard key={product._id} data={product} />
            ))}
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{cart?.totalPrice}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery Service</span>
              <span>₹120</span>
            </div>
            <hr className="my-2 bg-gray-400 h-px" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{cart?.totalPrice + 120}</span>
            </div>
            <Button className="rounded w-full" variant="gradient" color="pink">
              Pay ₹{cart?.totalPrice + 120}
            </Button>
          </div>
        </div>

        <form className=" w-2/3 flex flex-col gap-5 bg-white shadow-lg border p-4 rounded-lg">
          <Heading
            icon={
              <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full inline-block">
                <FaAddressCard size={20} color="white" />
              </div>
            }
            title={"Choose Your Shipping Address"}
            buttons={[
              <DefaultBtn
                icon={<MdAddToPhotos />}
                title={"New Address"}
                clickHandler={() => setOpenAddressDialog(true)}
              />,
            ]}
          />
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
