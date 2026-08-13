// src/layout/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-ink text-ivory">
      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Layout;
