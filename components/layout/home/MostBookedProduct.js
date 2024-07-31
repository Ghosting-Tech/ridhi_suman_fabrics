import React from "react";
import ProductCarousel from "../products/ProductCarousel";

async function getMostBookedProduct() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/product/most-booked`,

    {
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const MostBookedProduct = async () => {
  const data = await getMostBookedProduct();

  return data && <ProductCarousel products={data} />;
};

export default MostBookedProduct;
