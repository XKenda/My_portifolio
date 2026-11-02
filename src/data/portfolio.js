import moviePreview from "../images/movieProject.png";

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    number: "01",
    name: "AI-SaaS",
    status: "Completed",
    description:
      "A full-stack AI application with resume and job tools, account flows, and a React interface backed by an Express API.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Google GenAI"],
    repository: "https://github.com/XKenda/AI-SaaS",
    demo: "https://aisaas-front.vercel.app/",
    visual: "ai",
  },
  {
    number: "02",
    name: "Movie Project",
    status: "Completed",
    description:
      "A movie discovery application with movie and comment APIs, user accounts, and a React frontend.",
    technologies: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
    repository: "https://github.com/XKenda/Movie-Project",
    demo: "https://movie-project-rouge-theta.vercel.app/",
    image: moviePreview,
    visual: "movie",
  },
  {
    number: "03",
    name: "Restaurant App",
    status: "In progress",
    description:
      "A restaurant-focused application in development, with a React client and an Express backend that includes an authentication module.",
    technologies: ["React", "Vite", "Express", "JWT"],
    repository: "https://github.com/XKenda/Resturant-App",
    visual: "restaurant",
  },
  {
    number: "04",
    name: "Subscription Tracker",
    status: "In progress",
    description:
      "A Node.js and MongoDB API for subscription records. Account flows and a subscription model are present; several subscription routes are still placeholders.",
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose"],
    repository: "https://github.com/XKenda/subscription-tracker",
    visual: "api",
  },
  {
    number: "05",
    name: "To-Do List API",
    status: "In progress",
    description:
      "A backend learning project with task endpoints, identity APIs, Entity Framework Core, and SQL Server.",
    technologies: ["C#", "ASP.NET Core", "Entity Framework Core", "SQL Server"],
    repository: "https://github.com/XKenda/To-Do-List",
    visual: "api",
  },
  {
    number: "06",
    name: "Classroom Frontend",
    status: "In progress",
    description:
      "A classroom-oriented frontend being developed with a dashboard and subject routes, built with React, TypeScript, and Refine.",
    technologies: ["React", "TypeScript", "Refine", "Tailwind CSS"],
    repository: "https://github.com/XKenda/classroom-frontend",
    visual: "classroom",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    description: "Interfaces built for clarity and different screen sizes.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "React Router",
      "Redux Toolkit",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive design",
    ],
  },
  {
    title: "Backend",
    description: "Application logic, APIs, and account flows.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "bcrypt",
      "API integration",
    ],
  },
  {
    title: "Data",
    description: "Working with relational and document databases.",
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "SQL Server", "SQL"],
  },
  {
    title: "Tools & engineering",
    description: "Tools and practices I use while building and learning.",
    skills: ["Git", "GitHub", "Docker", "Postman", "Debugging", "Clean code"],
  },
];

export const learningSkills = [
  "C#",
  "ASP.NET Core",
  "Entity Framework Core",
  "Software architecture",
  "System design",
  "Testing fundamentals",
  "SOLID principles",
];

export const journey = [
  {
    title: "Started Computer Science",
    detail:
      "Began studying Computer Science with an Artificial Intelligence specialization.",
  },
  {
    title: "Built a web foundation",
    detail:
      "Learned HTML, CSS, and JavaScript, then moved into responsive frontend development.",
  },
  {
    title: "Moved into React",
    detail:
      "Started building component-based interfaces and working with application state.",
  },
  {
    title: "Connected frontend and backend",
    detail:
      "Built full-stack projects with Node.js, Express, APIs, and database-backed features.",
  },
  {
    title: "Explored application data",
    detail:
      "Worked with MongoDB and PostgreSQL while learning how application data is modeled.",
  },
  {
    title: "Exploring .NET",
    detail:
      "Currently learning C#, ASP.NET Core, and Entity Framework Core through a task API project.",
  },
];

export const internshipOffers = [
  {
    organization: "Codveda Technologies",
    role: "Full Stack Development Intern",
    dates: "October 26 – November 26, 2026",
  },
  {
    organization: "Auspify Technologies",
    role: "Full Stack Development Intern",
    dates: "October 25 – November 25, 2026",
  },
];
