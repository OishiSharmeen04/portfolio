import { useEffect, useRef } from "react";
import { Element } from "react-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const circleRef = useRef(null);
  const techStackRef = useRef(null);
  const welcomeRef = useRef(null);
  const vectorsRef = useRef([]);

  const techStack = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const texts = textRef.current.children;
    const image = imageRef.current;
    const circle = circleRef.current;
    const techIcons = techStackRef.current.children;
    const welcome = welcomeRef.current;
    const vectors = vectorsRef.current;

    // Welcome text animation
    gsap.from(welcome, {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
    });

    // Section fade in
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 90%",
      },
    });

    // Staggered text animation
    gsap.from(texts, {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.4,
    });

    // Image pop-in with scale
    gsap.from(image, {
      opacity: 0,
      scale: 0.7,
      duration: 1.2,
      ease: "back.out(1.5)",
      delay: 0.6,
    });

    // Floating background circle animation
    gsap.fromTo(
      circle,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 0.3,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
      }
    );

    gsap.to(circle, {
      y: 20,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
    });

    // Vector shapes animation
    vectors.forEach((vector, index) => {
      if (vector) {
        gsap.fromTo(
          vector,
          { scale: 0, rotation: -180, opacity: 0 },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 1.5,
            delay: 0.8 + index * 0.2,
            ease: "back.out(1.7)",
          }
        );

        // Continuous rotation
        gsap.to(vector, {
          rotation: 360,
          duration: 20 + index * 5,
          repeat: -1,
          ease: "linear",
        });
      }
    });

    // Tech stack icons animation
    gsap.from(techIcons, {
      opacity: 0,
      y: 30,
      scale: 0.5,
      stagger: 0.1,
      duration: 0.8,
      ease: "back.out(1.7)",
      delay: 1.2,
    });

    // Continuous floating animation for tech icons
    Array.from(techIcons).forEach((icon, index) => {
      gsap.to(icon, {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 2 + index * 0.2,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <div ref={sectionRef}>
      <Element
        name="home"
        className="relative bg-[#F0F0E0] dark:bg-[#121212] py-16 md:py-24 overflow-hidden"
      >
        <div className="absolute inset-0 grid-background opacity-50 dark:opacity-100"></div>

        {/* Welcome Message */}
        <div ref={welcomeRef} className="text-center mb-8">
          <p className="text-2xl md:text-3xl lg:text-5xl text-[#6B8E23] font-semibold tracking-wide">
             Welcome to my portfolio
          </p>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8">
            {/* Left Side: Image with Vectors */}
            <div className="relative w-full md:w-1/2 flex justify-center items-center">
              {/* Main Background Circle */}
              <div
                ref={circleRef}
                className="absolute bg-[#6B8E23]/20 dark:bg-[#6B8E23]/30 rounded-full w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]"
              ></div>

              {/* Vector Decorative Elements */}
              {/* Top Right Triangle */}
              <div
                ref={(el) => (vectorsRef.current[0] = el)}
                className="absolute top-0 right-0 md:top-10 md:right-20 w-20 h-20 md:w-24 md:h-24"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#6B8E23]/30 dark:text-[#6B8E23]/40">
                  <polygon points="50,10 90,90 10,90" fill="currentColor" />
                </svg>
              </div>

              {/* Bottom Left Circle Pattern */}
              <div
                ref={(el) => (vectorsRef.current[1] = el)}
                className="absolute bottom-0 left-0 md:bottom-10 md:left-10 w-16 h-16 md:w-20 md:h-20"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#6B8E23]/25 dark:text-[#6B8E23]/35">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="4" />
                  <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="4" />
                  <circle cx="50" cy="50" r="10" fill="currentColor" />
                </svg>
              </div>

              {/* Top Left Square */}
              <div
                ref={(el) => (vectorsRef.current[2] = el)}
                className="absolute top-20 left-0 md:top-32 md:left-0 w-12 h-12 md:w-16 md:h-16"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#6B8E23]/20 dark:text-[#6B8E23]/30">
                  <rect x="15" y="15" width="70" height="70" fill="none" stroke="currentColor" strokeWidth="4" transform="rotate(45 50 50)" />
                </svg>
              </div>

              {/* Bottom Right Hexagon */}
              <div
                ref={(el) => (vectorsRef.current[3] = el)}
                className="absolute bottom-20 right-0 md:bottom-32 md:right-10 w-14 h-14 md:w-18 md:h-18"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#6B8E23]/30 dark:text-[#6B8E23]/40">
                  <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="currentColor" />
                </svg>
              </div>

              {/* Code Brackets */}
              <div
                ref={(el) => (vectorsRef.current[4] = el)}
                className="absolute top-1/2 left-5 md:left-10 text-4xl md:text-6xl text-[#6B8E23]/20 dark:text-[#6B8E23]/30 font-bold"
              >
                &lt;/&gt;
              </div>

              {/* Main Image with Animated Frame */}
              <div className="relative z-10 w-[280px] sm:w-[350px] md:w-[450px]">
                {/* Outer rotating frame */}
                <div className="absolute -inset-4 bg-linear-to-r from-[#6B8E23]/30 via-[#6B8E23]/10 to-[#6B8E23]/30 rounded-full blur-xl animate-spin-slow"></div>
                
                {/* Inner border frame */}
                <div className="absolute -inset-2 bg-linear-to-br from-[#6B8E23] via-[#556B1F] to-[#6B8E23] rounded-full animate-pulse"></div>
                
                {/* Image container */}
                <div className="relative bg-[#F0F0E0] dark:bg-[#121212] rounded-full p-2">
                  <img
                    ref={imageRef}
                    alt="Oishi Sharmeen"
                    className="relative w-full h-full rounded-full drop-shadow-2xl"
                    src="/image.png"
                  />
                </div>
                
                {/* Orbiting dots */}
                <div className="absolute top-1/4 -right-4 w-4 h-4 bg-[#6B8E23] rounded-full animate-bounce shadow-lg"></div>
                <div className="absolute bottom-1/4 -left-4 w-3 h-3 bg-[#6B8E23]/70 rounded-full animate-pulse shadow-lg"></div>
              </div>
            </div>

            {/* Right Side: Text */}
            <div ref={textRef} className="w-full md:w-1/2 mt-8 md:mt-0 relative">
              {/* Vector animations behind name */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Floating dots */}
                <div className="absolute top-0 right-10 w-3 h-3 bg-[#6B8E23]/40 rounded-full animate-bounce"></div>
                <div className="absolute top-20 right-20 w-2 h-2 bg-[#6B8E23]/30 rounded-full animate-ping"></div>
                <div className="absolute bottom-32 left-10 w-2.5 h-2.5 bg-[#6B8E23]/35 rounded-full animate-pulse"></div>
                
                {/* Animated lines */}
                <svg className="absolute top-10 left-0 w-24 h-24 text-[#6B8E23]/20 animate-spin-slow" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
                
                <svg className="absolute bottom-20 right-0 w-20 h-20 text-[#6B8E23]/15 animate-spin-reverse" viewBox="0 0 100 100">
                  <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(45 50 50)" />
                </svg>
              </div>

              <h1 className="relative text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-[#1F2937] dark:text-[#E5E7EB] leading-none">
                <span className="block">OISHI</span>
                <span className="block">SHARMEEN</span>
              </h1>
              
              {/* Subtitle under name */}
              <p className="relative mt-4 text-xl md:text-2xl font-semibold text-[#6B8E23]/80 dark:text-[#6B8E23]">
                Crafting Digital Experiences
              </p>

              <p className="relative mt-6 text-xl font-medium text-[#1F2937] dark:text-[#E5E7EB]">
                Frontend Developer (React + MERN)
              </p>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="mt-16 md:mt-24">
            <h3 className="text-center text-lg md:text-xl font-semibold text-[#1F2937] dark:text-[#E5E7EB] mb-8">
              Technologies I Work With
            </h3>
            <div 
              ref={techStackRef}
              className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
            >
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
                >
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-white dark:bg-[#1E1E1E] p-2 md:p-3 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-[#1F2937] dark:text-[#E5E7EB] opacity-0 group-hover:opacity-100 transition-opacity">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
}

export default Hero;