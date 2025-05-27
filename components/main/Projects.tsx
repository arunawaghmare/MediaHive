"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6">
        Consumer Brands
      </h1>

      <div className="w-full flex flex-col md:flex-row gap-10 px-10 ">
        <ProjectCard
          src="/g14.png"
          title="Nostra Online Gaming"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        />
        <ProjectCard
          src="/g13.png"
          title="Glance Smart Surface"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        />
        <ProjectCard
          src="/g11.png"
          title="Roposo Video Shopping"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        />
      </div>
    </div>
  );
};

export default Projects;
