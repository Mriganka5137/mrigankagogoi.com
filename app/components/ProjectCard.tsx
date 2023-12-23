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
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Card className=" w-full tablet:w-[400px] flex flex-col items-center gap-3 overflow-hidden p-5 bg-secondary justify-between">
      <CardContent className="relative w-full h-[300px]  overflow-hidden">
        <Image
          src={project.img_url}
          alt={project.label}
          fill
          className=" h-full w-full object-cover rounded-md "
        />

        <div className=" h-full w-full absolute bg-customDarkGrey top-0 left-0 hover:opacity-80 uppercase flex flex-col justify-center items-center gap-10 underline decoration-customGreen decoration-2 underline-offset-8 opacity-0 cursor-pointer duration-500 max-tablet:hidden">
          <Link href={project.live_link} target="_blank">
            View Project
          </Link>
          <Link href={project.github_link} target="_blank">
            View Code
          </Link>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col justify-start items-start  gap-5  p-2 w-full min-h-[100px] max-h-fit">
        <div className=" flex flex-col gap-3">
          <h4 className=" text-lg uppercase">{project.label}</h4>
          <div className="  uppercase flex justify-between gap-5">
            {project.tech.map((ele, i) => (
              <p
                className=" text-sm text-customGreen max-tablet:text-xs"
                key={i}
              >
                {ele}
              </p>
            ))}
          </div>
        </div>
        <div className="tablet:hidden uppercase flex gap-5   underline decoration-customGreen underline-offset-8 decoration-2">
          <Link href={project.live_link} target="_blank">
            View Project
          </Link>
          <Link href={project.github_link} target="_blank">
            View Code
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
