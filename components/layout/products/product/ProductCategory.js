import { CiDiscount1 } from "react-icons/ci";

const ProductCategory = () => {
  return (
    <div className="pb-3 pt-6 flex items-center justify-between  z-30 bg-white relative">
      <h3 className="font-medium bg-gray-200 text-black py-0.5 rounded-md px-4 text-sm">
        Saree / Silk Saree
      </h3>

      <div className="flex gap-1 items-center">
        <CiDiscount1 className="text-red-500 w-5 h-5" />

        <p className="text-red-500">
          <span className="">84%</span> <span className="text-xs">OFF</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCategory;
