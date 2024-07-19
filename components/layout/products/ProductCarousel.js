"use client";

import React, { useState, useEffect } from "react";
import { Carousel, IconButton } from "@material-tailwind/react";

import ProductItem from "./ProductItem";
import ProductList from "./ProductList";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

const ProductCarousel = () => {
  const [width] = useWindowSize();
  const items = [
    <ProductItem key={1} />,
    <ProductItem key={2} />,
    <ProductItem key={3} />,
    <ProductItem key={4} />,
    <ProductItem key={5} />,
    <ProductItem key={6} />,
    <ProductItem key={7} />,
    <ProductItem key={8} />,
    <ProductItem key={9} />,
    <ProductItem key={10} />,
  ];

  const divideItems = () => {
    let perSlide;

    if (width > 1360) perSlide = 4;
    else if (width > 960) perSlide = 3;
    else if (width > 720) perSlide = 2;
    else perSlide = 1;

    const slides = [];

    for (let i = 0; i < items.length; i += perSlide) {
      slides.push(items.slice(i, i + perSlide));
    }

    return slides;
  };

  const renderSlides = () => {
    const slides = divideItems();

    return slides.map((slideItems, index) => (
      <ProductList key={index}>{slideItems}</ProductList>
    ));
  };

  return (
    <Carousel
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4 bg-white/50 shadow rounded-full hover:bg-white/70 hover:scale-105 active:scale-100 transition-all duration-100 z-30"
        >
          <ChevronLeftIcon className="h-6 w-6 text-black" />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4 bg-white/50 shadow rounded-full hover:bg-white/70 hover:scale-105 active:scale-100 transition-all duration-100 z-30"
        >
          <ChevronRightIcon className="h-6 w-6 text-black" />
        </IconButton>
      )}
    >
      {renderSlides()}
    </Carousel>
  );
};

export default ProductCarousel;
