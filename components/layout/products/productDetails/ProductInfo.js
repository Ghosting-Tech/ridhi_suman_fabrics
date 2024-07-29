"use client";

import { toast } from "sonner";
import React, { useState, useEffect } from "react";

import ProductFooter from "./ProductFooter";
import ProductDetails from "./ProductDetails";
import ProductHeading from "./ProductHeading";
import ProductSizeColor from "./ProductSizeColor";

import BuyNowBtn from "./button/BuyNowBtn";
import AddToCartBtn from "./button/AddToCartBtn";

function ProductInfo({ product }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const backgroundColor = product?.subCategory?.colour;

  const handleSelectedSize = (size) => {
    setSelectedSize(size);
    setSelectedColor(null);
  };

  const handleSelectedColor = (color) => {
    if (selectedSize === null) {
      toast.warning("select size");
      return;
    }

    setSelectedColor(color);
  };

  useEffect(() => {
    if (product.sizes.length > 0) {
      setSelectedSize(product.sizes[0].size);
    }
  }, [product?.sizes]);

  const [isExpanded, setIsExpanded] = useState(false);

  // const toggleExpanded = () => {
  //   setIsExpanded(!isExpanded);
  // };

  // const wordCount = product?.description.split(" ").length;
  // const shortDescription = product?.description
  //   .split(" ")
  //   .slice(0, 10)
  //   .join(" ");

  return (
    <div className="w-full max-w-3xl md:w-2/3 flex flex-col gap-6 p-5 md:px-0 mr-5">
      <ProductHeading {...product} backgroundColor={backgroundColor} />

      <ProductSizeColor
        sizes={product.sizes}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        handleSelectedColor={handleSelectedColor}
        handleSelectedSize={handleSelectedSize}
      />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
        <AddToCartBtn />

        <BuyNowBtn />
      </div>

      <ProductDetails fabric={product.fabric} brand={product.brand} />

      <ProductFooter />
    </div>
  );
}

export default ProductInfo;
