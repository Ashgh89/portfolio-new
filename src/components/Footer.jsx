// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-auto w-full">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Iman Ghanei. All rights reserved.
        </p>
        <a
          href="https://github.com/Ashgh89"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition mt-2 sm:mt-0"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
