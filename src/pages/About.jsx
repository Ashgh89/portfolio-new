import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { about, experiences } from "../data/portfolio";

const About = () => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? experiences.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === experiences.length - 1 ? 0 : i + 1));

  return (
    <section className="min-h-screen bg-ink bg-radial-fade text-ivory px-6 py-28 flex flex-col items-center mt-8">
      <div className="max-w-3xl text-center">
        <span className="font-mono text-sm text-gold-400">{"<About />"}</span>
        <h1 className="font-display text-4xl md:text-5xl font-semibold mt-3 mb-8 tracking-tight">
          About Me
        </h1>

        {about.map((paragraph, i) => (
          <p key={i} className="text-lg leading-8 text-ivory/75 mt-4 first:mt-0">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Experience */}
      <div className="w-full max-w-3xl mt-20 relative">
        <span className="font-mono text-sm text-gold-400 block text-center mb-2">
          {"<Experience />"}
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-center mb-10 text-ivory">
          Where I've worked
        </h2>

        <div className="relative bg-panel border border-line rounded-2xl shadow-2xl p-8 md:p-10 min-h-[220px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.35 }}
              className="px-8 text-center"
            >
              <p className="font-mono text-xs text-gold-400 mb-2 uppercase tracking-wide">
                {experiences[index].period}
              </p>
              <h3 className="text-xl font-semibold text-ivory">
                {experiences[index].title}
              </h3>
              <p className="text-base text-ivory/60 font-medium mt-1">
                {experiences[index].company}
              </p>
              <p className="text-sm text-mist mt-3">
                {experiences[index].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-y-0 left-2 flex items-center">
            <button
              onClick={prev}
              className="bg-panel2 hover:bg-gold-500 hover:text-ink text-ivory p-2 rounded-full transition shadow-md border border-line"
              aria-label="Previous experience"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-2 flex items-center">
            <button
              onClick={next}
              className="bg-panel2 hover:bg-gold-500 hover:text-ink text-ivory p-2 rounded-full transition shadow-md border border-line"
              aria-label="Next experience"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {experiences.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to experience ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === index ? "bg-gold-400" : "bg-line"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
