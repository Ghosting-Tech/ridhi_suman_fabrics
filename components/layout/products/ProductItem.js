"use client";

import { Card, CardBody } from "@material-tailwind/react";
import Link from "next/link";
import { useState, useCallback, memo } from "react";
import ProductTitle from "./product/ProductTitle";
import ProductFooter from "./product/ProductFooter";
import ProductHeader from "./product/ProductHeader";
import ProductCategory from "./product/ProductCategory";
import ProductExtraDetails from "./product/ProductExtraDetails";

const ProductItem = memo(
  ({ product: { title, images, category, discount, price, sizes } }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = useCallback(() => setIsHovered(true), []);
    const handleMouseLeave = useCallback(() => setIsHovered(false), []);

    return (
      <Link href={`/${title || "/"}`}>
        <Card
          className="w-full max-w-sm mx-auto shadow-md hover:shadow-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {images[0] && (
            <ProductHeader
              title={title}
              srcs={images[0]}
              isHovered={isHovered}
            />
          )}

          <CardBody className="p-0 mx-4 relative">
            {category && discount && (
              <ProductCategory category={category} discount={discount} />
            )}

            {title && price && discount && (
              <ProductTitle title={title} price={price} discount={discount} />
            )}

            {sizes && (
              <ProductExtraDetails sizes={sizes} isHovered={isHovered} />
            )}
          </CardBody>

          <ProductFooter />
        </Card>
      </Link>
    );
  }
);

ProductItem.displayName = "ProductItem";

export default ProductItem;
