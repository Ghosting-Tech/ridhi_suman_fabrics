import React from 'react'
import bannerData from '@/utils/bannerData';
import { useState, useEffect } from 'react';
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";


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
  
    const products = bannerData.slice(0, 5); // Use the first 5 items as products
  
  return (
    <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/4 lg:pt-3 lg:pr-3 lg:pl-3 pt-2 px-1">
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
                    <img
                      src={product.src}
                      alt={product.title}
                      className="w-full lg:h-[30rem] md:h-auto object-cover rounded-lg"
                    />
                  </div>
                </Slide>
              ))}
            </Slider>
          </CarouselProvider>
        </div>
        <div className="hidden lg:block lg:w-3/4 p-3">
          <img
            src={bannerData[5].src} // Use the 6th item for the hero banner
            className="rounded-lg"
            alt={bannerData[5].alt}
          />
        </div>
      </div>
  )
}

export default HeroSection