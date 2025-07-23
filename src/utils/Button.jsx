import React from "react";

const Button = ({ text, children }) => {
  return (
    <div className="bg-white absolute left-0 bottom-0 w-full h-14 flex justify-end items-center pr-4">
      <button className="bg-Blue-950 text-Blue-100 p-2 text-xs rounded-sm">
        {text}
      </button>
    </div>
  )
};

export { Button };