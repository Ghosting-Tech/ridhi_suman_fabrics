"use client";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

const CategoryItem = ({ category }) => {
  return (
    <Menu allowHover>
      <MenuHandler>
        <div className="cursor-pointer">{category.name}</div>
      </MenuHandler>
      <MenuList>
        {category?.subCategories?.map((sub) => {
          return <MenuItem key={sub.name}>{sub.name}</MenuItem>;
        })}
      </MenuList>
    </Menu>
  );
};

export default CategoryItem;
