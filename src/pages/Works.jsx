// src/pages/Works.jsx
import React from "react";
import { projects } from "../data/portfolio";

const Works = () => {
  return (
    <section className="min-h-screen bg-ink text-ivory py-28 px-6 mt-8">
      <div className="max-w-6xl mx-auto text-center">
        <span className="font-mono text-sm text-gold-400">{"<Projects />"}</span>
        <h1 className="font-display text-4xl md:text-5xl font-semibold mt-3 mb-4 tracking-tight">
          My Projects
        </h1>
        <p className="text-lg mb-14 text-ivory/70">
          Projects I've worked on over the past few years
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-panel border border-line rounded-xl shadow-md hover:border-gold-500/50 hover:-translate-y-1 transition-all p-6 text-left flex flex-col"
            >
              <h3 className="text-xl font-display font-semibold mb-2 text-ivory">
                {project.title}
              </h3>
              <p className="text-ivory/60 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2 py-1 rounded-md bg-panel2 text-gold-300 border border-line"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ivory bg-panel2 hover:bg-line px-4 py-2 rounded-lg transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink font-medium bg-gold-500 hover:bg-gold-400 px-4 py-2 rounded-lg transition-colors"
                >
                  Live Demo
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
