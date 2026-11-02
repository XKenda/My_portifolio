import moviePreview from "../images/movieProject.png";
import ecommercePreview from "../images/E-commerce.png";

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
    name: "E-Commerce Application",
    description:
      "A React storefront that loads product data from the Fake Store API, supports category filtering and product details, and uses Redux Toolkit to manage the shopping cart.",
    technologies: ["React.js", "JavaScript", "Redux Toolkit", "HTML5", "CSS3", "REST APIs"],
    repository: "https://github.com/XKenda/e_commerce",
    demo: "https://xkenda.github.io/e_commerce/",
    image: ecommercePreview,
    visual: "ecommerce",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    description: "Interfaces built for clarity and different screen sizes.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "React Router",
      "Redux Toolkit",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive design",
      "Flexbox",
      "CSS Grid",
    ],
  },
  {
    title: "Backend",
    description: "Application logic, APIs, and account flows.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
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
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "CI/CD",
      "VS Code",
      "Chrome DevTools",
      "Jest",
      "Postman",
      "Debugging",
      "Clean code",
      "Object-Oriented Programming (OOP)",
      "SOLID Principles",
      "Design Patterns",
      "Data Structures",
      "Web Security (OWASP)",
    ],
  },
];

export const learningSkills = [
  "C#",
  "ASP.NET Core",
  "Entity Framework Core",
  "Software architecture",
  "System design",
  "Testing fundamentals",
];

export const certifications = [
  {
    title: "Front-End Web Development Diploma (React.js)",
    provider: "SEF Academy",
    date: "April 2025",
    description:
      "Completed a six-month diploma focused on frontend web development using React.js, building a foundation in modern frontend development and component-based application architecture.",
  },
  {
    title: "Back-End Web Development Diploma (Node.js)",
    provider: "SEF Academy",
    date: "September 2025",
    description:
      "Completed a three-month backend development diploma focused on Node.js and building backend web applications.",
  },
  {
    title: "React Web Design Training",
    provider: "OrbScope Academy",
    description:
      "Successfully completed a React Web Design training program, gaining practical experience in designing and developing web interfaces using React.",
  },
  {
    title: "Digital Marketing Certification",
    provider: "HubSpot Academy",
    date: "June 2026",
    description:
      "Demonstrated knowledge of digital marketing practices, including SEO-friendly content creation, website optimization, social media strategy, video marketing, advertising, and measuring marketing performance.",
  },
  {
    title: "Inbound Sales Certification",
    provider: "HubSpot Academy",
    date: "August 2026",
    description:
      "Demonstrated knowledge of the Inbound Sales Methodology, including identifying, connecting with, exploring the needs of, and advising potential buyers.",
  },
  {
    title: "Basics of Pricing",
    provider: "Teachable Course / Dr. Ehab Mesallum",
    date: "July 2026",
    description:
      "Completed the Basics of Pricing course, covering foundational concepts and practices related to pricing.",
  },
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
