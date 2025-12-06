import { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { gsap } from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);

  const links = [
    { name: "Home", to: "home" },
    { name: "Projects", to: "projects" },
    { name: "About Me", to: "about" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Initial animations
    gsap.from(logoRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(linksRef.current, {
      y: -20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.3,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={navRef}
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#121212]/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50 dark:border-gray-800/50"
          : "bg-[#F0F0E0] dark:bg-[#121212] border-b border-gray-200 dark:border-gray-800"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer group"
            ref={logoRef}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <img 
                  src="/public/logo.png" 
                  alt="Portfolio Logo" 
                  className="w-12 h-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" 
                />
                <div className="absolute -inset-1 bg-[#6B8E23]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-xl font-bold text-gray-800 dark:text-gray-100 hidden sm:block">
                Oishi<span className="text-[#6B8E23]">Sharmeen</span>
              </span>
            </div>
          </ScrollLink>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-1">
            {links.map((link, index) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="relative cursor-pointer px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#6B8E23] dark:hover:text-[#6B8E23] transition-colors duration-300 group"
                activeClass="text-[#6B8E23] dark:text-[#6B8E23]"
                spy={true}
                ref={(el) => (linksRef.current[index] = el)}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6B8E23] group-hover:w-full transition-all duration-300"></span>
              </ScrollLink>
            ))}
          </nav>

          {/* Connect Button */}
          <a
            href="https://www.linkedin.com/in/oishi-sharmeen/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex bg-gradient-to-r from-[#6B8E23] to-[#556B1F] text-white font-semibold py-2.5 px-6 rounded-full items-center gap-2 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            ref={(el) => (linksRef.current[links.length] = el)}
          >
            <span>Let's Connect</span>
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
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
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 dark:bg-[#1E1E1E]/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800">
          <nav className="flex flex-col p-6 space-y-1">
            {links.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-[#6B8E23]/10 hover:text-[#6B8E23] transition-all duration-200 font-medium"
                spy={true}
                activeClass="bg-[#6B8E23]/10 text-[#6B8E23] font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </ScrollLink>
            ))}
            <a
              href="https://www.linkedin.com/in/oishi-sharmeen/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-gradient-to-r from-[#6B8E23] to-[#556B1F] text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <span>Let's Connect</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}