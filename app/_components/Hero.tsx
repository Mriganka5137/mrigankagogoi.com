"use client";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/public/assets/images/profile2.jpeg";
import { usePathname } from "next/navigation";

const Hero = () => {
  const path = usePathname();
  return (
    <div
      className="border-b-[1px] border-white pb-52 mb-10  gap-5  flex flex-col  max-tablet:items-center max-tablet:text-center max-laptop:pb-32 max-tablet:pb-24 "
      id="hero"
    >
      <h1
        className=" mt-32 max-w-3xl z-10 max-tablet:mt-10 font-medium"
        data-scroll
        data-scroll-speed="0.9"
      >
        Nice to meet you! I&apos;m{" "}
        <span className=" underline decoration-customGreen decoration-[5px] underline-offset-4">
          Mriganka Gogoi
        </span>
      </h1>
      <p className=" max-w-md mt-11 mb-16">
        In the heart of India, I thrive as a Full Stack developer, channeling my
        passion into the creation of web applications that prioritize
        accessibility and are designed to be cherished by users.
      </p>

      <Link
        href={
          path === "/upwork"
            ? "https://www.upwork.com/freelancers/mriganka"
            : "https://twitter.com/_Mriganka_"
        }
        target="_blank"
        className=" text-foreground underline decoration-customGreen underline-offset-[15px]  tracking-widest  hover:text-customGreen decoration-[3px] duration-300 ease-in-out w-fit"
      >
        CONTACT ME
      </Link>
      {/* <div
        className="brightness-50 absolute top-32 right-[165px] max-[1300px]:hidden overflow-hidden rounded-full "
        data-scroll
        data-scroll-speed="0.3"
      >
        <Image
          src={HeroImage}
          alt="hero Image"
          className=" w-[380px] h-[380px] opacity-60 object-cover rounded-full  hover:opacity-100 cursor-move duration-500 hover:scale-110 
          "
        />
      </div> */}
    </div>
  );
};

export default Hero;
