import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const experiences = [
  {
    title: "Web Development Virtual Lecture, 2022",
    company: "Digital Career Institute",
    description: "HTML to React",
  },
  {
    title: "Frontend-Entwickler, 2021-2022",
    company: "H-R GmbH",
    description: "HTML, CSS, JavaScript",
  },
  {
    title: "WIPA GmbH, Langenfeld, 2018",
    company: "Assistance",
    description: "Computer Assistance - Word, Excel & Online Research",
  },
  {
    title: "SAE Institute 2019-2021",
    company: "Game Programming",
    description: "Game projects with C++, C#, and Unity",
  },
  {
    title: "Medya Şirketi, Ankara",
    company: "Teaching Assistant (Unity Basics)",
    description: "UI, Animation, Audio, Prefab, Scripting, 2D & 3D",
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? experiences.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === experiences.length - 1 ? 0 : i + 1));

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-24 flex flex-col items-center mt-16">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-extrabold mb-8 text-white tracking-tight">
          About <span className="text-orange-400">Me</span>
        </h1>

        <p className="text-lg leading-8 text-gray-300">
          Hi, I’m{" "}
          <span className="text-orange-400 font-semibold">Iman Ghanei</span> —
          also known as Ash. I’m a frontend developer and game programmer who’s
          passionate about turning ideas into interactive, responsive
          experiences. I write clean code and love blending tech and creativity.
        </p>

        <p className="text-lg leading-8 text-gray-300 mt-4">
          With experience in React, JavaScript, and Unity, I bring both websites
          and games to life. I enjoy crafting intuitive UIs, optimizing
          performance, and experimenting with design.
        </p>

        <p className="text-lg leading-8 text-gray-300 mt-4">
          Currently, I’m a lecture instructor at DCI (Digital Career Institute),
          where I guide and mentor over 500 students on their journey to
          becoming confident, job-ready developers.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="w-full max-w-3xl mt-16 relative ">
        <h2 className="text-3xl font-bold text-center mb-8 text-orange-400">
          Experience
        </h2>

        <div
          className="relative bg-cover bg-center text-white rounded-3xl shadow-2xl p-8 min-h-[250px] overflow-hidden"
          // style={{ backgroundImage: "url(p2.jpg)" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
              className=" px-6 mt-2"
            >
              <h3 className="text-xl font-bold text-center">
                {experiences[index].title}
              </h3>
              <p className="text-md text-green-700  font-medium text-center">
                {experiences[index].company}
              </p>
              <p className="text-base text-red-400 text-center">
                {experiences[index].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-4">
            <button
              onClick={prev}
              className="bg-gray-200 hover:bg-orange-300 text-gray-800 p-2 rounded-full transition shadow-md"
              aria-label="Previous"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            <button
              onClick={next}
              className="bg-gray-200 hover:bg-orange-300 text-gray-800 p-2 rounded-full transition shadow-md"
              aria-label="Next"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
