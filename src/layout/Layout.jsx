// src/layout/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom"; // If you're using routing
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <Navbar />

      <main className="flex-grow">
        <Outlet />
        {/* This will render each page like Home, About, Contact, etc. */}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
