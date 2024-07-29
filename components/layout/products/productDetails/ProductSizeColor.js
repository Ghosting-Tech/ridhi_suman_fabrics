import React from "react";

const ProductSizeColor = ({
  sizes,
  selectedSize,
  selectedColor,
  handleSelectedColor,
  handleSelectedSize,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-gray-500 font-400 text-md leading-4 font-semibold capitalize">
          Choose Size
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-3 md:mt-0 uppercase">
          {sizes.map((item, index) => (
            <div
              key={index}
              className={`border px-3 py-1 rounded-md cursor-pointer text-xs ${
                selectedSize === item.size
                  ? "border-[#52057B] text-[#52057B] bg-[#F0E5FF]"
                  : "border-black text-black"
              } `}
              onClick={() => handleSelectedSize(item.size)}
            >
              {item.size}
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-gray-500 font-400 text-md leading-4 font-semibold capitalize">
          Choose Colour
        </div>
        <div className="flex flex-wrap items-center gap-2 mt-3 md:mt-0 capitalize">
          {selectedSize
            ? sizes
                .find((item) => item.size === selectedSize)
                ?.colours.map((color, idx) => (
                  <div
                    className={`flex flex-row border border-black px-3 py-1 rounded-md justify-center items-center gap-2
                                   ${
                                     selectedColor === color.colour.name
                                       ? "border-[#52057B] text-[#52057B] bg-[#F0E5FF]"
                                       : "border-black text-black"
                                   }${color.quantity === "0" ? "opacity-50 cursor-not-allowed" : ""}
                              `}
                    onClick={() => handleSelectedColor(color.colour.name)}
                    key={idx}
                  >
                    <div
                      key={idx}
                      className={`h-3 w-3 rounded-xl ${color.quantity === "0" ? "opacity-50 cursor-not-allowed" : ""}`}
                      style={{ backgroundColor: color.colour.hex }}
                      title={color.colour.name}
                    ></div>
                    <div
                      key={idx}
                      className={`text-xs cursor-pointer  ${color.quantity === "0" ? "opacity-50 cursor-not-allowed text-red " : ""}`}
                      title={color.colour.name}
                    >
                      {color.colour.name}
                    </div>
                  </div>
                ))
            : sizes.map((size) =>
                size.colours.map((color, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-row border px-3 py-1 rounded-md cursor-pointer items-center gap-2 ${
                      selectedColor === color.colour.name
                        ? "border-[#52057B] text-[#52057B] bg-[#F0E5FF]"
                        : "border-black text-black"
                    }`}
                    onClick={() => handleSelectedColor(color.colour.hex)}
                  >
                    <div
                      className="h-3 w-3 rounded-xl"
                      style={{ backgroundColor: color.colour.hex }}
                      title={color.colour.name}
                    ></div>
                    <div>{color.colour.name}</div>
                  </div>
                ))
              )}
        </div>
      </div>
    </div>
  );
};

export default ProductSizeColor;
