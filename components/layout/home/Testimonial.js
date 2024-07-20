"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { testimonials } from "../../../utils/testimonialData"; // Adjust the import path as necessary

function Testimonial() {
  return (
    <div className="relative">
      <div className="flex items-center justify-between h-full w-full absolute z-0">
        <div className="w-1/3 bg-white h-full" />
        <div className="w-4/6 ml-16 bg-gray-100 h-[80%]" />
      </div>

      <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          isPlaying={true}
          totalSlides={testimonials.length}
        >
          <h2 className="text-4xl font-bold xl:block hidden leading-tight text-gray-800">
            <span className="text-white bg-blue-500 mr-2 rounded-full p-1">
              👍
            </span>
            Testimonial
          </h2>

          <h2 className="text-3xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">
            <span className="text-white bg-blue-500 mr-2 rounded-full p-1">
              👍
            </span>
            Testimonial
          </h2>
          <Slider>
            {testimonials.map((testimonial, index) => (
              <Slide key={index} index={index} tabIndex="null">
                <div className="flex">
                  <div className="mt-14 md:flex">
                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                      <Image
                        fill
                        src={testimonial.imageSrc}
                        alt="image of profile"
                        className="w-full h-full flex-shrink-0 object-cover shadow-lg rounded"
                      />
                      <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                        <Image fill src="/testimonial-svg1.svg" alt="commas" />
                      </div>
                    </div>

                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                          {testimonial.title}
                        </h2>
                        <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                          {testimonial.description}
                        </p>
                      </div>

                      <div className="md:mt-0 mt-8">
                        <p className="text-base font-medium leading-4 text-gray-800">
                          {testimonial.name}
                        </p>
                        <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            ))}
          </Slider>

          <div className="flex items-center mt-8">
            <ButtonBack
              className="cursor-pointer"
              role="button"
              aria-label="previous slide"
            >
              <FaArrowLeft size={25} />
            </ButtonBack>
            <ButtonNext
              role="button"
              aria-label="next slide"
              className="cursor-pointer ml-2"
            >
              <FaArrowRight size={25} />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}
export default Testimonial;
