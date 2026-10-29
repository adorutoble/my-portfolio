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
  background?: string;
  role?: string;
  contributions?: string[];
  process?: string[];
  outcome?: string;
};

export const projects: Project[] = [
{
  slug: "project-one",
  title: "Dynamic Skill Matrix",
  type: "Web Application",

  description:
    "A web-based information system for employee competency management and skill tracking.",

  overview:
    "Dynamic Skill Matrix is a web-based application designed to support employee competency management at PT Dirgantara Indonesia. It brings together employee skill information, training records, competency approval workflows, and reporting to support competency management across the organization.",

  background:
    "Dynamic Skill Matrix was developed as part of the company's Research and Development (R&D) activities during a internship program at PT Dirgantara Indonesia, an Indonesian state-owned aerospace company. The project was carried out by our team of three students under the guidance of a company manager. The application was designed to support competency management across the organization, with the Training and Education (Diklat) function managing the application and supervisors and managers involved in assigning and approving employee competencies within their respective divisions. Employees were also included among the intended users of the system.",

  role: "UI/UX Designer & Frontend Developer Intern",

  contributions: [
    "Designed the user interface and user experience based on application requirements and user needs.",
    "Collaborated with the company manager to refine interface designs according to the company's operational requirements.",
    "Translated UI/UX designs into functional website interfaces using frontend technologies.",
    "Implemented frontend components and contributed to backend logic for the competency approval workflow, including manager confirmation.",
    "Contributed to frontend-backend integration to support application workflows.",
    "Participated in application testing and validation, helping identify issues and refine the implementation."
  ],

  process: [
    "Reviewed application requirements and discussed user and operational needs with the company manager.",
    "Designed interface layouts and interaction flows for employee competency management.",
    "Refined the designs based on feedback and the company's requirements.",
    "Implemented the approved designs using frontend technologies within the Laravel application.",
    "Developed the frontend interface and contributed to backend processing for competency approval and manager confirmation.",
    "Tested and validated application functionality, then refined the implementation based on identified issues and feedback."
  ],

  outcome:
    "Contributed to the development and testing of a web-based employee competency management application covering skill tracking, training records, competency approval workflows, and reporting. The application had undergone testing and validation but had not yet been deployed for operational use at the end of the project.",

  stack: [
    "Laravel",
    "PHP",
    "JavaScript",
    "Tailwind CSS",
    "MySQL"
  ],

  github: "https://github.com/adorutoble/dynamic-skills-matrix",

  images: [
    "/projects/dynamic-skill-matrix/dms (1).png",
    "/projects/dynamic-skill-matrix/dms (2).png",
    "/projects/dynamic-skill-matrix/dms (3).png",
    "/projects/dynamic-skill-matrix/dms (4).png",
    "/projects/dynamic-skill-matrix/dms (5).png",
    "/projects/dynamic-skill-matrix/dms (6).png",
    "/projects/dynamic-skill-matrix/dms (7).png"
  ],
},

{
  slug: "project-two",
  title: "FindU",
  type: "Full-stack Web Application",

  description:
    "A web platform that helps high school graduates explore universities, scholarship opportunities, and higher education options.",

  overview:
    "FindU is a web platform designed to simplify university research for prospective students. It brings university information, scholarship opportunities, and campus comparisons into one place, helping students make more informed decisions about their higher education.",

  background:
    "FindU was developed as a three-month team project for a Software Engineering (Rekayasa Perangkat Lunak) course. The project involved five team members and addressed the challenge prospective students face when researching universities, comparing higher education options, and finding scholarship opportunities. The development process began with team brainstorming and a design sprint, followed by UI/UX design, frontend implementation, documentation, and application testing with five users.",

  role: "Frontend Developer",

  contributions: [
    "Independently implemented the frontend interface across the project, translating the UI/UX designs created by a teammate into functional website pages.",
    "Developed page layouts and interactive interface components using JavaScript and Tailwind CSS.",
    "Integrated frontend components with application functionality within the Laravel-based web application.",
    "Collaborated with the five-member team throughout development to align the implementation with the agreed designs and project requirements."
  ],

  process: [
    "Participated in team brainstorming and a design sprint to establish the project direction and identify prospective students' needs.",
    "Worked from the UI/UX designs prepared by a teammate as the basis for frontend implementation.",
    "Implemented the website interfaces in code, handling the frontend development independently.",
    "Worked alongside the team as other members prepared project documentation and supporting deliverables.",
    "Participated in application testing involving five users to evaluate the developed application."
  ],

  outcome:
    "Delivered the frontend implementation for FindU as part of a three-month academic team project. The application underwent user testing with five participants, providing an opportunity to evaluate the implemented platform before the project concluded.",

  stack: [
    "Laravel",
    "JavaScript",
    "MySQL",
    "Tailwind CSS",
    "PHP"
  ],

  github: "https://github.com/adorutoble/findu",

  images: [
    "/projects/findu/findu1.png",
    "/projects/findu/findu2.png",
    "/projects/findu/findu3.png",
    "/projects/findu/findu4.png",
    "/projects/findu/findu5.png",
    "/projects/findu/findu6.png",
    "/projects/findu/findu7.png",
    "/projects/findu/findu8.png",
    "/projects/findu/findu9.png",
    "/projects/findu/findu10.png",
  ],
},

{
  slug: "project-three",
  title: "Foodidie",
  type: "Full-stack Web Application",

  description:
    "A recipe discovery website featuring cooking instructions, ingredients, and nutritional information.",

  overview:
    "Foodidie is a recipe discovery website that allows users to explore different meals, view their ingredients and cooking instructions, and check nutritional information such as calorie content. The application uses the Spoonacular API to retrieve recipe and nutritional data.",

  background:
    "Foodidie was developed as part of a university course in Internet Technology Implementation (Penerapan Teknologi Internet). The project was carried out by a team of three students and focused on building a web-based recipe discovery platform that brings recipe information, ingredients, cooking instructions, and nutritional details together in one place.",

  role: "Frontend Developer",

  contributions: [
    "Implemented the frontend interface for browsing and discovering recipes.",
    "Developed recipe detail views to present ingredients, cooking instructions, and nutritional information.",
    "Built interactive website interfaces using React and frontend technologies.",
    "Contributed to integrating recipe interfaces with data retrieved from the Spoonacular API."
  ],

  process: [
    "Reviewed the information and features needed to support recipe discovery and viewing.",
    "Used the available UI/UX designs as a reference for implementing the website interface.",
    "Developed the frontend pages and interactive components using React.",
    "Integrated recipe data from the Spoonacular API into the interface to display recipe details and nutritional information."
  ],

  outcome:
    "Developed the frontend interface for a recipe discovery website that presents recipe details, ingredients, cooking instructions, and nutritional information sourced from the Spoonacular API.",

  stack: [
    "Laravel",
    "React",
    "MySQL",
  ],

  github: "https://github.com/Konanxd/Foodidie",

  images: [
    "/projects/foodidie/foodidie1.png",
    "/projects/foodidie/foodidie2.png",
    "/projects/foodidie/foodidie3.png",
    "/projects/foodidie/foodidie4.png",
    "/projects/foodidie/foodidie5.png",
    "/projects/foodidie/foodidie6.png",
  ],
},

  {
    slug: "project-four",
    title: "BanduGo",
    type: "Mobile Application",

    description:
      "A mobile application that helps users discover tourist destinations in Bandung based on their location and interests.",

    overview:
      "BanduGo is a mobile application designed to help users discover tourist destinations in Bandung. Users can find nearby attractions, view details such as descriptions and ticket prices, and bookmark their favorite destinations for easy access.",

    background:
      "Travelers exploring Bandung may need a convenient way to discover nearby attractions and compare destination information before visiting. BanduGo was developed to bring location-based recommendations, destination details, and saved places into a single mobile experience.",

    role: "UI/UX Designer & Frontend Developer",

    contributions: [
      "Designed the mobile user interface and user experience for discovering tourist destinations.",
      "Organized destination details, including descriptions and ticket prices, into accessible information layouts.",
      "Implemented mobile application screens and interactive components using Java.",
      "Contributed to the implementation of nearby destination discovery and bookmarking interfaces.",
    ],

    process: [
      "Identified the main user needs when discovering and planning visits to tourist destinations.",
      "Structured the navigation flow for exploring nearby attractions, viewing destination details, and saving favorites.",
      "Designed mobile interfaces to present destination information in a clear and accessible format.",
      "Implemented the application screens and supported the integration of location-based and bookmarking functionality.",
    ],

    outcome:
      "Contributed to a mobile tourism application that makes it easier for users to discover nearby attractions, explore destination information, and save places they want to visit.",

    stack: [
      "Android Studio",
      "Java",
    ],

    github: "https://github.com/Pokedids/tubes_andro",

    images: [
      "/projects/bdgo/BDGO.png",
      "/projects/bdgo/bdgo (5).jpeg",
      "/projects/bdgo/bdgo (4).jpeg",
      "/projects/bdgo/bdgo (3).jpeg",
      "/projects/bdgo/bdgo (1).jpeg",
      "/projects/bdgo/bdgo (2).jpeg",
    ],
  },

  {
    slug: "project-five",
    title: "ARSFix",
    type: "Web Application",

    description:
      "A web-based management system for handling the operations of a mobile phone and computer repair shop.",

    overview:
      "ARSFix is a web-based system designed to simplify the management of a mobile phone and computer repair shop. It provides tools for managing technicians, customers, spare parts, service orders, and transactions in one centralized system.",

    background:
      "Repair shops handle multiple operational activities, including customer records, technician assignments, spare part inventories, service orders, and transactions. ARSFix was developed to organize these activities within a centralized web-based management system.",

    role: "UI/UX Designer & Frontend Developer",

    contributions: [
      "Designed the user interface and user experience for the repair shop management system.",
      "Organized management screens for technicians, customers, spare parts, service orders, and transactions.",
      "Implemented website interfaces and interactive components using React.",
      "Contributed to connecting frontend interfaces with application data and backend functionality.",
    ],

    process: [
      "Identified the main operational areas involved in managing a repair shop.",
      "Organized the navigation structure around technician, customer, inventory, service order, and transaction management.",
      "Designed interface layouts to support structured data entry, browsing, and management tasks.",
      "Implemented frontend components and supported integration with the application's backend functionality.",
    ],

    outcome:
      "Contributed to a centralized repair shop management application that organizes customer, technician, inventory, service order, and transaction information within one system.",

    stack: [
      "Laravel",
      "React",
    ],

    github: "https://github.com/Konanxd/arsfix-web",

    images: [
      "/projects/arsfix/arsfix (1).png",
      "/projects/arsfix/arsfix (2).png",
      "/projects/arsfix/arsfix (3).png",
      "/projects/arsfix/arsfix (4).png",
      "/projects/arsfix/arsfix (5).png",
      "/projects/arsfix/arsfix (6).png",
      "/projects/arsfix/arsfix (7).png",
      "/projects/arsfix/arsfix (8).png",
      "/projects/arsfix/arsfix (9).png",
      "/projects/arsfix/arsfix (10).png",
      "/projects/arsfix/arsfix (11).png",
    ],
  },

  {
    slug: "project-six",
    title: "TEPI",
    type: "Mobile Application",

    description:
      "A mobile learning application that uses augmented reality to help elementary school students with hearing impairments learn sign language.",

    overview:
      "TEPI (Teman Pintar Isyarat) is a mobile learning application designed to support elementary school students with hearing impairments in learning sign language. Using augmented reality, the application presents 3D hand signs for letters, providing a more interactive and engaging learning experience.",

    background:
      "Learning sign language can benefit from visual and interactive learning materials, particularly for children who are developing foundational communication skills. TEPI was developed to support sign language learning through augmented reality and three-dimensional hand-sign representations.",

    role: "UI/UX Designer & Frontend Developer",

    contributions: [
      "Designed the user interface and user experience for an interactive sign language learning application.",
      "Structured the learning flow to help students explore sign language letters.",
      "Contributed to implementing mobile application interfaces and interactions using the project's development tools.",
      "Supported the presentation of 3D hand-sign models within the learning experience.",
    ],

    process: [
      "Identified the learning needs of elementary school students using a visual and interactive approach.",
      "Structured the learning flow around exploring and recognizing sign language letters.",
      "Designed interfaces to make the learning content clear, accessible, and easy to navigate.",
      "Contributed to implementing the mobile experience and presenting augmented reality learning content.",
    ],

    outcome:
      "Contributed to an interactive learning application that combines mobile interfaces and augmented reality to help students explore sign language letters through 3D hand representations.",

    stack: [
      "Unity",
      "Java",
    ],

    images: [
      "/projects/tepi/tepi.png",
      "/projects/tepi/tepi (1).png",
      "/projects/tepi/tepi (2).png",
      "/projects/tepi/tepi (3).png",
      "/projects/tepi/tepi4.jpg",
    ],
  },

  {
    slug: "project-seven",
    title: "A Comparative Analysis of NMF and BERTopic in Topic Modeling of IKD",
    type: "Research Project",

    description:
      "A comparative study of NMF and BERTopic for discovering topics and identifying patterns in IKD-related text data.",

    overview:
      "This research project explores two topic modeling approaches, Non-Negative Matrix Factorization (NMF) and BERTopic, to examine how different methods identify and organize topics in IKD-related text data. The comparison focuses on understanding the resulting topic structures and their potential usefulness for interpreting the dataset.",

    background:
      "Text datasets can contain recurring themes that are difficult to identify through manual inspection alone. Topic modeling offers a way to explore these patterns. This project compares NMF and BERTopic to examine how different approaches represent and organize topics within the selected IKD dataset.",

    role: "UI/UX Designer & Frontend Developer",

    contributions: [
      "Organized the presentation of research information and comparative findings.",
      "Focused on structuring information so that the research process and results are easier to understand.",
      "Applied user interface design principles to the presentation of technical information, where applicable.",
      "Contributed to frontend implementation for presenting research outputs, if included in the project deliverables.",
    ],

    process: [
      "Reviewed the research objectives and the role of NMF and BERTopic in topic modeling.",
      "Structured the comparison around the methods, generated topics, and interpretation of the results.",
      "Organized the findings into a clear presentation format to support comparison and understanding.",
      "Considered how research outputs could be presented through a clear and accessible user interface.",
    ],

    outcome:
      "Established a structured comparison of NMF and BERTopic for examining topics in IKD-related text data. The final findings should reflect the actual experimental results and evaluation performed in the study.",

    stack: [
      "Non-Negative Matrix Factorization",
      "BERTopic",
    ],

    images: [],
  },
];