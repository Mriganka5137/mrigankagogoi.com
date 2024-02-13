import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { socialLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

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
      <SheetContent className=" w-20">
        <div className=" flex flex-col gap-5 justify-center items-center">
          <Link
            href="/blog"
            className=" mt-5 text-customGrey hover:text-customGreen  duration-300"
          >
            Blog
          </Link>
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
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
