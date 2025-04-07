// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed w-full z-50 top-0 left-0 bg-black bg-opacity-60 backdrop-blur-md text-white shadow-md ">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Branding / Logo */}
        <div className="text-2xl font-bold flex items-center gap-2">
          <img
            src="/ashgh.png" // Path to your PNG icon (in public/images/ folder)
            alt="Logo"
            className="w-20 h-20" // Adjust the width and height as needed
          />
          {/* Optionally, you can still display the name */}
          {/* <span>Iman Ghanei</span> */}
        </div>
        {/* <div className="text-2xl font-bold">Iman Ghanei</div> */}

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="flex flex-col gap-1">
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex gap-6 text-lg font-medium">
          <Link to="/" className="hover:text-red-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-orange-500">
            About
          </Link>
          <Link to="/work" className="hover:text-green-400">
            Projects
          </Link>
          <Link to="/skills" className="hover:text-green-400">
            Skills
          </Link>
          <Link to="/contact" className="hover:text-green-400">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <nav className="flex flex-col gap-4 text-lg font-medium">
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/work" onClick={toggleMenu}>
              Projects
            </Link>
            <Link to="/skills" onClick={toggleMenu}>
              Skills
            </Link>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
