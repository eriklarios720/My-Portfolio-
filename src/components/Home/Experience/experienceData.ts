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
    period: "Nov 2020 – May 2026",
    bullets: [
      "Iraq deployment: March – December 2024. Awarded the Army Commendation Medal with “C” Device.",
      "Supervised 3–4 soldiers, overseeing training and personnel accountability in a small Army medical unit (2nd Forward Resuscitative Surgical Detachment).",
      "Trained 50+ soldiers and civilians with no prior medical experience in Combat Lifesaver (CLS) skills through classroom presentations and hands-on casualty-care instruction during deployment to Iraq.",
      "Collaborated with a medical team to establish an alternate treatment facility in Iraq; planned the setup, organized supplies, prepared equipment, and verified readiness to support casualty care and damage-control resuscitation if the primary facility became unusable.",
      "Safeguarded sensitive patient and personnel information and maintained accurate documentation in accordance with military confidentiality requirements and established procedures (HIPAA).",
    ],
  },
];

export default experienceData;
