import React from "react";
import Product from "./Product";

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

  return (
    <div className="mt-32">
        {products.map((val, index) => <Product val={val} />)}
    </div>
  );
}

export default Products;
