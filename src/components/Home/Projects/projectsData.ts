export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  href: string;
  linkLabel?: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "Furniture Website",
    description:
      "A furniture and landscape website featuring an immersive video hero and service cards for outdoor spaces.",
    tech: ["HTML", "CSS", "JavaScript"],
    href: "/projects/Furniture-website/index.html",
  },
  {
    id: 2,
    title: "Barbershop Website",
    description:
      "A responsive business website with interactive features and mobile-friendly layouts; source code and version history managed with Git and GitHub.",
    tech: ["HTML", "CSS", "JavaScript", "Git"],
    href: "/projects/barbershop/index.html",
  },
  {
    id: 3,
    title: "The Beans Place",
    description:
      "A component-based React coffee shop app built with reusable components, props, state, and hooks; debugged and tested with browser DevTools.",
    tech: ["React", "JavaScript", "Vite", "Tailwind CSS"],
    href: "/projects/beans-place/index.html",
  },
  {
    id: 4,
    title: "Personal Portfolio",
    description:
      "This site: a personal portfolio built in Next.js and React to present technical projects and professional background.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    href: "https://github.com/eriklarios720/My-Portfolio-",
    linkLabel: "View source on GitHub",
  },
];

export default projectsData;
