import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { ExperienceSection } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Skills } from "@/components/skills";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Work />
        <About />
        <ExperienceSection />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
