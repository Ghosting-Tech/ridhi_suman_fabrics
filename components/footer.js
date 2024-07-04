import Link from "next/link";
import React from "react";
import { categories, footerInfo } from "../utils/footerData"; // Adjust the import path as necessary

const Footer = () => {
  return (
    <footer className="bg-white pt-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-6">Categories</h2>
          <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 px-6 gap-4 text-gray-600 mb-10">
            {categories.map((item, index) => (
              <span
                key={index}
                className="hover:text-orange-500 cursor-pointer "
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mb-10 px-6">
            <h3 className="text-lg font-semibold mb-4">{footerInfo.title}</h3>
            <p className="text-gray-600">{footerInfo.description}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 py-2">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm px-6">
          <span>&copy; {footerInfo.copyright}</span>
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
