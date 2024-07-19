"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaTshirt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";
import Heading from "@/components/ui/heading/Heading";
import {
  FolderMinusIcon,
  ArrowUpCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import {
  Button,
  Input,
  Option,
  Select,
  Switch,
  Textarea,
} from "@material-tailwind/react";
import CreateProductSize from "@/components/layout/admin/products/CreateProductSize";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    discount: "",
    visible: true,
    category: "",
    subCategory: "",
    description: "",
    fabric: "",
    brand: "",
    images: [],
    sizes: [],
  });
  const [categories, setCategories] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/category");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSwitchChange = (e) => {
    setFormData({ ...formData, visible: e.target.checked });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to an array
    console.log(files);
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

  const submitForm = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.price ||
      !formData.discount ||
      !formData.description ||
      !formData.category ||
      !formData.subCategory
    ) {
      toast.error("All fields are required.");
      return;
    }
    if (formData.sizes.length < 1) {
      toast.error("Add a minimum of 1 size!");
      return;
    }
    console.log(formData.images)
    if (formData.images.length <= 3) {
      toast.error("Add a minimum of 4 images!");
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("discount", formData.discount);
      formDataToSend.append("visible", formData.visible);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("subCategory", formData.subCategory);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("fabric", formData.fabric);
      formDataToSend.append("brand", formData.brand);
      for (let image of formData.images) {
        formDataToSend.append("images", image);
      }
      for (let size of formData.sizes) {
        formDataToSend.append("sizes", JSON.stringify(size));
      }
      const response = await fetch("/api/admin/product", {
        method: "POST",
        body: formDataToSend,
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        toast.success("Product created successfully!");
        setFormData({
          name: "",
          price: "",
          discount: "",
          visible: true,
          category: "",
          subCategory: "",
          description: "",
          fabric: "",
          brand: "",
          images: [],
          sizes: [],
        });
      }
    } catch (e) {
      toast.error("Failed to create product. Please try again later.");
    }
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
      <form
        onSubmit={submitForm}
        className="px-0 sm:px-4 flex flex-col gap-4 items-center justify-center"
      >
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
        <div className="w-full flex flex-col sm:flex-row items-center gap-4 h-full">
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
            onChange={(e) => {
              if (e.target.value > 100) {
                toast.error("Discount should not be more than 100%.");
                return;
              }
              setFormData({ ...formData, discount: e.target.value });
            }}
          />
        </div>
        <div className="w-full flex flex-col sm:flex-row items-center gap-4 h-full">
          <Select
            label="Select Category"
            name="category"
            onChange={(value) => {
              setFormData({ ...formData, category: value });
              const subCategories = categories.filter((c) => {
                return c.name === value;
              });
              setSelectedSubcategories(subCategories[0].subCategories);
            }}
          >
            {categories.map((category) => (
              <Option key={category._id} value={category.name}>
                {category.name}
              </Option>
            ))}
          </Select>
          <Select
            label="Select Sub Category"
            name="subCategory"
            onChange={(value) =>
              setFormData({ ...formData, subCategory: value })
            }
          >
            {selectedSubcategories.map((subcategory) => (
              <Option key={subcategory._id} value={subcategory.name}>
                {subcategory.name}
              </Option>
            ))}
          </Select>
        </div>
        <div className="w-full flex flex-col sm:flex-row items-center gap-4 h-full">
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
        <CreateProductSize formData={formData} setFormData={setFormData} />
        <div className="flex gap-4 flex-wrap w-full h-full">
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
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
          <Button
            variant="outlined"
            color="red"
            className="rounded w-full flex items-center gap-1 justify-center"
            type="button"
            onClick={() => setFormData({ ...formData, images: [] })}
          >
            <FolderMinusIcon className="w-6 h-6" /> Remove All Images
          </Button>
          <input
            type="file"
            multiple
            className="hidden"
            id="images"
            onChange={handleFileChange}
          />
          <label
            htmlFor="images"
            className="w-full bg-blue-500 text-white h-full flex justify-center items-center gap-1 py-3 rounded cursor-pointer uppercase text-sm hover:bg-light-blue-500 transition-all"
          >
            <ArrowUpCircleIcon className="w-6 h-6" />
            Upload Images{" "}
            <div className="font-semibold">{formData.images.length} / 10</div>
          </label>
          <Button
            variant="gradient"
            color="teal"
            className="rounded w-full flex items-center gap-1 justify-center"
            type="submit"
          >
            <PlusCircleIcon className="w-6 h-6" /> Create Product
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Page;
