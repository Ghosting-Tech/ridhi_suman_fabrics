"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import { BiDetail } from "react-icons/bi";

function ProductInfo({ product }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const backgroundColor = product?.subCategory?.colour;

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
  }, [product?.sizes]);

  return (
    <div className="w-full max-w-3xl md:w-2/3 flex flex-col gap-6 p-5 md:px-0 mr-5">
      <div className="flex flex-col gap-3">
        <div
          className="w-fit text-black inline text-[12px]  font-400 px-2 py-[6px] leading-3 rounded"
          style={{ background: `${backgroundColor}` }}
        >
          {product.category} / {product.subCategory.name}
        </div>
        <div className="font-600 text-4xl capitalize w-fit leading-8 md:leading-12 font-semibold text-pink-500">
          {product.title}
        </div>

        <div className="flex items-end gap-2">
          <p className="leading-none font-600  text-lg md:text-2xl text-teal-500 font-semibold">
            ₹
            <span>
              {(
                product.price -
                (product.discount / 100) * product.price
              ).toFixed(2)}
            </span>
          </p>
          <p className="line-through leading-none text-2xl md:text-lg text-gray-500 font-semibold">
            ₹ <span>{product.price}</span>
          </p>
        </div>
        <div className="font-400 text-[14px] md:text-md leading-5 md:leading-6 text-[#828282]">
          We provide a{" "}
          <span className="font-600 text-black">one-year warranty</span> in case
          there are any issues with our products.
        </div>
      </div>

      {/* Start Choose color and size button box */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-500 font-400 text-md leading-4 font-semibold">
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
        <hr />
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-500 font-400 text-md leading-4 font-semibold">
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
      </div>

      {/* End Choose color and size button box */}

      {/* Buy and Cart Button */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
        <Button
          className="flex gap-1 items-center justify-center rounded"
          fullWidth
          variant="outlined"
          color="pink"
          size="md"
        >
          <ShoppingCartIcon className="h-5 w-5" />
          Add to Cart
        </Button>
        <Link href="/booking-detail-page" className="w-full h-full">
          <Button
            variant="gradient"
            color="teal"
            className="w-full h-full rounded"
            size="md"
          >
            Buy Now
          </Button>
        </Link>
      </div>
      {/* End Buy and Cart Button */}

      <div className="flex flex-col gap-1 bg-gray-100 px-4 py-2 rounded-md">
        <div className="text-md mb-1 font-semibold flex items-center gap-1 text-gray-700">
          <BiDetail />
          Product Detail
        </div>
        <div className="flex flex-col md:flex-row items-center gap-1">
          <div className="text-gray-600 text-sm">Fabric : </div>
          <div className="text-gray-600 text-sm ">{product.fabric}</div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-1">
          <div className="text-gray-600 text-sm">Brand : </div>
          <div className="text-gray-600 text-sm ">{product.brand}</div>
        </div>
      </div>
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
