import { motion } from "motion/react";
import React from "react";

function Marquee({ imagesurls, direction }) {
  return (
    <div className="flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden invert">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 pr-40"
      >
        {imagesurls.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 pr-40"
      >
        {imagesurls.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
