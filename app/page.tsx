import { AboutSection } from "@/components/sections/about-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { OpenToSection } from "@/components/sections/open-to-section";
import { PlaygroundSection } from "@/components/sections/playground-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ResearchPlaygroundSection } from "@/components/sections/research-playground-section";
import { ResearchSection } from "@/components/sections/research-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { BackgroundSystem } from "@/components/background-system";
import { CommandPalette } from "@/components/command-palette";
import { CursorGlow } from "@/components/cursor-glow";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ScrollProgress />
      <CursorGlow />
      <BackgroundSystem />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ResearchPlaygroundSection />
      <ExperienceSection />
      <AchievementsSection />
      <ResearchSection />
      <PlaygroundSection />
      <OpenToSection />
      <ContactSection />
      <Footer />
      <CommandPalette />
    </main>
  );
}
