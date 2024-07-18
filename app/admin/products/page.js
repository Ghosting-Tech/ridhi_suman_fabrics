"use client";
import Heading from "@/components/ui/heading/Heading";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaTshirt } from "react-icons/fa";
import { toast } from "sonner";

const Page = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/product");
      const data = await res.json();
      console.log(data);
      setProducts(data.data);
    } catch (err) {
      toast.error("Error fetching products!");
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div className="px-10 my-4">
        <Heading
          icon={
            <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full inline-block">
              <FaTshirt size={20} color="white" />
            </div>
          }
          title={"Manage Categories"}
          buttons={[
            <Link href={"/admin/products/create-product"}>
              <Button
                className="rounded"
                variant="gradient"
                color="pink"
                key={"btn-1"}
              >
                Create Product
              </Button>
              ,
            </Link>,
          ]}
        />
        <div>
          {products?.map((product) => {
            return (
              <div key={product.id} className="mb-4">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                {product.images.map((image, index) => {
                  return <img key={index} src={image} className="w-16 object-cover"/>;
                })}
                <Link href={`/product-detail-page/${product.id}`}>
                  <Button className="rounded" variant="gradient" color="teal">
                    View Details
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Page;
