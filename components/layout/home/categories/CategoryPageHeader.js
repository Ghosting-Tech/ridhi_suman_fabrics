"use client"
import { Breadcrumbs } from "@material-tailwind/react";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
const CategoryPageHeader = ({category}) => {
  return (
    <div className="pt-4 px-6">
      <div className="lg:flex md:flex block justify-between items-center">
        <div>
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-pink-500 uppercase">
          Top booked {category}
          </h1>
          <Breadcrumbs className="p-0 mt-2 mb-4">
            <Link href={"/"} className="opacity-60">
              <FaHome />
            </Link>
            <div>{category}</div>
          </Breadcrumbs>
        </div>
        {/* <div className="flex items-center justify-end space-x-4">
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
        </div> */}
      </div>
    </div>
  );
};

export default CategoryPageHeader;
