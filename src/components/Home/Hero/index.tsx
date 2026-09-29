"use client";

import AnimatedText from "@/components/AnimatedText";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import headshot from "../../../assets/Portfolio_Headshot.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden pt-40 md:pt-44 xl:pt-48"
    >
      <div className="mx-auto grid max-w-[1170px] items-center gap-12 px-4 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] xl:px-0">
        <div>
          <ScrollReveal direction="up">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-surface/60 px-4.5 py-2 text-sm font-medium text-ink">
              U.S. Army Veteran · Active Secret Clearance
            </span>
          </ScrollReveal>

          <AnimatedText
            as="h1"
            text="Hi, I'm Erik Larios — Full-Stack Developer."
            className="mb-6 block text-3xl font-extrabold text-ink sm:text-5xl xl:text-heading-1"
          />

          <ScrollReveal direction="up" delay={0.15}>
            <p className="mx-auto mb-9 max-w-[540px] font-medium text-ink/70 md:text-lg">
              CompTIA Security+ certified developer building responsive
              websites and React applications, with hands-on experience in
              HTML, CSS, JavaScript, and full-stack development.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="inline-flex rounded-lg bg-accent px-7 py-3 font-medium text-background duration-300 ease-in hover:opacity-85"
              >
                View My Work
              </Link>
              <Link
                href="/resume/Erik-Larios-Resume.pdf"
                target="_blank"
                className="inline-flex rounded-lg border border-ink/15 px-7 py-3 font-medium text-ink duration-300 ease-in hover:bg-surface/60"
              >
                Download Resume
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="left" delay={0.1}>
          <div className="relative mx-auto aspect-square w-full max-w-[380px]">
            <div className="absolute inset-4 -z-10 rounded-3xl bg-accent/15 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-ink/10 bg-surface/40 shadow-2xl">
              <Image
                src={headshot}
                alt="Erik Larios"
                fill
                sizes="(min-width: 1024px) 380px, 60vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
