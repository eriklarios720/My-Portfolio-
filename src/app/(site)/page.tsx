import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Experience from "@/components/Home/Experience";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Skills from "@/components/Home/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
