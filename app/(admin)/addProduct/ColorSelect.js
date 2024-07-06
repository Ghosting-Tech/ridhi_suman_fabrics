// ColorSelect.js
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

const colors = [
  "Red", "Lime", "Blue", "Yellow", "Magenta", "Cyan", "Maroon", "Olive", "Green", "Purple", "Teal", "Navy", "Black"
];

const ColorSelect = ({ onAddColor }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleAddColor = () => {
    onAddColor(selectedColor);
  };

  return (
    <div className="flex gap-2 items-center justify-center ml-1 ">
      <div className="w-96">
          <select
            name="category"
            id="category"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
          {colors.map((color) => (
            <option key={color} value={color} style={{ backgroundColor: color }} className="hover:cursor-pointer">
              {color}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button
          className=" px-4 py-2  text-5xl rounded  transition"
          onClick={handleAddColor}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ColorSelect;
