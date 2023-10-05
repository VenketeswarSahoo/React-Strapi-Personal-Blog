import React from "react";
import BlogCards from "./BlogCards";
import SliderPart from "./SliderPart";

const Hero = ({ blogs }) => {
  return (
    <div className="flex">
      <div className="w-3/4">
        <BlogCards blogs={blogs ? blogs : ""} />
      </div>
      <div className="w-1/5 p-6 sticky bottom-0 self-end">
        <SliderPart />
      </div>
    </div>
  );
};

export default Hero;
