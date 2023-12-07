import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-customDarkGrey  ">
      <div className="flex max-laptop:flex-col max-w-screen-desktop mx-auto  px-[165px] py-20 max-laptop:px-[30px] max-tablet:px-3">
        <div className=" max-laptop:text-center">
          <h1 className=" max-tablet:text-[72px] font-medium">Contact</h1>
          <p className=" max-w-md mt-9">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
