import React from "react";
import newsletterborder from "../assets/newsletterborder.svg";
import newsletterright from "../assets/newsletterright.svg";

const Newsletter = () => {
  return (
    <div className="relative bg-[#666DFF] px-6 py-10 flex items-center justify-center">
      {/* Left Decorative Border */}
      <img
        src={newsletterborder}
        alt="Newsletter Border"
        className="absolute top-0 left-0 w-16 h-auto"
      />

      {/* Newsletter Content */}
      <div className="max-w-5xl w-full flex items-center justify-between p-8">
        {/* Text Section */}
        <div className=" w-[40%]">
          <h4 className="text-sm font-medium font-[Poppins] text-white uppercase">
            Newsletter
          </h4>
          <h3 className="text-3xl font-semibold font-[Poppins] text-white leading-snug">
            Subscribe our News Letter to get Latest Updates.
          </h3>
        </div>

        {/* Input Section */}
        <div className="ml-6 w-[40%]">
          <input
            type="text"
            placeholder="mail@mail.com"
            className="px-6 py-3 text-black shadow-md focus:outline-none w-full"
          />
        </div>
      </div>

      {/* Right Decorative SVG */}
      <img
        src={newsletterright}
        alt="Newsletter Right"
        className="absolute top-0 right-0 h-full"
      />
    </div>
  );
};

export default Newsletter;
