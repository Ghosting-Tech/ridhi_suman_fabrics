"use client";
import { ProductCard } from "@/components/layout/admin/products/ProductCard";
import DeleteProduct from "@/components/modals/admin/products/DeleteProduct";
import PaginationBtn from "@/components/ui/PaginationBtn";
import { Button, Option, Select } from "@material-tailwind/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaTshirt } from "react-icons/fa";
import { toast } from "sonner";

const Page = () => {
  const searchParams = useSearchParams();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [meta, setMeta] = useState({});
  const [showSubCategory, setShowSubCategory] = useState([]);

  const [category, setCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  const [categories, setCategories] = useState([]);
  const fetchProducts = async (page) => {
    try {
      const res = await fetch(
        `/api/product?size=8&page=${page}&category=${category || "all"}&subCategory=${selectedSubCategory || "all"}`
      );
      const data = await res.json();

      setProducts(data.data);
      setMeta(data.meta);
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
  const currentPage = searchParams.get("page");
  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage, category, selectedSubCategory]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleFilterByCategory = async (val) => {
    setShowSubCategory([]);
    setSelectedSubCategory("");
    setCategory(val);
    categories.map((cat) => {
      if (cat.name == val) {
        return setShowSubCategory(cat.subCategories);
      }
    });
  };
  const handleFilterBySubCategory = async (val) => {
    setSelectedSubCategory(val);
  };

  return (
    <>
      <DeleteProduct
        open={openDeleteDialog}
        setOpen={setOpenDeleteDialog}
        product={selectedProduct}
        setProducts={setProducts}
      />
      <div className="px-2 md:px-10 my-4">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-1">
                <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full inline-block">
                  <FaTshirt size={20} color="white" />
                </div>
                <h2 className="text-sm lg:text-lg">Manage Products</h2>
              </div>
              <Link key="create-product" href="/admin/products/create-product">
                <Button className="rounded" variant="gradient" color="pink">
                  Create Product
                </Button>
              </Link>
            </div>
            <div
              className={`w-full lg:w-[32rem] flex gap-4 items-center [&>*]:min-w-24`}
            >
              <Select
                label="Categories"
                color="pink"
                onChange={handleFilterByCategory}
                className="w-full"
              >
                {categories?.map((category) => (
                  <Option key={category._id} value={category.name}>
                    {category.name}
                  </Option>
                ))}
              </Select>
              {showSubCategory.length > 0 && (
                <Select
                  label="Sub Categories"
                  color="pink"
                  value={selectedSubCategory}
                  className="w-full"
                  onChange={handleFilterBySubCategory}
                >
                  {showSubCategory?.map((subCategory) => (
                    <Option key={subCategory._id} value={subCategory.name}>
                      {subCategory.name}
                    </Option>
                  ))}
                </Select>
              )}
            </div>
          </div>
          <div
            className={`rounded-full w-full bg-gradient-to-r from-red-400 to-pink-400 h-1`}
          ></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4">
          {products?.map((product, index) => {
            return (
              <ProductCard
                key={index}
                product={product}
                setOpenDeleteDialog={setOpenDeleteDialog}
                setSelectedProduct={setSelectedProduct}
              />
            );
          })}
        </div>
        <div className="mt-4">
          <PaginationBtn totalPages={meta.totalPages} />
        </div>
      </div>
    </>
  );
};

export default Page;
