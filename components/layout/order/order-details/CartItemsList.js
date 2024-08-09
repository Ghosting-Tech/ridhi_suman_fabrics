"use client";
import React, { useEffect, useState } from "react";
import SmProductCard from "@/components/cards/SmProductCard";
import { toast } from "sonner";

const CartItemsList = ({ product }) => {
  const id = product.productId._id;
  const qty = product.quantity;
  const size = product.size;
  const color = product.colour.name;
  const [productData, setProductData] = useState();
  const fetchingProductData = async (id) => {
    try {
      const response = await fetch(`/api/product/${id}`);
      const data = await response.json();
      setProductData(data);
    } catch (err) {
      toast.error("Error fetching product details");
    }
  };
  useEffect(() => {
    fetchingProductData(id);
  }, []);
  if (!productData) {
    return;
  }
  return (
    <div className="flex flex-col gap-2">
      <SmProductCard
        product={productData}
        qty={qty}
        size={size}
        color={color}
      />
    </div>
  );
};

export default CartItemsList;
