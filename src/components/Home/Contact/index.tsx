"use client";

import { useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const [emailOpen, setEmailOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const email = "erik.larios720@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("Email copied.");
    } catch {
      setCopyStatus("Copy failed. Select the address above.");
    }
  };

  return (
    <section id="contact" className="relative z-10 py-20 lg:py-28">
      <div className="mx-auto max-w-[720px] px-4 text-center sm:px-8 xl:px-0">
        <ScrollReveal direction="up">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-accent">
            Get In Touch
          </span>
          <AnimatedText
            as="h2"
            text="Let's Work Together"
            className="mb-4 block text-3xl font-extrabold text-ink sm:text-5xl"
          />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <p className="mb-9 text-lg font-medium text-ink/70 md:text-xl">
            Open to full-stack development and cybersecurity opportunities.
            Reach out and let&apos;s talk about how I can help build or
            secure your next project.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="relative">
              <button
                type="button"
                aria-expanded={emailOpen}
                aria-controls="email-contact-panel"
                onClick={() => setEmailOpen((open) => !open)}
                className="inline-flex rounded-lg bg-accent px-7 py-3 text-lg font-medium text-background duration-300 ease-in hover:opacity-85"
              >
                {email}
              </button>
              {emailOpen && (
                <div
                  id="email-contact-panel"
                  className="absolute left-1/2 top-full z-20 mt-3 w-72 max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-lg border border-ink/15 bg-surface p-4 text-left shadow-lg"
                >
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent">
                    My email address
                  </p>
                  <p className="mb-3 break-all text-base font-medium text-ink">
                    {email}
                  </p>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="rounded-md border border-ink/20 px-3 py-1.5 text-sm font-medium text-ink duration-200 hover:border-accent"
                  >
                    Copy email
                  </button>
                  <span aria-live="polite" className="ml-2 text-sm text-ink/70">
                    {copyStatus}
                  </span>
                </div>
              )}
            </div>
            <a
              href="tel:2108952039"
              className="inline-flex rounded-lg border border-ink/15 px-7 py-3 text-lg font-medium text-ink duration-300 ease-in hover:border-accent"
            >
              210-895-2039
            </a>
            <span className="rounded-lg border border-ink/15 px-7 py-3 text-lg font-medium text-ink">
              Colorado Springs, CO
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
