// src/pages/Skills.jsx
import React from "react";
import { Link } from "react-router-dom";

const skills = [
  { name: "HTML5", color: "text-orange-500" },
  { name: "CSS3", color: "text-blue-500" },
  { name: "SASS", color: "text-pink-500" },
  { name: "JavaScript", color: "text-yellow-300" },
  { name: "TypeScript", color: "text-blue-400" },
  { name: "React", color: "text-cyan-400" },
  { name: "Next.js", color: "text-yellow-600" },
  { name: "Tailwind CSS", color: "text-teal-400" },
  { name: "C#", color: "text-purple-300" },
  { name: "Unity", color: "text-purple-600" },
  { name: "Git & GitHub", color: "text-red-400" },
  { name: "Responsive Design", color: "text-green-400" },
  { name: "UI/UX Design", color: "text-purple-400" },
  { name: "Figma", color: "text-lime-700" },
  { name: "Express", color: "text-green-700" },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-gray-950 text-white py-20 px-6 mt-16">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 border-b-4 inline-block border-green-400 pb-1">
          My Skills
        </h1>
        <p className="text-lg mb-10 text-gray-300">
          Here are some of the technologies and tools I work with:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 hover:bg-gray-700 transition p-6 rounded-xl shadow-md text-center"
            >
              <span className={`block text-xl font-semibold ${skill.color}`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
