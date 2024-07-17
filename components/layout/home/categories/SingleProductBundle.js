"use client";
import React, { useState, useEffect, useRef } from "react";
import { products } from "@/utils/productData";
import ProductDetails from "../../../ProductDetails";
import Link from "next/link";
import Image from "next/image";

const SingleProductBundle = () => {
  const [product, setProducts] = useState(products);
  const [visibleCount, setVisibleCount] = useState(8);
  const observerRef = useRef(null);

  const loadMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreProducts();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  const renderImages = (images) => {
    return (
      <div className="flex items-center w-full">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-[32rem]">
            <Image
              src={image}
              alt={`Product Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="relative lg:pt-4 lg:pb-0 p-4">
      <h2 className="text-2xl flex gap-2 justify-center sm:text-4xl font-extrabold text-[#F857A6] font-aclonica leading-tight mb-4 sm:mb-8">
        Top booked lehenga choli
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {product.slice(0, visibleCount).map((product) => (
          <Link key={product.id} href={`/product`}>
            <div className="flex flex-col items-center m-2 bg-white rounded-lg shadow-md">
              {renderImages(product.images)}
              <ProductDetails product={product} />
            </div>
          </Link>
        ))}
      </div>
      <div ref={observerRef} className="h-10"></div>
    </div>
  );
};

export default SingleProductBundle;
