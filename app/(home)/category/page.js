"use client";
import React, { useState, useEffect } from "react";
import Nav from "@/components/layout/home/NavHeader/Nav";
import Footer from "@/components/layout/home/Footer";
import "pure-react-carousel/dist/react-carousel.es.css";
import CategoryPageHeader from "@/components/layout/home/categories/CategoryPageHeader";
import SetProductBundle from "@/components/layout/home/categories/SetProductBundle";
import SingleProductBundle from "@/components/layout/home/categories/SingleProductBundle";
import categoryData from "@/utils/categoryData";

const page = () => {
  return (
    <>
      <Nav />
      <CategoryPageHeader data={categoryData} />
      <SetProductBundle />
      <SingleProductBundle />
      <Footer />
    </>
  );
};

export default page;
