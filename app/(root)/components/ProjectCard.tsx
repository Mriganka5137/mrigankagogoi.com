import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
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
    <Card className=" mt-16">
      <CardContent>
        <div className="">
          <Image
            src={project.img_url}
            alt={project.label}
            width={600}
            height={600}
            className="object"
          />
        </div>
      </CardContent>
      <CardFooter>
        <div className=" flex flex-col gap-3">
          <h4 className=" text-lg uppercase">{project.label}</h4>
          <div className=" flex gap-5 uppercase">
            {project.tech.map((ele, i) => (
              <p className=" text-sm text-customGreen" key={i}>
                {ele}
              </p>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
