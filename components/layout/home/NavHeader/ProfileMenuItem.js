"use client";

import { MenuItem, Typography } from "@material-tailwind/react";

import React from "react";

const ProfileMenuItem = ({ label, closeMenu, click, isLastItem, icon }) => {
  return (
    <MenuItem
      key={label}
      onClick={() => {
        closeMenu();
        click();
      }}
      className={`flex items-center gap-2 rounded ${
        isLastItem
          ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
          : ""
      }`}
    >
      {React.createElement(icon, {
        className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
        strokeWidth: 2,
      })}

      <Typography
        as="span"
        variant="small"
        className="font-normal"
        color={isLastItem ? "red" : "inherit"}
      >
        {label}
      </Typography>
    </MenuItem>
  );
};

export default ProfileMenuItem;
