import AnimatedText from "@/components/AnimatedText";
import ScrollReveal from "@/components/ScrollReveal";
import skillsData from "./skillsData";

const Skills = () => {
  return (
    <section id="skills" className="relative z-10 py-20 lg:py-28">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <ScrollReveal direction="up">
          <AnimatedText
            as="h2"
            text="Skills & Tools"
            className="mb-12 block text-2xl font-extrabold text-ink sm:text-4xl"
          />
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((group, index) => (
            <ScrollReveal
              key={group.id}
              direction="up"
              delay={index * 0.08}
            >
              <div className="h-full rounded-2xl border border-ink/10 bg-surface/40 p-6 transition-colors duration-300 hover:bg-surface/60">
                <h3 className="mb-4 text-lg font-semibold text-ink">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
