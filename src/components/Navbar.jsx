import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 relative flex items-center justify-between">

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-700 hover:text-pink-500 transition-colors duration-200"
          aria-label="Toggle Navigation Menu"
          aria-expanded={isOpen}
        >
          ☰
        </button>


        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-2 md:static absolute left-1/2 -translate-x-1/2"
        >
          <img
            src="/assets/logo-text.png"
            alt="Dev Stack Logo"
            className="h-8 w-auto object-contain"
          />
        </a>

   
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

        <div className="hidden sm:flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors duration-200">
            Sign In
          </button>

          <button className="px-5 py-2.5 text-sm font-semibold text-white rounded-lg bg-brand-gradient hover:opacity-90 transition-opacity duration-200">
            Sign Up
          </button>
        </div>
      </div>

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

            <div className="mt-3 pt-4 border-t border-gray-100 flex flex-col gap-3">

              <button
                onClick={closeMenu}
                className="w-full py-3 text-base font-medium text-gray-700 border border-gray-200 rounded-lg hover:border-pink-300 hover:text-pink-500 transition-colors duration-200"
              >
                Sign In
              </button>

              <button
                onClick={closeMenu}
                className="w-full py-3 text-base font-semibold text-white rounded-lg bg-brand-gradient hover:opacity-90 transition-opacity duration-200"
              >
                Sign Up
              </button>

            </div>
          </div>
        </div>
      )}
    </nav>
  );
}