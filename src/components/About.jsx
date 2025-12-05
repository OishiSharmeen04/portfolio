import { Element } from "react-scroll";

function About() {
  return (
    <Element name="about" className="min-h-screen relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#6B8E23]/10 dark:bg-[#6B8E23]/5 rounded-full opacity-50"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#6B8E23]/10 dark:bg-[#6B8E23]/5 rounded-full opacity-50"></div>
      <div className="container mx-auto px-6 py-8 md:py-16 relative z-10">
        <main className="grid md:grid-cols-2 gap-16 items-center mt-8">
          <div className="flex flex-col gap-8 text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <p className="text-3xl font-semibold text-[#1F2937] dark:text-[#E5E7EB]">Hey there!</p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#1F2937] dark:text-[#E5E7EB]">
              I'm Oishi — a Frontend Developer specializing in <span className="text-[#6B8E23]">React, Next.js and MERN Stack Development</span>
            </h1>
          </div>
          <div className="flex flex-col gap-8">
            <div className="bg-white dark:bg-[#1E1E1E] p-4 rounded-lg shadow-lg">
              <img alt="Stylized graphic of a human profile with a lightbulb inside" className="w-full h-auto object-cover rounded" src="/public/programmar.avif" />
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
              <a className="inline-flex items-center gap-2 bg-[#6B8E23] text-white py-3 px-6 rounded-full font-semibold hover:opacity-90 transition-opacity duration-300" href="#">
                More About Me
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </main>
      </div>
    </Element>
  );
}

export default About;
