import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Building, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const experiences = [
    {
      title: 'AI Engineer',
      company: 'WAFI SOLUTIONS',
      location: 'Mohakhali DOHS, Dhaka',
      period: 'July 2024 - Present',
      type: 'Full-time',
      description: 'Pioneered the company\'s first use of agentic AI and OCR in enterprise applications. Delivered a multi-agent hotel management system, a conversational AI chatbot for Wafilife (Bangladesh\'s 2nd largest online bookseller), and a custom OCR engine.',
      achievements: [
        'Designed and deployed a multi-agent hotel management system using Semantic Kernel and .NET, automating bookings, service requests, and operations',
        'Built and launched an AI support bot for Wafilife using Semantic Kernel, LangChain, .NET, FastAPI, and n8n, automating customer support and enhancing user experience at scale',
        'Developed a custom OCR engine with Tesseract to digitize documents faster and more accurately, improving operational workflows',
        'Introduced agentic AI frameworks into enterprise projects, laying the foundation for advanced AI adoption across client use cases'
      ],
      technologies: ['Semantic Kernel', '.NET Core', 'FastAPI', 'LangChain', 'N8N', 'Tesseract OCR', 'AI Agents']
    },
    {
      title: 'Junior Software Engineer',
      company: 'WAFI SOLUTIONS',
      location: 'Mohakhali DOHS, Dhaka',
      period: 'Nov 2023 - June 2024',
      type: 'Full-time',
      description: 'Contributed to the customization and improvement of enterprise applications, including an HRMS, a CRM platform for real estate, and a public-facing website with CMS.',
      achievements: [
        'Contributed to the customization and enhancement of a Human Resource Management System (HRMS) for Nifty Coders using Frappe HR, streamlining internal operations and improving efficiency',
        'Assisted in developing a Customer Relationship Management (CRM) platform for real estate sales at Regent using Frappe CRM and ERPNext, optimizing lead tracking, client management, and sales processes',
        'Collaborated on building a public-facing hotel management website with CMS for NTouch using Next.js and Strapi, enhancing customer engagement and booking experience'
      ],
      technologies: ['Frappe', 'ERPNext', 'Next.js', 'Strapi', 'PostgreSQL', 'CRM', 'HRMS']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800/50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Building enterprise-grade AI solutions and scalable applications that drive real business value
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} isVisible={isVisible} delay={index * 200} />
            ))}
          </div>

          {/* Education Section */}
          <div className={`mt-16 pt-16 border-t border-gray-700/50 transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Education</h3>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-2xl p-8 border border-gray-600/30 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Bachelor of Science in Computer Science</h4>
                  <div className="flex items-center text-blue-400 mb-2">
                    <Building size={16} className="mr-2" />
                    Ahsanullah University of Science and Technology
                  </div>
                  <div className="flex items-center text-gray-400">
                    <MapPin size={16} className="mr-2" />
                    Tejgaon, Dhaka
                  </div>
                </div>
                <div className="flex items-center text-gray-400 mt-4 md:mt-0">
                  <Calendar size={16} className="mr-2" />
                  2019 - 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard: React.FC<{
  experience: {
    title: string;
    company: string;
    location: string;
    period: string;
    type: string;
    description: string;
    achievements: string[];
    technologies: string[];
  };
  isVisible: boolean;
  delay: number;
}> = ({ experience, isVisible, delay }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-2xl p-8 border border-gray-600/30 backdrop-blur-sm transition-all duration-500 hover:bg-gray-800/70 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300">
              {experience.type}
            </span>
            <div className="flex items-center text-gray-400 text-sm">
              <Calendar size={14} className="mr-1" />
              {experience.period}
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">
            {experience.title}
          </h3>

          <div className="flex items-center text-blue-400 font-medium mb-2">
            <Building size={16} className="mr-2" />
            {experience.company}
          </div>

          <div className="flex items-center text-gray-400 text-sm mb-4">
            <MapPin size={14} className="mr-1" />
            {experience.location}
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            {experience.description}
          </p>

          {isExpanded && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
              <ul className="space-y-2 mb-6">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <ChevronRight size={16} className="text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
          >
            {isExpanded ? 'Show Less' : 'Show More Details'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;