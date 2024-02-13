import { projectList } from "@/lib/constants";
import Link from "next/link";
import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <>
      <div className=" flex justify-between items-center">
        <h1 className=" max-laptop:text-[72px] max-tablet:text-[40px] font-medium">
          Projects
        </h1>
        <Link
          href="https://twitter.com/_Mriganka_"
          target="_blank"
          className=" text-foreground underline decoration-customGreen underline-offset-[15px]  tracking-widest  hover:text-customGreen decoration-[3px] duration-300 ease-in-out"
        >
          <p className=" text-base hover:text-customGreen duration-500">
            CONTACT ME
          </p>
        </Link>
      </div>
      <div
        className=" flex  gap-10 items-center mt-20  flex-col justify-center"
        id="projects"
      >
        {projectList.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
