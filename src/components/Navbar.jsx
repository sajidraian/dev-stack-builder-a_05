import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-700"
          aria-label="Toggle Navigation Menu"
          aria-expanded={isOpen}
        >
          ☰
        </button>

        <a
          href="#home"
          className="flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/assets/logo-text.png"
            alt="Dev Stack Logo"
            className="h-8 w-auto object-contain"
          />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#home" className="hover:text-black">
            Home
          </a>

          <a href="#technologies" className="hover:text-black">
            Technologies
          </a>

          <a href="#projects" className="hover:text-black">
            Projects
          </a>

          <a href="#about" className="hover:text-black">
            About
          </a>

          <a href="#contact" className="hover:text-black">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-sm font-semibold text-gray-700 hover:text-black px-3 py-2">
            Sign In
          </button>

          <button className="text-sm font-semibold text-white bg-brand-gradient px-4 py-2 rounded-full shadow-md">
            Sign Up
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4 text-sm font-medium text-gray-600">

          <a
            href="#home"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>

          <a
            href="#technologies"
            onClick={() => setIsOpen(false)}
          >
            Technologies
          </a>

          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>

          <a
            href="#about"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>

        </div>
      )}
    </nav>
  );
}