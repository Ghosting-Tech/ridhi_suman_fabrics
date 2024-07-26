import { Button } from "@material-tailwind/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

import Image from "next/image";
import { toast } from "sonner";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { removeItemFromCart } from "@/redux/slice/cartSlice";

const CartItems = ({ data }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const handleRemoveItem = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/cart`,
        {
          method: "DELETE",
          body: JSON.stringify({ productId: data._id }),
        }
      );

      const message = await res.json();

      if (!res.ok) {
        toast.error(message);

        setLoading(false);
      }

      dispatch(removeItemFromCart(data._id));

      toast.success("Item removed from cart");

      setLoading(false);
    } catch (error) {
      console.error("Error removing item from cart:", error);
      toast.error("Error removing item from cart");

      setLoading(false);
    }
  };

  return (
    <div className="border border-gray-300 rounded-xl p-2.5 flex gap-3 bg-white shadow-sm">
      <div className="w-4/12">
        <Image
          src={data.images.url}
          width={110}
          height={110}
          alt="cart"
          className="rounded-lg"
        />
      </div>

      <div className="flex flex-col justify-between py-1 w-full">
        <p className="font-bold">{data.title}</p>

        <div>
          <div className="flex gap-1 items-center">
            <p className="text-green-500 font-medium">
              ₹ <span>{data.price - (data.discount * data.price) / 100}</span>
            </p>

            <p className="text-xs line-through">
              ₹ <span>{data.price}</span>
            </p>
          </div>
          <p className="text-gray-700 text-sm">
            Quantity: <span>{data.quantity}</span>
          </p>
        </div>

        <div className="flex justify-between items-end mr-3 w-full">
          <div className="flex gap-2 items-center">
            <Button color="gray" size="sm" className="p-1.5 text-sm rounded">
              <MinusIcon className="w-3 h-3" />
            </Button>
            {data.quantity}
            <Button color="gray" size="sm" className="p-1.5 text-sm rounded">
              <PlusIcon className="w-3 h-3" />
            </Button>
          </div>

          <Button
            color="white"
            size="sm"
            variant="text"
            className="shadow-none p-0 hover:shadow-none hover:underline text-red-400"
            onClick={handleRemoveItem}
            disabled={loading}
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
