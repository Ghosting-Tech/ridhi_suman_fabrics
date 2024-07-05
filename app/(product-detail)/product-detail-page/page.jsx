"use client";
import Image from "next/image";
import Nav from "@/components/header/Nav";
import Footer from "@/components/footer/Footer";
import ProductCarousel from "@/components/product/ProductCarousel";
import React, { useState } from "react";
import Link from "next/link";

const ProductPage = () => {
  const products = [
    {
      image: "/category/other-site/image1.jpg", // Dummy image URL
      title: "Sample Product 1",
      category: "Category 1",
      discount: "20% OFF",
      originalPrice: "$100.00",
      discountedPrice: "$80.00",
      sales: "50 sold",
    },
    {
      image: "/category/other-site/image1.jpg", // Dummy image URL
      title: "Sample Product 2",
      category: "Category 2",
      discount: "10% OFF",
      originalPrice: "$120.00",
      discountedPrice: "$108.00",
      sales: "30 sold",
    },
    {
      image: "/category/other-site/image1.jpg", // Dummy image URL
      title: "Sample Product 3",
      category: "Category 3",
      discount: "30% OFF",
      originalPrice: "$150.00",
      discountedPrice: "$105.00",
      sales: "70 sold",
    },
   
  ];

  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <>
      <Nav />
      <div className="flex flex-col md:flex-row my-5">
        {/* Start Pic Part */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-1 mx-2 pb-4 pr-1 justify-center md:w-1/2 max-h-[175vh] overflow-y-auto ">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg  shadow-md  mb-3 pb-2  "
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full  object-cover rounded-t-lg"
              />
              <div className="p-1 flex flex-col items-start w-full">
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
                <div className="w-full flex flex-col justify-between items-center mt-2">
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
                <div className="w-full mt-auto">
                  <button className="bg-[#52057B] text-white mt-4 w-full px-4 py-2 rounded-lg">
                    View Single
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Text part */}
        <div className="w-full md:w-[55%] flex flex-col gap-6 px-2">
          <div className="flex flex-col gap-3">
            <div className="w-[90px] bg-pink-400 text-[#52057B] inline text-[12px] font-400 px-2 py-[6px] leading-3 rounded">
              Lehnga Choli
            </div>
            <div className="font-600 text-[20px] md:text-[32px] leading-10 md:leading-12 font-semibold ">
              Faux Georgette Lavender Party Wear Sequence Embroidery Work
              Readymade Lehenga Choli
            </div>
            <div className="flex justify-between">
              <div className="font-600 leading-9 md:leading-[43.57px] text-2xl md:text-4xl text-[#11998E] font-semibold">
                <span>&#x20B9;</span> 2599.10
              </div>
              <div className="leading-9 md:leading-[43.57px] text-md text-[#52057B] font-semibold">
                1 SET = 3 PIECES
              </div>
            </div>
            <div className="font-400 text-[14px] md:text-[16px] leading-5 md:leading-6 text-[#828282]">
              We provide a{" "}
              <span className="font-600 text-black">one-year warranty</span> in
              case there are any issues with our products.
            </div>
          </div>

          {/* Start Choose color and size button box */}
          <div>
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
            <Link href="/checkout">
            <button className="Buy-CartButton bg-[#52057B] text-white">
              Buy Now
            </button>
            </Link>
            <div className="Buy-CartButton border border-black flex items-center justify-center gap-2 hover:cursor-pointer">
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

          {/* Start Social Media Icon */}
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            <div className="flex items-center gap-2">
              <span className="font-400 text-md leading-5">Share</span>
              <div className="bg-[#1877F2] rounded-full w-[25px] h-[25px] flex items-center justify-center hover:cursor-pointer">
                <Image src="/icon/Facebook.svg" width={17} height={17} />
              </div>
              <div className="bg-[#1D9BF0] rounded-full w-[25px] h-[25px] flex items-center justify-center hover:cursor-pointer">
                <Image src="/icon/Twiter.svg" width={17} height={17} />
              </div>
              <div className="bg-[#5BD366] rounded-full w-[25px] h-[25px] flex items-center justify-center hover:cursor-pointer">
                <Image src="/icon/WhatsApp.svg" width={17} height={17} />
              </div>
              <div className="bg-[#E34574] rounded-full w-[25px] h-[25px] flex items-center justify-center hover:cursor-pointer">
                <Image src="/icon/Instagram.svg" width={17} height={17} />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>Add to Favorite</span>
              <div className="rounded-full w-[25px] h-[25px] flex items-center justify-center hover:cursor-pointer">
                <Image src="/icon/Favorite.svg" width={17} height={17} />
              </div>
            </div>
          </div>
          {/* End Social Media Icon */}
          <div className="flex flex-col space-y-2">
            <div className="flex">
              <span className="font-medium mr-2">Fabric</span>
              <span>:</span>
              <span className="ml-2">Roman Silk</span>
            </div>
            <div className="flex">
              <span className="font-medium mr-2">Brand</span>
              <span>:</span>
              <span className="ml-2">Purple</span>
            </div>
            <div className="flex">
              <span className="font-medium mr-2">Pieces</span>
              <span>:</span>
              <span className="ml-2">4</span>
            </div>
          </div>
        </div>
      </div>
      <ProductCarousel />
      <Footer />
    </>
  );
};

export default ProductPage;
