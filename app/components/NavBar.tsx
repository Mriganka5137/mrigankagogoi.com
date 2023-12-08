import { socialLinks } from "@/lib/constants";
import HeroImage from "@/public/assets/images/profile2.jpeg";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  return (
    <div className=" max-w-screen-desktop mx-auto  px-[165px] py-9 flex justify-between max-laptop:px-[30px] relative max-tablet:px-4">
      <Link href="/" className=" z-10">
        <h3 className="">
          Mriganka <span className=" text-customGreen">gogoi</span>
        </h3>
      </Link>
      <div className=" flex justify-between gap-7 z-10 max-tablet:hidden">
        {socialLinks.map((social) => (
          <Link href={social.href} key={social.id} target="_blank">
            <Image
              src={social.img_url}
              alt={social.label}
              width={25}
              height={25}
            />
          </Link>
        ))}
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
