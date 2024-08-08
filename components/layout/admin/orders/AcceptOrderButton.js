"use client";

import React from "react";
import { Button } from "@material-tailwind/react";

const AcceptOrderButton = ({ order }) => {
  const handleAcceptOrder = async () => {
    const fetchOrder = await fetch(`/api/private/order/${order._id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await fetchOrder.json();

    const token = localStorage.getItem("shiprocketToken");

    const raw = JSON.stringify({
      order_id: data._id,
      order_date: new Date(data.createdAt).toISOString(),
      pickup_location: "Default",
      channel_id: "",
      comment: "",
      billing_customer_name: data.shippingInfo.name.split(" ")[0],
      billing_last_name: data.shippingInfo.name.split(" ").slice(1).join(" "),
      billing_address: data.shippingInfo.address,
      billing_address_2: "",
      billing_city: data.shippingInfo.city,
      billing_pincode: data.shippingInfo.pincode,
      billing_state: data.shippingInfo.state,
      billing_country: "India",
      billing_email: data.shippingInfo.email,
      billing_phone: data.shippingInfo.phoneNumber,
      shipping_is_billing: true,
      shipping_customer_name: "",
      shipping_last_name: "",
      shipping_address: "",
      shipping_address_2: "",
      shipping_city: "",
      shipping_pincode: "",
      shipping_country: "",
      shipping_state: "",
      shipping_email: "",
      shipping_phone: "",
      order_items: data.cartItems.map((item) => ({
        name: item.productId.title,
        sku: item.productId._id,
        units: item.quantity,
        selling_price: item.productId.price,
        discount: item.productId.discount,
        tax: "",
      })),
      payment_method: "Prepaid",
      shipping_charges: 120,
      giftwrap_charges: 0,
      transaction_charges: 0,
      total_discount: data.cartItems.reduce(
        (total, item) =>
          total +
          ((item.productId.price * item.productId.discount) / 100) *
            item.quantity,
        0
      ),
      sub_total: data.totalAmount,
      length: 10,
      breadth: 15,
      height: 20,
      weight: 2.5,
    });

    const requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow",
      Authorization: `Bearer ${token}`,
    };

    const createShiprocketOrder = await fetch(
      "https://apiv2.shiprocket.in/v1/external/orders/create/adhoc",
      requestOptions
    );
  };

  return (
    <Button color={"green"} variant="gradient" onClick={handleAcceptOrder}>
      Accept
    </Button>
  );
};

export default AcceptOrderButton;
