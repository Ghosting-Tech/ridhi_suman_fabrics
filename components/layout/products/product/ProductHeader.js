"use client";

import { CardHeader, IconButton } from "@material-tailwind/react";

import React, { useMemo } from "react";
import Image from "next/image";

const ProductHeader = React.memo(
  ({ isHovered, isSet = false, srcs, title }) => {
    const gridStyle = useMemo(
      () => ({
        display: "grid",
        gridTemplateColumns: srcs.length === 4 ? "1fr 1fr" : "1fr 1fr 1fr",
        gridTemplateRows: srcs.length === 4 ? "1fr 1fr" : "1fr",
      }),
      [srcs.length]
    );

    const imageStyle = useMemo(
      () => ({
        filter: isHovered ? "brightness(1)" : "brightness(0.9)",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
      }),
      [isHovered]
    );

    const handleWishlist = (e) => {
      e.stopPropagation();
      e.preventDefault();

      console.log("Wishlist");
    };

    return (
      <CardHeader floated={true} className={isSet ? "h-[500px]" : "h-[420px]"}>
        {isSet ? (
          <div className="h-full w-full" style={gridStyle}>
            {srcs.map((src, index) => (
              <div key={index} className="relative overflow-hidden w-full">
                <Image
                  fill={true}
                  objectFit="cover"
                  objectPosition="top"
                  src="/image/image.png"
                  alt="ui/ux review check"
                  style={imageStyle}
                  className="transition-all"
                />
              </div>
            ))}
          </div>
        ) : (
          <Image
            fill={true}
            objectFit="cover"
            src={srcs.url}
            alt={title}
            style={imageStyle}
            className="transition-all"
          />
        )}

        <div className="to-bg-black-10 absolute inset-0 h-1/2 w-1/2 left-1/2 bg-gradient-to-tr from-transparent via-transparent to-white/80" />

        <IconButton
          size="sm"
          color="red"
          variant="text"
          className="!absolute top-4 right-4 rounded-full"
          onClick={handleWishlist}
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
    );
  }
);

ProductHeader.displayName = "ProductHeader";

export default ProductHeader;
