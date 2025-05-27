import React from "react";

const Information = () => {
  return (
    <div className="w-full max-w-6xl mx-auto z-10 animate-fade-in-slow px-4 py-10 transition-all duration-1000 ease-in-out">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-10 text-center transition-opacity duration-700">
        About MediaHive
      </h1>

      {/* Content */}
      <div className="flex flex-col md:flex-row md:items-center gap-6 sm:gap-8">
        {/* Video Section */}
        <div className="w-full md:w-1/2">
          <video
            className="w-full h-auto rounded-2xl opacity-90 mix-blend-lighten"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/brain.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <p className="text-base sm:text-lg text-gray-400 text-justify transition-opacity duration-700 leading-relaxed">
            Founded in 2007, mobile is the core of MediaHive. We have grown
            MediaHive Advertising to one of the largest platforms for
            advertisers and publishers to reach their customers on mobile
            devices. In 2019, MediaHive built Glance, a platform that helps
            consumers around the globe discover everything they love on their
            lock screen and other surfaces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
