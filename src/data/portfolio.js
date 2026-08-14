// src/data/portfolio.js
// Single source of truth for site content — used by the pages and by the
// chatbot's knowledge base, so they can never drift apart. Translatable
// text is keyed by language ("en" | "de"); language-independent fields
// (names, URLs, tech-stack labels, images) sit at the top level.

export const profile = {
  name: "Iman Ghanei",
  alias: "Ash",
  github: "https://github.com/Ashgh89",
};

export const content = {
  en: {
    role: "Frontend Developer & Game Programmer",
    tagline:
      "Frontend Developer who focuses on writing clean and effective code, and a designer passionate about crafting beautiful, modern interfaces.",
    roles: ["Frontend Developer", "Game Programmer", "Instructor"],
    about: [
      "Hi, I'm Iman Ghanei, also known as Ash. I'm a frontend developer and game programmer who's passionate about turning ideas into interactive, responsive experiences. I write clean code and love blending tech and creativity.",
      "With experience in React, JavaScript, and Unity, I bring both websites and games to life. I enjoy crafting intuitive UIs, optimizing performance, and experimenting with design.",
      "Currently, I'm a lecture instructor at DCI (Digital Career Institute), where I guide and mentor over 500 students on their journey to becoming confident, job-ready developers.",
    ],
    experiences: [
      {
        title: "Frontend Developer - Lecturer & Career Coach",
        period: "2023 – 2025",
        company: "Digital Career Institute",
        description:
          "Designed curricula, prepared exercises and developed exams",
      },
      {
        title: "Junior Lecturer (Dozent)",
        period: "2022 – 2023",
        company: "Digital Career Institute",
        description:
          "Teaching in Frontend (HTML - CSS - TAILWIND - JAVASCRIPT - REACT), provided guidance during exercises",
      },
      {
        title: "Frontend Developer",
        period: "2021 – 2022",
        company: "H-R GmbH",
        description: "HTML, CSS, JavaScript",
      },
      {
        title: "Freelance Web Developer",
        period: "2016 – 2018",
        company: "E-Commerce Solutions",
        description: "Optimization, SEO, UX improvements",
      },
      {
        title: "Career Coach",
        period: "2018 – 2019",
        company: "WIPA GmbH",
        description: "Help to Create CV, PC Basics, Job searching",
      },
      {
        title: "Game Programming",
        period: "2019 – 2021",
        company: "SAE Institute",
        description: "Game projects with C++, C#, and Unity",
      },
      {
        title: " Junior Developer",
        period: "",
        company: "Medya Şirketi, Ankara",
        description: "UI, animation, audio, prefabs, scripting, 2D & 3D",
      },
    ],
    skillGroupLabels: {
      Frontend: "Frontend",
      "Game Dev": "Game Dev",
      "Tools & Practice": "Tools & Practice",
    },
    projectDescriptions: {
      "Germany Explorer": "Made by React and CSS",
      "Orbit Project": "Made by React and Tailwind",
      Portfolio: "Made by React and Tailwind",
      "Pizza Website": "Made by React and CSS",
      "Today Fresh": "Made by JavaScript and CSS",
      "Workout Map": "Made by JavaScript",
      "Item List": "Made by React",
      "Space Ship": "Made by Unity",
    },
  },
  de: {
    role: "Frontend-Entwickler & Game Programmer",
    tagline:
      "Frontend-Entwickler mit Fokus auf sauberen, effektiven Code und Designer mit Leidenschaft für schöne, moderne Interfaces.",
    roles: ["Frontend-Entwickler", "Game Programmer", "Dozent"],
    about: [
      "Hi, ich bin Iman Ghanei, auch bekannt als Ash. Ich bin Frontend-Entwickler und Game Programmer und liebe es, Ideen in interaktive, responsive Erlebnisse zu verwandeln. Ich schreibe sauberen Code und verbinde gerne Technik mit Kreativität.",
      "Mit Erfahrung in React, JavaScript und Unity bringe ich sowohl Websites als auch Spiele zum Leben. Ich gestalte gerne intuitive UIs, optimiere Performance und experimentiere mit Design.",
      "Aktuell bin ich Dozent am DCI (Digital Career Institute), wo ich über 500 Studierende auf ihrem Weg zu selbstbewussten, job-bereiten Entwicklern begleite und coache.",
    ],
    experiences: [
      {
        title: "Frontend Entwickler - Dozent und Career Coach",
        period: "2023 – 2025",
        company: "Digital Career Institute",
        description:
          "Lehrpläne gestaltet, Übungen erstellt und Prüfungen entwickelt",
      },
      {
        title: "Junior Lecturer (Dozent)",
        period: "2022 – 2023",
        company: "Digital Career Institute",
        description:
          "Unterricht in Frontend (HTML - CSS - TAILWIND - JAVASCRIPT - REACT), Aufgaben und Prüfungen vorbereitet",
      },
      {
        title: "Frontend-Entwickler",
        period: "2021 – 2022",
        company: "H-R GmbH",
        description: "HTML, CSS, JavaScript",
      },
      {
        title: "Freiberuflicher Webentwickler",
        period: "2016 – 2018",
        company: "E-Commerce Solutions",
        description: "Optimierung, SEO, UX-Verbesserungen",
      },
      {
        title: "Career Coach",
        period: "2018 – 2019",
        company: "WIPA GmbH",
        description:
          "Unterstützung bei Erstellung Bewerbungsunterlagen, PC Basics, Job Suche",
      },
      {
        title: "Game Programming",
        period: "2019 – 2021",
        company: "SAE Institute",
        description: "Spieleprojekte mit C++, C# und Unity",
      },
      {
        title: "Junior Entwickler",
        period: "",
        company: "Medya Şirketi, Ankara",
        description: "UI, Animation, Audio, Prefabs, Scripting, 2D & 3D",
      },
    ],
    skillGroupLabels: {
      Frontend: "Frontend",
      "Game Dev": "Game Dev",
      "Tools & Practice": "Tools & Praxis",
    },
    projectDescriptions: {
      "Germany Explorer": "Erstellt mit React und CSS",
      Portfolio: "Erstellt mit React und Tailwind",
      "Pizza Website": "Erstellt mit React und CSS",
      "Today Fresh": "Erstellt mit JavaScript und CSS",
      "Workout Map": "Erstellt mit JavaScript",
      "Item List": "Erstellt mit React",
      "Space Ship": "Erstellt mit Unity",
    },
  },
};

// Language-independent skill groups (tech names read the same in both langs)
export const skillGroupsRaw = [
  {
    key: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "SASS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  { key: "Game Dev", skills: ["C#", "Unity"] },
  {
    key: "Tools & Practice",
    skills: [
      "Git & GitHub",
      "Express",
      "Responsive Design",
      "UI/UX Design",
      "Figma",
    ],
  },
];

export const skills = skillGroupsRaw.flatMap((g) => g.skills);

// Language-independent project data (URLs, stack tags, titles)
export const projectsRaw = [
  {
    title: "Germany Explorer",
    stack: ["React", "CSS"],
    github: "https://github.com/Ashgh89/Germany-Explorer",
    demo: "https://ashgh89.github.io/germany-explorer/",
  },
  {
    title: "Orbit Project",
    stack: ["React", "Tailwind"],
    github: "https://github.com/Ashgh89/orbit-project",
    demo: "https://ashgh89.github.io/orbit-project/",
  },
  {
    title: "Portfolio",
    stack: ["React", "Tailwind"],
    github: "https://github.com/Ashgh89/portfolio-new",
    demo: "https://iman-ghanei.netlify.app/",
  },
  {
    title: "Pizza Website",
    stack: ["React", "CSS"],
    github: "https://github.com/Ashgh89/react-pizza-app",
    demo: "https://ashgh89.github.io/react-pizza-app/",
  },
  {
    title: "Today Fresh",
    stack: ["JavaScript", "CSS"],
    github: "https://github.com/Ashgh89/HTML-CSS-JS__My-Restaurant",
    demo: "https://ashgh89.github.io/HTML-CSS-JS__My-Restaurant/",
  },
  {
    title: "Workout Map",
    stack: ["JavaScript"],
    github: "https://github.com/Ashgh89/JavaScript__Workout-Map",
    demo: "https://ashgh89.github.io/JavaScript__Workout-Map/",
  },
  {
    title: "Item List",
    stack: ["React"],
    github: "https://github.com/Ashgh89/react__item-list-app",
    demo: "https://ashgh89.github.io/react__item-list-app/",
  },
  {
    title: "Space Ship",
    stack: ["Unity", "C#"],
    github: "https://github.com/Ashgh89/Space-Ship/tree/main",
    demo: "https://ashgh89.github.io/Space-Ship/",
  },
];

// Helpers that merge the language-independent data with the translated text
export function getSkillGroups(lang) {
  const labels = content[lang].skillGroupLabels;
  return skillGroupsRaw.map((g) => ({
    label: labels[g.key],
    skills: g.skills,
  }));
}

export function getProjects(lang) {
  const descriptions = content[lang].projectDescriptions;
  return projectsRaw.map((p) => ({ ...p, description: descriptions[p.title] }));
}
