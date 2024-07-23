"use client";

import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Button, CardFooter } from "@material-tailwind/react";

import { useSelector } from "react-redux";

const ProductFooter = ({ productId }) => {
  const user = useSelector((state) => state.user);

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    e.preventDefault();

    const product = await fetch(`/user/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    user && (
      <CardFooter className="pt-0 mt-auto">
        <Button
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed z-10"
          onClick={handleAddToCart}
          disabled={!user}
        >
          <ShoppingCartIcon className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    )
  );
};

export default ProductFooter;
