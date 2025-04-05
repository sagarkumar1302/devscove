import React from "react";
import TextHoverEffect from "../ui/Text-Hover-Effect";

const HeroSection = () => {
  return (
    <div className="relative w-full flex justify-center items-center px-5 -top-20 md:h-screen h-[430px] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="./videos/herovideo.mp4" // Replace with the actual path to your video
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay Content */}
      <div className="absolute container flex flex-col items-center justify-center top-40 bg-black bg-opacity-50 px-5">
        <TextHoverEffect text="DevsCove Solutions" />
        <p className="text-white xl:-mt-40 lg:-mt-24 sm:-mt-12 -mt-6  text-center text-base md:text-2xl">We craft modern web experiences, blending design with performance to grow your digital presence.</p>
        <button></button>
      </div>
    </div>
  );
};

export default HeroSection;