import SmProductCard from "@/components/cards/SmProductCard";
import React from "react";
import { products } from "@/utils/productData";

const SummaryList = () => {
  return (
    <div>
      {products.map((product, index) => (
        <SmProductCard key={index} product={product} size="small" />
      ))}
    </div>
  );
};

export default SummaryList;
