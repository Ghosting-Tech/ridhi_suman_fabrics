"use client"
import ImageContainer from "@/components/ui/ImageContainer";
import { Button } from "@material-tailwind/react";

const CheckoutProductCard = ({ data }) => {
  return (
    <div className="border border-gray-300 rounded-xl p-2.5 flex gap-3 bg-white shadow-sm relative">
      <div className="w-4/12 min-h-28">
        <ImageContainer width={120} height={120} image={data.images.url} />
      </div>

      <div className="flex flex-col justify-between py-1 w-full">
        <p className="font-bold capitalize">{data.title}</p>

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
          <Button
            color="white"
            size="sm"
            variant="text"
            className="shadow-none p-0 hover:shadow-none hover:underline text-red-400"
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProductCard;
