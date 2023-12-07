import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import github from "@/public/assets/images/icon-github.svg";
import frontendMentor from "@/public/assets/images/icon-frontend-mentor.svg";
import linkedin from "@/public/assets/images/icon-linkedin.svg";
import twitter from "@/public/assets/images/icon-twitter.svg";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className=" tablet:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </SheetTrigger>
      <SheetContent className=" w-32">
        <div className=" flex flex-col gap-5 justify-center items-center">
          <p className=" mt-5 text-customGreen ">Connect</p>
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
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
