"use client";
import OrderSummary from "@/components/layout/order/booking/OrderSummary";
import OrderInfoCard from "@/components/layout/order/order-details/OrderInfoCard";
import UserInfoCard from "@/components/layout/order/order-details/UserInfoCard";
import Heading from "@/components/ui/heading/Heading";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaRegAddressCard } from "react-icons/fa6";

const Page = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const getProducts = async () => {
    try {
      let res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/private/order/${id}`
      );
      res = await res.json();
      console.log({ Data: res });
      setData(res);
    } catch (error) {
      console.error("Failed to fetch Orders", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [id]);

  if (!data) {
    return <div className="flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="m-5">
      <Heading
        icon={
          <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full inline-block">
            <FaRegAddressCard size={20} color="white" />
          </div>
        }
        title={"Order Details"}
      />
      <div className="my-5 gap-8 flex flex-col lg:flex-row mx-auto">
        <OrderSummary />
        <div className="w-full lg:w-3/5 flex flex-col gap-5">
          <UserInfoCard data={data.user} />
          <OrderInfoCard data={data} setData={setData} />
        </div>
      </div>
    </div>
  );
};

export default Page;
