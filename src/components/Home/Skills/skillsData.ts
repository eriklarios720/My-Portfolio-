export type SkillGroup = {
  id: number;
  title: string;
  skills: string[];
};

const skillsData: SkillGroup[] = [
  {
    id: 1,
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "JSX"],
  },
  {
    id: 2,
    title: "React",
    skills: ["Components", "Props", "State", "Hooks", "Events"],
  },
  {
    id: 3,
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Vite", "DevTools"],
  },
  {
    id: 4,
    title: "Security",
    skills: ["Access Control", "InfoSec Principles", "Risk Management"],
  },
  {
    id: 5,
    title: "Networking",
    skills: ["TCP/IP", "DNS", "DHCP", "VPN Fundamentals"],
  },
  {
    id: 6,
    title: "Scripting & Database",
    skills: ["JavaScript", "Python (In Progress)", "MySQL (Planned)"],
  },
];

export default skillsData;
