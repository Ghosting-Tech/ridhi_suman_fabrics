import Image from "next/image";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

const CategoryCard = ({ category, handleDeleteCategory }) => {
  return (
    <div className="w-full max-h-44 flex border bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="md:flex-shrink-0">
        <div className="h-44 w-44 relative">
          <Image
            src={category.image}
            alt="Woman wearing a colorful saree"
            width={150}
            height={150}
            className="rounded-t-xl md:rounded-l-xl md:rounded-t-none h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="p-4 w-full flex flex-col">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-3xl font-bold text-pink-500">{category.name}</h2>
          <div className="flex space-x-2">
            <button
              className="text-gray-500 hover:text-gray-800"
              title="Edit category"
            >
              <FiEdit size={20} />
            </button>
            <button
              className="text-red-300 hover:text-red-500"
              title="Delete category"
              onClick={() => handleDeleteCategory(category._id)}
            >
              <MdDeleteOutline size={25} />
            </button>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-start items-start gap-2 mt-4 overflow-y-auto">
          {category?.subCategories.map((tag, index) => (
            <span
              key={index}
              style={{ background: `${tag.colour}` }}
              className="px-3 py-2 h-fit text-xs font-semibold rounded-md leading-none mb-0 flex gap-1 items-center"
            >
              {/* <div
                style={{ background: tag.colour }}
                className="w-4 h-4 rounded"
              ></div> */}
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
