import React from "react";

const DefaultBtn = ({ icon, title, clickHandler }) => {
  return (
    <button
      key={title}
      className={`flex items-center gap-1 px-4 py-2 rounded-md bg-gradient-to-r from-red-400 to-pink-400 text-white hover:shadow-lg transition-all duration-500 text-xs lg:text-sm`}
      onClick={clickHandler}
    >
      {title} {icon && icon}
    </button>
  );
};

export default DefaultBtn;
