// src/components/Footer.jsx
import React from "react";
import { profile } from "../data/portfolio";

const Footer = () => {
  return (
    <footer className="bg-ink border-t border-line text-mist py-8 mt-auto w-full">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm">
        <p className="font-mono">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-400 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
