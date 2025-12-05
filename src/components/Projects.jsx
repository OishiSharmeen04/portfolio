import { Link } from "react-router-dom";
import { Element } from "react-scroll";

function Projects() {
  const works = [
    {
      id: 1,
      title: 'GreenNest',
      tech: 'React.js / React Router / Authentication',
      year: '2025',
      image: '/green-nest.png'
    },
    {
      id: 2,
      title: 'TravelEase',
      tech: 'MERN / REST API / JWT / CRUD',
      year: '2025',
      image: '/travel-ease.png'
    },
    {
      id: 3,
      title: 'Coming Soon...',
      tech: 'Full Stack / E-Commerce / Dashboard UI / Admin Panel',
      year: '2025',
      image: '/public/coming-soon.png'
    }
  ];

  return (
    <Element name="projects" className="relative min-h-screen w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 text-center select-none z-0">
          <h1 className="font-bold text-[12vw] sm:text-[15vw] md:text-[20vw] lg:text-[22vw] whitespace-nowrap text-neutral-300 dark:text-neutral-800 opacity-50 dark:opacity-40">
            WORKS WORKS WORKS
          </h1>
        </div>
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-16 sm:mt-24 md:mt-32">
          {works.map((work) => (
            <Link to={`/projects/${work.id}`} key={work.id} className="group relative overflow-hidden rounded-lg aspect-square">
              <img
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={work.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                <div className="text-sm">
                  <p>{work.tech}</p>
                </div>
                <div className="transition-transform duration-300 ease-in-out">
                  <h3 className="text-2xl font-bold">{work.title}</h3>
                </div>
                <div className="absolute bottom-6 right-6 transition-transform duration-300 ease-in-out">
                  <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">{work.year}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Element>
  );
}

export default Projects;
