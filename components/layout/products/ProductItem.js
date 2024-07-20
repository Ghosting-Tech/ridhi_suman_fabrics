"use client";

import { Card, CardBody } from "@material-tailwind/react";

import Link from "next/link";
import { useState } from "react";

import ProductTitle from "./product/ProductTitle";
import ProductFooter from "./product/ProductFooter";
import ProductHeader from "./product/ProductHeader";
import ProductCategory from "./product/ProductCategory";
import ProductExtraDetails from "./product/ProductExtraDetails";

const ProductItem = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Link href={`/${product.title}`}>
      <Card
        className="w-full max-w-sm mx-auto shadow-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ProductHeader
          title={product.title}
          srcs={product.images[0]}
          isHovered={isHovered}
        />

        <CardBody className="p-0 pb-6 mx-4 relative">
          <ProductCategory
            category={product.category}
            discount={product.discount}
          />

          <ProductTitle
            title={product.title}
            price={product.price}
            discount={product.discount}
          />

          <ProductExtraDetails sizes={product.sizes} isHovered={isHovered} />
        </CardBody>

        <ProductFooter />
      </Card>
    </Link>
  );
};

export default ProductItem;
