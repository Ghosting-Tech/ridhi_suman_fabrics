import React from "react";

const InputField = ({ icon: Icon, label, type, name, value, onChange, placeholder, required, className }) => {
  return (
    <div className={`flex border p-3 rounded-md w-full ${className}`}>
      {Icon && <Icon size={21} color="gray" className="mr-2" />}
      <div className="flex flex-col w-full">
        <label className="text-gray-700">{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full pt-2 rounded bg-transparent focus:outline-none focus:border-gray-900"
          required={required}
        />
      </div>
    </div>
  );
};

export default InputField;
