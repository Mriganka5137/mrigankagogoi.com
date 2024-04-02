"use client";
import { socialLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Theme from "@/components/theme-toggle";
import { usePathname } from "next/navigation";
import { SiUpwork } from "react-icons/si";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <div
      className=" max-w-screen-desktop mx-auto  px-[165px] py-9 flex justify-between max-laptop:px-[30px] relative max-tablet:px-4 bg-transparent "
      id="navbar"
    >
      <Link href="/" className=" z-10">
        <h3 className="logo">
          Mriganka <span className=" text-customGreen">gogoi</span>
        </h3>
      </Link>
      <div className=" flex justify-between gap-7 z-10 max-tablet:hidden items-center">
        {/* <Theme /> */}

        {pathname !== "/upwork" &&
          socialLinks.map((social) => (
            <Link
              href={social.href}
              key={social.id}
              target="_blank"
              className=""
            >
              <Image
                src={social.img_url}
                alt={social.label}
                width={25}
                height={25}
                className="nav-icons"
              />
            </Link>
          ))}
        <Link
          href="https://www.upwork.com/freelancers/mriganka"
          target="_blank"
        >
          <SiUpwork className="text-3xl text-customGreen hover:-translate-y-0.5 transition-transform duration-300 ease-in-out" />
        </Link>
      </div>
      <MobileMenu />
    </div>
  );
};

export default NavBar;
