"use client";
import React from "react";
import { useState, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import productsBundle from "@/utils/productDataBundle";
import ProductImageCard from "../ProductImageCard";
import Link from "next/link";

const SetProductBundle = () => {
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [slideHeight, setSlideHeight] = useState(220);
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth > 1280) {
        setVisibleSlides(2);
        setSlideHeight(100);
      } else if (window.innerWidth > 1024) {
        setVisibleSlides(2);
        setSlideHeight(125);
      } else if (window.innerWidth >= 768) {
        setVisibleSlides(2);
        setSlideHeight(150);
      } else if (window.innerWidth >= 640) {
        setVisibleSlides(1);
        setSlideHeight(190);
      } else {
        setVisibleSlides(1);
        setSlideHeight(220);
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  return (
    <div className="relative lg:pt-4 lg:pb-0 p-4 ">
      <h2 className="text-xl flex gap-2 justify-center sm:text-4xl font-extrabold text-[#11998E] font-aclonica leading-tight mb-4 mt-12 sm:mb-8">
        Most loved sets of Lehenga choli
      </h2>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={slideHeight}
        totalSlides={productsBundle.length}
        visibleSlides={visibleSlides}
        isPlaying={true}
        interval={5000}
        infinite={true}
      >
        <Slider>
          {productsBundle.map((product, index) => (
            <Slide index={index} key={product.id}>
              <Link key={product.id} href={`/product-detail-page`}>
                <div className="m-2">
                  <ProductImageCard product={product} />
                </div>
              </Link>
            </Slide>
          ))}
        </Slider>
        <ButtonBack className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-[#f3f4f66e] text-gray-800 font-bold p-2 rounded-full">
          <FaAngleLeft />
        </ButtonBack>
        <ButtonNext className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-[#f3f4f66e] text-gray-800 font-bold p-2 rounded-full">
          <FaAngleRight />
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
};

export default SetProductBundle;
