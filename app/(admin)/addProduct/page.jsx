"use client"
import React, { useState, useRef, useEffect } from "react";
import ColorSelect from "./ColorSelect";
import SizeSelect from "./SizeSelect";
import Product from "@/components/Product";
import Image from "next/image";

function page() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [cards, setCards] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('');
    const [img, setImg] = useState();


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [formData, setFormData] = useState({
        productName: '',
        price: '',
        discount: '',
        category: '',
        description: '',
        fabric: '',
        brand: '',
        stockQuantity: '',
        visibility: '',
        colors: [],
        sizes: [],
        images: []
    });

    const fileInputRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files).slice(0, 10);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setImg(newImages)
        setFormData((prevData) => ({
            ...prevData,
            images: [...prevData.images, ...newImages].slice(0, 10),
        }));
        // Optional: Preview image
        const reader = new FileReader();
        reader.onloadend = () => {
            // You can use this URL for previewing the image
            const imageUrl = URL.createObjectURL(files);
            // Display the image preview in an img tag or somewhere in your UI
            document.getElementById('image-preview').src = imageUrl;
        };
        //   reader.readAsDataURL(files);
    };
    const handleRemoveImage = (imageToRemove) => {
        setFormData((prevData) => ({
            ...prevData,
            images: prevData.images.filter((image) => image !== imageToRemove),
        }));
    };

    const handleAddColor = (color) => {
        setFormData((prevData) => ({
            ...prevData,
            colors: [...prevData.colors, color],
        }));
    };

    const handleRemoveColor = (index) => {
        setFormData((prevData) => ({
            ...prevData,
            colors: prevData.colors.filter((_, i) => i !== index),
        }));
    };

    const handleAddSize = (size) => {
        setFormData((prevData) => ({
            ...prevData,
            sizes: [...prevData.sizes, size],
        }));
    };
    useEffect(() => {
        console.log(cards)
    }, [cards]);

    return (

        <div>
            <div className="flex items-center justify-between p-4 border-b-2 h-[74px] border-b-[#FF9CBA]">
                <div className="flex items-center gap-2">
                    <Image src="/icon/AddProduct.svg" width={37} height={38} className="rounded-lg" />
                    <span className="text-sm md:text-base">MANAGE PRODUCTS</span>
                </div>
                <div className="flex items-center gap-2 h-[42px]">
                    <select
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                        <option value="">Select category</option>
                        <option>Lehengas</option>
                        <option>Sarees</option>
                        <option>Suits</option>
                        <option>Kurtis</option>
                        <option>Dupatta</option>
                        <option>Chunri</option>
                    </select>
                    <div className="flex items-center gap-2 rounded-md px-3 py-2 bg-[#8E54E9] text-white font-medium hover:cursor-pointer"
                        onClick={() => setShowModal(true)}>
                        <button

                            className="w-auto  text-xs md:w-[150px] text-white  :font-medium  "
                            type="button"
                        >
                            Add Product
                        </button>
                        <Image src="/image/CreateProductBtn.png" width={19} height={19} />
                    </div>
                </div>
            </div>
            {/* modal  */}
            {showModal && (
                <div
                    id="crud-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50"
                >
                    <div className="relative p-4 w-full max-w-3xl max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 overflow-auto max-h-screen animate-modal">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Create New Product
                                </h3>
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <form  className="p-4 md:p-5">
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    {/* Product Name  */}
                                    <div className="col-span-2 sm:col-span-1">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Product Name
                                        </label>
                                        <input
                                            type="text"
                                            name="productName"
                                            id="productNname"
                                            value={formData.productName}
                                            onChange={handleInputChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Type product name"
                                            required
                                        />
                                    </div>
                                    {/* Category  */}
                                    <div className="col-span-2 sm:col-span-1">
                                        <label
                                            htmlFor="category"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Category
                                        </label>
                                        <select
                                            name="category"
                                            id="category"
                                            value={formData.category}
                                            onChange={handleInputChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        >
                                            <option value="">Select category</option>
                                            <option value="sarees">Sarees</option>
                                            <option value="lehengas">Lehengas</option>
                                            <option value="suits">Suits</option>
                                            <option value="kurtis">Kurtis</option>
                                            <option value="dupatta">Dupatta</option>
                                            <option value="chunri">Chunri</option>
                                        </select>
                                    </div>
                                    {/* Price  */}
                                    <div className="col-span-2 sm:col-span-1">
                                        <label
                                            htmlFor="price"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Price
                                        </label>
                                        <input
                                            type="number"
                                            name="price"
                                            id="price"
                                            value={formData.price}
                                            onChange={handleInputChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="RS.2999"
                                            required
                                        />
                                    </div>
                                    {/* Discount  */}
                                    <div className="col-span-2 sm:col-span-1">
                                        <label
                                            htmlFor="discount"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Discount
                                        </label>
                                        <input
                                            type="number"
                                            name="discount"
                                            id="discount"
                                            value={formData.discount}
                                            onChange={handleInputChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="%"
                                            required
                                        />
                                    </div>
                                    {/* Description     */}
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="description"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Product Description
                                        </label>
                                        <textarea
                                            name="description"
                                            id="description"
                                            rows="4"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Write product description here"
                                        ></textarea>
                                    </div>
                                    {/* Fabric  */}
                                    <div className="col-span-2 sm:col-span-1">
                                        <label
                                            htmlFor="fabric"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Fabric
                                        </label>
                                        <input
                                            type="text"
                                            name="fabric"
                                            id="fabric"
                                            value={formData.fabric}
                                            onChange={handleInputChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Type fabric"
                                            required
                                        />
                                    </div>
                                    {/* Brand  */}
                                    <div className="col-span-2 sm:col-span-1">
                                        <label
                                            htmlFor="brand"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Brand
                                        </label>
                                        <input
                                            type="text"
                                            name="brand"
                                            id="brand"
                                            value={formData.brand}
                                            onChange={handleInputChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Type brand"
                                            required
                                        />
                                    </div>
                                    {/* Stock Qunatity  */}
                                    <div className="col-span-2 sm:col-span-1">
                                        <label
                                            htmlFor="stockQuantity"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Stock Quantity
                                        </label>
                                        <input
                                            type="number"
                                            name="stockQuantity"
                                            id="stockQuantity"
                                            value={formData.stockQuantity}
                                            onChange={handleInputChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="1234"
                                            required
                                        />
                                    </div>
                                    {/* Visibility  */}
                                    <div className="col-span-2 sm:col-span-1">
                                        <label
                                            htmlFor="visibility"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Visibility
                                        </label>
                                        <select
                                            name="visibility"
                                            id="visibility"
                                            value={formData.visibility}
                                            onChange={handleInputChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        >
                                            <option value={true}>Visible</option>
                                            <option value={false}>Hidden</option>
                                        </select>
                                    </div>
                                    {/* Colors  */}
                                    <div className="col-span-2 sm:col-span-1">
                                        <label
                                            htmlFor="colors"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Colors
                                        </label>
                                        <div className="flex flex-col  gap-3 w-auto bg-[#E7E7E7] min-h-32 rounded-lg">
                                            {/* Color Picker */}
                                            <ColorSelect onAddColor={handleAddColor} />

                                            {/* Display Selected Colors */}
                                            <div className=" flex gap-5 flex-wrap ">
                                                {formData.colors.map((color, index) => (
                                                    <div key={index} className="flex items-center gap-2 mb-2  px-3 rounded-lg"
                                                        style={{ borderColor: color, borderWidth: '1px', borderStyle: 'solid', }}>
                                                        <div
                                                            className="w-6 h-6 rounded"
                                                            style={{ backgroundColor: color }}
                                                        ></div>
                                                        <span>{color}</span>
                                                        <button
                                                            className="ml-auto  text-2xl"
                                                            style={{ color: color }}
                                                            onClick={() => handleRemoveColor(index)}
                                                        >
                                                            &times;
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Sizes  */}
                                    <div className="col-span-2 sm:col-span-1">
                                        <label
                                            htmlFor="sizes"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Sizes
                                        </label>
                                        <div className="flex flex-col  gap-3 w-auto bg-[#E7E7E7] min-h-32 py-1 rounded-lg">
                                            {/* Size Picker */}
                                            <SizeSelect onAddSize={handleAddSize} />
                                        </div>
                                    </div>
                                    {/* Image  */}
                                    <div className="col-span-2 sm:col-span-1">
                                        <label
                                            htmlFor="image"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Image
                                        </label>
                                        <div className="flex border">
                                            <div
                                                className="w-[500px] h-[320px] rounded-lg flex flex-col justify-center items-center cursor-pointer"
                                                onClick={() => formData.images.length < 10 && fileInputRef.current.click()}

                                            >
                                                {formData.images.length === 0 ? (
                                                    <>
                                                        <svg
                                                            className="w-16 h-16 text-gray-400"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                                                            ></path>
                                                        </svg>
                                                        <span className="text-gray-400">320 * 500</span>
                                                        <span className="mt-1 text-[#00ADF7]">Upload Image</span>
                                                    </>
                                                ) : (
                                                    <img src={img} id='image-preview' alt="Preview" className=" object-contain w-full h-full rounded-lg" />
                                                )}
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    className="hidden"
                                                    ref={fileInputRef}
                                                    multiple
                                                    onChange={handleFileChange}

                                                />
                                                {formData.images.length === 10 && (
                                                    <span className="text-red-500">Maximum of 10 images selected</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Display Image  */}
                                    <div className="col-span-2 sm:col-span-1">
                                        {formData.images.length > 0 && (
                                            <div className="flex flex-wrap mt-4">
                                                {formData.images.map((image, index) => (
                                                    <div key={index} className="relative w-[100px] h-[100px] m-1">
                                                        <img
                                                            src={image}
                                                            alt={`Preview ${index}`}
                                                            className="object-contain w-full h-full rounded-lg"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => handleRemoveImage(image)}
                                                            className="absolute top-0 h-8 w-8 right-[-10px] bg-red-500 text-white rounded-full p-1"
                                                        >
                                                            &times;
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {/* Submit button  */}
                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* display card  */}
            <div className="flex gap-4 flex-wrap mt-3 items-center justify-center ">
                {cards.length === 0 ? (
                    <p>No products found</p>
                ) : (
                    cards.map((card) => (
                        <Product cards={card} />
                    ))
                )}
            </div>

        </div>







    )
}

export default page