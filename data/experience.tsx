export type ExperienceItem = {
  year: string;
  position: string;
  company: string;
  location?: string;
  description?: string;
};

export const experiences: ExperienceItem[] = [
  {
    year: "September 2025 - December 2025",
    position: "Front-End Developer Intern",
    company: "PT Dirgantara Indonesia",
    location: "Bandung, Indonesia",
    description:
      "Developed responsive and interactive website interfaces by translating UI/UX designs into code, integrating front-end with back-end systems, and performing debugging, testing, and maintenance",
  },
  {
    year: "February 2024",
    position: "Data Entry Volunteer",
    company: "Tim Tabulasi DPC Baleendah",
    location: "Bandung, Indonesia",
    description:
      "Managed and verified vote-counting data accurately and systematically, while ensuring data quality, meeting deadlines, and maintaining information confidentiality",
  },
  {
    year: "October 2020 - December 2020",
    position: "Web Operator Intern",
    company: "TOP ARMY",
    location: "Bandung, Indonesia",
    description:
      "Managed website content and product catalogs, maintained page layouts, and performed regular updates and basic maintenance to keep the website accurate and up to date",
  },
];