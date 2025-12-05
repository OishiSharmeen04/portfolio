import { Element } from "react-scroll";

function Contact() {
  const links = [
    { name: 'GITHUB', url: 'https://github.com/OishiSharmeen04' },
    { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/oishi-sharmeen/' },
    { name: 'EMAIL', url: 'ssultana324@gmail.com' },
    { name: 'PORTFOLIO', url: '#' },
    { name: 'WHATSAPP', url: 'https://wa.me/01629956181' }
  ];
  return (
    <Element name="contact" className="relative min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8 overflow-hidden">
      <div className="absolute inset-x-0 top-0 text-center z-0">
        <h1 className="font-extrabold text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[10vw] xl:text-[12vw] tracking-tighter text-gray-300 dark:text-gray-700 select-none whitespace-nowrap opacity-50">
          LET'S TALK - LET'S TALK
        </h1>
      </div>
      <div className="relative z-10 w-full max-w-6xl mx-auto bg-[#F0F0E0] dark:bg-[#121212] p-8 sm:p-12 lg:p-16 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-[#6B8E23] flex-shrink-0">
              <img alt="Oishi Sharmeen" className="w-full h-full object-cover rounded-full p-2 bg-[#F0F0E0] dark:bg-[#121212]" src="/public/image.png" />
            </div>
          </div>
          <div>
            <div className="space-y-4">
              {links.map((link) => (
                <a key={link.name} className="flex justify-between items-center py-4 border-b border-gray-300 dark:border-gray-600 group" href={link.url}>
                  <span className="text-lg font-medium text-gray-700 dark:text-gray-300">{link.name}</span>
                  <svg className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-[#6B8E23] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              ))}
            </div>
            <button
  onClick={() => window.location.href = "mailto:ssultana324@gmail.com?subject=Hire%20Inquiry&body=Hi%20there,"}
  className="mt-10 w-full lg:w-auto px-12 py-4 bg-transparent border-2 border-[#6B8E23] text-[#6B8E23] font-bold text-lg rounded-full hover:bg-[#6B8E23] hover:text-white transition-all duration-300"
>
  HIRE ME
</button>

          </div>
        </div>
      </div>
      <footer className="w-full max-w-6xl mx-auto mt-8 sm:mt-12 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400 space-y-4 sm:space-y-0">
          <p>© 2025, All rights reserved</p>
          <div className="flex items-center space-x-6">
            <a className="hover:text-[#6B8E23] transition-colors" href="#">Back To Top</a>
            <a className="hover:text-[#6B8E23] transition-colors" href="#">T & C Condition</a>
            <a className="hover:text-[#6B8E23] transition-colors" href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </Element>
  );
}

export default Contact;
