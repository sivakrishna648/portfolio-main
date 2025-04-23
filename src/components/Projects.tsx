import React, { useState } from 'react';
import '../styles/Projects.css';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Website',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      description: 'A fully responsive e-commerce website with product filtering, cart functionality, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 2,
      title: 'Portfolio Template',
      category: 'UI/UX Design',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
      description: 'A modern portfolio template for creative professionals with smooth animations and clean design.',
      technologies: ['Figma'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 3,
      title: 'Task Management App',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg',
      description: 'A task management application with drag-and-drop functionality, categories, and user authentication.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      description: 'A weather dashboard that displays current weather and forecasts for multiple locations.',
      technologies: ['JavaScript', 'Weather API', 'java'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 5,
      title: 'Restaurant Website',
      category: 'UI/UX Design',
      image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg',
      description: 'A elegant restaurant website with online reservation system and menu display.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Figma'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
      description: 'A fitness tracking mobile app that monitors workouts, nutrition, and progress.',
      technologies: ['Figma'],
      demoLink: '#',
      githubLink: '#',
    }
  ];

  const categories = ['All', 'Web Development', 'UI/UX Design', 'Mobile App'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my recent projects that showcase my skills and expertise in web development and design.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-12 space-x-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 mb-2 ${
                activeCategory === category
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className={`bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/10 transform hover:-translate-y-2 transition-all duration-300 animate-fadeInUp delay-${project.id % 3}`}
              >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex space-x-4 justify-end">
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-cyan-500 rounded-full text-white hover:bg-cyan-600 transition-colors duration-300"
                        title="View Demo"
                      >
                        <ExternalLink size={18} />
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-700 rounded-full text-white hover:bg-slate-600 transition-colors duration-300"
                        title="View Source Code"
                      >
                        <Github size={18} />
                      </a>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-500/10 rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs bg-slate-700 text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;