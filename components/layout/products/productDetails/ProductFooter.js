import Image from "next/image";
import React from "react";

const ProductFooter = () => {
  return (
    <div className="grid grid-cols-2 gap-4 pb-5 border-b">
      <div className="flex items-center gap-3">
        <Image src="\Product_detail\Vector.svg" alt="" width={18} height={22} />
        <span className="capitalize">Original store product</span>
      </div>

      <div className="flex items-center gap-3">
        <Image
          src="\Product_detail\Vector (2).svg"
          alt=""
          width={18}
          height={22}
        />
        <span className="capitalize">Long Term Warranty</span>
      </div>

      <div className="flex items-center gap-3">
        <Image
          src="\Product_detail\Vector (1).svg"
          alt=""
          width={18}
          height={22}
        />
        <span className="capitalize">100% trusted shop</span>
      </div>

      <div className="flex items-center gap-3">
        <Image
          src="\Product_detail\Vector (3).svg"
          alt=""
          width={18}
          height={22}
        />
        <span className="capitalize">Most Lovable</span>
      </div>
    </div>
  );
};

export default ProductFooter;
