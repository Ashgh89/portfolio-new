// src/pages/Skills.jsx
import React from "react";
import { skillGroups } from "../data/portfolio";

const Skills = () => {
  return (
    <section className="min-h-screen bg-ink text-ivory py-28 px-6 mt-8">
      <div className="max-w-5xl mx-auto text-center">
        <span className="font-mono text-sm text-gold-400">{"<Skills />"}</span>
        <h1 className="font-display text-4xl md:text-5xl font-semibold mt-3 mb-4 tracking-tight">
          My Skills
        </h1>
        <p className="text-lg mb-14 text-ivory/70">
          Here are some of the technologies and tools I work with
        </p>

        <div className="flex flex-col gap-14">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h2 className="font-mono text-xs uppercase tracking-widest text-gold-400 mb-6 text-left">
                {group.label}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-panel border border-line hover:border-gold-500/60 hover:-translate-y-0.5 transition-all p-5 rounded-xl text-center"
                  >
                    <span className="block text-base font-medium text-ivory">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
