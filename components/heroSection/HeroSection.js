
import React from "react";
import bannerData from "@/utils/bannerData";
import { useState, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Image from "next/image"; // Assuming you are using Next.js Image component

const HeroSection = () => {
  const [visibleSlides, setVisibleSlides] = useState(1);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth >= 1024) {
        setVisibleSlides(1);
      } else if (window.innerWidth >= 768) {
        setVisibleSlides(1);
      } else if (window.innerWidth >= 640) {
        setVisibleSlides(1);
      } else {
        setVisibleSlides(1);
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const products = bannerData.slice(0, 5);  

  return (
    <div className="flex flex-wrap lg:flex-nowrap relative">
      <div className="w-full lg:w-1/4 lg:pt-3 lg:pr-3 lg:pl-3 pt-2 px-1 relative">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={98}
          totalSlides={products.length}
          visibleSlides={visibleSlides}
          isPlaying={true}
          interval={5000}
          infinite={true}
        >
          <Slider>
            {products.map((product, index) => (
              <Slide index={index} key={product.id}>
                <div className="flex flex-col items-center bg-white rounded-lg">
                  <Image 
                    src={product.src}
                    alt={product.title}
                    width={400}  
                    height={300}  
                    className="object-cover w-full rounded-lg"
                  />
                </div>
              </Slide>
            ))}
          </Slider>
          <ButtonBack className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#f3f4f66e] text-gray-800 font-bold p-2 rounded-full">
            <FaAngleLeft />
          </ButtonBack>
          <ButtonNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#f3f4f66e] text-gray-800 font-bold p-2 rounded-full">
            <FaAngleRight />
          </ButtonNext>
        </CarouselProvider>
      </div>
      <div className="hidden lg:block lg:w-3/4 p-3">
        <Image 
          src={bannerData[5].src}  
          alt={bannerData[5].alt}
          width={1200}  
          height={600}  
          className="rounded-lg "
        />
      </div>
    </div>
  );
};

export default HeroSection;
