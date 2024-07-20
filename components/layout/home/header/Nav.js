"use client";
import React, { useState } from "react";
import TopHeader from "./TopHeader";
import Header from "./Header";
import Marquee from "./Marquee";
import Category from "./HeaderCategory";
import HeaderCategory from "./HeaderCategory";

function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <>
      <TopHeader />
      <Header
        openNav={openNav}
        setOpenNav={setOpenNav}
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
      />
      <Marquee />
      <HeaderCategory />
    </>
  );
}

export default Nav;
