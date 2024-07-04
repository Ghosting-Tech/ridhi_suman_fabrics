"use client";
import React, { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/footer";
import { Breadcrumbs } from "@material-tailwind/react";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const initialProducts = [
  {
    id: 1,
    images: ["/category/download (1).jpg"],
    title: "Gorgeous Designer Lehenga",
    originalPrice: "₹2500.00",
    discountedPrice: "₹1500.00",
    discount: "40% OFF",
    sales: "200 Sold",
    category: "Best Seller",
  },
  {
    id: 2,
    images: ["/category/download (2).jpg"],
    title: "Gorgeous Designer Lehenga",
    originalPrice: "₹2500.00",
    discountedPrice: "₹1500.00",
    discount: "40% OFF",
    sales: "200 Sold",
    category: "Best Seller",
  },
  {
    id: 3,
    images: ["/category/image3.png"],
    title: "Gorgeous Designer Lehenga",
    originalPrice: "₹2500.00",
    discountedPrice: "₹1500.00",
    discount: "40% OFF",
    sales: "200 Sold",
    category: "Best Seller",
  },
  {
    id: 4,
    images: ["/category/image2.png"],
    title: "Gorgeous Designer Lehenga",
    originalPrice: "₹2500.00",
    discountedPrice: "₹1500.00",
    discount: "40% OFF",
    sales: "200 Sold",
    category: "Best Seller",
  },
  {
    id: 5,
    images: ["/category/download (1).jpg"],
    title: "Gorgeous Designer Lehenga",
    originalPrice: "₹2500.00",
    discountedPrice: "₹1500.00",
    discount: "40% OFF",
    sales: "200 Sold",
    category: "Best Seller",
  },
  {
    id: 6,
    images: ["/category/download (2).jpg"],
    title: "Gorgeous Designer Lehenga",
    originalPrice: "₹2500.00",
    discountedPrice: "₹1500.00",
    discount: "40% OFF",
    sales: "200 Sold",
    category: "Best Seller",
  },
  {
    id: 7,
    images: ["/category/image3.png"],
    title: "Gorgeous Designer Lehenga",
    originalPrice: "₹2500.00",
    discountedPrice: "₹1500.00",
    discount: "40% OFF",
    sales: "200 Sold",
    category: "Best Seller",
  },
  {
    id: 8,
    images: ["/category/image2.png"],
    title: "Gorgeous Designer Lehenga",
    originalPrice: "₹2500.00",
    discountedPrice: "₹1500.00",
    discount: "40% OFF",
    sales: "200 Sold",
    category: "Best Seller",
  },
  {
    id: 9,
    images: ["/category/download (1).jpg"],
    title: "Gorgeous Designer Lehenga",
    originalPrice: "₹2500.00",
    discountedPrice: "₹1500.00",
    discount: "40% OFF",
    sales: "200 Sold",
    category: "Best Seller",
  },
  {
    id: 10,
    images: ["/category/download (2).jpg"],
    title: "Gorgeous Designer Lehenga",
    originalPrice: "₹2500.00",
    discountedPrice: "₹1500.00",
    discount: "40% OFF",
    sales: "200 Sold",
    category: "Best Seller",
  },
  // Additional product objects can be added here
  // ...
];

const ProductGrid = () => {
  const [products, setProducts] = useState(initialProducts);
  const [visibleCount, setVisibleCount] = useState(8);

  const showMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  const renderImages = (images) => {
    return (
      <div className="flex items-center w-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product Image ${index + 1}`}
            className="object-cover w-full h-[32rem]"
          />
        ))}
      </div>
    );
  };

  return (
    <div className="relative lg:pt-4 lg:pb-0 p-4">
      <h2 className="text-2xl flex gap-2 justify-center sm:text-4xl font-extrabold text-[#F857A6] font-[Aclonica] leading-tight mb-4 sm:mb-8">
        Top booked lehenga choli
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.slice(0, visibleCount).map((product) => (
          <Link key={product.id} href={`/product`}>
            <div className="flex flex-col items-center m-2 bg-white rounded-lg shadow-md">
              {renderImages(product.images)}
              <div className="p-4 flex flex-col items-start w-full h-full">
                <div className="flex items-center justify-between w-full mt-2">
                  <span className="text-white bg-purple-500 text-xs font-semibold px-2 py-1 rounded">
                    {product.category}
                  </span>
                  <span className="text-red-500 bg-pink-100 text-xs font-semibold px-2 py-1 rounded">
                    {product.discount}
                  </span>
                </div>
                <h3 className="text-lg font-bold mt-2">{product.title}</h3>
                <div className="flex items-center justify-between w-full mt-2">
                  <span className="text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                  <span className="text-red-500 font-bold">
                    {product.discountedPrice}
                  </span>
                </div>
                <div className="w-full flex justify-between items-center mt-2">
                  <div className="w-full flex justify-between items-center bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r w-9/10 from-red-500 to-orange-500 h-2.5 rounded-full"
                      style={{ width: "50%" }}
                    ></div>
                    <span className="ml-2 text-gray-500 text-sm">
                      {product.sales}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {visibleCount < products.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={showMoreProducts}
            className="bg-[#11998E] text-white px-4 py-2 rounded"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

function ProductCarousel() {
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

  const products = [
    {
      id: 1,
      images: ["/category/download (1).jpg", "/category/download (2).jpg"],
      title: "Gorgeous Designer Lehenga",
      originalPrice: "₹2500.00",
      discountedPrice: "₹1500.00",
      discount: "40% OFF",
      sales: "200 Sold",
      category: "Best Seller",
    },
    {
      id: 2,
      images: [
        "/category/image3.png",
        "/category/download (2).jpg",
        "/category/download (1).jpg",
      ],
      title: "Gorgeous Designer Lehenga",
      originalPrice: "₹2500.00",
      discountedPrice: "₹1500.00",
      discount: "40% OFF",
      sales: "200 Sold",
      category: "Best Seller",
    },
    {
      id: 3,
      images: [
        "/category/download (1).jpg",
        "/category/image3.png",
        "/category/download (2).jpg",
        "/category/download (2).jpg",
      ],
      title: "Gorgeous Designer Lehenga",
      originalPrice: "₹2500.00",
      discountedPrice: "₹1500.00",
      discount: "40% OFF",
      sales: "200 Sold",
      category: "Best Seller",
    },
  ];

  const renderImages = (images) => {
    const imageWidthClass =
      {
        2: "w-1/2",
        3: "w-1/3",
        4: "w-1/4",
      }[images.length] || "w-full";

    return (
      <div className="flex items-center w-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product Image ${index + 1}`}
            className={`object-cover mb-2 h-[32rem] ${imageWidthClass}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="relative lg:pt-4 lg:pb-0 p-4 ">
      <h2 className="text-xl flex gap-2 justify-center sm:text-4xl font-extrabold text-[#11998E] font-[Aclonica] leading-tight mb-4 mt-12 sm:mb-8">
        Most loved sets of Lehenga choli
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
              <Link href="/product-detail-page" className="block">
                <div className="flex flex-col items-center m-2 bg-white rounded-lg shadow-md">
                  {renderImages(product.images)}
                  <div className="p-4 flex flex-col items-start w-full">
                    <div className="flex items-center justify-between w-full mt-2">
                      <span className="text-white bg-purple-500 text-xs font-semibold px-2 py-1 rounded">
                        {product.category}
                      </span>
                      <span className="text-red-500 bg-pink-100 text-xs font-semibold px-2 py-1 rounded">
                        {product.discount}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mt-2">{product.title}</h3>
                    <div className="flex items-center justify-between w-full mt-2">
                      <span className="text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                      <span className="text-red-500 font-bold">
                        {product.discountedPrice}
                      </span>
                    </div>
                    <div className="w-full flex justify-between items-center mt-2">
                      <div className="w-full flex justify-between items-center bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-red-500 to-orange-500 h-2.5 rounded-full"
                          style={{ width: "50%" }}
                        ></div>
                        <span className="ml-2 text-gray-500 text-sm">
                          {product.sales}
                        </span>
                      </div>
                    </div>
                  </div>
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
}

const Page = () => {
  return (
    <>
      <Nav />
      <div className="p-4 sm:p-8 bg-white">
        <div className="lg:flex md:flex block justify-between items-center">
          <div>
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-[#0052D4]">
              LEHENGA CHOLI
            </h1>
            <Breadcrumbs className="p-0 mt-2 mb-4">
              <a href="/" className="opacity-60">
                <FaHome />
              </a>
              <a href="/category-page">Lehenga Choli</a>
            </Breadcrumbs>
          </div>
          <div className="flex items-center justify-end space-x-4">
            <span className="text-gray-600">FILTER BY PRICE</span>
            <input
              type="number"
              placeholder="Min"
              className="w-16 px-2 py-1 border rounded"
            />
            <span>-</span>
            <input
              type="number"
              placeholder="Max"
              className="w-16 px-2 py-1 border rounded"
            />
          </div>
        </div>
        <div className="w-40  float-end   ">
          <input type="range" min="50" max="100" className="w-full" />
        </div>
      </div>
      <ProductCarousel />
      <ProductGrid />
      <Footer />
    </>
  );
};

export default Page;
