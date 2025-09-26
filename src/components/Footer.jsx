import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">refokus.</h1>
        </div>
        <div className="basis-1/2 flex gap-4">
        <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500">Socials</h4>
            {["Instagram", "Twitter (X?)", "LinkedIn"].map((item, index) => <a className="block mt-3 text-zinc-600">{item}</a>)}
        </div>
        <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500">Sitemap</h4>
            {["Home", "Work", "Careers", "Contact"].map((item, index) => <a className="block mt-3">{item}</a>)}
        </div>
        <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right">Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
            <img className="w-32 h-10 mt-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIh6l7iEQxlttxKHJteW9ln1dq5L0IAX8Bf48BgjI5CapC0mdrWdhiiJxeE2_h7wrePQ&usqp=CAU" alt="enterprise partner" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
