import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Calendar, Users } from 'lucide-react';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Wafilife AI Support Bot',
      category: 'AI/Automation',
      description: 'AI-powered customer support bot for Bangladesh\'s 2nd largest online bookseller using multi-agent orchestration.',
      image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Semantic Kernel', 'React', 'N8N', '.NET', 'Express.js'],
      date: '2024',
      team: 'Lead Developer',
      github: '#',
      demo: '#',
      status: 'Active'
    },
    {
      title: 'NTouch Hotel Management',
      category: 'Web Development',
      description: 'Public-facing hotel management website with integrated CMS for seamless booking experience.',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Next.js', 'Strapi', 'PostgreSQL', 'CMS'],
      date: '2024',
      team: 'Frontend Developer',
      github: '#',
      demo: '#',
      status: 'Live'
    },
    {
      title: 'Quicket Event Ticketing',
      category: 'Web Development',
      description: 'Event ticketing platform with QR code generation and merchandise management system.',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Django', 'jQuery', 'Webpack', 'Celery', 'Nginx'],
      date: '2024',
      team: 'Backend Developer',
      github: '#',
      demo: '#',
      status: 'Completed'
    },
    {
      title: 'Nifty HRMS System',
      category: 'Enterprise',
      description: 'Cloud-based HR management system with expense claims, leave management, and role-based access control.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Frappe', 'ERPNext', 'Frappe HR', 'Cloud'],
      date: '2023',
      team: 'Full Stack Developer',
      github: '#',
      demo: '#',
      status: 'Deployed'
    },
    {
      title: 'Multi-Agent Hotel System',
      category: 'AI/Automation',
      description: 'Multi-agent hotel management system using Semantic Kernel for automated bookings and operations.',
      image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Semantic Kernel', '.NET', 'Multi-Agent AI', 'Automation'],
      date: '2024',
      team: 'AI Engineer',
      github: '#',
      demo: '#',
      status: 'Active'
    },
    {
      title: 'Stock Price Prediction ML',
      category: 'Research',
      description: 'Hybrid machine learning approach for predicting Bangladesh stock market prices with multi-modal deep learning.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Machine Learning', 'Deep Learning', 'Financial Modeling', 'Research'],
      date: '2022-2023',
      team: 'Research Lead',
      github: '#',
      demo: '#',
      status: 'Published'
    }
  ];

  const categories = ['All', 'AI/Automation', 'Web Development', 'Enterprise', 'Research'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-800/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              A showcase of impactful research projects and industry solutions that push the boundaries of technology
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} isVisible={isVisible} delay={index * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{
  project: {
    title: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
    date: string;
    team: string;
    github: string;
    demo: string;
    status: string;
  };
  isVisible: boolean;
  delay: number;
}> = ({ project, isVisible, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm transition-all duration-500 transform hover:scale-105 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-20">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          project.status === 'Active' ? 'bg-green-500/20 text-green-300' :
          project.status === 'Published' ? 'bg-blue-500/20 text-blue-300' :
          'bg-yellow-500/20 text-yellow-300'
        }`}>
          {project.status}
        </span>
      </div>

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        
        {/* Overlay Links */}
        <div className={`absolute inset-0 bg-gray-900/80 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <a href={project.github} className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-200">
            <Github size={20} className="text-white" />
          </a>
          <a href={project.demo} className="p-3 bg-blue-600 rounded-full hover:bg-blue-500 transition-colors duration-200">
            <ExternalLink size={20} className="text-white" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-blue-400 uppercase tracking-wide">
            {project.category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar size={14} className="mr-1" />
            {project.date}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <Users size={14} className="mr-1" />
          {project.team}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="px-2 py-1 bg-gray-700/50 rounded-md text-xs text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;