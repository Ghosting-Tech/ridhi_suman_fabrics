"use client"
import React, { useState } from 'react';

const IncrementDecrementButton = ({ initialQuantity = 0 }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
        setQuantity(quantity - 1);
      }
  };

  return (
    <div className="flex items-center mt-2">
      <button className="border p-1 rounded" onClick={handleDecrement}>
        -
      </button>
      <span className="mx-2">{quantity}</span>
      <button className="border p-1 rounded" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default IncrementDecrementButton;
