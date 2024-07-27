"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Carousel } from "@material-tailwind/react";
import ImageContainer from "@/components/ui/ImageContainer";
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
const ImageSlider = ({ data = [] }) => {
  const [active, setActive] = useState(data[0]?.url || "");

  const [width] = useWindowSize();

  const slides = useMemo(() => {
    let perSlide;

    // if (width > 1360) perSlide = 3;
    if (width > 960) perSlide = 3;
    else if (width > 720) perSlide = 2;
    else perSlide = 2;

    const slides = [];

    for (let i = 0; i < data.length; i += perSlide) {
      slides.push(data.slice(i, i + perSlide));
    }

    return slides;
  }, [data, width]);

  const renderSlides = () => {
    return slides.map((slideItems, slideIndex) => (
      <div key={slideIndex} className="flex gap-2">
        {slideItems.map((slide, index) => (
          <div key={index} className="h-40 w-auto">
            <img
              onClick={() => setActive(slide.url)}
              src={slide.url}
              className="h-full w-11/12  cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="grid gap-4 w-full p-5 md:w-1/3">
      <ImageContainer image={active} />

      <Carousel className="flex gap-4" loop autoplay interval={3000}>
        {renderSlides()}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
