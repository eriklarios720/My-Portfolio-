export type SkillGroup = {
  id: number;
  title: string;
  skills: string[];
};

const skillsData: SkillGroup[] = [
  {
    id: 1,
    title: "IT Support",
    skills: [
      "Windows 10/11",
      "Microsoft 365 (Outlook, Teams, Word, Excel)",
      "Hardware & Software Troubleshooting",
    ],
  },
  {
    id: 2,
    title: "Security",
    skills: [
      "Access Control",
      "Information Security Principles",
      "Risk Management",
      "Data Confidentiality (HIPAA)",
    ],
  },
  {
    id: 3,
    title: "Networking",
    skills: ["TCP/IP", "DNS", "DHCP", "VPN Fundamentals"],
  },
  {
    id: 4,
    title: "Programming",
    skills: [
      "Python",
      "JavaScript",
      "HTML5",
      "CSS3",
      "React",
      "JSX",
      "Next.js",
    ],
  },
  {
    id: 5,
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Vite", "Browser DevTools"],
  },
];

export default skillsData;
