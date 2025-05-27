import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg px-4 py-6">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full flex flex-col md:flex-row items-center justify-around flex-wrap gap-6 md:gap-0">
          {/* Community */}
          <div className="w-full md:w-auto flex flex-col items-center md:items-start">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-2 cursor-pointer">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </p>
            <p className="flex flex-row items-center my-2 cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
            <p className="flex flex-row items-center my-2 cursor-pointer">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-auto flex flex-col items-center md:items-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-2 cursor-pointer">
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </p>
            <p className="flex flex-row items-center my-2 cursor-pointer">
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </p>
            <p className="flex flex-row items-center my-2 cursor-pointer">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </p>
          </div>

          {/* About */}
          <div className="w-full md:w-auto flex flex-col items-center md:items-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-2 cursor-pointer">
              <span className="text-[15px] ml-[6px]">About MediaHive</span>
            </p>
            <p className="flex flex-row items-center my-2 cursor-pointer">
              <span className="text-[15px] ml-[6px]">Leadership</span>
            </p>
            <p className="flex flex-row items-center my-2 cursor-pointer">
              <span className="text-[15px] ml-[6px]">mideahive@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="mt-6 text-[15px] text-center">
          &copy; MediaHive 2025 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
