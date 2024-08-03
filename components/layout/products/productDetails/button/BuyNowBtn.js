import { Button } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

const BuyNowBtn = () => {
  return (
    <Link href="/checkout" className="w-full h-full">
      <Button
        variant="gradient"
        color="teal"
        className="w-full h-full rounded"
        size="md"
      >
        Buy Now
      </Button>
    </Link>
  );
};

export default BuyNowBtn;
