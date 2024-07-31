import Link from "next/link";
import React from "react";

import { categories, footerInfo } from "@/utils/footerData";
import TooltipFooter from "@/components/ui/Tooltip";

async function getCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/category`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Footer = async () => {
  const data = await getCategories();
  // console.log(data)

  return (
    <footer className="bg-white pt-10 container mx-auto ">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-6">Categories</h2>
        <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 px-6 gap-x-6 gap-y-8 text-gray-600 mb-10">
          {data.slice(0, 7).map((category, index) => (
            <div key={index} className="border p-3 rounded-md w-full">
              <span className="font-semibold text-lg capitalize border-b pb-2 border-grey-500 truncate block">
                {category.name}
              </span>

              <div className="flex flex-col mt-2 space-y-1">
                {category.subCategories
                  .slice(0, 6)
                  .map((subcategory, subIndex) => (
                    <TooltipFooter key={subIndex} label={subcategory.name}>
                      <span className="text-base capitalize text-gray-500 hover:text-orange-500 cursor-pointer truncate">
                        {subcategory.name}
                      </span>
                    </TooltipFooter>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-10 px-6">
          <h3 className="text-lg font-semibold mb-4">Ridhi Suman Fabric</h3>
          <p className="text-gray-600">
            Aims to make it easier for every community in the world to carry out
            various buying and selling transactions online. It is one of the
            worlds online buying and selling sites whose development is
            relatively fast. You can sell products online at the slabshop
            besides being able to enjoy the process of buying various products
            more quickly and effectively. You can sign up for the exclusive
            slabshop Seller community if you want to launch your own business.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm px-6">
          <span>&copy; Ridhi Suman © 2024-2025, All Rights Reserved</span>

          <div className="flex space-x-4 mt-4 md:mt-0">
            {footerInfo.links.map((link, index) => (
              <Link key={index} href={link.href} className="hover:underline">
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
