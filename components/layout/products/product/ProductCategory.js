import { CiDiscount1 } from "react-icons/ci";

const ProductCategory = ({ category, discount }) => {
  return (
    <div className="pb-3 pt-6 px-2 flex items-center justify-between  z-30 bg-white relative">
      <h3 className="font-medium bg-gray-200 text-black py-0.5 rounded-md px-4 text-sm capitalize">
        {category}
      </h3>

      <div className="flex gap-1 items-center">
        <CiDiscount1 className="text-red-500 w-5 h-5" />

        <p className="text-red-500">
          <span className="">{discount}%</span>{" "}
          <span className="text-xs">OFF</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCategory;
