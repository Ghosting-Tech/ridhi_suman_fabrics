"use client";
import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
function NavCategory() {
  const [categories, setCategories] = useState([]);

  const handleCategories = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/category`
      );
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    handleCategories();
  }, []);

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Menu
      open={openMenu}
      handler={setOpenMenu}
      allowHover
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>
        <Button
          variant="text"
          className="flex items-center gap-3 text-base font-normal capitalize tracking-normal w-full justify-center sm:min-w-fit "
        >
          Category
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList>
        {categories.map((category) => (
          <Menu
            key={category._id}
            placement="left-start"
            allowHover
            offset={15}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>{category.name}</MenuItem>
            </MenuHandler>
            <MenuList>
              {category.subCategories.map((sub, index) => {
                return <MenuItem key={index}>{sub.name}</MenuItem>;
              })}
            </MenuList>
          </Menu>
        ))}
      </MenuList>
    </Menu>
  );
}

export default NavCategory;
