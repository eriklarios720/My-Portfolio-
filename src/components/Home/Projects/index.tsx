import AnimatedText from "@/components/AnimatedText";
import ScrollReveal from "@/components/ScrollReveal";
import projectsData from "./projectsData";

const Projects = () => {
  return (
    <section id="projects" className="relative z-10 py-20 lg:py-28">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <ScrollReveal direction="up">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-accent">
            Portfolio
          </span>
          <AnimatedText
            as="h2"
            text="Selected Projects"
            className="mb-12 block text-3xl font-extrabold text-ink sm:text-5xl"
          />
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <ScrollReveal
              key={project.id}
              direction="up"
              delay={index * 0.1}
            >
              <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-surface/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-surface/60 hover:shadow-lg">
                <span className="mb-3 inline-flex size-9 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent">
                  0{index + 1}
                </span>
                <h3 className="mb-3 text-xl font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="mb-5 flex-1 text-base font-medium text-ink/70">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 w-fit font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-ink"
                >
                  View project
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
