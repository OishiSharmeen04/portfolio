import { Element } from 'react-scroll';

function Hero() {
  return (
    <Element name="home" className="relative bg-[#F0F0E0] dark:bg-[#121212] py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-50 dark:opacity-100"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
          <div className="relative w-full md:w-1/2 flex justify-center items-center">
            <div className="absolute bg-[#6B8E23]/20 dark:bg-[#6B8E23]/30 rounded-full w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]"></div>
            <img alt="Oishi Sharmeen" className="relative z-10 w-[280px] sm:w-[350px] md:w-[450px]" src="/public/image.png" />
            
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-[#1F2937] dark:text-[#E5E7EB] leading-none">
              <span className="block">OISHI</span>
              <span className="block">SHARMEEN</span>
            </h1>
            <p className="mt-6 text-xl font-medium text-primary">
            Frontend Developer (React + MERN)
          </p>

          {/* RESUME BUTTON */}
          <a
            href="/public/Resume of - SHARMIN SULTANA OISHI.pdf"
            download
            className="inline-block bg-primary text-white font-semibold mt-6 py-3 px-8 rounded-full hover:opacity-90"
          >
            Download Resume
          </a>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Hero;
