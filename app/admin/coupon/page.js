"use client";
import CouponCard from "@/components/layout/admin/coupon/CouponCard";
import CreateCoupon from "@/components/modals/admin/coupon/CreateCoupon";
import DefaultBtn from "@/components/ui/buttons/DefaultBtn";
import Heading from "@/components/ui/heading/Heading";
import React, { useEffect, useState } from "react";
import { LuPlusCircle } from "react-icons/lu";
import { RiCoupon4Line } from "react-icons/ri";

const page = () => {
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [couponCode, setCouponCode] = useState([]);
  const getCoupon = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/coupon`);
      const data = await res.json();
      setCouponCode(data);
    } catch (error) {
      console.error("Failed to fetch coupons:", error);
    }
  };

  const btns = [
    <DefaultBtn
      key={1}
      icon={<LuPlusCircle />}
      title={"Create Coupon"}
      clickHandler={() => {
        setOpenCreateDialog(true);
      }}
    />,
  ];
  useEffect(() => {
    getCoupon();
  }, []);
  return (
    <div className="m-5 flex flex-col gap-5">
      <Heading
        icon={
          <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full inline-block">
            <RiCoupon4Line size={20} color="white" />
          </div>
        }
        title={"Coupon Details"}
        buttons={btns}
      />
      {/* Coupon Create Model  */}
      <CreateCoupon
        open={openCreateDialog}
        setOpen={setOpenCreateDialog}
        setCouponCode={setCouponCode}
      />
      {/* Coupon Delete Model  */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-3 gap-5 place-items-center">
        {couponCode.map((coupon) => (
          <CouponCard coupon={coupon} setCouponCode={setCouponCode} />
        ))}
      </div>
    </div>
  );
};

export default page;
