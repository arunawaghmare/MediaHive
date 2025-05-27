"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Information from "./information/Information";
import Leadership from "./leadership/Leadeship";
import Career from "./career/Career";

const About = () => {
  return (
    <div className="relative z-10 bg-transparent text-white">
      {/* HERO SECTION */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-32 py-10 font-sans  animate-gradient-shift-slow">
        {/* Left Content */}
        <div className="max-w-2xl z-10 animate-fade-in-slow text-white">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            The engagement <br />
            platform that <br />
            <span className="inline-block bg-gradient-to-r from-blue-300 via-blue-400 to-purple-500 bg-clip-text text-transparent transition-all duration-500">
              <Typewriter
                options={{
                  strings: ["marketers", "customers", "developers"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <span className="pl-2">love</span>
          </h1>

          <p className="text-lg text-gray-400">
            Forever evolving our consumer and advertising platforms to redefine
            digital experiences.
          </p>

          <div className="mt-8 flex space-x-4">
            <a
              href="#"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-md font-semibold hover:from-blue-500 hover:to-blue-700 transition-all duration-300"
            >
              Advertising Platforms
            </a>
            <a
              href="#"
              className="border border-gray-400 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-700 transition"
            >
              Consumer Brands
            </a>
          </div>
        </div>

        {/* Right Image Carousel */}
        <div className="mt-12 md:mt-0 hidden md:block animate-float z-10">
          <div className="relative w-[400px] h-[220px] sm:w-[380px] sm:h-[280px] md:w-[420px] md:h-[340px] lg:w-[600px] lg:h-[400px] xl:w-[520px] xl:h-[420px] overflow-hidden shadow-2xl border border-gray-700 bg-black rounded-xl">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="h-full w-full"
            >
              <SwiperSlide>
                <img
                  src="../home4.jpg"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="../home3.jpg"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="../home2.jpg"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="../home1.jpg"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <Information />
      <Leadership />
      <Career />
    </div>
  );
};

export default About;
