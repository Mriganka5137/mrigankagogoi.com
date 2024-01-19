"use client";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // const container = useRef(null);
  // useGSAP(
  //   () => {
  //     const tl = gsap.timeline();
  //     tl.from("#hero", {
  //       scrollTrigger: {
  //         trigger: "#hero",
  //         start: "top center",
  //         scrub: 1,
  //       },
  //       x: -100,
  //       opacity: 0,
  //       duration: 1,
  //     });
  //     tl.from("#skills div", {
  //       x: -100,
  //       opacity: 0,
  //       duration: 1,
  //     });
  //     tl.from("#projects", {
  //       x: -100,
  //       opacity: 0,
  //       duration: 1,
  //       stagger: 1,
  //     });
  //   },

  //   { scope: container }
  // );

  return (
    <main className=" max-w-screen-desktop mx-auto border-green-200 px-[165px] pb-20 max-laptop:px-[30px]  z-30 relative max-tablet:px-[16px] border">
      <Hero />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}
