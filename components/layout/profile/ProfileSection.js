"use client";
import Image from "next/image";
import { useState } from "react";

const ProfileSection = ({data}) => {
  const defaultImage= "/icon/ProfilePic.png"
  const [profilePic, setProfilePic] = useState(data.image||defaultImage);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(data.name);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const saveName = () => {
    toggleEditMode();
  };

  return (
    <div className="w-full overflow-hidden max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10 gap-5 mt-5">
        {/* Image Section */}
        <div className="relative shadow-md rounded-full w-[200px] h-[200px] flex items-center justify-center ">
          <Image
            src={profilePic}
            layout="fill"
            objectFit="cover"
            className="rounded-full object-cover"
            alt="Profile Pic"

          />
          <input
            id="fileInput"
            type="file"
            accept="image/jpeg, image/png, image/jpg"
            className="hidden"
            onChange={handleImageChange}
          />
          <div className="w-9 h-9 rounded-full shadow-md cursor-pointer flex items-center justify-center absolute right-0 top-36 " onClick={() => document.getElementById('fileInput').click()}>
            <Image src="/icon/camera.webp" width={25} height={25} className="rounded-full" />
          </div>
        </div>

        {/* Title Section */}
        <div className="flex items-center gap-2">
          {isEditing ? (
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="mb-1 ml-2  text-xl font-medium text-gray-900 dark:text-white"
            />
          ) : (
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{data.name}</h5>
          )}
          {isEditing ? (
            <button onClick={saveName} className="text-green-500 cursor-pointer">
              ✔️
            </button>
          ) : (
            <button onClick={toggleEditMode} className="text-blue-500 cursor-pointer">
              ✏️
            </button>
          )}
        </div>

        {/* Data Section */}
        <div className="flex w-72 flex-col gap-6">
          <label className="input input-bordered flex items-center gap-5">
            <Image src="/icon/phone.svg" width={15} height={15} alt="Phone" />
            Phone
            <span className="ml-2 text-lg text-[#b7bac1]">{data.phone}</span>
          </label>
          <label className="input input-bordered flex items-center gap-5">
            <Image src="/icon/email.svg" width={15} height={15} alt="Email" />
            Email
            <span className="ml-2 text-lg text-[#b7bac1]">{data.email}</span>
          </label>
          <label className="input input-bordered flex items-center gap-3 flex-nowrap">
            <Image src="/icon/account.svg" width={15} height={15} alt="Account" />
            <span className="text-base whitespace-nowrap ">Account created on</span>
            <span className="ml-2 text-lg text-[#b7bac1]">{data.account}</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
