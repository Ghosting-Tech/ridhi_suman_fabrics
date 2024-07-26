"use client";
import React, { useState, useEffect, useRef } from "react";
import { products } from "@/utils/productData";
import ProductDetails from "../../../ProductDetails";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@material-tailwind/react";
import { FaHome } from "react-icons/fa";

const SingleProductBundle = ({category, products}) => {

  return (
    <div className="relative lg:pt-4 lg:pb-0 p-4">
      {/* <div className="flex flex-col items-center gap-2">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-pink-500 font-aclonica">
          Top booked {category}
        </h2>
        <Breadcrumbs>
          <Link href={"/"} className="opacity-60">
            <FaHome />
          </Link>
          <div>{category}</div>
        </Breadcrumbs>
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {product.slice(0, visibleCount).map((product) => (
          <Link key={product.id} href={`/product`}>
            <div className="flex flex-col items-center m-2 bg-white rounded-lg shadow-md">
              {renderImages(product.images)}
              <ProductDetails product={product} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SingleProductBundle;
