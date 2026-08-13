// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import TypingRoles from "../components/TypingRoles";
import { profile, content } from "../data/portfolio";
import { useLanguage } from "../i18n/LanguageContext";
import { ui } from "../i18n/ui";

const Home = () => {
  const { lang } = useLanguage();
  const t = ui[lang].home;
  const c = content[lang];

  return (
    <main
      id="home"
      className="relative min-h-screen overflow-hidden bg-ink text-ivory bg-corner-glow"
    >
      {/* Watermark monogram */}
      <img
        src="/ashgh.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-[-6%] top-1/2 -translate-y-1/2 w-[520px] max-w-none opacity-[0.06] blur-[1px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-28 flex flex-col items-start">
        <span className="font-mono text-sm text-gold-400 mb-6 animate-fade-up">
          {t.eyebrow}
        </span>

        <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight mb-4 animate-fade-up [animation-delay:80ms]">
          {profile.name.split(" ")[0]}{" "}
          <span className="text-gold-400">{profile.name.split(" ")[1]}</span>
        </h1>

        <h2 className="font-mono text-xl md:text-2xl text-mist mb-8 h-8 animate-fade-up [animation-delay:160ms]">
          <TypingRoles roles={c.roles} key={lang} />
        </h2>

        <p className="text-lg leading-relaxed text-ivory/80 max-w-2xl mb-10 animate-fade-up [animation-delay:240ms]">
          {c.tagline}
        </p>

        <div className="flex flex-wrap gap-4 mb-14 animate-fade-up [animation-delay:320ms]">
          <Link
            to="/work"
            className="px-6 py-3 rounded-lg bg-gold-500 text-ink font-semibold hover:bg-gold-400 transition-colors"
          >
            {t.viewProjects}
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-lg border border-line text-ivory font-semibold hover:border-gold-400 hover:text-gold-300 transition-colors"
          >
            {t.getInTouch}
          </Link>
        </div>

        <div className="flex items-center gap-5 animate-fade-up [animation-delay:400ms]">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-2xl text-ivory/70 hover:text-gold-400 transition-colors"
          >
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
