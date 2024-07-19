"use client";
import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "sonner";
import productColors from "@/libs/productColors";
import { ArrowPathIcon, PlusIcon } from "@heroicons/react/24/solid";
import {
  Button,
  IconButton,
  Input,
  Option,
  Select,
} from "@material-tailwind/react";
import { FiEdit } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const CreateProductSize = ({ formData, setFormData }) => {
  const [size, setSize] = useState({
    size: "",
    colors: [],
  });

  const [colorQuantity, setColorQuantity] = useState({
    color: {
      name: "Black",
      hex: "#000000",
    },
    quantity: "",
  });

  const [selectedSizeToEdit, setSelectedSizeToEdit] = useState(null);
  const [newColorForEditSection, setNewColorForEditSection] = useState({
    color: {
      name: "Black",
      hex: "#000000",
    },
    quantity: "",
  });
  const [editValidationError, setEditValidationError] = useState(false);

  const handleSizeChange = (index, newSize) => {
    const updatedSizes = formData.sizes.map((size, i) =>
      i === index ? { ...size, size: newSize } : size
    );
    setFormData({ ...formData, sizes: updatedSizes });
  };
  const handleAddNewColorInEditSize = (index) => {
    const updatedSizes = formData.sizes.map((size, i) => {
      if (i === index) {
        const isColorExists = size.colors.some(
          (c) => c.color.hex === newColorForEditSection.color.hex
        );
        if (isColorExists) {
          toast.error("Colour already exists!");
          return size;
        }
        return {
          ...size,
          colors: [...size.colors, newColorForEditSection],
        };
      }
      return size;
    });
    setFormData({ ...formData, sizes: updatedSizes });
  };

  const handleDeleteSize = (index) => {
    const updatedSizes = formData.sizes.filter((_, i) => i !== index);
    setFormData({ ...formData, sizes: updatedSizes });
    setSelectedSizeToEdit(null);
  };
  const handleDeleteColor = (sizeIndex, colorIndex, colorsLength) => {
    if (colorsLength <= 1) {
      toast.error("Minimum one colour & stock quantity is required!");
      return;
    }
    const updatedSizes = formData.sizes.map((size, i) => {
      if (i === sizeIndex) {
        const updatedColors = size.colors.filter((color, j) => {
          return j !== colorIndex;
        });
        return { ...size, colors: updatedColors };
      }
      return size;
    });
    setFormData({ ...formData, sizes: updatedSizes });
  };
  const handleDeleteCreatedColor = (colorIndex, colorsLength) => {
    if (colorsLength <= 1) {
      toast.error("Minimum one colour & stock quantity is required!");
      return;
    }
    setSize((prev) => {
      const updatedColors = prev.colors.filter((color, j) => {
        return j !== colorIndex;
      });
      return { ...prev, colors: updatedColors };
    });
  };

  const handleAddColorAndQuantity = () => {
    if (!colorQuantity.color.name || !colorQuantity.quantity) {
      toast.error("Color and quantity are required!");
      return;
    }
    if (parseInt(colorQuantity.quantity) <= 0) {
      toast.error("Quantity should be greater than zero!");
      return;
    }

    let colorExist = false;

    setSize((prev) => {
      colorExist = prev.colors.some(
        (c) => c.color.name === colorQuantity.color.name
      );

      if (colorExist) {
        toast.warning("Color " + colorQuantity.color.name + " already exists");
        return prev;
      }

      return { ...prev, colors: [...prev.colors, colorQuantity] };
    });

    if (!colorExist) {
      setColorQuantity({
        color: {
          name: "Black",
          hex: "#000000",
        },
        quantity: "",
      });
    }
  };

  const handleAddSize = () => {
    if (!size.size) {
      toast.error("Size is required!");
      return;
    }
    if (size.colors.length === 0) {
      toast.error("Please add at least a color and quantity for the size!");
      return;
    }
    const isSizeExist = formData.sizes.some((s) => {
      return s.size.toLowerCase() === size.size.toLowerCase();
    });
    if (isSizeExist) {
      toast.error(`${size.size} is already exist!`);
      return;
    }
    setFormData((prev) => {
      const sizeExist = prev.sizes.includes(size.size);
      if (sizeExist) {
        toast.warning("Size " + size.size + " already exists");
        return prev;
      }
      return { ...prev, sizes: [...prev.sizes, size] };
    });
    setSize({
      size: "",
      colors: [],
    });
    setColorQuantity({
      color: {
        name: "Black",
        hex: "#000000",
      },
      quantity: "",
    });
  };

  const handleResetFields = () => {
    setSize({
      size: "",
      colors: [],
    });
    setColorQuantity({
      color: {
        name: "Black",
        hex: "#000000",
      },
      quantity: "",
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      <div className="p-4 rounded-lg flex flex-col gap-4 bg-gray-100">
        <Input
          label="Size"
          className="bg-white"
          value={size.size}
          onChange={(e) => setSize({ ...size, size: e.target.value })}
        />
        <div className="flex items-center gap-2 [&>div]:min-w-0">
          <Select
            label="Colour"
            className="bg-white min-w-0"
            color="blue"
            value={`${colorQuantity.color.name}-${colorQuantity.color.hex}`}
            onChange={(e) => {
              setColorQuantity((prev) => {
                function extractColorInfo(str) {
                  const [colorName, colorCode] = str.split("-");
                  return {
                    name: colorName,
                    hex: colorCode.startsWith("#")
                      ? colorCode
                      : `#${colorCode}`,
                  };
                }
                const { name, hex } = extractColorInfo(e);
                return {
                  ...prev,
                  color: {
                    name,
                    hex,
                  },
                };
              });
            }}
          >
            {productColors.map((color, index) => (
              <Option key={index} value={`${color.name}-${color.hex}`}>
                <div className="flex items-center gap-1">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{
                      background: color.hex,
                      border: "1px solid lightgray",
                    }}
                  ></div>
                  {color.name}
                </div>
              </Option>
            ))}
          </Select>
          <Input
            label="Quantity"
            type="number"
            className="bg-white"
            value={colorQuantity.quantity}
            onChange={(e) => {
              setColorQuantity((prev) => {
                return {
                  ...prev,
                  quantity: e.target.value,
                };
              });
            }}
          />
          <IconButton
            className="w-20 max-h-9 rounded-full"
            variant="outlined"
            onClick={handleAddColorAndQuantity}
          >
            <PlusIcon className="h-6 w-6" />
          </IconButton>
        </div>

        <ul className="w-full flex flex-wrap justify-start items-start gap-2 overflow-y-auto">
          {size.colors.map((color, colorIndex) => {
            return (
              <li
                key={color.color.name}
                style={{
                  border: `1px solid black`,
                }}
                className="bg-white px-3 py-2 h-fit text-xs font-semibold rounded-md leading-none mb-0 flex gap-1 items-center"
              >
                <div
                  className="w-4 h-4 rounded-full border"
                  style={{ background: color.color.hex }}
                ></div>
                {color.color.name} - {color.quantity}
                <div
                  className="cursor-pointer hover:scale-125 transition-all"
                  onClick={() => {
                    const colorsLength = size.colors.length;
                    handleDeleteCreatedColor(colorIndex, colorsLength);
                  }}
                >
                  <RxCross1 />
                </div>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-4 w-full">
          <Button
            variant="outlined"
            color="pink"
            size="sm"
            className="rounded flex gap-1 items-center w-full justify-center bg-white"
            type="button"
            onClick={handleResetFields}
          >
            Reset Fields
            <ArrowPathIcon className="h-5 w-5" />
          </Button>
          <Button
            variant="gradient"
            color="pink"
            size="sm"
            className="rounded flex gap-1 items-center w-full justify-center"
            type="button"
            onClick={handleAddSize}
          >
            Create
            <PlusIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
      {formData.sizes.length > 0 &&
        formData.sizes.map((size, index) => {
          return selectedSizeToEdit === index ? (
            <div
              key={index}
              className="p-4 rounded-lg flex flex-col justify-between gap-4 bg-gray-100"
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    Size:
                    <input
                      className="bg-transparent focus:outline-none border-b border-gray-500 px-1"
                      value={size.size}
                      onChange={(e) => {
                        handleSizeChange(index, e.target.value);
                        const sizeAlreadyExists = formData.sizes.some(
                          (size) =>
                            size.size.toLowerCase() ===
                            e.target.value.toLowerCase()
                        );
                        if (!e.target.value) {
                          setEditValidationError(true);
                          return;
                        }
                        if (sizeAlreadyExists) {
                          setEditValidationError(true);
                          toast.error(`${e.target.value} size already exists!`);
                          return;
                        }
                        if (e.target.value) {
                          setEditValidationError(false);
                          return;
                        }
                      }}
                    />
                  </div>
                  <div className="flex space-x-2">
                    <button
                      className="text-teal-500 hover:text-teal-800"
                      title="Save size"
                      onClick={() => {
                        if (editValidationError) {
                          toast.error("Size is required!");
                          return;
                        }
                        setSelectedSizeToEdit(null);
                        setEditValidationError(false);
                      }}
                    >
                      <CheckCircleIcon className="h-6 w-6" />
                    </button>
                    <button
                      className="text-red-300 hover:text-red-500"
                      title="Delete size"
                      onClick={() => handleDeleteSize(index)}
                    >
                      <MdDeleteOutline size={25} />
                    </button>
                  </div>
                </div>
                <ul className="w-full flex flex-wrap justify-start items-start gap-2 overflow-y-auto">
                  {size.colors?.map((color, colorIndex) => {
                    return (
                      <li
                        key={color.color.name}
                        style={{
                          border: `1px solid black`,
                        }}
                        className="bg-white px-3 py-2 h-fit text-xs font-semibold rounded-md leading-none mb-0 flex gap-1 items-center"
                      >
                        <div
                          className="w-4 h-4 rounded-full border"
                          style={{ background: color.color.hex }}
                        ></div>
                        {color.color.name} - {color.quantity}
                        <div
                          className="cursor-pointer hover:scale-125 transition-all"
                          onClick={() => {
                            const colorsLength = size.colors.length;
                            handleDeleteColor(index, colorIndex, colorsLength);
                          }}
                        >
                          <RxCross1 />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex items-center gap-2 [&>div]:min-w-0">
                <Select
                  label="Colour"
                  className="bg-white min-w-0"
                  color="blue"
                  value={`${newColorForEditSection.color.name}-${newColorForEditSection.color.hex}`}
                  onChange={(e) => {
                    setNewColorForEditSection((prev) => {
                      function extractColorInfo(str) {
                        const [colorName, colorCode] = str.split("-");
                        return {
                          name: colorName,
                          hex: colorCode.startsWith("#")
                            ? colorCode
                            : `#${colorCode}`,
                        };
                      }
                      const { name, hex } = extractColorInfo(e);
                      return {
                        ...prev,
                        color: {
                          name,
                          hex,
                        },
                      };
                    });
                  }}
                >
                  {productColors.map((color, index) => (
                    <Option key={index} value={`${color.name}-${color.hex}`}>
                      <div className="flex items-center gap-1">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{
                            background: color.hex,
                            border: "1px solid lightgray",
                          }}
                        ></div>
                        {color.name}
                      </div>
                    </Option>
                  ))}
                </Select>
                <Input
                  label="Quantity"
                  type="number"
                  className="bg-white"
                  value={newColorForEditSection.quantity}
                  onChange={(e) => {
                    setNewColorForEditSection((prev) => {
                      return {
                        ...prev,
                        quantity: e.target.value,
                      };
                    });
                  }}
                />
                <IconButton
                  className="w-20 max-h-9 rounded-full"
                  variant="outlined"
                  onClick={() => {
                    handleAddNewColorInEditSize(index);
                  }}
                >
                  <PlusIcon className="h-6 w-6" />
                </IconButton>
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="p-4 rounded-lg flex flex-col gap-4 bg-gray-100"
            >
              <div className="flex justify-between items-center">
                <div>Size: {size.size}</div>
                <div className="flex space-x-2">
                  <button
                    className="text-gray-500 hover:text-gray-800"
                    title="Edit category"
                    onClick={() => {
                      if (!editValidationError) {
                        setSelectedSizeToEdit(index);
                      } else {
                        toast.error(
                          "Update a size successfully! before editing new size"
                        );
                      }
                    }}
                  >
                    <FiEdit size={20} />
                  </button>
                  <button
                    className="text-red-300 hover:text-red-500"
                    title="Delete category"
                    onClick={() => handleDeleteSize(index)}
                  >
                    <MdDeleteOutline size={25} />
                  </button>
                </div>
              </div>
              <ul className="w-full flex flex-wrap justify-start items-start gap-2 overflow-y-auto">
                {size.colors.map((color) => {
                  return (
                    <li
                      key={color.color.name}
                      style={{
                        border: `1px solid black`,
                      }}
                      className="bg-white px-3 py-2 h-fit text-xs font-semibold rounded-md leading-none mb-0 flex gap-1 items-center"
                    >
                      <div
                        className="w-4 h-4 rounded-full border"
                        style={{ background: color.color.hex }}
                      ></div>
                      {color.color.name} - {color.quantity}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
    </div>
  );
};

export default CreateProductSize;
