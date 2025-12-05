function Services() {
  const services = [
    {
      id: '01',
      title: 'Frontend Web Development',
      description: 'I build responsive, high-performance websites using HTML, CSS, JavaScript, React and Next.js.'
    },
    {
      id: '02',
      title: 'React & Next.js Development',
      description: 'Modern component-based architecture, server-side rendering, routing and API integration.'
    },
    {
      id: '03',
      title: 'MERN Stack Development',
      description: 'Complete web apps using MongoDB, Express, React and Node.js.'
    },
    {
      id: '04',
      title: 'API Integration',
      description: 'Seamless frontend integration with REST APIs, authentication systems and backend services.'
    },
    {
      id: '05',
      title: 'Dashboard & Admin Panel UI',
      description: 'Building data-driven dashboards with charts, tables and analytics features.'
    },
    {
      id: '06',
      title: 'Responsive UI/UX Implementation',
      description: 'Pixel-perfect, mobile-friendly user interfaces based on any design (Figma, XD).'
    }
  ];
  return (
    <section className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight">
            Exceptional Services Offering for Diverse Needs
          </h1>
        </header>
        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white dark:bg-[#1E1E1E] p-8 rounded-lg shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                <div>
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4">{service.id}</p>
                  <h2 className="text-xl font-bold mb-3 uppercase tracking-wider">{service.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-8 self-end">
                  <a aria-label={`Learn more about ${service.title}`} className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F0F0E0] dark:bg-[#121212] border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" href="#">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}

export default Services;
