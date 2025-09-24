import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button({title = "Start a Project"}) {
  return (
    <div className="px-4 py-2 inline-flex items-center justify-between gap-2 bg-zinc-100 text-black rounded-full">
      <span className="text-sm font-medium">{title}</span>
      <IoIosReturnRight />
    </div>
  );
}

export default Button;
