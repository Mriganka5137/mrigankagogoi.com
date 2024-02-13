import { ContactForm } from "@/components/contact-form";

const Footer = () => {
  return (
    <footer className=" bg-zinc-100  dark:bg-black">
      <div className="flex max-laptop:flex-col max-w-screen-desktop mx-auto  px-[100px] py-20 max-laptop:px-[30px] max-tablet:px-3 justify-between gap-10">
        <div className="  w-1/2 max-laptop:w-full flex-col flex items-center">
          <h1 className=" max-tablet:text-[72px] font-medium">Contact</h1>
          <p className=" max-w-md mt-9">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <ContactForm />
      </div>
    </footer>
  );
};

export default Footer;
