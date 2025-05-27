"use client";
import Link from "next/link";
import React from "react";

const Leadership = () => {
  return (
    <section className="py-12 px-6 sm:px-10 md:px-16 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
      {/* Text Section */}
      <div className="max-w-xl text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
          Our Leadership
        </h2>
        <p className="text-base sm:text-lg text-gray-400 mb-5 sm:mb-6">
          Our global teams work together to achieve big goals and create a
          culture of excellence, camaraderie, and awesomeness.
        </p>

        <Link
          href="/about/team"
          className="text-sky-500 hover:underline inline-flex items-center gap-1 cursor-pointer text-sm sm:text-base"
        >
          <span>Meet our leadership team</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-md sm:max-w-lg">
        <img
          src="/leader.png"
          alt="Leadership"
          className="rounded-2xl shadow-lg w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Leadership;
