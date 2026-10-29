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
    role: "Sergeant (E-5), U.S. Army",
    organization:
      "2nd Forward Resuscitative Surgical Detachment | Licensed Practical Nurse",
    period: "Nov 2020 – May 2026",
    bullets: [
      "Iraq deployment: Mar – Dec 2024. Awarded the Army Commendation Medal with “C” Device.",
      "Qualified 50+ soldiers and civilians with no medical background in Combat Lifesaver skills, with a 90% first-attempt pass rate, by designing and teaching classroom and hands-on casualty-care courses during a combat deployment.",
      "Stood up a fully equipped backup treatment facility in 10 days, so casualty care could continue if the primary site went down, by planning the layout, inventorying supplies and equipment, and running pre-operation readiness checks.",
      "Maintained 100+ patient and personnel records with zero confidentiality breaches over 5+ years by enforcing HIPAA and military access-control rules on who could view, edit, and release sensitive data.",
      "Kept a team of 3–4 soldiers at full training and accountability compliance through a 10-month deployment by tracking certification deadlines, scheduling training, and auditing readiness records.",
    ],
  },
];

export default experienceData;
