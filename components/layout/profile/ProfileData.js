import React from "react";

const ProfileData = ({ icon, title, data }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between mt-4 w-full px-2">
        <div className="flex items-center gap-2">
          {icon}
          <div className="text-gray-600">{title}</div>
        </div>
        <span className="ml-2 text-gray-600">{data}</span>
      </div>
    </div>
  );
};

export default ProfileData;
