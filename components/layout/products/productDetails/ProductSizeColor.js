import { useSession } from "next-auth/react";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import React from "react";

const ProductSizeColor = ({
  sizes,
  selectedSize,
  selectedColor,
  handleSelectedColor,
  handleSelectedSize,
}) => {
  const { data: session, status } = useSession();

  return status === "loading" ? (
    <div className="flex justify-center items-center my-8">
      <AiOutlineLoading3Quarters size={32} className="animate-spin" />
    </div>
  ) : session?.user.role === "admin" ? (
    <div className="overflow-x-auto rounded-md">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-300">
            <th className="py-2 px-4 border-b text-center">Size</th>
            <th className="py-2 px-4 border-b text-center">Colour</th>
            <th className="py-2 px-4 border-b text-center">Stock Quantity</th>
          </tr>
        </thead>
        <tbody>
          {sizes.map((size, sizeIdx) => (
            <React.Fragment key={size.size}>
              {size.colours.map((colour, colourIdx) => (
                <tr
                  key={`${size.size}-${colour.colour.name}`}
                  className={sizeIdx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  {colourIdx === 0 && (
                    <td
                      rowSpan={size.colours.length}
                      className="py-2 px-4 border-b text-center align-middle"
                    >
                      {size.size}
                    </td>
                  )}
                  <td
                    className="py-2 px-4 flex items-center justify-center gap-2 border-l border-b text-center"
                    style={{
                      background: colour.quantity <= 0 ? "#fecaca" : "",
                    }}
                  >
                    <div
                      style={{ background: `${colour.colour.hex}` }}
                      className="w-3 h-3 rounded-full"
                    ></div>
                    <div className="w-1/3">{colour.colour.name}</div>
                  </td>
                  <td
                    className="py-2 px-4 border-b text-center"
                    style={{
                      background: colour.quantity <= 0 ? "#fecaca" : "",
                    }}
                  >
                    {colour.quantity}
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
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
              }`}
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

        {/* <div className="flex flex-wrap items-center gap-2 mt-3 md:mt-0 capitalize">
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
                    onClick={() =>
                      handleSelectedColor(color.colour.name, color.colour.hex)
                    }
                    key={idx}
                  >
                    <div
                      className={`h-3 w-3 rounded-xl ${color.quantity === "0" ? "opacity-50 cursor-not-allowed" : ""}`}
                      style={{ backgroundColor: color.colour.hex }}
                      title={color.colour.name}
                    ></div>

                    <div
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
        </div> */}

        <div className="flex flex-wrap items-center gap-2 mt-3 md:mt-0 capitalize">
          {sizes
            .filter((item) => !selectedSize || item.size === selectedSize)
            .flatMap((size) => size.colours)
            .map((color, idx) => {
              const isSelected =
                selectedColor === color.colour.name.toLowerCase();
              const isOutOfStock = color.quantity === "0";
              const commonClasses = `flex flex-row border px-3 py-1 rounded-md items-center gap-2 ${
                isSelected
                  ? "border-[#52057B] text-[#52057B] bg-[#F0E5FF]"
                  : "border-black text-black"
              } ${isOutOfStock ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`;

              return (
                <div
                  className={commonClasses}
                  onClick={() =>
                    handleSelectedColor(color.colour.name, color.colour.hex)
                  }
                  key={idx}
                >
                  <div
                    className="h-3 w-3 rounded-xl"
                    style={{ backgroundColor: color.colour.hex }}
                    title={color.colour.name}
                  ></div>
                  <div
                    className={`text-xs ${isOutOfStock ? "opacity-50 text-red" : ""}`}
                    title={color.colour.name}
                  >
                    {color.colour.name}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductSizeColor;
