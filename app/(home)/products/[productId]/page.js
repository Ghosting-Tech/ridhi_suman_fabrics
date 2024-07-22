"use client";
import Image from "next/image";
import ProductCarousel from "@/components/carousel/ProductCarousel";
import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Link from "next/link";

const ImageSlider = ({ images, onThumbnailClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    onThumbnailClick(images[index]);
  };

  return (
    <CarouselProvider
      naturalSlideWidth={125}
      naturalSlideHeight={200}
      totalSlides={images.length}
      visibleSlides={3}
    >
      <div className="relative flex items-center justify-center mb-5">
        <ButtonBack className="px-2 absolute left-4    bg-[#f3f4f66e] text-gray-800 font-bold p-2 rounded-full z-10">
          <FaAngleLeft />
        </ButtonBack>
        <Slider className="w-full">
          {images.map((image, index) => (
            <Slide key={index} index={index}>
              <Image
                src={image}
                width={125}
                layout="responsive"
                height={200}
                className="   h-56  pr-1  w-full"
                alt={`Slide ${index}`}
                onClick={() => handleThumbnailClick(index)}
              />
            </Slide>
          ))}
        </Slider>
        <ButtonNext className="absolute right-8    bg-[#f3f4f66e] text-gray-800 font-bold p-2 rounded-full">
          <FaAngleRight />
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
};

const ProductPage = () => {
  const [bigImage, setBigImage] = useState("/image/image.png");
  const [smallImages, setSmallImages] = useState([
    "/category/other-site/image1.jpg",
    "/category/other-site/image2.jpg",
    "/category/other-site/image3.jpg",
    "/category/other-site/image4.jpg",
    "/category/other-site/image1.jpg",
    "/category/other-site/image2.jpg",
    "/category/other-site/image3.jpg",
    "/category/other-site/image4.jpg",
  ]);

  const handleImageClick = (index) => {
    const newBigImage = smallImages[index];
    const newSmallImages = [...smallImages];
    newSmallImages[index] = bigImage;
    setBigImage(newBigImage);
    setSmallImages(newSmallImages);
  };

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState("/category/other-site/image1.jpg");

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const handleMainImageClick = () => {
    window.open(mainImage, "_blank");
  };

  return (
    <>
      <div className="flex flex-col md:flex-row my-5">
        {/* Start Pic Part */}
        <div className="flex w-full lg:w-[45%] flex-col px-2 lg:px-10">
          <div className="mb-2 flex justify-center md:h-[37rem]">
            <Image
              src={mainImage}
              width={493}
              layout="responsive"
              height={677}
              className="w-full object-cover  rounded-lg"
              onClick={handleMainImageClick}
            />
          </div>
          <ImageSlider
            images={smallImages}
            onThumbnailClick={handleThumbnailClick}
          />
        </div>
        {/* End Pic Part */}
        {/* Text part */}
        <div className="w-full md:w-[60%] flex flex-col gap-6 px-2 md:px-0 mr-5">
          <div className="flex flex-col gap-3">
            <div className="w-[90px] bg-pink-400 text-[#52057B] inline text-[12px]  font-400 px-2 py-[6px] leading-3 rounded">
              Lehnga Choli
            </div>
            <div className="font-600 text-[20px] md:text-[32px] leading-8 md:leading-12 font-semibold">
              Faux Georgette Lavender Party Wear Sequence Embroidery Work
              Readymade Lehenga Choli
            </div>
            <div className="font-600 leading-9 md:leading-[43.57px] text-2xl md:text-4xl text-[#11998E] font-semibold">
              <span>&#x20B9;</span> 2599.10
            </div>
            <div className="font-400 text-[14px] md:text-[16px] leading-5 md:leading-6 text-[#828282]">
              We provide a{" "}
              <span className="font-600 text-black">one-year warranty</span> in
              case there are any issues with our products.
            </div>
          </div>

          {/* Start Choose color and size button box */}
          <div>
            {/* Choose Color */}
            <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-[69px] py-5 border-y border-slate-300 ">
              <div className="text-[#828282] font-400 text-[14px] leading-4 font-semibold">
                Choose Color
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-3 md:mt-0 ">
                {["Black", "Gray", "White", "Red"].map((color) => (
                  <div
                    key={color}
                    className={`productPageColorButton ${
                      selectedColor === color ? "selected" : ""
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </div>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-[69px] py-5 border-b border-slate-300">
              <div className="text-[#828282] font-400 text-[14px] leading-4 font-semibold">
                Size
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-3 md:mt-0">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <div
                    key={size}
                    className={`productPageSizeButton ${
                      selectedSize === size ? "selected" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* End Choose color and size button box */}

          {/* Buy and Cart Button */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 h-auto md:h-[52px]">
            <Link href="/booking-detail-page">
              <button className="Buy-CartButton bg-[#52057B] text-white  ">
                Buy Now
              </button>
            </Link>
            <div className="Buy-CartButton border border-black flex items-center justify-center gap-2 hover:cursor-pointer  ">
              <Image src="/icon/cartIcon.svg" width={17} height={16} />
              <button>Add to Cart</button>
            </div>
          </div>
          {/* End Buy and Cart Button */}

          {/* Start product Feature Icon */}
          <div className="grid grid-cols-2 gap-4 pb-5 border-b">
            <div className="flex items-center gap-3">
              <Image src="icon/StoreProduct.svg" width={18} height={22} />
              <span>Original store product</span>
            </div>
            <div className="flex items-center gap-3">
              <Image src="icon/Waranty.svg" width={18} height={22} />
              <span>Long Term Warranty</span>
            </div>
            <div className="flex items-center gap-3">
              <Image src="icon/TrustedShop.svg" width={18} height={22} />
              <span>100% trusted shop</span>
            </div>
            <div className="flex items-center gap-3">
              <Image src="icon/Lovable.svg" width={18} height={22} />
              <span>Most Lovable</span>
            </div>
          </div>
          {/* End product Feature Icon */}
        </div>
      </div>
      <ProductCarousel />
    </>
  );
};

export default ProductPage;
