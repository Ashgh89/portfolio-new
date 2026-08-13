// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { ui } from "../i18n/ui";

const linkClass = ({ isActive }) =>
  `transition-colors ${
    isActive ? "text-gold-400" : "text-ivory/80 hover:text-gold-300"
  }`;

const LanguageSwitch = ({ compact }) => {
  const { lang, setLang } = useLanguage();
  return (
    <div
      className={`flex items-center rounded-full border border-line bg-panel2 p-0.5 text-xs font-mono ${
        compact ? "" : ""
      }`}
      role="group"
      aria-label="Language"
    >
      {["en", "de"].map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`px-2.5 py-1 rounded-full transition-colors ${
            lang === code
              ? "bg-gold-500 text-ink"
              : "text-ivory/60 hover:text-ivory"
          }`}
          aria-pressed={lang === code}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang } = useLanguage();
  const t = ui[lang].nav;

  const links = [
    { to: "/", label: t.home, end: true },
    { to: "/about", label: t.about },
    { to: "/work", label: t.work },
    { to: "/skills", label: t.skills },
    { to: "/contact", label: t.contact },
  ];

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed w-full z-50 top-0 left-0 bg-ink/80 backdrop-blur-md border-b border-line/60">
      <div className="flex items-center justify-between px-6 py-3 max-w-6xl mx-auto">
        {/* Branding / Logo */}
        <NavLink to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <img
            src="/ashgh.png"
            alt="Iman Ghanei logo"
            className="w-9 h-9 object-contain"
          />
          <span className="font-display font-semibold text-lg text-ivory tracking-tight">
            Iman Ash <span className="text-gold-400">Ghanei</span>
          </span>
        </NavLink>

        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitch compact />
          <button
            onClick={toggleMenu}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`w-6 h-0.5 bg-ivory transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-ivory transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-ivory transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            ></span>
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8 text-sm font-medium tracking-wide">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <LanguageSwitch />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 border-t border-line/60">
          <nav className="flex flex-col gap-4 text-base font-medium pt-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={linkClass}
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
