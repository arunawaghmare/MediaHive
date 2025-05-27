import Link from "next/link";
import React from "react";

const Career = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-10 sm:py-16 overflow-hidden relative z-10">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/noise-texture.png')] opacity-10 pointer-events-none" />

      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
        Do you love apps?
      </h1>

      {/* Description */}
      <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 max-w-md sm:max-w-xl">
        We're looking for people who are committed to constantly push for more.
      </p>

      {/* Button */}
      <Link href="/about/team" className="cursor-pointer">
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-shadow text-sm sm:text-base">
          Work with us
        </button>
      </Link>
    </div>
  );
};

export default Career;
