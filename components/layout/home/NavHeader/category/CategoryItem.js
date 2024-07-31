"use client";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import Link from "next/link";

const CategoryItem = ({ category }) => {
  return (
    <Menu allowHover>
      <MenuHandler>
        <div className="cursor-pointer">{category.name}</div>
      </MenuHandler>
      <MenuList>
        {category?.subCategories?.map((sub, index) => {
          return (
            <Link key={index} href={`/category/${category.name}/${sub.name}`} className="outline-none">
              <MenuItem>{sub.name}</MenuItem>
            </Link>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default CategoryItem;
