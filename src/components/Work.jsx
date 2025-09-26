import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

function Work() {
  const [images, setImages] = useState([
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d713cb10965e8dbdee18_YIR%202021%20-%204%203.webp",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/62df9251ae9124d9d726bcb9/6346b68e7f858311216e120b_V2%20Tools%20OpenGraph%20Final.jpg",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets.awwwards.com/awards/element/2022/11/63691329d0c69635912563.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://uploads-ssl.webflow.com/655214f102cbcba9d86d2729/6694ba2322d63c7ef898de5c_Kablamo%2B-%2B4%2B3.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b216eeb2587178cacfc781_macbook-16-pro-mockup-on-concrete-background-front-view.webp",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://media.webdesignerdepot.com/spai/q_lossy+w_1056+h_1056+to_auto+ret_img/webdesignerdepot-wp.s3.us-east-2.amazonaws.com/2023/11/27060049/refokus.jpg",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 2:
        imagesShow([0, 1]);
        break;
      case 3:
        imagesShow([0, 1, 2]);
        break;
      case 4:
        imagesShow([0, 1, 2, 3]);
        break;
      case 5:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 6:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full mt-10">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw] leading-none font-medium select-none">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
