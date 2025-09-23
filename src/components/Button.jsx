import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button() {
  return (
    <div className="min-w-38 px-4 py-2 flex items-center justify-between bg-zinc-100 text-black rounded-full">
      <span className="text-sm font-medium">Start a Project</span>
      <IoIosReturnRight />
    </div>
  );
}

export default Button;
