export type SkillGroup = {
  id: number;
  title: string;
  skills: string[];
};

const skillsData: SkillGroup[] = [
  {
    id: 1,
    title: "Security",
    skills: [
      "Access Control",
      "Information Security Principles",
      "Risk Management",
      "Data Confidentiality (HIPAA)",
    ],
  },
  {
    id: 2,
    title: "Networking",
    skills: ["TCP/IP", "DNS", "DHCP", "VPN Fundamentals"],
  },
  {
    id: 3,
    title: "Programming",
    skills: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "React",
      "JSX",
      "Next.js",
      "Python (In Progress)",
    ],
  },
  {
    id: 4,
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Vite", "Browser DevTools"],
  },
];

export default skillsData;
