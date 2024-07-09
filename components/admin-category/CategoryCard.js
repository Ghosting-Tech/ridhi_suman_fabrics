import Image from "next/image";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

const CategoryCard = () => {
  const tags = [
    "Silk saree",
    "Banarsi saree",
    "Printed saree",
    "Printed",
  ];

  return (
    <div className="w-full flex border bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="md:flex-shrink-0">
        <div className="h-48 w-48 relative">
          <Image
            src="/category/download3.png"
            alt="Woman wearing a colorful saree"
            width={200}
            height={200}
            className="rounded-t-xl md:rounded-l-xl md:rounded-t-none h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="p-4 w-full">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-3xl font-bold text-pink-500">SAREE</h2>
          <div className="flex space-x-2">
            <button
              className="text-teal-600 hover:text-teal-800"
              title="Edit category"
            >
              <FiEdit size={20} />
            </button>
            <button
              className="text-red-500 hover:text-red-700"
              title="Delete category"
            >
              <MdDeleteOutline size={25} />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4 overflow-auto h-24">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 h-fit bg-blue-100 text-sm font-semibold rounded-md`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
