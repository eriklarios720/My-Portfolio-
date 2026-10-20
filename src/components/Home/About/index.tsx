import ScrollReveal from "@/components/ScrollReveal";
import AnimatedText from "@/components/AnimatedText";

const certifications = [
  "Secret Security Clearance",
  "CompTIA Security+",
  "HTML/CSS Certification",
  "JavaScript Certification",
  "React Certification",
  "Python Course — In Progress",
  "MySQL / Database Course — Planned",
];

const About = () => {
  return (
    <section id="about" className="relative z-10 py-20 lg:py-28">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <ScrollReveal direction="up">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-accent">
            About
          </span>
          <AnimatedText
            as="h2"
            text="About Me"
            className="mb-4 block text-3xl font-extrabold text-ink sm:text-5xl"
          />
        </ScrollReveal>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <ScrollReveal direction="up" delay={0.1}>
            <p className="max-w-[640px] text-lg font-medium text-ink/70 md:text-xl">
              U.S. Army veteran and former Sergeant (E-5) with over five years
              of service, a Secret Security Clearance, and CompTIA Security+
              certification. I bring a foundation in networking (TCP/IP, DNS,
              DHCP), access control, and risk management, plus hands-on
              scripting and development experience. Proven leader in
              high-pressure, detail-critical environments, including a combat
              deployment to Iraq. Seeking entry-level IT support or
              cybersecurity opportunities.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2}>
            <div className="rounded-2xl border border-ink/10 bg-background p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-ink">
                Certifications &amp; Clearance
              </h3>
              <ul className="flex flex-col gap-3">
                {certifications.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-base font-medium text-ink/80"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
