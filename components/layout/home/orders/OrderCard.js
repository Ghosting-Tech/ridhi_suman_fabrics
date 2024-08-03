import React, { useEffect, useState } from "react";

const OrderCard = ({ order }) => {
  console.log(order);
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    setFormattedDate(
      new Date(order.createdAt).toLocaleString(undefined, {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  }, [order.createdAt]);
  return (
    <div className="p-4 shadow-lg border rounded-lg ">
      <div>Order ID: {order._id}</div>
      <div>Order Date: {formattedDate}</div>
      <div>Total Amount: {order.totalAmount}</div>
      <div>Status: {order.status}</div>
    </div>
  );
};

export default OrderCard;
