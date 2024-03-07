import React from "react";
import { skills } from "@/lib/constants";

const SkillsSection = () => {
  return (
    <div
      className=" grid gap-x-24 gap-y-20 grid-cols-3 max-tablet:grid-cols-2 max-mobile:grid-cols-1 max-mobile:gap-x-6 mb-[140px]
    justify-items-center max-tablet:gap-x-5 "
      id="skills"
    >
      {skills.map((skill) => (
        <div key={skill.id} className="skill flex flex-col items-center gap-3">
          {/* <h2 className=" max-tablet:text-[32px] font-medium">{skill.label}</h2> */}
          {React.createElement(skill.icon, {
            className: "text-6xl skill-icon",
          })}
          <p className=" max-tablet:text-sm text-customGrey">
            {skill.experience} Years Experience
          </p>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
