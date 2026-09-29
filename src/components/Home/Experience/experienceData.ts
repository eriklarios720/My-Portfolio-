export type ExperienceItem = {
  id: number;
  role: string;
  organization: string;
  period: string;
  bullets: string[];
};

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: "Sergeant (E-5) | Licensed Practical Nurse (LPN/LVN)",
    organization: "U.S. Army",
    period: "Combat deployment to Iraq",
    bullets: [
      "Served honorably in the U.S. Army, including a combat deployment to Iraq.",
      "Led and collaborated with personnel in high-tempo environments requiring accountability, accuracy, and sound decision-making.",
      "Handled sensitive information while maintaining military security and confidentiality requirements.",
      "Maintained accurate documentation while following strict procedures and regulatory standards.",
    ],
  },
];

export default experienceData;
