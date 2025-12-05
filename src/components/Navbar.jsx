import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", to: "home" },
    { name: "Projects", to: "projects" },
    { name: "About Me", to: "about" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header className="w-full bg-[#F0F0E0] dark:bg-[#121212] border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="text-xl font-bold text-gray-800 dark:text-gray-100 cursor-pointer"
        >
          <img src="/public/logo.png" alt="Portfolio Logo" className="w-12 h-12" />
        </ScrollLink>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          {links.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-[#6B8E23] transition-colors"
              activeClass="text-[#6B8E23] font-semibold"
              spy={true} // Tracks active section
            >
              {link.name}
            </ScrollLink>
          ))}
        </nav>

        {/* Connect Button */}
        <a
          href="https://www.linkedin.com/in/oishi-sharmeen/"
          target="_blank"
          className="hidden md:flex bg-[#6B8E23] text-white font-semibold py-2 px-5 rounded-lg items-center gap-2 shadow-sm hover:opacity-90 transition-opacity cursor-pointer"
        >
          Let's Connect!
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center text-gray-800 dark:text-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F0F0E0] dark:bg-[#121212] border-t border-gray-200 dark:border-gray-800">
          <nav className="flex flex-col p-4 space-y-4 text-gray-600 dark:text-gray-300">
            {links.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-[#6B8E23] transition-colors"
                spy={true}
                activeClass="text-[#6B8E23] font-semibold"
                onClick={() => setIsOpen(false)} // Close menu
              >
                {link.name}
              </ScrollLink>
            ))}
            <a
              href="https://www.linkedin.com/in/oishi-sharmeen/"
              target="_blank"
              className="bg-[#6B8E23] text-white font-semibold py-2 px-5 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Let's Connect!
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
