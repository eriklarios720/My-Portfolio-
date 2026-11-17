import ScrollReveal from "@/components/ScrollReveal";
import AnimatedText from "@/components/AnimatedText";

type Certification = {
  label: string;
  verify?: { text: string; href: string }[];
};

const credly = (id: string) => `https://www.credly.com/badges/${id}/public_url`;

const certifications: Certification[] = [
  { label: "Secret Security Clearance — Current, eligible for reinstatement" },
  {
    label: "CompTIA Security+ — Active, exp. Mar 2029",
    verify: [{ text: "Security+", href: credly("e46de20a-07dc-4f45-a0ad-91877ea5dc1e") }],
  },
  {
    label: "COITB Development Certifications: Python, JavaScript, React, HTML/CSS",
    verify: [
      { text: "JavaScript", href: credly("066c5656-0487-44b5-90dc-2073db118b3c") },
      { text: "React", href: credly("8a7980b7-90ab-4bf9-82c8-83afe4328207") },
      { text: "HTML/CSS", href: credly("0ef7c33f-476a-447f-996b-38fae58e8e88") },
    ],
  },
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
              Army veteran and former Sergeant (E-5) with a Secret clearance
              eligible for reinstatement and active CompTIA Security+, ready to start cleared
              work quickly. In Iraq I trained 50+ people with no
              medical background to a 90% first-attempt pass rate and stood up a
              backup treatment facility in 10 days. I bring the same habits to
              IT: learning systems fast, documenting precisely, and protecting
              sensitive data, with 100+ confidential records handled over 5+
              years and zero breaches. I write JavaScript, React, and Python.
              Seeking an entry-level IT support or cybersecurity role on a
              defense or federal team.
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
                    key={item.label}
                    className="flex items-start gap-2.5 text-base font-medium text-ink/80"
                  >
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span>
                      {item.label}
                      {item.verify && (
                        <span className="mt-1 block text-sm">
                          <span className="text-ink/60">Verify on Credly: </span>
                          {item.verify.map((link, i) => (
                            <span key={link.href}>
                              {i > 0 && <span className="text-ink/40"> · </span>}
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-accent underline-offset-2 hover:underline"
                              >
                                {link.text}
                              </a>
                            </span>
                          ))}
                        </span>
                      )}
                    </span>
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
