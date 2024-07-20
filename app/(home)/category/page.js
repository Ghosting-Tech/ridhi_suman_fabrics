"use client";
import React, { useState, useEffect } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import CategoryPageHeader from "@/components/layout/home/categories/CategoryPageHeader";
import SetProductBundle from "@/components/layout/home/categories/SetProductBundle";
import SingleProductBundle from "@/components/layout/home/categories/SingleProductBundle";
import categoryData from "@/utils/categoryData";

const page = () => {
  return (
    <>
      <CategoryPageHeader data={categoryData} />
      <SetProductBundle />
      <SingleProductBundle />
    </>
  );
};

export default page;
