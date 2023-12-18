import { socialLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { ModeToggle } from "@/components/theme-toggle";

const NavBar = () => {
  return (
    <div className=" max-w-screen-desktop mx-auto  px-[165px] py-9 flex justify-between max-laptop:px-[30px] relative max-tablet:px-4">
      <Link href="/" className=" z-10">
        <h3 className="">
          Mriganka <span className=" text-customGreen">gogoi</span>
        </h3>
      </Link>
      <div className=" flex justify-between gap-7 z-10 max-tablet:hidden items-center">
        {/* <Link
          href="/blog"
          className=" text-customGrey hover:text-customGreen  duration-300"
        >
          Blog
        </Link> */}
        {/* <ModeToggle /> */}
        {socialLinks.map((social) => (
          <Link href={social.href} key={social.id} target="_blank" className="">
            <Image
              src={social.img_url}
              alt={social.label}
              width={25}
              height={25}
              className=""
            />
          </Link>
        ))}
      </div>
      <MobileMenu />
    </div>
  );
};

export default NavBar;
