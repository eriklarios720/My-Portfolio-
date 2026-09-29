import AnimatedText from "@/components/AnimatedText";
import ScrollReveal from "@/components/ScrollReveal";
import projectsData from "./projectsData";

const Projects = () => {
  return (
    <section id="projects" className="relative z-10 py-20 lg:py-28">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <ScrollReveal direction="up">
          <AnimatedText
            as="h2"
            text="Selected Projects"
            className="mb-12 block text-2xl font-extrabold text-ink sm:text-4xl"
          />
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <ScrollReveal
              key={project.id}
              direction="up"
              delay={index * 0.1}
            >
              <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-surface/40 p-6 transition-colors duration-300 hover:bg-surface/60">
                <h3 className="mb-3 text-lg font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="mb-5 flex-1 text-sm font-medium text-ink/70">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {tech}
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

export default Projects;
