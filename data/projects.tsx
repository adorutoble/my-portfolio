export type Project = {
  slug: string;
  title: string;
  type: string;
  description: string;
  overview: string;
  stack: string[];
  github?: string;
  demo?: string;
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Dynamic Matrix Skill",
    type: "Full-stack Web",
    description:
      "A web-based information system designed to streamline talent management and competence tracking within an organization.",
    overview: "Dynamic Skill Matrix is a web-based system for managing employee skills and competencies. It provides an interactive dashboard to track skill levels, identify skill gaps, and help management make better decisions about project assignments, training, and employee development.",
    stack: ["Laravel", "JavaScript", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/yourusername/project-one",
    demo: "https://project-one.example.com",
    images: ["/projects/dynamic-skill-matrix/dms (1).png", "/projects/dynamic-skill-matrix/dms (2).png", "/projects/dynamic-skill-matrix/dms (3).png","/projects/dynamic-skill-matrix/dms (4).png", "/projects/dynamic-skill-matrix/dms (5).png", "/projects/dynamic-skill-matrix/dms (6).png", "/projects/dynamic-skill-matrix/dms (7).png"],
  },

  {
    slug: "project-two",
    title: "FindU",
    type: "Full-stack Web",
    description:
      "A web platform designed to help high school graduates find the right university.",
    stack: ["Laravel", "JavaScript", "MySQL", "Tailwind CSS"],
    overview:"FindU is a platform designed to make university research easier for students. It brings university information, scholarship opportunities, and campus comparisons into one place, helping students make more informed decisions about their higher education",
    github: "https://github.com/yourusername/project-two",
    images: ["/projects/findu/findu1.png", "/projects/findu/findu2.png", "/projects/findu/findu3.png", "/projects/findu/findu4.png", "/projects/findu/findu5.png", "/projects/findu/findu6.png", "/projects/findu/findu7.png", "/projects/findu/findu8.png", "/projects/findu/findu9.png", "/projects/findu/findu10.png"],
  },

  {
    slug: "project-three",
    title: "Foodidie",
    type: "Full-stack Web",
    description:
      "A recipe website that helps users discover meals with detailed ingredients, cooking instructions, and nutritional information.",
    overview:"Foodidie is a recipe discovery website that allows users to explore different meals, view their ingredients and cooking instructions, and check nutritional information such as calories. The website uses the Spoonacular API to provide recipe and nutrition data in one place",
    stack: ["Laravel", "React", "PostgreSQL"],
    github: "https://github.com/yourusername/project-three",
    demo: "https://project-three.example.com",
    images: ["/projects/foodidie/foodidie1.png", "/projects/foodidie/foodidie2.png", "/projects/foodidie/foodidie3.png", "/projects/foodidie/foodidie4.png", "/projects/foodidie/foodidie5.png", "/projects/foodidie/foodidie6.png"],
  },

  {
    slug: "project-four",
    title: "BanduGo",
    type: "Mobile Application",
    description:
      "A mobile app that helps users discover and explore tourist destinations in Bandung based on their location and preferences.",
    overview:"BanduGo is a mobile app designed to help users discover tourist destinations in Bandung. Users can find nearby attractions, view details such as descriptions and ticket prices, and bookmark their favorite destinations for easy access",
    stack: ["Android Studio", "Java"],
    images: ["/projects/bdgo/BDGO.png", "/projects/bdgo/bdgo.jpg", "/projects/bdgo/bdgo2.jpg", "/projects/bdgo/bdgo3.jpg", "/projects/bdgo/bdgo4.jpg"],
  },

  {
    slug: "project-five",
    title: "ARSFix",
    type: "Web Application",
    description:
      "A web-based management system for handling the operations of a mobile and computer repair shop.",
    overview:"ARSFix is a web-based system designed to simplify the management of a mobile and computer repair shop. It provides tools for managing technicians, customers, spare parts, service orders, and transactions in one centralized system",
    stack: ["Laravel", "React"],
    images: ["/projects/arsfix/arsfix (1).png", "/projects/arsfix/arsfix (2).png", "/projects/arsfix/arsfix (3).png", "/projects/arsfix/arsfix (4).png", "/projects/arsfix/arsfix (5).png", "/projects/arsfix/arsfix (6).png", "/projects/arsfix/arsfix (7).png", "/projects/arsfix/arsfix (8).png", "/projects/arsfix/arsfix (9).png", "/projects/arsfix/arsfix (10).png", "/projects/arsfix/arsfix (11).png"],
  },

  {
    slug: "project-six",
    title: "TEPI",
    type: "Mobile Application",
    description:
      "A mobile learning app that uses augmented reality to help elementary school students with hearing impairments learn hand sign language.",
    overview:"TEPI (Teman Pintar Isyarat) is a mobile learning app designed to support elementary school students with hearing impairments in learning sign language. Using augmented reality, the app presents 3D hand signs for letters, providing a more interactive and engaging way to learn.",
    stack: ["Unity", "Java"],
    images: ["/projects/project-six/tepi1.jpg", "/projects/project-six/tepi2.jpg", "/projects/project-six/tepi3.jpg", "/projects/project-six/tepi4.jpg"],
  },

  {
    slug: "project-seven",
    title: "A Comparative Analysis of NMF and BERTopic in Topic Modeling of IKD",
    type: "Machine Learning Experiment",
    description:
      "A short description of the project and the problem it solves.",
    overview:"",
    stack: ["Non-Negative Matrix Factorization", "BERTopic"],
    images: [],
  },
];