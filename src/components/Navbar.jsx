import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      
     
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          h-16 sm:h-20
          grid grid-cols-[auto_1fr_auto]
          items-center
          gap-3 sm:gap-6
        "
      >

       
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            md:hidden
            w-9 h-9
            flex items-center justify-center
            text-2xl
            text-gray-700
            hover:text-pink-500
            transition-colors duration-200
          "
          aria-label="Toggle Navigation Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>


     
        <a
          href="#home"
          onClick={closeMenu}
          className="
            flex
            items-center
            justify-center
            md:justify-start
            min-w-0
          "
        >
          <img
            src="/assets/logo-text.png"
            alt="Dev Stack Logo"
            className="
              h-7
              sm:h-8
              md:h-9
              w-auto
              max-w-[115px]
              sm:max-w-[150px]
              md:max-w-none
              object-contain
            "
          />
        </a>


    
        <div
          className="
            hidden md:flex
            items-center
            justify-center
            gap-6 lg:gap-8
            text-sm
            font-medium
            text-gray-600
          "
        >
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


        <div
          className="
            flex
            items-center
            justify-end
            gap-1.5
            sm:gap-2
            flex-shrink-0
          "
        >
          <button
            onClick={closeMenu}
            className="
              px-1.5
              sm:px-3
              md:px-4
              py-2
              text-[11px]
              sm:text-sm
              font-medium
              text-gray-700
              hover:text-pink-500
              transition-colors duration-200
              whitespace-nowrap
            "
          >
            Sign In
          </button>

          <button
            onClick={closeMenu}
            className="
              px-2.5
              sm:px-4
              md:px-5
              py-2
              sm:py-2.5
              text-[11px]
              sm:text-sm
              font-semibold
              text-white
              rounded-lg
              bg-brand-gradient
              hover:opacity-90
              transition-opacity duration-200
              whitespace-nowrap
            "
          >
            Sign Up
          </button>
        </div>
      </div>


      {isOpen && (
        <div
          className="
            md:hidden
            border-t
            border-gray-100
            bg-white
            shadow-md
          "
        >
          <div className="px-5 py-4 flex flex-col">

            <a
              href="#home"
              onClick={closeMenu}
              className="
                py-3
                text-base
                font-medium
                text-gray-600
                hover:text-pink-500
                border-b border-gray-50
                transition-colors duration-200
              "
            >
              Home
            </a>

            <a
              href="#technologies"
              onClick={closeMenu}
              className="
                py-3
                text-base
                font-medium
                text-gray-600
                hover:text-pink-500
                border-b border-gray-50
                transition-colors duration-200
              "
            >
              Technologies
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="
                py-3
                text-base
                font-medium
                text-gray-600
                hover:text-pink-500
                border-b border-gray-50
                transition-colors duration-200
              "
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="
                py-3
                text-base
                font-medium
                text-gray-600
                hover:text-pink-500
                border-b border-gray-50
                transition-colors duration-200
              "
            >
              About
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="
                py-3
                text-base
                font-medium
                text-gray-600
                hover:text-pink-500
                transition-colors duration-200
              "
            >
              Contact
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}