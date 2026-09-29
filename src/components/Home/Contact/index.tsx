import AnimatedText from "@/components/AnimatedText";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  return (
    <section id="contact" className="relative z-10 py-20 lg:py-28">
      <div className="mx-auto max-w-[720px] px-4 text-center sm:px-8 xl:px-0">
        <ScrollReveal direction="up">
          <AnimatedText
            as="h2"
            text="Let's Work Together"
            className="mb-4 block text-2xl font-extrabold text-ink sm:text-4xl"
          />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <p className="mb-9 font-medium text-ink/70 md:text-lg">
            Open to full-stack development opportunities. Reach out and
            let&apos;s talk about how I can help build your next project.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:erik.larios720@gmail.com"
              className="inline-flex rounded-lg bg-accent px-7 py-3 font-medium text-background duration-300 ease-in hover:opacity-85"
            >
              erik.larios720@gmail.com
            </a>
            <span className="rounded-lg border border-ink/15 px-7 py-3 font-medium text-ink">
              Colorado Springs, CO
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
