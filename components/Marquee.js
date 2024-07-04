import React from 'react';
import { marqueeItems } from '../utils/marqueeData';

const Marquee = () => (
  <div className="overflow-x-hidden bg-[#FF512F] py-1 w-full">
    <div className="animate-marquee whitespace-nowrap">
      {marqueeItems.map((item, index) => (
        <span key={index} className="text-md text-white mx-4">
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
