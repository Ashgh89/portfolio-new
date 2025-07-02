// src/pages/Work.jsx

const projects = [
  {
    title: "Germany Explorer",
    description: "Made by React and CSS",
    github: "https://github.com/Ashgh89/Germany-Explorer",
    demo: "https://ashgh89.github.io/germany-explorer/",
  },
  {
    title: "Portfolio",
    description: "Made by React and Tailwind",
    github: "https://github.com/Ashgh89/portfolio-new",
    demo: "https://iman-ghanei.netlify.app/",
  },
  {
    title: "Pizza Website",
    description: "Made by React and CSS",
    github: "https://github.com/Ashgh89/react-pizza-app",
    demo: "https://ashgh89.github.io/react-pizza-app/",
  },
  {
    title: "Today Fresh",
    description: "Made by JavaScript and CSS",
    github: "https://github.com/Ashgh89/HTML-CSS-JS__My-Restaurant",
    demo: "https://ashgh89.github.io/HTML-CSS-JS__My-Restaurant/",
  },
  {
    title: "Workout Map",
    description: "Made by JavaScript",
    github: "https://github.com/Ashgh89/JavaScript__Workout-Map",
    demo: "https://ashgh89.github.io/JavaScript__Workout-Map/",
  },
  // {
  //   title: "Block Breaker",
  //   description: "Made by C# and Unity",
  //   github: "https://github.com/Ashgh89/Block-Breaker",
  //   demo: "https://ashgh89.github.io/Block-Breaker/",
  // },
  {
    title: "Item List",
    description: "Made by React",
    github: "https://github.com/Ashgh89/react__item-list-app",
    demo: "https://ashgh89.github.io/react__item-list-app/",
  },
  {
    title: "Space Ship",
    description: "Made by Unity",
    github: "https://github.com/Ashgh89/Space-Ship/tree/main",
    demo: "https://ashgh89.github.io/Space-Ship/",
  },
];

const Works = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 px-6 mt-16">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 border-b-4 inline-block border-green-400 pb-1">
          My Projects
        </h1>
        <p className="text-lg mb-10 text-gray-300">
          Projects I’ve worked on over the past few years
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition p-6 text-left"
            >
              <h3 className="text-2xl font-semibold mb-2 text-green-400">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white bg-green-600 hover:bg-green-500 px-4 py-2 rounded"
                >
                  Take a Look!
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
