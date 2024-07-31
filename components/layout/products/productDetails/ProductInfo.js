"use client";

import { toast } from "sonner";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

import ProductFooter from "./ProductFooter";
import ProductDetails from "./ProductDetails";
import ProductHeading from "./ProductHeading";
import ProductSizeColor from "./ProductSizeColor";

import BuyNowBtn from "./button/BuyNowBtn";
import AddToCartBtn from "./button/AddToCartBtn";

function ProductInfo({ product }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedColorHex, setSelectedColorHex] = useState(null);

  const backgroundColor = product?.subCategory?.colour;

  const cart = useSelector((state) => state.cart);

  const isInCart = cart.items?.find((item) => item._id === product._id);

  const handleSelectedSize = (size) => {
    if (isInCart && isInCart.color && isInCart.color.hex) {
      toast.warning("Remove item from cart to change size");
      return;
    }

    setSelectedSize(size);
    setSelectedColor(null);
  };

  const handleSelectedColor = (color, hex) => {
    if (isInCart && isInCart.color && isInCart.color.name) {
      toast.warning("Remove item from cart to change color");
      return;
    }

    if (selectedSize === null) {
      toast.warning("select size");
      return;
    }

    setSelectedColor(color.toLowerCase());
    setSelectedColorHex(hex);
  };

  useEffect(() => {
    if (isInCart) {
      setSelectedSize(isInCart.size);
      // setSelectedSize("s");
      setSelectedColor(isInCart.color.name);
      // setSelectedColor("azure");
      setSelectedColorHex(isInCart.color.hex);
      // setSelectedColorHex("#007fff");
    }

    if (product.sizes.length > 0) {
      setSelectedSize(product.sizes[0].size);
    }
  }, [isInCart, product?.sizes]);

  return (
    <div className="w-full max-w-3xl md:w-2/3 flex flex-col gap-6 p-5 md:px-0 mr-5">
      <ProductHeading {...product} backgroundColor={backgroundColor} />

      <ProductSizeColor
        isInCart={isInCart}
        sizes={product.sizes}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        handleSelectedColor={handleSelectedColor}
        handleSelectedSize={handleSelectedSize}
      />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
        <AddToCartBtn
          productColor={selectedColor}
          productSize={selectedSize}
          productHex={selectedColorHex}
          price={product.price}
          discount={product.discount}
        />

        <BuyNowBtn />
      </div>

      <ProductDetails fabric={product.fabric} brand={product.brand} />

      <ProductFooter />
    </div>
  );
}

export default ProductInfo;
