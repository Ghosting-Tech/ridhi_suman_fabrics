"use client";

import { CardHeader } from "@material-tailwind/react";

import React, { useMemo } from "react";
import Image from "next/image";
import WishlistBtn from "@/components/ui/buttons/WishlistBtn";

const ProductHeader = React.memo(
  ({ isHovered, isSet = false, srcs, title, id }) => {
    console.log("ProductHeader", srcs);
    const gridStyle = useMemo(
      () => ({
        display: "grid",
        gridTemplateColumns: srcs?.length === 4 ? "1fr 1fr" : "1fr 1fr 1fr",
        gridTemplateRows: srcs?.length === 4 ? "1fr 1fr" : "1fr",
      }),
      [srcs?.length]
    );

    const imageStyle = useMemo(
      () => ({
        filter: isHovered ? "brightness(1)" : "brightness(0.9)",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
      }),
      [isHovered]
    );

    return (
      <CardHeader floated={true} className={isSet ? "h-[500px]" : "h-[420px]"}>
        {isSet ? (
          <div className="h-full w-full" style={gridStyle}>
            {srcs?.map((src, index) => (
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
            src={srcs?.url}
            alt={title}
            style={imageStyle}
            className="transition-all"
          />
        )}

        <div className="to-bg-black-10 absolute inset-0 h-1/2 w-1/2 left-1/2 bg-gradient-to-tr from-transparent via-transparent to-black/60" />

        <WishlistBtn productId={id} />
      </CardHeader>
    );
  }
);

ProductHeader.displayName = "ProductHeader";

export default ProductHeader;
