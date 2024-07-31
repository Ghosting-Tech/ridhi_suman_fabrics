"use client";

import { Carousel } from "@material-tailwind/react";

import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className="flex gap-2 my-2 mx-2">
        <div className="md:hidden lg:block lg:w-1/4 w-full block">
          <Carousel
            autoplay={true}
            transition={{ duration: 1 }}
            loop={true}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-40 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
            className="rounded-xl md:max-w-lg h-80"
          >
            <Image
              width={390}
              height={320}
              src="/category/download1.jpg"
              alt="image 1"
              className="h-full w-full object-cover object-top md:object-center"
            />

            <Image
              width={390}
              height={320}
              src="/category/download2.jpg"
              alt="image 2"
              className="h-full w-full object-cover object-top md:object-center"
            />

            <Image
              width={390}
              height={320}
              src="/category/download3.png"
              alt="image 3"
              className="h-full w-full object-cover object-top md:object-center"
            />

            <Image
              width={390}
              height={320}
              src="/category/download4.png"
              alt="image 4"
              className="h-full w-full object-cover object-top md:object-center"
            />
          </Carousel>
        </div>

        <div className="w-full lg:w-3/4 md:block hidden h-80 overflow-hidden relative rounded-xl bg-black">
          <Image
            src="/image/home/banner.webp"
            alt="hero banner"
            objectFit="cover"
            fill={true}
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
