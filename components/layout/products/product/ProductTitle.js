import React from "react";

const ProductTitle = () => {
  return (
    <div className="space-y-3 z-30 bg-white px-4 relative">
      <h2 className="text-lg font-bold">
        Cotton Grey Party Wear Digital Printed Kaftan
      </h2>

      <div className="flex items-end gap-1.5 pb-6">
        <p className="leading-none font-medium text-black">
          Rs. <span>1999</span>
        </p>

        <p className="line-through text-xs leading-none">
          Rs. <span>3000</span>
        </p>
      </div>
    </div>
  );
};

export default ProductTitle;
