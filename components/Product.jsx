"use client"
import Image from 'next/image'
import React, { useState } from 'react'

function Product({cards}) {

    if (!Array.isArray(cards)) {
        return null; // or some fallback UI
    }
    
    return (
        <div className='flex flex-col gap-3 w-[320px] rounded-t-lg'>
           {cards.map((card, index) => (
        
          <div key={index} className="flex flex-col gap-3 w-[320px] rounded-t-lg">
            <div>
                <Image src={card.image} width={320} height={450} />
            </div>
            <div className='flex flex-col gap-[14px] px-1 py-2'>
                <div className='flex flex-col gap-3 '>
                    <div className='flex items-center justify-between'>
                        <div className='bg-[#52057B73] w-[104px] px-2 py-1 rounded-lg font-normal text-xs text-slate-200'>{card.productName}</div>
                        <div className='text-[#FF0000] bg-[#ff000053] py-1 px-[6px]   font-medium text-xs rounded-lg w-[47px] text-center'>{card.discount}</div>
                    </div>
                    <div className='font-medium text-base'>
                        {card.description}
                    </div>
                </div>
                <div>

                    <div className='flex items-center gap-3 font-medium text-base'>
                        <span className='text-[#828282] line-through'><span className=' '>&#x20B9;</span>{card.price}</span>
                        <span><span>&#x20B9;</span>{card.price - (card.price * (card.discount / 100))}</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <span>chart</span>
                        <span>{card.stockQuantity}</span>
                    </div>
                </div>
            </div>
            </div>
          ))}
        </div>
    )
}

export default Product