import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
const CategoryPageHeader = () => {
  return (
    <div className="p-4 sm:p-8 bg-white">
      <div className="lg:flex md:flex block justify-between items-center">
        <div>
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-[#0052D4]">
            LEHENGA CHOLI
          </h1>
          <Breadcrumbs className="p-0 mt-2 mb-4">
            <Link href={"/"} className="opacity-60">
              <FaHome />
            </Link>
            <Link href={"/category"}>Lehenga Choli</Link>
          </Breadcrumbs>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <span className="text-gray-600">FILTER BY PRICE</span>
          <input
            type="number"
            placeholder="Min"
            className="w-16 px-2 py-1 border rounded"
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max"
            className="w-16 px-2 py-1 border rounded"
          />
        </div>
      </div>
      <div className="w-40  float-end   ">
        <input type="range" min="50" max="100" className="w-full" />
      </div>
    </div>
  );
};

export default CategoryPageHeader;
