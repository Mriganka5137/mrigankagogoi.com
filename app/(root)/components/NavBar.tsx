import Image from "next/image";
import Link from "next/link";
import React from "react";
import github from "@/public/assets/images/icon-github.svg";
import frontendMentor from "@/public/assets/images/icon-frontend-mentor.svg";
import linkedin from "@/public/assets/images/icon-linkedin.svg";
import twitter from "@/public/assets/images/icon-twitter.svg";
import HeroImage from "@/public/assets/images/profile2.jpeg";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  return (
    <div className=" max-w-screen-desktop mx-auto  px-[165px] py-9 flex justify-between max-laptop:px-[30px] relative ">
      <Link href="/" className=" z-10">
        <h3 className="">
          Mriganka <span className=" text-customGreen">gogoi</span>
        </h3>
      </Link>
      <div className=" flex justify-between gap-7 z-10 max-tablet:hidden">
        <Link href="https://github.com/Mriganka5137">
          <Image
            src={github}
            width={25}
            height={25}
            alt="github"
            className=""
          />
        </Link>
        <Link href="https://github.com/Mriganka5137">
          <Image
            src={frontendMentor}
            width={25}
            height={25}
            alt="frontend mentor"
          />
        </Link>
        <Link href="https://github.com/Mriganka5137">
          <Image src={linkedin} width={25} height={25} alt="linkedin" />
        </Link>
        <Link href="https://github.com/Mriganka5137">
          <Image src={twitter} width={25} height={25} alt="twitter" />
        </Link>
      </div>
      <MobileMenu />
      <div className=" brightness-50 absolute top-32 right-[165px] max-laptop:hidden ">
        <Image
          src={HeroImage}
          alt="hero Image"
          className=" w-[380px] h-[600px] opacity-75 "
        />
      </div>
    </div>
  );
};

export default NavBar;
