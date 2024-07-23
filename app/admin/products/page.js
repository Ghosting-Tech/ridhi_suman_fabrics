"use client";
import { ProductCard } from "@/components/layout/admin/products/ProductCard";
import Heading from "@/components/ui/heading/Heading";
import { Button, Option, Select } from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaTshirt } from "react-icons/fa";
import { toast } from "sonner";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/product");
      const data = await res.json();
      setProducts(data.data);
    } catch (err) {
      toast.error("Error fetching products!");
    }
  };
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
    fetchProducts();
    fetchCategories();
  }, []);

  const handleFilterByCategory = async (val) => {
    try {
      const res = await fetch(`/api/product/category/${val}`);
      const data = await res.json();
      if (res.ok) {
        const sub = categories.filter((category) => category.name === val);
        setSelectedCategory(sub[0]);
        setProducts(data);
      } else {
        toast.error(data);
      }
    } catch (err) {
      toast.error(`Error getting products by ${val}!`);
    }
  };
  const [selectedsub, setSelectedSub] = useState("");
  const handleFilterBySubCategory = async (val) => {
    if (selectedCategory.subCategories?.some((sub) => sub.name === val)) {
      setSelectedSub(val);
    } else {
      setSelectedSub("");
    }
    try {
      if (selectedCategory.name) {
        const res = await fetch(
          `/api/product/category/${selectedCategory.name}/${val}`
        );
        const data = await res.json();
        if (res.ok) {
          setProducts(data);
        } else {
          toast.error(data);
        }
      }
    } catch (err) {
      toast.error(`Error getting products by ${val}!`);
    }
  };

  const btns = [
    selectedCategory && (
      <Select
        label="Sub Categories"
        color="pink"
        key="sub-categories"
        value={selectedsub}
        onChange={handleFilterBySubCategory}
      >
        {selectedCategory?.subCategories?.map((subCategory) => (
          <Option key={subCategory._id} value={subCategory.name}>
            {subCategory.name}
          </Option>
        ))}
      </Select>
    ),
    <Select
      label="Categories"
      color="pink"
      key="categories"
      onChange={handleFilterByCategory}
    >
      {categories?.map((category) => (
        <Option key={category._id} value={category.name}>
          {category.name}
        </Option>
      ))}
    </Select>,
    <Link key="create-product" href="/admin/products/create-product">
      <Button className="rounded" variant="gradient" color="pink">
        Create Product
      </Button>
    </Link>,
  ];

  return (
    <>
      <div className="px-2 md:px-10 my-4">
        <Heading
          icon={
            <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full inline-block">
              <FaTshirt size={20} color="white" />
            </div>
          }
          title={"Manage Categories"}
          buttons={btns}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4">
          {products?.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Page;
