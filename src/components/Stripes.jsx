import React from "react";
import Stripe from "./Stripe";

function Stripes() {
  const data = [
    { title: "CSSDesignAwards", number: 48 },
    { title: "No-Code Conf 2021", number: 2 },
    { title: "awwwards.", number: 11 },
    { title: "CSSDesignAwards", number: 48 },
    { title: "No-Code Conf 2021", number: 2 },
    { title: "awwwards.", number: 11 },
  ];

  return (
    <div className="flex items-center mt-20">
      {data.map((elem, index) => (
        <Stripe val={elem} />
      ))}
    </div>
  );
}

export default Stripes;
