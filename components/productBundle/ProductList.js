// components/ProductList.js
import Link from "next/link";
import React from "react";
import products from "@/utils/productDataBundle";
import productsBundle from "@/utils/productDataBundle"; // Adjust the import path as necessary
import ProductImageCard from "../ProductImageCard";

 // Adjust the import path as necessary

const ProductList = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl lg:text-4xl text-[#11998E] font-bold my-4 font-aclonica">
        Most loved sets of product
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-4">
        {productsBundle.map((product) => (
          <Link key={product.id} href={`/product-detail-page`}>
            <ProductImageCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
