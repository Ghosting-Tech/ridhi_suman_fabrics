"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { CiDiscount1 } from "react-icons/ci";

import Image from "next/image";
import { useState } from "react";

const ProductItem = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Card
      className="w-full max-w-sm mx-auto shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardHeader floated={true} className="h-96">
        <Image
          fill={true}
          objectFit="cover"
          src="/image/image.png"
          alt="ui/ux review check"
          style={{
            filter: isHovered ? "brightness(1)" : "brightness(0.9)",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
          className="transition-all"
        />

        <div className="to-bg-black-10 absolute inset-0 h-1/2 w-1/2 left-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />

        <IconButton
          size="sm"
          color="red"
          variant="text"
          className="!absolute top-4 right-4 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </IconButton>
      </CardHeader>

      <CardBody className="p-0 pb-6 mx-4 relative">
        <div className="pb-3 pt-6 flex items-center justify-between  z-30 bg-white relative">
          <h3 className="font-medium bg-gray-200 text-black py-0.5 rounded-md px-4 text-sm">
            Saree / Silk Saree
          </h3>

          <div className="flex gap-1 items-center">
            <CiDiscount1 className="text-red-500 w-5 h-5" />

            <p className="text-red-500">
              <span className="">84%</span> <span className="text-xs">OFF</span>
            </p>
          </div>
        </div>

        <div className="space-y-3 z-30 bg-white px-4 relative">
          <h2 className="text-lg font-bold">
            Cotton Grey Party Wear Digital Printed Kaftan
          </h2>

          <div className="flex items-end gap-1.5">
            <p className="leading-none font-medium text-black">
              Rs. <span>1999</span>
            </p>

            <p className="line-through text-xs leading-none">
              Rs. <span>3000</span>
            </p>
          </div>
        </div>

        <div
          className="space-y-3 absolute top-0 bg-gradient-to-b from-transparent to-black w-full py-4 px-2 left-0 z-10"
          style={{
            transform: isHovered ? "translateY(-100%)" : "translateY(0%)",
            transition: "transform 0.3s",
            opacity: isHovered ? 1 : 1,
          }}
        >
          <div className="flex gap-1.5 pt-10">
            <h3 className="font-medium text-white text-sm">Sizes: </h3>

            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((size) => (
                <span
                  key={size}
                  className="px-2 py-1 border rounded-md text-xs text-white"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-1.5">
            <h3 className="font-medium text-white text-sm">Colors:</h3>

            <div className="flex gap-2 items-center">
              {["Red", "Blue", "Green", "Black"].map((color) => (
                <span
                  key={color}
                  className="w-4 h-4 border-2 rounded-full text-xs text-white"
                  style={{
                    backgroundColor: color.toLowerCase(),
                  }}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </CardBody>

      <CardFooter className="pt-0 mt-auto">
        <Button
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductItem;
