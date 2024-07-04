import React, { useState, useEffect } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import Link from "next/link";
import { products } from "@/utils/productData";
import ProductDetails from "../ProductDetails";
 
function ProductCarousel() {
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [slideHeight, setSlideHeight] = useState(190);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth > 1280) {
        setVisibleSlides(4);
        setSlideHeight(190);
      } else if (window.innerWidth > 1024) {
        setVisibleSlides(4);
        setSlideHeight(240);
      } else if (window.innerWidth >= 768) {
        setVisibleSlides(3);
        setSlideHeight(240);
      } else if (window.innerWidth >= 640) {
        setVisibleSlides(2);
        setSlideHeight(220);
      } else {
        setVisibleSlides(1);
        setSlideHeight(240);
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  return (
    <div className="relative lg:pt-4 lg:pb-0 p-4 bg-gray-50">
      <h2 className="text-2xl flex gap-2 sm:text-4xl font-extrabold text-black font-aclonica leading-tight mb-4 sm:mb-8">
        MOST BOOKED SAREES
        <AiTwotoneThunderbolt className="text-orange-500" />
      </h2>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={slideHeight}
        totalSlides={products.length}
        visibleSlides={visibleSlides}
        isPlaying={true}
        interval={5000}
        infinite={true}
      >
        <Slider>
          {products.map((product, index) => (
            <Slide index={index} key={product.id}>
              <Link key={product.id} href={`/product`}>
                <div className="flex flex-col items-center m-2 bg-white rounded-lg shadow-md">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[32rem] object-cover rounded-t-lg"
                  />
                  <ProductDetails product={product} />
                </div>
              </Link>
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </div>
  );
}

export default ProductCarousel;
