// src/data/portfolio.js
// Single source of truth for site content — used by the pages
// and by the chatbot's knowledge base, so they can never drift apart.

export const profile = {
  name: "Iman Ghanei",
  alias: "Ash",
  role: "Frontend Developer & Game Programmer",
  tagline:
    "Frontend Developer who focuses on writing clean and effective code, and a designer passionate about crafting beautiful, modern interfaces.",
  roles: ["Frontend Developer", "Game Programmer", "Instructor"],
  github: "https://github.com/Ashgh89",
};

export const about = [
  "Hi, I'm Iman Ghanei — also known as Ash. I'm a frontend developer and game programmer who's passionate about turning ideas into interactive, responsive experiences. I write clean code and love blending tech and creativity.",
  "With experience in React, JavaScript, and Unity, I bring both websites and games to life. I enjoy crafting intuitive UIs, optimizing performance, and experimenting with design.",
  "Currently, I'm a lecture instructor at DCI (Digital Career Institute), where I guide and mentor over 500 students on their journey to becoming confident, job-ready developers.",
];

export const experiences = [
  {
    title: "Web Development Virtual Lecture & Senior Frontend",
    period: "2022 – 2025",
    company: "Digital Career Institute",
    description: "HTML to React",
  },
  {
    title: "Frontend-Entwickler",
    period: "2021 – 2022",
    company: "H-R GmbH",
    description: "HTML, CSS, JavaScript",
  },
  {
    title: "Freelancer Web Developer",
    period: "2016 – 2019",
    company: "E-Commerce Solutions",
    description: "Optimization, SEO, UX Improve",
  },
  {
    title: "Game Programming",
    period: "2019 – 2021",
    company: "SAE Institute",
    description: "Game projects with C++, C#, and Unity",
  },
  {
    title: "Teaching Assistant (Unity Basics)",
    period: "",
    company: "Medya Şirketi, Ankara",
    description: "UI, Animation, Audio, Prefab, Scripting, 2D & 3D",
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    skills: ["HTML5", "CSS3", "SASS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Game Dev",
    skills: ["C#", "Unity"],
  },
  {
    label: "Tools & Practice",
    skills: ["Git & GitHub", "Express", "Responsive Design", "UI/UX Design", "Figma"],
  },
];

export const skills = skillGroups.flatMap((g) => g.skills);

export const projects = [
  {
    title: "Germany Explorer",
    description: "Made by React and CSS",
    stack: ["React", "CSS"],
    github: "https://github.com/Ashgh89/Germany-Explorer",
    demo: "https://ashgh89.github.io/germany-explorer/",
  },
  {
    title: "Portfolio",
    description: "Made by React and Tailwind",
    stack: ["React", "Tailwind"],
    github: "https://github.com/Ashgh89/portfolio-new",
    demo: "https://iman-ghanei.netlify.app/",
  },
  {
    title: "Pizza Website",
    description: "Made by React and CSS",
    stack: ["React", "CSS"],
    github: "https://github.com/Ashgh89/react-pizza-app",
    demo: "https://ashgh89.github.io/react-pizza-app/",
  },
  {
    title: "Today Fresh",
    description: "Made by JavaScript and CSS",
    stack: ["JavaScript", "CSS"],
    github: "https://github.com/Ashgh89/HTML-CSS-JS__My-Restaurant",
    demo: "https://ashgh89.github.io/HTML-CSS-JS__My-Restaurant/",
  },
  {
    title: "Workout Map",
    description: "Made by JavaScript",
    stack: ["JavaScript"],
    github: "https://github.com/Ashgh89/JavaScript__Workout-Map",
    demo: "https://ashgh89.github.io/JavaScript__Workout-Map/",
  },
  {
    title: "Item List",
    description: "Made by React",
    stack: ["React"],
    github: "https://github.com/Ashgh89/react__item-list-app",
    demo: "https://ashgh89.github.io/react__item-list-app/",
  },
  {
    title: "Space Ship",
    description: "Made by Unity",
    stack: ["Unity", "C#"],
    github: "https://github.com/Ashgh89/Space-Ship/tree/main",
    demo: "https://ashgh89.github.io/Space-Ship/",
  },
];
