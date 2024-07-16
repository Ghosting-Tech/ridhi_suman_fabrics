import React from 'react';
import { IoCall, IoMailOutline } from 'react-icons/io5';
import { FiTwitter } from 'react-icons/fi';
import { LiaYoutube } from 'react-icons/lia';
import { PiInstagramLogoLight, PiFacebookLogo } from 'react-icons/pi';
import Link from 'next/link';

const TopHeader = () => (
  <nav className="sm:block hidden w-full px-6 py-3 mx-auto text-white bg-black shadow-md border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
    <div className="flex items-center justify-between text-blue-gray-900">
      <div className="flex lg:flex-row md:flex-row flex-col gap-3">
        <Link href="tel:+919334079737" className="flex items-center text-sm">
          <span className="flex gap-1 items-center">
            <IoCall color="green" fontSize={23} /> +91 9334079737
          </span>
        </Link>
        <Link href="mailto:musharrafjamal92@gmail.com" className="flex items-center text-sm">
          <span className="flex gap-1 items-center">
            <IoMailOutline color="orange" fontSize={23} /> ridhisuman@gmail.com
          </span>
        </Link>
      </div>
      <div className="items-center flex space-x-4">
        <span className="text-sm">CONNECT WITH US ON:</span>
        <ul className="flex gap-4">
          <li className="flex items-center justify-center p-2 bg-transparent border-2 border-[#FF512F] hover:bg-[#FF512F] rounded-full group">
            <FiTwitter className="text-orange-600 group-hover:text-white" fontSize={20} />
          </li>
          <li className="flex items-center justify-center p-2 bg-transparent border-2 border-[#FF512F] hover:bg-[#FF512F] rounded-full group">
            <LiaYoutube className="text-orange-600 group-hover:text-white" fontSize={20} />
          </li>
          <li className="flex items-center justify-center p-2 bg-transparent border-2 border-[#FF512F] hover:bg-[#FF512F] rounded-full group">
            <PiInstagramLogoLight className="text-orange-600 group-hover:text-white" fontSize={20} />
          </li>
          <li className="flex items-center justify-center p-2 bg-transparent border-2 border-[#FF512F] hover:bg-[#FF512F] rounded-full group">
            <PiFacebookLogo className="text-orange-600 group-hover:text-white" fontSize={20} />
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default TopHeader;
