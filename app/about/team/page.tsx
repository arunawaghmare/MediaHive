import React from "react";
import Image from "next/image";
import Link from "next/link";

const Team = () => {
  const leaders = [
    {
      name: "Adam Foroughi",
      title: "CEO and Co-Founder",
      image: "/l8.jpg",
    },
    {
      name: "Matt Stumpf",
      title: "Chief Financial Officer",
      image: "/l3.jpg",
    },
    {
      name: "Victoria Valenzuela",
      title: "Chief Legal Officer and Corporate Secretary",
      image: "/l2.jpg",
    },
    {
      name: "Adam Foroughi",
      title: "CEO and Co-Founder",
      image: "/l5.jpg",
    },
    {
      name: "Matt Stumpf",
      title: "Chief Financial Officer",
      image: "/l4.jpg",
    },
    {
      name: "Victoria Valenzuela",
      title: "Chief Legal Officer and Corporate Secretary",
      image: "/l6.jpg",
    },
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <div className="min-h-[80vh] flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 py-12 max-w-7xl mx-auto gap-10">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase text-white mb-2">
            Leadership
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-6">
            At MediaHive,
            <br className="hidden sm:block" />
            collaboration is <br className="hidden sm:block" />
            our lifeblood.
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">
            It drives what we do across our teams and ensures we deliver
            high-quality products to our customers.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="relative w-[18rem] sm:w-[20rem] h-[25rem]">
            <img
              src="/team1.jpg"
              alt="team working"
              className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-xl absolute top-0 left-6"
            />
            <img
              src="/team2.jpg"
              alt="outdoor meeting"
              className="w-full h-48 sm:h-56 object-cover rounded-xl shadow-xl absolute top-52 left-0"
            />
          </div>
        </div>
      </div>

      {/* Leaders Section */}
      <div className="py-14 px-6 sm:px-10 md:px-14">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Meet our leaders
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden text-center p-5 transition-transform hover:scale-105 duration-300"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {leader.name}
              </h3>
              <p className="text-sm text-gray-600">{leader.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-10 relative z-10">
        <div className="absolute inset-0 bg-[url('/noise-texture.png')] opacity-10 pointer-events-none" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          Get in touch with us
        </h1>
        <p className="text-base sm:text-lg text-gray-400 mb-6 max-w-xl">
          We're looking for people who are committed to constantly push for
          more.
        </p>
        <Link href="/" className="cursor-pointer">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-shadow">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Team;
