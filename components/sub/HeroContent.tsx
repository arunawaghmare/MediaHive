"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 pt-24 w-full z-[20] min-h-screen"
    >
      {/* Left: Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-5 justify-center text-center lg:text-left items-center lg:items-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Marketing Automation Software
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-[600px]"
        >
          <span>
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Inspiration
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base text-gray-400 my-5 max-w-[600px]"
        >
          Forever evolving our consumer and advertising platforms to redefine
          digital experiences.Manage it all with the right customer engagement
          platform.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="w-48 py-2 button-primary text-center text-white cursor-pointer rounded-lg"
        >
          Learn More!
        </motion.a>
      </div>

      {/* Right: Video */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center relative">
        <div className="relative w-full max-w-[600px] shadow-2xl rounded-2xl">
          <video
            className="w-full h-auto rounded-2xl opacity-90 mix-blend-lighten"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/laptop2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
