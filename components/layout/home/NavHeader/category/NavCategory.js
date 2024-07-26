'use client';

import React, { useEffect, useState } from "react";
import { MenuItem, Typography } from "@material-tailwind/react";


function NavCategory() {
    const [categories, setCategories] = useState([]);
    const [hoveredCategory, setHoveredCategory] = useState(null);


    const handleCategories = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/category`);
            const data = await res.json();
            setCategories(data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        handleCategories();
    }, []);


    return (
        <div className="absolute left-0 right-0 mx-auto w-2/3 mt-2 md:mt-5 md:w-3/5 max-w-screen-xl rounded-xl bg-white p-2 shadow-lg">
         <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-2">
                {categories.map((category, key) => (
                    <li
                        key={key}
                        className="relative group" 
                        onMouseEnter={() => setHoveredCategory(category)}
                        onMouseLeave={() => setHoveredCategory(null)}
                    >
                        <a href="#" className="block">
                            <MenuItem className="flex items-center gap-3 rounded-md ">
                                <div className="flex items-center justify-center rounded-md bg-blue-gray-50  ">
                                    <img
                                        src={category.image.url}
                                        alt={category.name}
                                        className="h-12 w-12 rounded-full"
                                    />
                                </div>
                                <div>
                                    <Typography
                                        variant="h6"
                                        color="blue-gray"
                                        className="flex items-center text-sm font-bold"
                                    >
                                        {category.name}
                                    </Typography>
                                </div>
                            </MenuItem>
                        </a>

                        {hoveredCategory === category && category.subCategories.length > 0 && (
                            <div className="w-auto md:absolute left-full top-0 ml-2 rounded-lg bg-white shadow-lg z-10 block">
                                <ul className=" bg-white-300 rounded-lg ">
                                    {category.subCategories.map((subCategory, subKey) => (
                                        <MenuItem >
                                            <li key={subKey} className="py-2 px-4 hover:bg-white-100 cursor-pointer flex items-center rounded-lg justify-between ">
                                                <div>
                                                    <Typography variant="h6" color="blue-gray" className="text-sm font-bold">
                                                        {subCategory.name}
                                                    </Typography>
                                                </div>
                                            </li>
                                        </MenuItem>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NavCategory;
