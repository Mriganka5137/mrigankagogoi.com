import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  project: Project;
}

interface Project {
  id: number;
  label: string;
  img_url: string;
  live_link: string;
  github_link: string;
  tech: string[];
  details: string[];
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Card
      className=" flex items-start
       gap-3 overflow-hidden bg-zinc-100 dark:bg-stone-950   hover:border-customGreen transition-all duration-500 ease-in-out w-full max-tablet:flex-col hover:translate-x-2 p-5 min-h-96 shadow-md max-mobile:p-2"
      id="card"
    >
      <CardContent className="relative w-full h-[300px]  overflow-hidden ">
        <Image
          src={project.img_url}
          alt={project.label}
          fill
          className=" h-full w-full object-cover rounded-md "
        />

        <div className=" h-full w-full absolute bg-zinc-700  top-0 left-0 hover:opacity-80 uppercase flex flex-col justify-center items-center gap-10 underline decoration-customGreen decoration-2 underline-offset-8 opacity-0 cursor-pointer duration-500 max-tablet:hidden">
          <Link href={project.live_link} target="_blank" className="text-white">
            View Project
          </Link>
          <Link
            href={project.github_link}
            target="_blank"
            className="text-white"
          >
            View Code
          </Link>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col w-full   items-start  justify-between h-full  gap-5">
        <div className=" flex flex-col gap-3">
          <h4 className=" text-2xl uppercase">{project.label}</h4>
          <div className="  uppercase flex gap-5">
            {project.tech.map((ele, i) => (
              <p
                className=" text-sm text-customGreen max-tablet:text-xs"
                key={i}
              >
                {ele}
              </p>
            ))}
          </div>
          {project.details &&
            project.details.map((ele, i) => (
              <p
                className=" text-sm max-tablet:text-xs max-tablet:hidden text-gray-400"
                key={i}
              >
                {ele}
              </p>
            ))}
        </div>
        <div className=" uppercase flex gap-5  underline decoration-customGreen underline-offset-8 decoration-2">
          <Link href={project.live_link} target="_blank" className="">
            View Project
          </Link>
          <Link href={project.github_link} target="_blank" className="">
            View Code
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
