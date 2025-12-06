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


  useEffect(() => {
    const section = sectionRef.current;
    const texts = textRef.current.children;
    const image = imageRef.current;
    const circles = circlesRef.current;

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
                  href="/public/Resume of - SHARMIN SULTANA OISHI.pdf"
                  download
                  className="hidden md:flex bg-gradient-to-r from-[#6B8E23] to-[#556B1F] text-white font-semibold py-2.5 px-6 rounded-full items-center gap-2 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                >
                  Download Resume
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </main>
        </div>
      </Element>
    </div>
  );
}

export default About;