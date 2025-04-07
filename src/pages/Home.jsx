// src/pages/Home.jsx
import React from "react";

const Home = () => {
  return (
    <main
      id="home"
      className="bg-cover bg-center min-h-screen text-white px-4 py-20 mt-4"
      style={{ backgroundImage: "url('/path-to-your-background.jpg')" }}
    >
      <div className="text-center mt-24">
        <h1 className="text-5xl font-bold mb-6">
          Iman <span className="text-green-400">Ghanei</span>
        </h1>
        <h2 className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
          <span className="text-red-600 font-mono text-2xl">PROGRAMMER:</span>{" "}
          Frontend Developer who focuses on writing clean and effective code.
          <br />
          <br />
          <span className="text-green-500 font-mono text-2xl">
            DESIGNER:
          </span>{" "}
          Passionate and creative for{" "}
          <span className="text-yellow-400">designing</span> beautiful and
          modern websites and interfaces.
        </h2>

        {/* Social Icons */}
        <div className="mt-16 flex justify-center gap-4">
          <a
            href="https://github.com/Ashgh89?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-3x hover:text-gray-400 transition" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
