'use client';

import React, { useEffect, useState } from "react";
import { MenuItem, Typography } from "@material-tailwind/react";
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

function NavCategory() {
    const [categories, setCategories] = useState([]);
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const router = useRouter(); // Initialize useRouter

    const handleCategories = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/category`);
            const data = await res.json();
            console.log(data); // Log the fetched data to see its structure
            setCategories(data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        handleCategories();
    }, []);


    return (
        <div className="absolute left-0 right-0 mx-auto mt-2 md:mt-5 w-11/12 md:w-3/5 max-w-screen-xl rounded-xl bg-white p-2 shadow-lg">
            <ul className="grid grid-cols-3 gap-y-2 w-4/3">
                {categories.map((category, key) => (
                    <li
                        key={key}
                        className="relative group" // Use group to handle hover state
                        onMouseEnter={() => setHoveredCategory(category)}
                        onMouseLeave={() => setHoveredCategory(null)}
                    >
                        <a href="#" className="block">
                            <MenuItem className="flex items-center gap-3 rounded-md ">
                                <div className="flex items-center justify-center rounded-md bg-blue-gray-50 ">
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
                            <div className=" md:absolute left-full top-0 ml-2 w-48 rounded-lg bg-white shadow-lg z-10 block">
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
