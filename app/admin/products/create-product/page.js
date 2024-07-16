"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaTshirt } from "react-icons/fa";
import { MdDelete, MdDeleteOutline } from "react-icons/md";
import { toast } from "sonner";
import productColors from "@/libs/productColors";
import Heading from "@/components/ui/heading/Heading";
import {
  ArrowPathIcon,
  PlusIcon,
  FolderMinusIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/24/solid";
import {
  Button,
  Input,
  Option,
  Select,
  Switch,
  Textarea,
} from "@material-tailwind/react";
import { FiEdit } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    discount: "",
    visible: true,
    category: [],
    subCategory: [],
    description: "",
    images: [],
    sizes: [],
  });

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

  const handleAddColorAndQuantity = () => {
    setSize((prev) => {
      const colorExist = prev.colors.find(
        (c) => c.color.name === colorQuantity.color.name
      );
      if (colorExist) {
        toast.warning("Color " + colorQuantity.color.name + " already exists");
        return prev;
      }
      return { ...prev, colors: [...prev.colors, colorQuantity] };
    });
    setColorQuantity({
      color: {
        name: "Black",
        hex: "#000000",
      },
      quantity: "",
    });
  };

  const handleAddSize = () => {
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

  useEffect(() => {
    console.log({ size, colorQuantity });
  }, [size, colorQuantity]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSwitchChange = (e) => {
    setFormData({ ...formData, visible: e.target.checked });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to an array
    if (formData.images.length + files.length > 10) {
      toast.error("You can only upload up to 10 images.");
      return;
    }
    setFormData({ ...formData, images: [...formData.images, ...files] }); // Spread the files into the images array
  };

  const removeImage = (index) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index),
    });
  };
  return (
    <div className="p-6 flex flex-col gap-6">
      <Heading
        icon={
          <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full inline-block">
            <FaTshirt size={20} color="white" />
          </div>
        }
        title={"Create Product"}
      />
      <div className="px-4 flex flex-col gap-4 items-center justify-center">
        <div className="w-full flex items-center gap-4 h-full">
          <Input
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <Switch
            defaultChecked={formData.visible}
            label={`${formData.visible ? "Visible" : "Invisible"}`}
            color="teal"
            onChange={handleSwitchChange}
          />
        </div>
        <div className="w-full flex items-center gap-4 h-full">
          <Input
            label="Price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
          <Input
            label="Discount"
            name="discount"
            value={formData.discount}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full flex items-center gap-4 h-full">
          <Select
            label="Select Category"
            name="category"
            onChange={(value) => setFormData({ ...formData, category: value })}
          >
            <Option>Material Tailwind HTML</Option>
          </Select>
          <Select
            label="Select Sub Category"
            name="subCategory"
            onChange={(value) =>
              setFormData({ ...formData, subCategory: value })
            }
          >
            <Option>Material Tailwind HTML</Option>
          </Select>
        </div>
        <div className="w-full flex items-center gap-4 h-full">
          <Input
            label="Fabric"
            name="fabric"
            value={formData.fabric}
            onChange={handleInputChange}
          />
          <Input
            label="Brand"
            name="brand"
            value={formData.brand}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full">
          <Textarea
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 w-full">
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
              <Button
                color="blue"
                variant="gradient"
                type="button"
                onClick={handleAddColorAndQuantity}
              >
                Add
              </Button>
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
            formData.sizes.map((size) => {
              return (
                <div className="p-4 rounded-lg flex flex-col gap-4 bg-gray-100">
                  <div className="flex justify-between items-center">
                    <div>Size: {size.size}</div>
                    <div className="flex space-x-2">
                      <button
                        className="text-gray-500 hover:text-gray-800"
                        title="Edit category"
                        onClick={() => {
                          return;
                        }}
                      >
                        <FiEdit size={20} />
                      </button>
                      <button
                        className="text-red-300 hover:text-red-500"
                        title="Delete category"
                        onClick={() => {
                          return;
                        }}
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
                          <div className="cursor-pointer"><RxCross1 /></div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
        </div>
        <div className="flex items-center gap-4 w-full">
          <input
            type="file"
            multiple
            className="hidden"
            id="images"
            onChange={handleFileChange}
          />
          <Button
            variant="outlined"
            color="red"
            className="rounded w-full flex items-center gap-1 justify-center"
            type="button"
            onClick={() => setFormData({ ...formData, images: [] })}
          >
            <FolderMinusIcon className="w-6 h-6" /> Remove All Images
          </Button>
          <label
            htmlFor="images"
            className="w-full bg-blue-500 text-white h-full flex justify-center items-center gap-1 py-3 rounded cursor-pointer uppercase text-sm hover:bg-light-blue-500 transition-all"
          >
            <ArrowUpCircleIcon className="w-6 h-6" />
            Upload Images{" "}
            <div className="font-semibold">{formData.images.length} / 10</div>
          </label>
        </div>
        <div className="flex gap-4 w-full h-full">
          {formData.images?.map((image, index) => (
            <div
              key={index}
              className="w-16 h-20 relative group overflow-hidden rounded-md"
            >
              <div
                className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => removeImage(index)}
              >
                <MdDelete className="text-white text-2xl cursor-pointer hover:scale-125 transition-transform" />
              </div>
              <Image
                src={URL.createObjectURL(image)}
                alt={`product image ${index}`}
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Page;
