import React from "react";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { Typography } from "@material-tailwind/react";

export const navList = (
  <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal"
    >
      <div className="relative h-10 flex justify-end items-center w-full min-w-[288px]">
        <input
          type="search"
          placeholder="Search"
          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pl-9 pr-12 font-sans text-sm font-normal text-black placeholder-blue-gray-300 placeholder-shown:border-t-blue-gray-200 focus:border-blue-gray-300 focus:!border-t-transparent focus:outline-none transition-all placeholder:text-blue-gray-500 peer-placeholder-shown:text-sm peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:leading-[3.75] peer-focus:text-gray-900 peer-focus:leading-tight peer-disabled:text-transparent"
        />
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none truncate text-[11px] font-normal leading-tight text-gray-900 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:border-gray-900 peer-disabled:text-blue-gray-500"></label>
        <div className="absolute right-3 top-[8px]">
          <IoIosSearch color="gray" fontSize={23} />
        </div>
      </div>
    </Typography>
    <div className="flex flex-col gap-2 lg:flex-row lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal flex"
      >
        <Link href={"/"} className="text-black flex gap-1">
          <img src="/icon-2/Wishlist.svg" alt="Wishlist" />
          Wishlist
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal flex"
      >
        <Link href={"/"} className="text-black flex gap-1">
          <img src="/icon-2/shop.svg" alt="Shop" />
          Shop
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal flex"
      >
        <Link href={"/"} className="text-black flex gap-1 items-center relative">
          <img src="/icon-2/Cart.svg" alt="Cart" />
          Cart
          <span className="absolute top-[-2px] left-[36px] inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-teal-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
            1
          </span>
        </Link>
      </Typography>
    </div>
  </ul>
);
