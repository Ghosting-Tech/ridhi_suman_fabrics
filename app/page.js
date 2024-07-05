"use client";
import Nav from "@/components/header/Nav";
import Footer from "@/components/footer/Footer";
import OffBanner from "@/components/OffBanner";
import Testimonial from "@/components/Testimonial";
import Category from "@/components/categories/Category";
import { useState, useEffect } from "react";
import ProductCarousel from "@/components/product/ProductCarousel";
import ProductList from "@/components/productBundle/ProductList";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/image";
import bannerDataFooter from "@/utils/bannerDataFooter";

import HeroSection from "@/components/heroSection/HeroSection";

export default function Home() {

  return (
    <main>
      <Nav />
      <HeroSection/>
      <Category />
      <ProductList />
      <OffBanner />
      <ProductCarousel />
      <ProductCarousel />
      <ProductCarousel />
      <div className="flex w-full">
        {bannerDataFooter.slice(0, 3).map((banner, index) => (
          <div key={index} className="relative w-1/3  ">
            <img src={banner.src} alt={banner.alt} />
          </div>
        ))}
      </div>
      <Testimonial />
      <Footer />
    </main>
  );
}
