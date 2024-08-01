"use client";
import Heading from "@/components/ui/heading/Heading";
import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { IoMdHelpCircleOutline } from "react-icons/io";
import DataCard from "./DataCard";
import { CiCalendarDate } from "react-icons/ci";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TiCancelOutline } from "react-icons/ti";
import { TbMessageCancel } from "react-icons/tb";
import DeleteOrder from "./DeleteOrder";
import { IoPricetagOutline } from "react-icons/io5";
import { PiContactlessPaymentLight } from "react-icons/pi";

const OrderInfoCard = ({ data, setData }) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  return (
    <div className="rounded-lg flex flex-col gap-4 border-2 border-gray-500 w-full p-4">
      <Heading
        icon={
          <div className="inline-block pr-1">
            <IoMdHelpCircleOutline size={25} color="red" />
          </div>
        }
        title={"ORDER INFORMATION"}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2 p-2">
        <DataCard
          icon={<CiCalendarDate size={20} />}
          title="Order Date"
          data={data.createdAt}
        />
        <DataCard
          icon={<CiCalendarDate size={20} />}
          title="Delivery Date"
          data="August 3 2024"
        />
        <DataCard
          icon={<IoPricetagOutline size={20} />}
          title="Payment Method"
          data={data.paymentMethod}
        />
        <DataCard
          icon={<RiSecurePaymentLine size={20} />}
          title="Payment Status"
          data={data.isPaid ? "Paid" : "UnPaid"}
        />
        <DataCard
          icon={<PiContactlessPaymentLight size={20} />}
          title="Status"
          data={data.status}
        />
        {data.status === "canceled" ? (
          <DataCard
            icon={<TiCancelOutline size={20} />}
            title="Cancel By"
            data={data.user.role}
          />
        ) : (
          ""
        )}
      </div>
      <div className="ml-2">
        {data.status === "canceled" ? (
          <DataCard
            icon={<TbMessageCancel size={20} />}
            title="Cancellation Reason "
            data={data.cancellationReason}
          />
        ) : (
          <Button
            variant="outlined"
            className="text-red-500 border-red-500  w-fit py-2 px-3"
            onClick={() => {
              setOpenDeleteDialog(true);
            }}
          >
            Cancel Order
          </Button>
        )}
      </div>
      <DeleteOrder
        open={openDeleteDialog}
        setOpen={setOpenDeleteDialog}
        id={data._id}
        setData={setData}
      />
    </div>
  );
};

export default OrderInfoCard;
