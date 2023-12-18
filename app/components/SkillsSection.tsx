import React from "react";
import { skills } from "@/lib/constants";
const SkillsSection = () => {
  return (
    <div
      className=" grid gap-24  grid-cols-3 max-tablet:grid-cols-2 max-mobile:grid-cols-1 max-mobile:gap-6  mb-[140px]
    justify-items-center
    "
    >
      {skills.map((skill) => (
        <div key={skill.id} className="">
          <h2 className=" max-tablet:text-[32px] font-medium">{skill.label}</h2>
          <p className=" max-tablet:text-sm text-customGrey">
            {skill.experience} Years Experience
          </p>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
