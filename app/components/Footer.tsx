import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-zinc-100  dark:bg-black">
      <div className="flex max-laptop:flex-col max-w-screen-desktop mx-auto  px-[165px] py-20 max-laptop:px-[30px] max-tablet:px-3 justify-between gap-10">
        <div className="  w-1/2 max-laptop:w-full flex-col flex items-center">
          <h1 className=" max-tablet:text-[72px] font-medium">Contact</h1>
          <p className=" max-w-md mt-9">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <form
          className="w-1/2 flex flex-col gap-5 max-laptop:w-full items-center p-3"
          action="https://formsubmit.co/mrigankagogoiofficial@gmail.com"
          method="POST"
        >
          <input
            id="name"
            type="text"
            className="border-b border-foreground bg-transparent   p-5 text-xl w-full"
            placeholder="NAME"
          />
          <input
            id="name"
            type="email"
            className="border-b border-foreground bg-transparent p-5 text-xl w-full"
            placeholder="EMAIL"
          />
          <Textarea placeholder="MESSAGE" className="mt-5 h-52  p-5 text-xl" />
          <input type="hidden" name="_captcha" value="false" />
          <Button
            variant="default"
            className=" w-fit text-xl px-5 py-6 border-b border-white"
            type="submit"
          >
            SUBMIT
          </Button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
