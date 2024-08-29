"use client";
import React, { useState } from "react";

const QuantityButton: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1); // Initial quantity set to 1

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div>
      <button
        onClick={handleDecrement}
        disabled={quantity === 1}
        className="w-72 h-10 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition-colors duration-300 ease-in-out"
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        onClick={handleIncrement}
        className="w-72 h-10 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition-colors duration-300 ease-in-out"
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
