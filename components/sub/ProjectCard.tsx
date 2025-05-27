import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative items-center text-center overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] max-w-sm mx-auto">
      <div className="w-full h-80 relative">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>

      <div className="relative p-3">
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="mt-1 text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
