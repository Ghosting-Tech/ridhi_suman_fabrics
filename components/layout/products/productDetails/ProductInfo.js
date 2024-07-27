"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function ProductInfo({ product }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const backgroundColor = product?.subCategory?.colour;

  console.log(product);

  const handleSelectedSize = (size) => {
    setSelectedSize(size);
    setSelectedColor(null);
  };

  const handleSelectedColor = (color) => {
    if (selectedSize === null) {
      toast.warning("select size");
      return;
    }

    setSelectedColor(color);
  };

  useEffect(() => {
    if (product.sizes.length > 0) {
      setSelectedSize(product.sizes[0].size);
    }
  }, [product.sizes]);

  return (
    <div className=" w-full md:w-1/2 flex flex-col gap-6 p-5 md:px-0 mr-5">
      <div className="flex flex-col gap-3">
        <div
          className="w-fit text-black inline text-[12px]  font-400 px-2 py-[6px] leading-3 rounded"
          style={{ background: `${backgroundColor}` }}
        >
          {product.category}/{product.subCategory.name}
        </div>
        <div className="font-600 text-[20px] w-fit leading-8 md:leading-12 font-semibold">
          {product.title}
        </div>

        <div className="flex items-end gap-2 pb-6">
          <p className="leading-none font-600  text-2xl md:text-4xl text-[#11998E] font-semibold">
            ₹{" "}
            <span>
              {(
                product.price -
                (product.discount / 100) * product.price
              ).toFixed(2)}
            </span>
          </p>
          <p className="line-through leading-none text-2xl md:text-3xl text-black font-semibold">
            ₹ <span>{product.price}</span>
          </p>
        </div>
        <div className="font-400 text-[14px] md:text-[16px] leading-5 md:leading-6 text-[#828282]">
          We provide a{" "}
          <span className="font-600 text-black">one-year warranty</span> in case
          there are any issues with our products.
        </div>
      </div>

      {/* Start Choose color and size button box */}
      <div>
        {/* Choose Size */}
        <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-[69px] py-5 border-y border-slate-300 ">
          <div className="text-[#828282] font-400 text-[14px] leading-4 font-semibold">
            Choose Size
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-3 md:mt-0 ">
            {product.sizes.map((item, index) => (
              <div
                key={index}
                className={`border px-3 py-1 rounded-md cursor-pointer text-xs ${
                  selectedSize === item.size
                    ? "border-[#52057B] text-[#52057B] bg-[#F0E5FF]"
                    : "border-black text-black"
                } `}
                onClick={() => handleSelectedSize(item.size)}
              >
                {item.size}
              </div>
            ))}
          </div>
        </div>

        {/* Colour */}
        <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-[69px] py-5 border-b border-slate-300">
          <div className="text-[#828282] font-400 text-[14px] leading-4 font-semibold">
            Choose Colour
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-3 md:mt-0">
            {selectedSize
              ? product.sizes
                  .find((item) => item.size === selectedSize)
                  ?.colours.map((color, idx) => (
                    <div
                      className={`flex flex-row border border-black px-3 py-1 rounded-md justify-center items-center gap-2
                                 ${
                                   selectedColor === color.colour.name
                                     ? "border-[#52057B] text-[#52057B] bg-[#F0E5FF]"
                                     : "border-black text-black"
                                 }${color.quantity === "0" ? "opacity-50 cursor-not-allowed" : ""}
                            `}
                      onClick={() => handleSelectedColor(color.colour.name)}
                      key={idx}
                    >
                      <div
                        key={idx}
                        className={`h-3 w-3 rounded-xl ${color.quantity === "0" ? "opacity-50 cursor-not-allowed" : ""}`}
                        style={{ backgroundColor: color.colour.hex }}
                        title={color.colour.name}
                      ></div>
                      <div
                        key={idx}
                        className={`text-xs cursor-pointer  ${color.quantity === "0" ? "opacity-50 cursor-not-allowed text-red " : ""}`}
                        title={color.colour.name}
                      >
                        {color.colour.name}
                      </div>
                    </div>
                  ))
              : product.sizes.map((size) =>
                  size.colours.map((color, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-row border px-3 py-1 rounded-md cursor-pointer items-center gap-2 ${
                        selectedColor === color.colour.name
                          ? "border-[#52057B] text-[#52057B] bg-[#F0E5FF]"
                          : "border-black text-black"
                      }`}
                      onClick={() => handleSelectedColor(color.colour.hex)}
                    >
                      <div
                        className="h-3 w-3 rounded-xl"
                        style={{ backgroundColor: color.colour.hex }}
                        title={color.colour.name}
                      ></div>
                      <div>{color.colour.name}</div>
                    </div>
                  ))
                )}
          </div>
        </div>

        <div className=" h-auto py-3 border-b border-slate-300 ">
          <div className="text-[#828282] font-400 text-[14px] leading-4 font-semibold mb-2">
            Product Detail:
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 mb-2">
            <div className="text-[#828282] font-400 text-[14px] leading-4 font-semibold">
              Fabric:
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-3 md:mt-0">
              <div className="text-[#828282] font-400 text-[14px] leading-4 font-semibold ">
                {product.fabric}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between ">
            <div className="text-[#828282] font-400 text-[14px] leading-4 font-semibold">
              Brand:-
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-3 md:mt-0">
              <div className="text-[#828282] font-400 text-[14px] leading-4 font-semibold ">
                {product.brand}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Choose color and size button box */}

      {/* Buy and Cart Button */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 h-auto md:h-[52px] py-5">
        <Link href="/booking-detail-page">
          <button className="bg-[#52057B] text-white border border-black px-28 py-2 rounded ">
            Buy Now
          </button>
        </Link>
        <div className="border border-pink-300 py-2 rounded hover:cursor-pointer px-20">
          <div className="flex items-center">
            <ShoppingCartIcon className="h-5 w-5 text-pink-400" />
            <span className="ml-1 text-pink-400">Add to Cart</span>
          </div>
        </div>
      </div>
      {/* End Buy and Cart Button */}

      {/* Start product Feature Icon */}
      <div className="grid grid-cols-2 gap-4 pb-5 border-b">
        <div className="flex items-center gap-3">
          <Image
            src="\Product_detail\Vector.svg"
            alt=""
            width={18}
            height={22}
          />
          <span>Original store product</span>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="\Product_detail\Vector (2).svg"
            alt=""
            width={18}
            height={22}
          />
          <span>Long Term Warranty</span>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="\Product_detail\Vector (1).svg"
            alt=""
            width={18}
            height={22}
          />
          <span>100% trusted shop</span>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="\Product_detail\Vector (3).svg"
            alt=""
            width={18}
            height={22}
          />
          <span>Most Lovable</span>
        </div>
      </div>
      {/* End product Feature Icon */}
    </div>
  );
}

export default ProductInfo;
