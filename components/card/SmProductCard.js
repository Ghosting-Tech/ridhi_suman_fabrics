import Image from 'next/image';
import React from 'react'

const SmProductCard = () => {
    return (
        <div className="bg-gray-100 shadow-xl rounded-lg overflow-hidden">
            <div className="flex items-center p-4 gap-4">
                <Image src="/icon/ProductImage.png" width={100} height={110} className='rounded-lg mr-4' />
                <div className="flex flex-col gap-3">
                    <h3 className="text-md font-semibold">Neve Strix Pro L123 (2021) - TP399K 1TB</h3>
                    <p className="text-sm text-[#11998E]">₹415.10</p>
                    <p className="text-sm text-gray-500">Quantity: 2</p>
                </div>
                
            </div>
        </div>


    )
}

export default SmProductCard;