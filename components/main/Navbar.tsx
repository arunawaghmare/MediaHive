"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { GiCancel } from "react-icons/gi";
const Navbar = () => {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logos.jpg"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 hidden md:block text-gray-300">
            MediaHive
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center justify-between w-[500px] border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
          <Link href="/" className="cursor-pointer">
            Home
          </Link>
          <Link href="/about" className="cursor-pointer">
            About
          </Link>
          <Link href="/services" className="cursor-pointer">
            Services
          </Link>
        </div>

        {/* Auth + Social + Hamburger */}
        <div className="flex items-center gap-4">
          {/* Desktop Social Icons */}
          <div className="hidden md:flex gap-3">
            {Socials.map((social) => (
              <Image
                key={social.name}
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex gap-2">
            {!session ? (
              <>
                <Link href="/register">
                  <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition">
                    Register
                  </button>
                </Link>
                <Link href="/login">
                  <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition">
                    Login
                  </button>
                </Link>
              </>
            ) : (
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="button-primary text-white px-4 py-1 rounded"
              >
                Logout
              </button>
            )}
          </div>

          {/* Hamburger Icon */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <GiCancel size={28} color="#fff" />
            ) : (
              <IoMenuOutline size={28} color="#fff" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[65px] left-0 w-full bg-[#030014dd] text-white px-5 py-4 space-y-4 z-50">
          <div className="flex flex-col gap-3">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link href="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
          </div>
          <div className="flex gap-4 mt-4">
            {Socials.map((social) => (
              <Image
                key={social.name}
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            {!session ? (
              <>
                <Link href="/register" onClick={() => setMenuOpen(false)}>
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Register
                  </button>
                </Link>
                <Link href="/login" onClick={() => setMenuOpen(false)}>
                  <button className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                    Login
                  </button>
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  setMenuOpen(false);
                  signOut({ callbackUrl: "/login" });
                }}
                className="w-full  text-white px-4 py-2
                "
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
