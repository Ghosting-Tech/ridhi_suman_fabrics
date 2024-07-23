import React, { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { IoIosSearch } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import NavCategory from './category/NavCategory'
import {

  MenuHandler,

} from "@material-tailwind/react";

const NavList = () => {

  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <>
      <div className="flex my-4 lg:my-0 ">
        <Input label="Search" placeholder="Saree" icon={<IoIosSearch />} />

        <Button
          className="flex items-center gap-2 shadow-none hover:shadow-none min-w-40 bg-transparent"
          color="white"
          onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
        >
          <BiCategory className="h-5 w-5" />
          Categories
        </Button>

        <Button
          className="flex items-center gap-2 shadow-none hover:shadow-none min-w-28 bg-transparent"
          color="white"
        >
          <ShoppingCartIcon className="h-5 w-5" />
          Cart
        </Button>
      </div>
      {isCategoriesOpen &&
        // <div className="mx-auto flex justify-center">
        <NavCategory />
        // </div>
      }

    </>
  );
};

export default NavList;
