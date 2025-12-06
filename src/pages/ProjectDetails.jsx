import { useParams, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <Link
            to="/"
            className="px-8 py-3 bg-gray-200 dark:bg-gray-700 rounded-full font-semibold"
          >
            Back to Portfolio
          </Link>
          <img src="/public/coming-soon.png" alt="" />
      </div>
    );
  }

  return (
  <div
    className="relative min-h-screen bg-cover bg-center bg-no-repeat py-16 px-6"
    style={{ backgroundImage: `url(${project.image || '/default-bg.jpg'})` }}
  >
    {/* Overlay */}
    <div ref={overlayRef} className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>

    {/* Content */}
    <div ref={containerRef} className="relative max-w-5xl mx-auto bg-white/90 dark:bg-gray-900/80 p-8 rounded-xl shadow-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div ref={headerRef}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">{project.title}</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{project.subtitle}</p>
        </div>

        {/* Buttons */}
        <div ref={buttonsRef} className="flex flex-wrap gap-4 mt-4 md:mt-0">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:opacity-90"
          >
            Live Project
          </a>

          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition"
          >
            GitHub Repo
          </a>

          <Link
            to="/"
            className="px-8 py-3 bg-gray-200 dark:bg-gray-700 rounded-full font-semibold"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Project Image */}
      <img
        ref={imageRef}
        src={project.image}
        className="w-full rounded-lg shadow-xl mb-12"
        alt={project.title}
      />

      {/* Sections */}
      <div ref={el => sectionsRef.current[0] = el}>
        <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">{project.overview}</p>
      </div>

      <div ref={el => sectionsRef.current[1] = el}>
        <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
        <div className="flex flex-wrap gap-3 mb-10">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div ref={el => sectionsRef.current[2] = el}>
        <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300 mb-10">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <div ref={el => sectionsRef.current[3] = el}>
        <h2 className="text-2xl font-semibold mb-3">Challenges Faced</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300 mb-10">
          {project.challenges.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>

      <div ref={el => sectionsRef.current[4] = el}>
        <h2 className="text-2xl font-semibold mb-3">Future Improvements</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300 mb-10">
          {project.future.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
}