import { Button, Input } from "@material-tailwind/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { IoIosSearch } from "react-icons/io";

import React from "react";

const NavList = () => {
  return (
    <div className="flex my-4 lg:my-0 gap-2">
      <Input label="Search" placeholder="Saree" icon={<IoIosSearch />} />

      <Button
        className="flex items-center gap-2 shadow-none hover:shadow-none min-w-28 bg-transparent"
        color="white"
      >
        <ShoppingCartIcon className="h-5 w-5" />
        Cart
      </Button>
    </div>
  );
};

export default NavList;
