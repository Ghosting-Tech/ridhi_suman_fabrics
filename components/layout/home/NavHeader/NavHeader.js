"use client";

import { Navbar, IconButton, Collapse } from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import NavProfile from "./NavProfile";

import NavList from "./NavList";

const NavHeader = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Navbar className="sticky top-0 z-50 h-max max-w-full rounded-none px-4 py-1 lg:px-8 lg:py-1">
      <div className="flex items-center justify-between">
        <Link href="/">
          <div className="block sm:max-w-[140px] max-w-[115px]">
            <Image src="/ridhi-logo.png" alt="logo" width={140} height={65} />
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <NavList />
          </div>

          <div className="flex items-center gap-4">
            <NavProfile />

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 flex text-inherit text-black hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6 text-black" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-black" />
              )}
            </IconButton>
          </div>
        </div>
      </div>

      <Collapse open={openNav}>
        <div className="bg-white w-full border-t border-gray-200 mt-2">
          <NavList />
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavHeader;