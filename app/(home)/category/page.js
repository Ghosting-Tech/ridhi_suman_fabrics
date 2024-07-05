"use client";
import React, { useState, useEffect } from "react";
import Nav from "@/components/header/Nav";
import Footer from "@/components/footer/Footer";
import "pure-react-carousel/dist/react-carousel.es.css";
import CategoryPageHeader from "@/components/categories/CategoryPageHeader";
import SetProductBundle from "@/components/categories/SetProductBundle";
import SingleProductBundle from "@/components/categories/SingleProductBundle";
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
