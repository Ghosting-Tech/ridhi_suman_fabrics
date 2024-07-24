"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  IconButton,
  List,
  Input,
  Button,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Cog6ToothIcon,
  PowerIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

function NavList() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="w-full justify-end my-4 flex flex-col xl:flex-row items-center gap-4">
      <div className="relative flex w-full max-w-96">
        <Input
          label="Search Product..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Link href={`/admin/search?query=${searchQuery}`}>
          <IconButton
            size="sm"
            className="!absolute right-1 top-1 rounded"
            variant="text"
            onClick={() => setSearchQuery("")}
          >
            <MagnifyingGlassIcon className="h-5 w-5" />
          </IconButton>
        </Link>
      </div>

      <div className="lg:flex grid grid-cols-1 sm:grid-cols-3 gap-4 w-full xl:w-fit">
        <Link href={"/admin/dashboard"}>
          <Button
            className="whitespace-nowrap w-full justify-center flex items-center gap-2 rounded"
            color="blue-gray"
            variant="text"
            size="sm"
          >
            <UserCircleIcon className="h-5 w-5" />
            Dashboard
          </Button>
        </Link>
        <Link href={"/admin/categories"}>
          <Button
            className="whitespace-nowrap w-full justify-center flex items-center gap-2 rounded"
            color="blue-gray"
            variant="text"
            size="sm"
          >
            <Cog6ToothIcon className="h-5 w-5" />
            Category
          </Button>
        </Link>
        <Link href={"/admin/products"}>
          <Button
            className="whitespace-nowrap w-full justify-center flex items-center gap-2 rounded"
            color="blue-gray"
            variant="text"
            size="sm"
          >
            <ShoppingBagIcon className="h-5 w-5" />
            Products
          </Button>
        </Link>
        <Link href={"/admin/sets"}>
          <Button
            className="whitespace-nowrap w-full justify-center flex items-center gap-2 rounded"
            color="blue-gray"
            variant="text"
            size="sm"
          >
            <ShoppingCartIcon className="h-5 w-5" />
            Sets
          </Button>
        </Link>
        <Link href={"/admin/sub-admin"}>
          <Button
            className="whitespace-nowrap w-full justify-center flex items-center gap-2 rounded"
            color="blue-gray"
            variant="text"
            size="sm"
          >
            <UsersIcon className="h-5 w-5" />
            Sub Admin
          </Button>
        </Link>
        <Button
          onClick={async () => {
            await signOut();
          }}
          className="whitespace-nowrap w-full justify-center flex items-center gap-2 rounded"
          variant="text"
          color="red"
          size="sm"
        >
          <PowerIcon className="h-5 w-5" />
          Log Out
        </Button>
      </div>
    </div>
  );
}

export default function AdminNavbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="w-full shadow-sm px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link href={"/admin/dashboard"}>
          <Image src="/ridhi-logo.png" alt="brand" width={150} height={150} />
        </Link>
        <div className="hidden xl:block w-full">
          <NavList />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="xl:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </div>
  );
}
