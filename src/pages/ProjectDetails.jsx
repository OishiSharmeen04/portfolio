import { useParams, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

// Sample project data (tumi chaile eta alada file e rakhte paro)
const projects = [
  {
    id: "1",
    title: "GreenNest",
    subtitle: "React.js • React Router • Authentication",
    image: "/green-nest.png",
    overview:
      "GreenNest is an eco-friendly home management platform built with React. Users can manage resources, track energy usage, and automate home systems.",
    techStack: [
      "React.js",
      "React Router",
      "TailwindCSS",
      "Firebase Auth",
      "Context API",
    ],
    features: [
      "User authentication",
      "Real-time dashboard",
      "Responsive UI",
      "Resource management",
    ],
    challenges: [
      "Integrating authentication with Firebase",
      "Managing state efficiently across components",
    ],
    future: [
      "Mobile app version",
      "AI-based energy optimization",
      "Notifications and alerts",
    ],
    liveLink: "https://green-nest-eco.netlify.app/",
    repoLink: "#",
  },
  {
    id: "2",
    title: "TravelEase",
    subtitle: "MERN Stack • JWT Auth • CRUD • REST API",
    image: "/travel-ease.png",
    overview:
      "TravelEase is a travel service booking system built using the MERN stack. Users can authenticate, book services, view details, update their bookings, and manage their profile efficiently.",
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT Token",
      "CRUD API",
      "TailwindCSS",
    ],
    features: [
      "JWT-based authentication",
      "Book + Update + Delete booking functionality",
      "Responsive dashboard",
      "REST API integration with backend",
    ],
    challenges: [
      "Building a secure backend",
      "Handling CORS issues while connecting React and Node.js",
    ],
    future: [
      "Payment gateway integration",
      "Role-based admin panel",
      "Real-time booking updates",
    ],
    liveLink: "https://travel-ease-by-oishi-sharmeen04.netlify.app/",
    repoLink: "#",
  },
];

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const overlayRef = useRef(null);
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    if (!project) return;

    // Animate overlay fade in
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        ease: "power2.inOut"
      }
    );

    // Animate container scale and fade
    gsap.fromTo(
      containerRef.current,
      { scale: 0.95, opacity: 0, y: 50 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
      }
    );

    // Animate header
    gsap.fromTo(
      headerRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.6,
        ease: "power2.out"
      }
    );

    // Animate buttons
    gsap.fromTo(
      buttonsRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.7,
        ease: "power2.out"
      }
    );

    // Animate project image
    gsap.fromTo(
      imageRef.current,
      { scale: 0.9, opacity: 0, y: 30 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.9,
        ease: "power2.out"
      }
    );

    // Animate sections with scroll trigger
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(
          section,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 1.1 + index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top bottom-=100",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#F0F0E0] dark:bg-[#0A0A0A]">
        <Link
              to="/"
              className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white text-sm md:text-base rounded-full font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
            >
              <FaArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
              Back To Portfolio
            </Link>
        <img src="/coming-soon.png" alt="Coming Soon" className="max-w-md" />
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat py-16 px-6"
      style={{ backgroundImage: `url(${project.image || '/default-bg.jpg'})` }}
    >
      {/* Overlay - Dark mode এর জন্য আরো গাঢ় */}
      <div ref={overlayRef} className="absolute inset-0 bg-black/50 dark:bg-black/75"></div>

      {/* Content - Dark mode এর জন্য better contrast */}
      <div ref={containerRef} className="relative max-w-5xl mx-auto bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div ref={headerRef}>
            <h1 className="text-3xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-white">
              {project.title}
            </h1>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
              {project.subtitle}
            </p>
          </div>

          {/* Buttons - সুন্দর icons সহ */}
          <div ref={buttonsRef} className="flex flex-wrap gap-2 md:gap-3 mt-4 md:mt-0">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-[#6B8E23] text-white text-sm md:text-base rounded-full font-semibold hover:bg-[#5a7a1d] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaExternalLinkAlt className="w-3 h-3 md:w-4 md:h-4" />
              Live Project
            </a>

            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 border-2 border-[#6B8E23] text-[#6B8E23] dark:text-[#8FBC8F] dark:border-[#8FBC8F] text-sm md:text-base rounded-full font-semibold hover:bg-[#6B8E23] hover:text-white dark:hover:bg-[#8FBC8F] dark:hover:text-gray-900 transition-all duration-300"
            >
              <FaGithub className="w-4 h-4 md:w-5 md:h-5" />
              GitHub
            </a>

            <Link
              to="/"
              className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white text-sm md:text-base rounded-full font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
            >
              <FaArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
              Back
            </Link>
          </div>
        </div>

        {/* Project Image */}
        <img
          ref={imageRef}
          src={project.image}
          className="w-full rounded-lg shadow-xl mb-12 border-4 border-white dark:border-gray-800"
          alt={project.title}
        />

        {/* Sections - Dark mode এর জন্য better text colors */}
        <div ref={el => sectionsRef.current[0] = el}>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
            Project Overview
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            {project.overview}
          </p>
        </div>

        <div ref={el => sectionsRef.current[1] = el}>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 md:px-4 py-1.5 md:py-2 bg-[#6B8E23]/10 dark:bg-[#6B8E23]/20 text-[#6B8E23] dark:text-[#8FBC8F] rounded-full text-xs md:text-sm font-medium border border-[#6B8E23]/20 dark:border-[#6B8E23]/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div ref={el => sectionsRef.current[2] = el}>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
            Key Features
          </h2>
          <ul className="list-disc ml-5 md:ml-6 space-y-2 text-base text-gray-700 dark:text-gray-300 mb-8">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div ref={el => sectionsRef.current[3] = el}>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
            Challenges Faced
          </h2>
          <ul className="list-disc ml-5 md:ml-6 space-y-2 text-base text-gray-700 dark:text-gray-300 mb-8">
            {project.challenges.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>

        <div ref={el => sectionsRef.current[4] = el}>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
            Future Improvements
          </h2>
          <ul className="list-disc ml-5 md:ml-6 space-y-2 text-base text-gray-700 dark:text-gray-300 mb-8">
            {project.future.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}