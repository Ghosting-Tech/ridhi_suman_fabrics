import { Button } from "@material-tailwind/react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

import React from "react";
import { toast } from "sonner";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const AddToCartBtn = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const isInCart = cart.items?.find((item) => item._id === productId);

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    e.preventDefault();

    const product = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/cart`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, quantity: 1 }),
      }
    );

    const data = await product.json();

    if (product.ok) {
      dispatch(addItemToCart(data));

      dispatch(
        updateCart({
          totalQuantity: cart.totalQuantity + 1,
          totalPrice:
            Number(cart.totalPrice) +
            Number((price - (discount / 100) * price).toFixed(2)),
        })
      );

      toast.success("Product added to cart.");
    } else {
      toast.error(data);
    }
  };

  return isInCart ? (
    <div>Hi</div>
  ) : (
    <Button
      className="flex gap-1 items-center justify-center rounded"
      fullWidth
      variant="outlined"
      color="pink"
      size="md"
      onClick={handleAddToCart}
    >
      <ShoppingCartIcon className="h-5 w-5" />
      Add to Cart
    </Button>
  );
};

export default AddToCartBtn;
