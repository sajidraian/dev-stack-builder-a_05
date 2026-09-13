import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex-shrink-0 text-2xl text-gray-700 hover:text-pink-500 transition-colors duration-200"
          aria-label="Toggle Navigation Menu"
          aria-expanded={isOpen}
        >
          ☰
        </button>

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center flex-shrink min-w-0 md:flex-shrink-0"
        >
          <img
            src="/assets/logo-text.png"
            alt="Dev Stack Logo"
            className="h-7 sm:h-8 md:h-8 w-auto max-w-[125px] sm:max-w-[160px] md:max-w-none object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a
            href="#home"
            className="hover:text-pink-500 transition-colors duration-200"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="hover:text-pink-500 transition-colors duration-200"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="hover:text-pink-500 transition-colors duration-200"
          >
            Projects
          </a>

          <a
            href="#about"
            className="hover:text-pink-500 transition-colors duration-200"
          >
            About
          </a>

          <a
            href="#contact"
            className="hover:text-pink-500 transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          <button
            onClick={closeMenu}
            className="px-2 sm:px-3 md:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors duration-200 whitespace-nowrap"
          >
            Sign In
          </button>

          <button
            onClick={closeMenu}
            className="px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white rounded-lg bg-brand-gradient hover:opacity-90 transition-opacity duration-200 whitespace-nowrap"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-6 py-5 flex flex-col gap-1">

            <a
              href="#home"
              onClick={closeMenu}
              className="py-3 text-lg text-gray-600 hover:text-pink-500 transition-colors duration-200"
            >
              Home
            </a>

            <a
              href="#technologies"
              onClick={closeMenu}
              className="py-3 text-lg text-gray-600 hover:text-pink-500 transition-colors duration-200"
            >
              Technologies
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="py-3 text-lg text-gray-600 hover:text-pink-500 transition-colors duration-200"
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="py-3 text-lg text-gray-600 hover:text-pink-500 transition-colors duration-200"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="py-3 text-lg text-gray-600 hover:text-pink-500 transition-colors duration-200"
            >
              Contact
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}