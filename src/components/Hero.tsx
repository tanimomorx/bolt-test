import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Fullstack AI Engineer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
            Welcome to My Portfolio
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
            <span className="border-r-2 border-blue-400 animate-pulse">{displayText}</span>
          </div>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Co-founder & ICT Programming Trainer at Advance Virtual School. Building intelligent solutions with 1+ years of experience in ERP, HRMS, CRM systems, and cutting-edge AI automation.
          </p>

          <div className="flex justify-center space-x-6 mb-16">
            <SocialLink href="https://github.com/tanimomor" icon={<Github size={24} />} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/tanimomor" icon={<Linkedin size={24} />} label="LinkedIn" />
            <SocialLink href="mailto:tanim.pro@gmail.com" icon={<Mail size={24} />} label="Email" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Explore My Projects
            </button>
            <button className="border-2 border-gray-600 hover:border-gray-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-gray-800">
              Download Resume
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a
    href={href}
    className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
    aria-label={label}
  >
    <div className="text-gray-300 group-hover:text-white transition-colors duration-200">
      {icon}
    </div>
  </a>
);

export default Hero;