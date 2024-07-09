import React from 'react';

const SecondaryInput = ({ type, field, label, min, max, style }) => {
  // Conditional props for min and max based on field value
  const conditionalProps = field === 'phone' || field === 'name' ? { min, max } : {};

  return (
    <div className={`relative ${style}`}>
      <input
        id={field}
        name={field}
        type={type}
        className={`peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-pink-500 `}
        placeholder="Name"
        {...conditionalProps} // Spread conditionalProps to apply min and max conditionally
      />
      <label
        htmlFor={field}
        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
};

export default SecondaryInput;
