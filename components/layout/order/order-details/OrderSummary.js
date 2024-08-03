import React from "react";
import { IoBagOutline } from "react-icons/io5";
import CartItemsList from "../order-details/CartItemsList";

const OrderSummary = ({ data }) => {
  const cartItems = data.cartItems;
  return (
    <div className="rounded-lg flex flex-col gap-5 border-2 border-gray-500 w-full lg:w-1/2 p-5 ">
      <div>
        <h1 className="flex gap-1 text-black text-lg">
          <IoBagOutline size={22} />
          ORDER SUMMARY
        </h1>
        <p className="text-gray-600">
          The sum of total payments for goods there
        </p>
      </div>
      <div className="overflow-auto max-h-96 px-3">
        {cartItems.map((product, index) => (
          <CartItemsList key={index} product={product} />
        ))}
      </div>
      <div className="w-full text-gray-800 flex flex-col gap-4 mt-10">
        <div className="flex justify-between font-bold">
          <span>Subtotal</span>
          <span>&#x20B9; 1200.00</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Service</span>
          <span>&#x20B9;120.00</span>
        </div>
        <div className="h-[2px] bg-gray-300"></div>
        <div className="flex justify-between text-black font-bold mt-3">
          <span>Total</span>
          <span>&#x20B9;1320.00</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;