import React from "react";

export default function SubmitButton({ children, disabled }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="w-full p-4 text-white bg-gray-800 rounded"
    >
      {children}
    </button>
  );
}
