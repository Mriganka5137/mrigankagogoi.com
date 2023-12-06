import Image from "next/image";
import Link from "next/link";
import React from "react";
import github from "@/public/assets/images/icon-github.svg";
import frontendMentor from "@/public/assets/images/icon-frontend-mentor.svg";
import linkedin from "@/public/assets/images/icon-linkedin.svg";
import twitter from "@/public/assets/images/icon-twitter.svg";

const NavBar = () => {
  return (
    <nav className=" max-w-screen-2xl mx-auto border px-[165px] py-9 flex justify-between">
      <Link href="/">
        <h3>
          Mriganka <span className=" text-customGreen">gogoi</span>
        </h3>
      </Link>
      <div className=" flex justify-between gap-5">
        <Link href="https://github.com/Mriganka5137">
          <Image src={github} width={25} height={25} alt="github" />
        </Link>
        <Link href="https://github.com/Mriganka5137">
          <Image src={frontendMentor} width={25} height={25} alt="github" />
        </Link>
        <Link href="https://github.com/Mriganka5137">
          <Image src={linkedin} width={25} height={25} alt="github" />
        </Link>
        <Link href="https://github.com/Mriganka5137">
          <Image src={twitter} width={25} height={25} alt="github" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
