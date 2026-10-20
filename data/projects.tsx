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
      "Dynamic Skill Matrix is a web-based system designed to support employee competency management. It organizes employee skill information to support competency tracking and provide insights for employee development.",

    background:
      "Managing employee competencies requires a structured way to organize skill information and monitor proficiency levels. Dynamic Skill Matrix was developed to support centralized competency tracking and help identify areas for employee development.",

    role: "UI/UX Designer & Frontend Developer",

    contributions: [
      "Designed the user interface and user experience based on the application's requirements.",
      "Collaborated with the manager to refine the interface according to the company's operational needs.",
      "Translated UI/UX designs into responsive website interfaces using frontend technologies.",
      "Contributed to frontend implementation and frontend-backend integration.",
    ],

    process: [
      "Analyzed application requirements and collaborated with the manager to understand user and business needs.",
      "Designed interface layouts and interaction flows to support competency management tasks.",
      "Implemented the approved designs using frontend technologies and styling frameworks.",
      "Supported frontend-backend integration to connect the interface with application functionality.",
    ],

    outcome:
      "Contributed to the development of a centralized employee competency management system through UI/UX design, frontend implementation, and integration work.",

    stack: [
      "Laravel",
      "PHP",
      "JavaScript",
      "Tailwind CSS",
      "MySQL",
    ],

    github: "https://github.com/adorutoble/dynamic-skills-matrix",

    images: [
      "/projects/dynamic-skill-matrix/dms (1).png",
      "/projects/dynamic-skill-matrix/dms (2).png",
      "/projects/dynamic-skill-matrix/dms (3).png",
      "/projects/dynamic-skill-matrix/dms (4).png",
      "/projects/dynamic-skill-matrix/dms (5).png",
      "/projects/dynamic-skill-matrix/dms (6).png",
      "/projects/dynamic-skill-matrix/dms (7).png",
    ],
  },

  {
    slug: "project-two",
    title: "FindU",
    type: "Full-stack Web Application",

    description:
      "A web platform that helps high school graduates explore universities, scholarship opportunities, and higher education options.",

    overview:
      "FindU is a platform designed to simplify university research for prospective students. It brings university information, scholarship opportunities, and campus comparisons into one place, helping students make more informed decisions about their higher education.",

    background:
      "Choosing a university can be challenging for high school graduates who need to compare academic programs, tuition fees, and scholarship opportunities across different institutions. FindU was developed to make this information easier to explore and compare through a single web platform.",

    role: "UI/UX Designer & Frontend Developer",

    contributions: [
      "Designed the user interface and user experience to organize university and scholarship information clearly.",
      "Developed interface layouts that support university discovery and campus comparison.",
      "Translated UI/UX designs into interactive website pages using frontend technologies.",
      "Contributed to integrating the frontend interface with the application's data and functionality.",
    ],

    process: [
      "Identified the information prospective students need when researching universities and scholarships.",
      "Organized university information, scholarship details, and comparison features into a structured user flow.",
      "Designed interface layouts to make educational information easier to navigate and understand.",
      "Implemented the website interface and supported integration with the application's functionality.",
    ],

    outcome:
      "Contributed to a centralized university discovery platform that helps prospective students explore higher education options and scholarship information more conveniently.",

    stack: [
      "Laravel",
      "JavaScript",
      "MySQL",
      "Tailwind CSS",
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
      "Foodidie is a recipe discovery website that allows users to explore different meals, view their ingredients and cooking instructions, and check nutritional information such as calorie content. The website uses the Spoonacular API to provide recipe and nutrition data in one place.",

    background:
      "Finding recipes that match personal preferences can involve searching across multiple sources and checking nutritional information separately. Foodidie was developed to bring recipe discovery, ingredient lists, cooking instructions, and nutritional details together in one convenient website.",

    role: "UI/UX Designer & Frontend Developer",

    contributions: [
      "Designed the user interface and user experience for browsing and discovering recipes.",
      "Structured recipe details to present ingredients, cooking instructions, and nutritional information clearly.",
      "Implemented interactive website interfaces using React and frontend technologies.",
      "Contributed to connecting recipe interfaces with application data and external API responses.",
    ],

    process: [
      "Identified the essential information users need when discovering and preparing recipes.",
      "Organized recipe browsing and detail views to create a clear navigation flow.",
      "Designed interface layouts for presenting recipe images, ingredients, instructions, and nutrition data.",
      "Implemented the frontend and supported the integration of recipe data from the application's data sources.",
    ],

    outcome:
      "Contributed to a recipe discovery experience that brings cooking instructions and nutritional information together, making recipe exploration more convenient for users.",

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