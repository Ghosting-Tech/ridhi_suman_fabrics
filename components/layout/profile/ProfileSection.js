"use client";
import React, { useState, useRef } from "react";
import { FaPhoneAlt, FaEdit } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import Image from "next/image";
import ProfileData from "./ProfileData";
import { SlCamera } from "react-icons/sl";

const ProfileSection = () => {
  const [username, setUsername] = useState("Musharraf Jamal");
  const [editingUsername, setEditingUsername] = useState(false);
  const [profilePic, setProfilePic] = useState();
  const [image, setImage] = useState("/profile-image.png");
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/jpg")
    ) {
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
    <div className="mx-auto sm:px-6 px-1 py-10 rounded-lg shadow-md max-w-2xl w-full">
      <div className="flex flex-col items-center">
        <div
          className="relative sm:w-48 sm:h-48 w-28 h-28 group bg-gray-400 rounded-full flex justify-center items-center cursor-pointer hover:opacity-65 transition-opacity duration-300"
          onClick={handleImageClick}
        >
          <Image
            src={image}
            alt="profile"
            layout="fill"
            objectFit="cover"
            className="rounded-full  "
          />
          <SlCamera
            color="white"
            className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 size-7"
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
          <div
            className="flex items-center mt-4 mb-6 cursor-pointer"
            onClick={handleUsernameClick}
          >
            <h1 className="text-2xl font-bold text-center text-blue-600">
              {username}
            </h1>
            <FaEdit size={20} className="ml-2 text-gray-600" />
          </div>
        )}
        <ProfileData
          icon={<FaPhoneAlt size={15} color="gray" />}
          title="Phone"
          data="99999999999"
        />
        <hr className="mt-4 w-full" />
        <ProfileData
          icon={<IoMail size={15} color="gray" />}
          title="Email"
          data="Musharrafjamal92@gmail.com"
        />
        <hr className="mt-4 w-full" />
        <ProfileData
          icon={<SlCalender size={15} color="gray" />}
          title="Account created on"
          data="05 March 2023"
        />
      </div>
    </div>
  );
};

export default ProfileSection;
