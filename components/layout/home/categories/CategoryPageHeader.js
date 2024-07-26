"use client";
import { Breadcrumbs } from "@material-tailwind/react";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
const CategoryPageHeader = ({ category, cat }) => {
  const categoryName = category.name
    ? category.name.replaceAll("%20", " ")
    : "";
  const categorySub = category.sub ? category.sub.replaceAll("%20", " ") : "";
  return (
    <div className="pt-4 px-6">
      <div className="lg:flex md:flex block justify-between items-center">
        <div>
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-pink-500 uppercase">
            Top booked {cat ? categoryName : categorySub}
          </h1>
          {cat ? (
            <Breadcrumbs className="p-0 mt-2 mb-4">
              <Link href={"/"} className="opacity-60">
                <FaHome />
              </Link>
              <div>{categoryName}</div>
            </Breadcrumbs>
          ) : (
            <Breadcrumbs className="p-0 mt-2 mb-4">
              <Link href={"/"} className="opacity-60">
                <FaHome />
              </Link>
              <Link href={`/category/${category.name}`} className="opacity-60">
                <div>{categoryName}</div>
              </Link>
              <div>{categorySub}</div>
            </Breadcrumbs>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPageHeader;
