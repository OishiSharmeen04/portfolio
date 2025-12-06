import { Element } from "react-scroll";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail, SiNetlify } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const titleRef = useRef(null);
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const linksRef = useRef([]);
  const buttonRef = useRef(null);
  const footerRef = useRef(null);

  const links = [
    { name: 'GITHUB', url: 'https://github.com/OishiSharmeen04', icon: FaGithub, color: '' },
    { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/oishi-sharmeen/', icon: FaLinkedin, color: '#0A66C2' },
    { name: 'EMAIL', url: 'mailto:ssultana324@gmail.com', icon: SiGmail, color: '#EA4335' },
    { name: 'PORTFOLIO', url: 'https://oishi-sharmeen.netlify.app/', icon: SiNetlify, color: '#00C7B7' },
    { name: 'WHATSAPP', url: 'https://wa.me/01629956181', icon: FaWhatsapp, color: '#25D366' }
  ];

  useEffect(() => {
    // Animate background title with parallax
    gsap.fromTo(
      titleRef.current,
      { x: "-5%", opacity: 0.3 },
      {
        x: "5%",
        opacity: 0.5,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      }
    );

    // Animate main card
    gsap.fromTo(
      cardRef.current,
      { y: 100, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate profile image with rotation
    gsap.fromTo(
      imageRef.current,
      { scale: 0, rotation: -180, opacity: 0 },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate links with stagger
    linksRef.current.forEach((link, index) => {
      if (link) {
        gsap.fromTo(
          link,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            delay: 0.5 + index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top bottom-=150",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    // Animate button
    gsap.fromTo(
      buttonRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=150",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate footer
    gsap.fromTo(
      footerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=150",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Element name="contact" className="relative min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8 overflow-hidden">
      <div className="absolute inset-x-0 top-0 text-center z-0">
        <h1 
          ref={titleRef}
          className="font-extrabold text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[10vw] xl:text-[12vw] tracking-tighter text-gray-300 dark:text-gray-700 select-none whitespace-nowrap opacity-50"
        >
          LET'S TALK - LET'S TALK
        </h1>
      </div>
      <div 
        ref={cardRef}
        className="relative z-10 w-full max-w-6xl mx-auto bg-[#F0F0E0] dark:bg-[#121212] p-8 sm:p-12 lg:p-16 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex justify-center lg:justify-start">
            <div 
              ref={imageRef}
              className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-[#6B8E23] shrink-0"
            >
              <img alt="Portfolio logo" className="w-full h-full object-cover rounded-full p-2 bg-[#F0F0E0] dark:bg-[#121212]" src="/logo.png" />
            </div>
          </div>
          <div>
            <div className="space-y-4">
              {links.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a 
                    key={link.name}
                    ref={el => linksRef.current[index] = el}
                    className="flex justify-between items-center py-4 border-b border-gray-300 dark:border-gray-600 group" 
                    href={link.url}
                  >
                    <span className="text-lg font-medium text-gray-700 dark:text-gray-300">{link.name}</span>
                    <div className="flex items-center space-x-3">
                      <Icon 
                        className="w-6 h-6 group-hover:scale-110 transition-transform" 
                        style={{ color: link.color }}
                      />
                      <svg 
                        className="w-6 h-6 group-hover:scale-110 transition-all" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        style={{ color: link.color }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </a>
                );
              })}
            </div>
            <button
              ref={buttonRef}
              onClick={() => window.location.href = "mailto:ssultana324@gmail.com?subject=Hire%20Inquiry&body=Hi%20there,"}
              className="mt-10 w-full lg:w-auto px-12 py-4 bg-transparent border-2 border-[#6B8E23] text-[#6B8E23] font-bold text-lg rounded-full hover:bg-[#6B8E23] hover:text-white transition-all duration-300"
            >
              HIRE ME
            </button>
          </div>
        </div>
      </div>
      <footer 
        ref={footerRef}
        className="w-full max-w-6xl mx-auto mt-8 sm:mt-12 text-center sm:text-left"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400 space-y-4 sm:space-y-0">
          <p>© 2025, All rights reserved</p>
          <div className="flex items-center space-x-6">
            <a className="hover:text-[#6B8E23] transition-colors" href="#">Back To Top</a>
          </div>
        </div>
      </footer>
    </Element>
  );
}

export default Contact;