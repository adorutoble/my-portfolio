export type Certification = {
  title: string;
  description: string;
  file: string;
};

export const certifications: Certification[] = [
  {
    title: "TOEFL",
    description: "English Proficiency · Score 527",
    file: "/certificate/TOEFL.jpg",
  },
  {
    title: "BNSP Data Analyst",
    description: "Professional Certification",
    file: "/certificate/BNSP.jpg",
  },
  {
    title: "Cisco Certification",
    description: "CCNA: Introduction to Networks",
    file: "/certificate/cisco.pdf",
  },
  {
    title: "Computer Hardware",
    description: "Hardware Certification",
    file: "/certificate/Hardware.jpg",
  },
  {
    title: "Scholarship",
    description: "Beasiswa Afirmasi Pemprov Jabar 2024",
    file: "/certificate/beasiswa.jpg",
  },
];