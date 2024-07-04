import React, { useState } from 'react';

const HeaderCategory = () => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [isNestedPopoverVisible, setIsNestedPopoverVisible] = useState(false);

  const togglePopover = () => setIsPopoverVisible(!isPopoverVisible);
  const toggleNestedPopover = () => setIsNestedPopoverVisible(!isNestedPopoverVisible);

  return (
    <div className="border-b">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 py-2">
        <div className="flex flex-wrap lg:gap-6 md:gap-4 gap-3 z-30 text-gray-600">
          <span className="text-black">Categories :</span>
          <a
            href="#"
            className="hover:text-orange-500"
            onClick={togglePopover}
          >
            Sarees
          </a>
          {isPopoverVisible && (
            <ul
              role="menu"
              className="absolute z-10 min-w-[180px] overflow-auto rounded-md border mt-10 border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
            >
              <li
                role="menuitem"
                className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
              >
                Menu Item 1
              </li>
              <li
                role="menuitem"
                className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
              >
                Menu Item 2
              </li>
              <li
                role="menuitem"
                className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                onClick={toggleNestedPopover}
              >
                Nested Menu
              </li>
              {isNestedPopoverVisible && (
                <ul
                  role="menu"
                  className="absolute z-10 min-w-[180px] overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
                >
                  <li
                    role="menuitem"
                    className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                  >
                    Nested Menu Item 1
                  </li>
                  <li
                    role="menuitem"
                    className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                  >
                    Nested Menu Item 2
                  </li>
                  <li
                    role="menuitem"
                    className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                  >
                    Nested Menu Item 3
                  </li>
                </ul>
              )}
              <li
                role="menuitem"
                className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
              >
                Menu Item 3
              </li>
            </ul>
          )}
          <a href="#" className="hover:text-orange-500">
            Lehengas
          </a>
          <a href="#" className="hover:text-orange-500">
            Suits
          </a>
          <a href="#" className="hover:text-orange-500">
            Kurtis
          </a>
          <a href="#" className="hover:text-orange-500">
            Dupatta
          </a>
          <a href="#" className="hover:text-orange-500">
            Chunni
          </a>
          <a href="#" className="hover:text-orange-500">
            Accessories
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderCategory;
