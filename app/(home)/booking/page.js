import Help from "@/components/layout/order/booking/Help";
import OrderSummary from "@/components/layout/order/booking/OrderSummary";
import ShipmentInformation from "@/components/layout/order/booking/ShipmentInformation";
import Heading from "@/components/ui/heading/Heading";
import React from "react";
import { FaRegAddressCard } from "react-icons/fa6";

const page = () => {
  return (
    <div className="m-5">
      <Heading
        icon={
          <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full inline-block">
            <FaRegAddressCard size={20} color="white" />
          </div>
        }
        title={"Booking Details"}
      />
      <div className="my-5 flex gap-5">
        <OrderSummary />
        <div className="w-1/2 flex flex-col gap-5">
          <ShipmentInformation />
          <Help />
        </div>
      </div>
    </div>
  );
};

export default page;
