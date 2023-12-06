import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <h1 className=" mt-32 max-w-3xl">
        Nice to meet you! I&apos;m{" "}
        <span className=" underline decoration-customGreen decoration-[5px] underline-offset-4">
          Mriganka Gogoi
        </span>
      </h1>
      <p className=" max-w-md mt-11 mb-16">
        Based in the India, I’m a Full Stack developer passionate about building
        accessible web apps that users love.
      </p>

      <Link
        href="https://twitter.com/_Mriganka_"
        className=" text-foreground underline decoration-customGreen underline-offset-[15px]  tracking-widest  hover:text-customGreen decoration-[3px] duration-300 ease-in-out"
      >
        CONTACT ME
      </Link>
    </div>
  );
};

export default Hero;
