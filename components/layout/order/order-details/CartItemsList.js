"use client";
import React, { useEffect, useState } from "react";
import SmProductCard from "@/components/cards/SmProductCard";
import { toast } from "sonner";

const CartItemsList = ({ product }) => {
  const id = product.productId;
  const qty = product.quantity;
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
  console.log({ ProductData: productData });
  return (
    <div className="flex flex-col gap-2">
      <SmProductCard product={productData} qty={qty} size="small" />
    </div>
  );
};

export default CartItemsList;
