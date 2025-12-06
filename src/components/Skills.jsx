import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const skills = [
    { 
      name: "React.js", 
      level: 90, 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "from-cyan-500 to-blue-500"
    },
    { 
      name: "JavaScript", 
      level: 85, 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "from-yellow-500 to-orange-500"
    },
    { 
      name: "TailwindCSS", 
      level: 90, 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      color: "from-cyan-400 to-blue-600"
    },
    { 
      name: "MongoDB", 
      level: 70, 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "from-green-500 to-emerald-600"
    },
    { 
      name: "Node.js", 
      level: 65, 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "from-green-600 to-lime-500"
    },
    { 
      name: "HTML/CSS", 
      level: 95, 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "from-orange-500 to-red-500"
    },
    { 
      name: "Next.js", 
      level: 75, 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "from-gray-700 to-gray-900"
    },
    { 
      name: "Express.js", 
      level: 70, 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "from-gray-600 to-gray-800"
    },
  ];

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const skillRefs = useRef([]);
  const statsRef = useRef(null);

  useEffect(() => {
    const skillsElements = skillRefs.current;

    // Fade in section header
    gsap.from(headerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      },
    });

    // Animate stats
    if (statsRef.current) {
      gsap.from(statsRef.current.children, {
        opacity: 0,
        y: 30,
        scale: 0.8,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
        },
      });
    }

    // Animate each skill card
    skillsElements.forEach((el, index) => {
      if (el) {
        const bar = el.querySelector(".skill-bar");
        const percentage = el.querySelector(".percentage");

        // Fade in the whole skill card
        gsap.from(el, {
          opacity: 0,
          y: 50,
          scale: 0.9,
          rotation: -5,
          duration: 0.8,
          delay: index * 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        });

        // Animate the skill level bar
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${skills[index].level}%`,
            duration: 1.5,
            delay: index * 0.1 + 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          }
        );

        // Animate percentage number
        gsap.from(percentage, {
          textContent: 0,
          duration: 1.5,
          delay: index * 0.1 + 0.3,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        });
      }
    });
  }, [skills]);

  return (
    <section
      id="skills"
      className="py-20 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#6B8E23]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6B8E23]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#6B8E23]/10 dark:bg-[#6B8E23]/20 rounded-full">
            <span className="text-2xl">💪</span>
            <span className="text-sm font-semibold text-[#6B8E23]">MY EXPERTISE</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#1F2937] to-[#6B8E23] dark:from-[#E5E7EB] dark:to-[#6B8E23] bg-clip-text text-transparent">
            Technical Skills & Proficiency
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Constantly learning and improving my skills to deliver the best solutions
          </p>
        </div>

        

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => (skillRefs.current[index] = el)}
              className="group relative p-6 rounded-2xl bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 hover:border-[#6B8E23]/50 dark:hover:border-[#6B8E23]/50 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                {/* Header with icon and percentage */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#6B8E23]/10 to-[#6B8E23]/5 dark:from-[#6B8E23]/20 dark:to-[#6B8E23]/10 rounded-xl p-2 group-hover:scale-110 transition-transform duration-300">
                      <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="font-bold text-lg text-[#1F2937] dark:text-[#E5E7EB]">{skill.name}</span>
                  </div>
                  <span className="percentage text-2xl font-bold text-[#6B8E23]">{skill.level}%</span>
                </div>

                {/* Progress bar */}
                <div className="relative w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`skill-bar h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    style={{ width: "0%" }}
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;