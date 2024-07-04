"use client";
import React, { useState, useRef } from "react";
import { FaPhoneAlt, FaEdit } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdOutlineModeEdit } from "react-icons/md";

const ProfileSection = () => {
  const [username, setUsername] = useState("Musharraf Jamal");
  const [editingUsername, setEditingUsername] = useState(false);
  const [profilePic, setProfilePic] = useState();
  const [image, setImage] = useState('/profile-image.png');
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        setImage(reader.result); // Update the displayed image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUsernameClick = () => {
    setEditingUsername(true);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleUsernameBlur = () => {
    setEditingUsername(false);
  };

  return (
    <div className="mx-auto sm:mt-10 sm:px-6 px-1 py-10 bg-gray-50 rounded-lg shadow-md max-w-2xl w-full">
      <div className="flex flex-col items-center">
        <div className="relative flex justify-center">
          <img
            src={image}
            alt="profile"
            className="sm:w-48 sm:h-48 w-28 h-28 rounded-full cursor-pointer"
            onClick={handleImageClick}
          />
          <MdOutlineModeEdit
            className="absolute sm:top-5 sm:right-2 right-0 top-1 w-6 h-6 bg-gray-200 p-1 rounded-full cursor-pointer"
            onClick={handleImageClick}
          />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
            accept="image/jpeg, image/png, image/jpg"
          />
        </div>
        {editingUsername ? (
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            onBlur={handleUsernameBlur}
            className="mt-4 text-xl font-bold text-blue-600 outline-none text-center rounded"
            autoFocus
          />
        ) : (
          <div className="flex items-center mt-4 cursor-pointer" onClick={handleUsernameClick}>
            <h1 className="text-2xl font-bold text-center text-blue-600">
              {username}
            </h1>
            <FaEdit size={20} className="ml-2 text-blue-600" />
          </div>
        )}
        <hr className="mt-4 w-full" />
        <div className="flex justify-between mt-4 w-full">
          <div className="flex items-center gap-2">
            <FaPhoneAlt size={21} color="green" />
            <div className="font-semibold text-gray-600">Phone</div>
          </div>
          <span className="ml-2 text-gray-600">99999999999</span>
        </div>
        <hr className="mt-4 w-full" />
        <div className="flex justify-between mt-4 gap-x-2 w-full">
          <div className="flex items-center gap-2">
            <IoMail size={25} color="orange" />
            <div className="font-semibold text-gray-600">Email</div>
          </div>
          <span className="text-gray-600">Musharrafjamal92@gmail.com</span>
        </div>
        <hr className="mt-4 w-full" />
        <div className="flex justify-between mt-4 gap-x-2 w-full">
          <div className="flex items-center gap-2">
            <SlCalender size={25} color="red" />
            <div className="font-semibold text-gray-600">Account created on</div>
          </div>
          <span className="text-gray-600">05 March 2023</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
