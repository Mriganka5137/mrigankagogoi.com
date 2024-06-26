import Hero from "../_components/Hero";
import ProjectsSection from "../_components/ProjectsSection";
import SkillsSection from "../_components/SkillsSection";

export default function Home() {
  return (
    <main className=" max-w-screen-desktop mx-auto  px-[165px] pb-20 max-laptop:px-[30px]  z-30 relative max-tablet:px-[16px] font-spaceGrotesk">
      <Hero />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}
