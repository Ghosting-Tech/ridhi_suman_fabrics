"use client";

import OffBanner from "@/components/OffBanner";
import Testimonial from "@/components/layout/home/Testimonial";
import Category from "@/components/layout/home/categories/Category";
import ProductCarousel from "@/components/carousel/ProductCarousel";
import ProductList from "@/components/productBundle/ProductList";
import Image from "next/image";
import bannerDataFooter from "@/utils/bannerDataFooter";

import HeroSection from "@/components/layout/home/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Category />
      <ProductList />
      <OffBanner />
      <ProductCarousel />
      <ProductCarousel />
      <ProductCarousel />
      <div className="flex w-full">
        {bannerDataFooter.slice(0, 3).map((banner, index) => (
          <div key={index} className="relative w-1/3">
            <div className="relative w-full h-[20rem]">
              <Image
                src={banner.src}
                alt={banner.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
      <Testimonial />
    </>
  );
}
