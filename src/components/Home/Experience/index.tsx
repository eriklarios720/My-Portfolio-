import AnimatedText from "@/components/AnimatedText";
import ScrollReveal from "@/components/ScrollReveal";
import experienceData from "./experienceData";

const Experience = () => {
  return (
    <section id="experience" className="relative z-10 py-20 lg:py-28">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <ScrollReveal direction="up">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-accent">
            Career
          </span>
          <AnimatedText
            as="h2"
            text="Experience"
            className="mb-12 block text-3xl font-extrabold text-ink sm:text-5xl"
          />
        </ScrollReveal>

        <div className="flex flex-col gap-6">
          {experienceData.map((item, index) => (
            <ScrollReveal key={item.id} direction="up" delay={index * 0.1}>
              <div className="rounded-2xl border border-ink/10 bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-semibold text-ink md:text-2xl">
                    {item.role}
                  </h3>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                    {item.period}
                  </span>
                </div>
                <p className="mb-4 text-lg font-medium text-ink/80">
                  {item.organization}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-base font-medium text-ink/70"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
