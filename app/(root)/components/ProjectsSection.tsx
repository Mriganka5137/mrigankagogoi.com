import { projectList } from "@/lib/constants";
import Link from "next/link";
import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <div>
      <div className=" flex justify-between items-center">
        <h1 className=" max-laptop:text-[72px] max-tablet:text-[40px]">
          Projects
        </h1>
        <Link
          href="https://twitter.com/_Mriganka_"
          className=" text-foreground underline decoration-customGreen underline-offset-[15px]  tracking-widest  hover:text-customGreen decoration-[3px] duration-300 ease-in-out"
        >
          CONTACT ME
        </Link>
      </div>
      <div className=" grid grid-cols-2 gap-10">
        {projectList.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
