export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "Barbershop Website",
    description:
      "A responsive business website with interactive features and mobile-friendly layouts built to help a local barbershop reach customers online.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "React Web Application",
    description:
      "A component-based application built with reusable components, props, state, and hooks to practice modern React patterns.",
    tech: ["React", "JavaScript", "Vite"],
  },
  {
    id: 3,
    title: "HTML/CSS Web Project",
    description:
      "A responsive multi-section website using semantic HTML and modern CSS layout techniques.",
    tech: ["HTML", "CSS"],
  },
];

export default projectsData;
