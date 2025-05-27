"use client";
import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    // Hero.tsx
    <div className="relative z-10 bg-transparent flex flex-col h-full w-full">
      {/* Stars are already z-0 in RootLayout */}
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-10 object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <div className="relative z-20">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
