import { useEffect, useRef } from "react";
import { Element } from "react-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const circlesRef = useRef([]);
  const techStackRef = useRef(null);
  const skillBarsRef = useRef([]);

  const techStack = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95 },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 90 },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 85 },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 90 },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", level: 75 },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 80 },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 75 },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", level: 90 },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const texts = textRef.current.children;
    const image = imageRef.current;
    const circles = circlesRef.current;
    const techIcons = techStackRef.current?.children;
    const skillBars = skillBarsRef.current;

    // Section fade in
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
      },
    });

    // Staggered text animation
    gsap.from(texts, {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
      },
    });

    // Image pop-in
    gsap.from(image, {
      opacity: 0,
      scale: 0.8,
      rotation: -10,
      duration: 1.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: image,
        start: "top 80%",
      },
    });

    // Background circles bounce
    circles.forEach((circle, i) => {
      gsap.fromTo(
        circle,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 0.5,
          duration: 1 + i * 0.3,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        }
      );
    });

    // Continuous slow rotation for background circles
    circles.forEach((circle) => {
      gsap.to(circle, {
        rotation: 360,
        duration: 60,
        repeat: -1,
        ease: "linear",
      });
    });

    // Tech stack icons animation
    if (techIcons) {
      gsap.from(techIcons, {
        opacity: 0,
        scale: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: techStackRef.current,
          start: "top 85%",
        },
      });
    }

    // Skill bars animation
    skillBars.forEach((bar, index) => {
      if (bar) {
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${techStack[index].level}%`,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 90%",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div ref={sectionRef}>
      <Element name="about" className="min-h-screen relative overflow-hidden">
        {/* Background circles */}
        <div
          ref={(el) => (circlesRef.current[0] = el)}
          className="absolute -top-40 -left-40 w-96 h-96 bg-[#6B8E23]/10 dark:bg-[#6B8E23]/5 rounded-full opacity-50"
        ></div>
        <div
          ref={(el) => (circlesRef.current[1] = el)}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#6B8E23]/10 dark:bg-[#6B8E23]/5 rounded-full opacity-50"
        ></div>

        <div className="container mx-auto px-6 py-8 md:py-16 relative z-10">
          <main className="grid md:grid-cols-2 gap-16 items-center mt-8">
            {/* Text Section */}
            <div ref={textRef} className="flex flex-col gap-8 text-center md:text-left">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <p className="text-3xl font-semibold text-[#1F2937] dark:text-[#E5E7EB]">Hey there!</p>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#1F2937] dark:text-[#E5E7EB]">
                I'm Oishi — a Frontend Developer specializing in{" "}
                <span className="text-[#6B8E23]">React, Next.js and MERN Stack Development</span>
              </h1>
            </div>

            {/* Image & Info Section */}
            <div className="flex flex-col gap-8">
              <div
                ref={imageRef}
                className="bg-white dark:bg-[#1E1E1E] p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
              >
                <img
                  alt="Stylized graphic of a human profile with a lightbulb inside"
                  className="w-full h-auto object-cover rounded"
                  src="/programmar.avif"
                />
              </div>

              <div className="text-[#1F2937] dark:text-[#E5E7EB] space-y-4 text-sm md:text-base">
                <p>
                  Hey there! I'm a Frontend Developer passionate about building fast, responsive and user-focused web applications. I specialize in React, Next.js, JavaScript and the full MERN stack. I love turning ideas into clean, modern UI and scalable frontend solutions.
                </p>
                <p>
                  I focus on writing clean, optimized and efficient code while ensuring every interface is intuitive and visually consistent across all devices.
                </p>
              </div>

              <div className="mt-4 flex justify-center md:justify-start">
                <a
                  className="inline-flex items-center gap-2 bg-[#6B8E23] text-white py-3 px-6 rounded-full font-semibold hover:opacity-90 transition-opacity duration-300"
                  href="#"
                >
                  More About Me
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </main>

          {/* Tech Stack Section with Skill Bars */}
          <section className="mt-20 md:mt-32">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F2937] dark:text-[#E5E7EB] mb-12">
              My Tech Stack
            </h2>

            {/* Tech Icons Grid */}
            <div 
              ref={techStackRef}
              className="grid grid-cols-4 md:grid-cols-8 gap-6 md:gap-8 mb-16"
            >
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-[#1E1E1E] p-2 md:p-3 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs text-center font-medium text-[#1F2937] dark:text-[#E5E7EB]">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            
          </section>
        </div>
      </Element>
    </div>
  );
}

export default About;