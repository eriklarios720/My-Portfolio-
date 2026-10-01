export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  href: string;
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
      "A responsive business website with interactive features and mobile-friendly layouts built to help a local barbershop reach customers online.",
    tech: ["HTML", "CSS", "JavaScript"],
    href: "/projects/barbershop/index.html",
  },
  {
    id: 3,
    title: "The Beans Place",
    description:
      "A coffee shop website showcasing specialty beans, product collections, and a welcoming storefront experience.",
    tech: ["React", "Vite", "Tailwind CSS"],
    href: "/projects/beans-place/index.html",
  },
];

export default projectsData;
