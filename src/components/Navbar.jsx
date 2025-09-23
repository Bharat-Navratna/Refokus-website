import React from "react";
import logo from "../assets/Logo/Refokus-logo.png";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-1 border-zinc-700">
      <div className="nleft flex items-center">
        <img
          className="w-[21px] h-[28px] invert"
          src={logo}
          alt="refokus-logo"
        />
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span className="w-[2px] h-5 bg-zinc-700"></span>
            ) : (
              <a className="text-sm flex items-center gap-1" href="#">
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="inline-block w-1 h-1 bg-green-500 rounded-full"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;
