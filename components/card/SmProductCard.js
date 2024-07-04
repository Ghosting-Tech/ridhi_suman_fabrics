import Image from 'next/image';
import React from 'react';
import AddToCartButton from './AddToCartButton';

const SmProductCard = () => {
  return (
    <div className="bg-white border-2 rounded-lg my-2 overflow-hidden">
      <div className="flex items-center p-2 gap-4">
        <Image src="/icon/ProductImage.png" width={90} height={50} className="rounded-lg mr-4" alt="Product" />
        <div className="flex flex-col gap-1">
          <h3 className="text-md font-semibold">Neve Strix Pro L123 (2021) - TP399K 1TB</h3>
          <p className="text-sm text-[#11998E]">₹415.10</p>
          <p className="text-sm text-gray-500">Quantity: 2</p>
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};

export default SmProductCard;
