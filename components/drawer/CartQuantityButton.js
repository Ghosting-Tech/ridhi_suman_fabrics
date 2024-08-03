import { Button } from "@material-tailwind/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

import React from "react";
import { toast } from "sonner";
import { useDispatch } from "react-redux";

import { updateItemQuantity } from "@/redux/slice/cartSlice";

const CartQuantityButton = ({ data, width = 12, height = 12, isInCart }) => {
  const dispatch = useDispatch();
  console.log(isInCart, data);

  const handleItemQuantity = async (e, qty) => {
    e.stopPropagation();
    e.preventDefault();

    const product = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/cart`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: data._id,
          quantity: qty,
          color: {
            name: data.color?.name || null,
            hex: data.color?.hex || null,
          },
          size: data.size || null,
        }),
      }
    );

    const res = await product.json();

    if (product.ok) {
      dispatch(
        updateItemQuantity({
          itemId: data._id,
          quantity: data.quantity + qty,
          color: {
            name: data?.color?.name || "",
            hex: data?.color?.hex || "",
          },
          size: data?.size || "",
        })
      );

      toast.info("Product quantity updated");
    } else {
      toast.error(res);
    }
  };

  return (
    <div className="flex gap-3 items-center justify-center">
      <Button
        color="gray"
        className="p-1.5 rounded disabled:cursor-not-allowed"
        onClick={(e) => handleItemQuantity(e, -1)}
        disabled={data.quantity <= 1}
      >
        <MinusIcon
          className="mx-auto"
          style={{
            width: width,
            height: height,
          }}
        />
      </Button>

      {data.quantity}

      <Button
        color="gray"
        className="p-1.5 rounded"
        onClick={(e) => handleItemQuantity(e, 1)}
      >
        <PlusIcon
          className="mx-auto"
          style={{
            width: width,
            height: height,
          }}
        />
      </Button>
    </div>
  );
};

export default CartQuantityButton;
