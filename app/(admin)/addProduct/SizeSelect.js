import React, { useState } from "react";

const SizeSelect = ({ onAddSize }) => {
  const [sizes, setSizes] = useState([]);
  const [inputSize, setInputSize] = useState("");

  const handleAddSize = () => {
    if (inputSize) {
      setSizes((prevSizes) => [...prevSizes, inputSize]);
      onAddSize(inputSize); // Call the onAddSize prop with inputSize
      setInputSize("");
    }
  };

  const handleRemoveSize = (indexToRemove) => {
    setSizes((prevSizes) => prevSizes.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="flex flex-col  gap-3 w-auto ">
      <div className="flex gap-2 items-center justify-center ml-1">
        <input
          type="text"
          name="brand"
          id="brand"
          value={inputSize}
          onChange={(e) => setInputSize(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Type size"
          required
        />
        <button
          className="px-4 py-2  text-5xl rounded  transition"       
          onClick={handleAddSize}
        >
          +
        </button>
      </div>
      {/* Display Size  */}
      <div className=" flex gap-5 flex-wrap ">
        {sizes.map((size, index) => (
          <div key={index} className="flex items-center gap-2 mb-2 border border-red-400 px-3  rounded-lg">
            <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center text-white">
              {size}
            </div>
            {/* <span>{size}</span> */}
            <button
              className="ml-auto text-red-500  text-2xl"
              onClick={() => handleRemoveSize(index)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeSelect;
