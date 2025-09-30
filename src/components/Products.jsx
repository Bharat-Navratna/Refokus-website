import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";
function Products() {
  const products = [
    {
      title: "arqitel",
      description:
        "hrya hjvsivn oianew nevew hrya hjvsivn oianew nevewhrya hjvsivn oianew nevew",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "hrya hjvsivn oianew nevew hrya hjvsivn oianew nevewhrya hjvsivn oianew nevew",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "hrya hjvsivn oianew nevew hrya hjvsivn oianew nevewhrya hjvsivn oianew nevew",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "hrya hjvsivn oianew nevew hrya hjvsivn oianew nevewhrya hjvsivn oianew nevew",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-5 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[23rem] h-[23rem] left-[42%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.2 }}
            className="w-full h-full "
          >
            <video autoPlay loop muted playsInline className="w-full object-cover" src="/arqitel-43.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.2 }}
            className="w-full h-full"
          >
             <video autoPlay loop muted playsInline className="w-full object-cover" src="/chargeflow-43.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.2 }}
            className="w-full h-full"
          >
             <video autoPlay loop muted playsInline className="w-full object-cover" src="/layoutland-43.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.2 }}
            className="w-full h-full"
          >
             <video autoPlay loop muted playsInline className="w-full object-cover" src="/umault-43.webm"></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
